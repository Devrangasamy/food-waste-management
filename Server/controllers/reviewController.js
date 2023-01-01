const Review = require('../models/reviewModels');
// const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
const factory = require('./handlerFactory.js');

// exports.getReview = catchAsync(async (req, res, next) => {
//   let filter = {};

//   if (req.params.donarfoodId) filter = { donarfood: req.params.donarfoodId };
//   const reviews = await Review.find(filter);
//   // .populate({
//   //   path: 'user'
//   // })
//   // .populate({
//   //   path: 'donarfood'
//   // });

//   res.status(200).json({
//     status: 'success',
//     results: reviews.length,
//     data: {
//       reviews
//     },
//     something: 'message'
//   });
// });

exports.setdonarfoodUserIds = (req, res, next) => {
  if (!req.body.donarfood) req.body.donarfood = req.params.donarfoodId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// exports.createReview = catchAsync(async (req, res, next) => {
//   const newReview = await Review.create(req.body);
//   res.status(200).json({
//     status: 'success',
//     data: {
//       review: newReview
//     }
//   });
// });

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
