const mongoose = require('mongoose');
// const slugify = require('slugify');
const { Schema } = mongoose;
const User = require('./userModels');
// const Reviews = require('./reviewModels');
// const { Listedfoods } = require('../../Client/src/Pages/Admin/Listedfoods');

const donarfoodSchema = new Schema(
  {
    userid: [{ type: Schema.Types.ObjectId, ref: User }],
    fooddetails: {
      type: [mongoose.Schema.Types.Mixed]
    },
    description: {
      type: String
    },
    date: {
      type: Date
    },
    address: {
      type: String
    },
    state: {
      type: String
    },
    city: {
      type: String
    },
    mobile: {
      type: String
    },

    // name: {
    //   type: String,
    //   required: [true, 'A donarfood must have a name'],
    //   unique: true,
    //   trim: true,
    //   maxlength: [40, 'A donarfood name must have less or equal than 40 characters'],
    //   minlength: [10, 'A donarfood name must have more or equal than 10 characters']
    //   // validate: [validator.isAlpha,"donarfood name must only contain characters "
    // },
    // slug: String,
    // duration: {
    //   type: Number,
    //   required: [true, 'A donarfood mush have a duration']
    // },
    // maxGroupSize: {
    //   type: Number,
    //   required: [true, 'A donarfood must hava a group size']
    // },
    // difficulty: {
    //   type: String,
    //   required: [true, ' a donarfood must have a difficulty'],
    //   enum: {
    //     values: ['easy', 'medium', 'difficult'],
    //     message: 'Dificulty is either: easy,medium,difficult '
    //   }
    // },
    // ratingsAverage: {
    //   type: Number,
    //   min: [1, 'Rating must be above 1.0'],
    //   max: [5, 'Rating must be below 5.0'],
    //   default: 4.5,
    //   set: value => Math.round(value * 10) / 10
    // },
    // ratingsQuantity: {
    //   type: Number,
    //   default: 0
    // },
    // price: {
    //   type: Number,
    //   required: [true, 'A donarfood must have a price']
    // },

    // priceDiscount: {
    //   type: Number,
    //   validate: {
    //     validator: function(val) {
    //       return val < this.price;
    //     },
    //     message: 'Discount price {{value}} should be below regular price'
    //   }
    // },
    // summary: {
    //   type: String,
    //   trim: true,
    //   required: [true, 'A donarfood must have description']
    // },
    // description: {
    //   type: String,
    //   trim: true
    // },
    // imageCover: {
    //   type: String,
    //   required: [true, 'a donarfood must have a cover images']
    // },
    images: [String],
    createdAt: {
      type: Date,
      selected: false
    },
    startDates: [Date],
    secretdonarfood: {
      type: Boolean,
      default: false
    }
    // startLocation: {
    //   //GeoJson
    //   type: {
    //     type: String,
    //     default: 'Point',
    //     enum: ['Point']
    //   },
    //   coordinates: [Number],
    //   address: String,
    //   description: String
    // },
    // locations: [
    //   {
    //     type: {
    //       type: String,
    //       default: 'Point',
    //       enum: ['Point']
    //     },
    //     coordinates: [Number],
    //     address: String,
    //     description: String,
    //     day: Number
    //   }
    // ],
    // guides: [{ type: mongoose.Schema.ObjectId, ref: User }]
    // reviews: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: Reviews
    //   }
    // ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
// donarfoodSchema.index({ price: 1 });
// donarfoodSchema.index({ price: 1, ratingsAverage: -1 });
// donarfoodSchema.index({ slug: 1 });
// donarfoodSchema.index({ startLocation: '2dsphere' });
// donarfoodSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // Virtual populate
// donarfoodSchema.virtual('reviews', {
//   ref: Reviews,
//   foreignField: 'donarfood',
//   localField: '_id'
// });

// donarfoodSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// donarfoodSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
// });

// donarfoodSchema.pre('save', function(next) {
//   console.log('will save document');
//   next();
// });

// donarfoodSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// donarfoodSchema.pre('find', function(next) {
// donarfoodSchema.pre(/^find/, function(next) {
//   this.find({ secretdonarfood: { $ne: true } });
//   this.start = Date.now();
//   next();
// });
// donarfoodSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangedAt'
//   });
//   next();
// });

// donarfoodSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds`);
//   // console.log(docs);
//   next();
// });

//AGGREGATION MIDDLEWARE

// donarfoodSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ secretdonarfood: { $ne: true } });
//   console.log(this.pipeline());
//   next();
// });
const donarfood = mongoose.model('donarfood', donarfoodSchema);
module.exports = donarfood;
