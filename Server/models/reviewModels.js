const mongoose = require('mongoose');

const donarfood = require('./donarfoodModels');
const User = require('../models/userModels');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    donarfood: {
      type: mongoose.Schema.ObjectId,
      ref: 'donarfood',
      required: [true, 'Review must belong to a user']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: User,
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
reviewSchema.index({ donarfood: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next();
});
// reviewSchema.pre(/^find/, function(next) {
//   this populate({
//     path: donarfoods,
//     select: 'name'}).
//     .populate({
//       path: User,
//       select: 'name photo'
//     });
//   next();
// });

reviewSchema.statics.calcAverageRatings = async function(donarfoodId) {
  const stats = await this.aggregate([
    {
      $match: { donarfood: donarfoodId }
    },
    {
      $group: {
        _id: '$donarfood',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);
  // console.log(stats);
  // console.log(donarfoodId);
  // if (stats.length > 0) {
  //   await donarfood.findByIdAndUpdate(donarfoodId, {
  //     ratingsQuantity: stats[0].nRating,
  //     ratingsAverage: stats[0].avgRating
  //   });
  // } else {
  //   await donarfood.findByIdAndUpdate(donarfoodId, {
  //     ratingsQuantity: 0,
  //     ratingsAverage: 4.5
  //   });
  // }
};

reviewSchema.post('save', function() {
  this.constructor.calcAverageRatings(this.donarfood);
});

// reviewSchema.pre(/^findOneAnd/, async function(next) {
//   this.r = await this.findOne();
//   console.log(this.r);
//   next();
// });

// reviewSchema.post(/^findOneAnd/, async function(next) {
//   await this.r.constructor.calcAverageRatings(this.r.donarfood);
//   next();
// });
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
