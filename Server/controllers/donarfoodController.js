// const fs = require('fs');

const donarfood = require('./../models/donarfoodModels');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory.js');

exports.aliasTopdonarfoods = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

//
// exports.checkID = (req, res, next, val) => {
//   console.log(`donarfood id is: ${val}`);

//   if (req.params.id * 1 > donarfoods.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };

// exports.getAlldonarfoods = catchAsync(async (req, res, next) => {
//   // try {
//   // const queryObj = { ...req.query };
//   // const excludedfields = ['page', 'sort', 'limit', 'fields'];
//   // excludedfields.forEach(el => delete queryObj[el]);
//   // let queryString = JSON.stringify(queryObj);
//   // queryString = queryString.replace(
//   //   /\b(gte|gt|lte|lt)\b/g,
//   //   match => `$${match}`
//   // );
//   // let query = donarfood.find(JSON.parse(queryString));
//   // console.log(JSON.parse(queryString));
//   // console.log(queryString);
//   // if (req.query.sort) {
//   //   const sortBy = req.query.sort.split(',').join(' ');
//   //   query = query.sort(sortBy);
//   // } else {
//   //   query = query.sort('-createdAt');
//   // }

//   // if (req.query.fields) {
//   //   const fields = req.query.fields.split(',').join(' ');
//   //   query = query.select(fields);
//   // } else {
//   //   query = query.select('-__v');
//   // }
//   // const page = req.query.page * 1 || 1;
//   // const limit = req.query.limit * 1 || 100;
//   // const skip = (page - 1) * limit;

//   // query = query.skip(skip).limit(limit);

//   // if (req.query.page) {
//   //   const numdonarfoods = await donarfood.countDocuments();
//   //   if (skip >= numdonarfoods) throw new Error('This page does not exist');
//   // }
//   // const donarfoods = await donarfood.find({
//   //   duration: 5
//   // });
//   // const donarfoods = await donarfood.find()
//   //   .where('duration')
//   //   .equals(5)
//   //   .where('difficulty')
//   //   .equals('easy');
//   // console.log(req.query);
//   const features = new APIFeatures(donarfood.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   const donarfoods = await features.query.populate({
//     path: 'guides',
//     select: '-__v'
//   });
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: donarfoods.length,
//     data: {
//       donarfoods
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });

// exports.getdonarfood = catchAsync(async (req, res, next) => {
//   // try {
//   const donarfoods = await donarfood.findById(req.params.id).populate('reviews');
//   if (!donarfoods) {
//     return next(new AppError('No donarfood found with that ID', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     results: donarfoods.length,
//     data: {
//       donarfoods
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // } // console.log(req.params);
//   // const id = req.params.id * 1;

//   // const donarfood = donarfoods.find(el => el.id === id);

//   // res.status(200).json({
//   //   status: 'success',
//   //   data: {
//   //     donarfood
//   //   }
//   // });
// });

// exports.createdonarfood = catchAsync(async (req, res, next) => {
//   const newdonarfood = await donarfood.create(req.body);
//   res.status(201).json({
//     status: 'success',
//     data: {
//       donarfood: newdonarfood
//     }
//   });

// try {
//   const newdonarfood = await donarfood.create(req.body);

//   // const newdonarfood = new donarfood({});
//   // newdonarfood.save();

//   // console.log(req.body);
//   // const newId = donarfoods[donarfoods.length - 1].id + 1;
//   // const newdonarfood = Object.assign({ id: newId }, req.body);
//   // donarfoods.push(newdonarfood);
//   // fs.writeFile(
//   //   `${__dirname}/dev-data/data/donarfoods-simple.json`,
//   //   JSON.stringify(donarfoods),
//   //   err => {
//   res.status(201).json({
//     status: 'success',
//     data: {
//       donarfood: newdonarfood
//     }
//   });
// } catch (err) {
//   res.status(400).json({
//     status: 'fail',
//     message: err
//   });
// }
// //   }
// );
// });

// exports.updatedonarfood = catchAsync(async (req, res, next) => {
//   // try {

//   const donarfood = await donarfood.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   if (!donarfood) {
//     return next(new AppError('No donarfood found with that ID', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       donarfood
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });

// exports.deletedonarfood = catchAsync(async (req, res, next) => {
//   // try {
//   const donarfoods = await donarfood.findByIdAndDelete(req.params.id);

//   if (!donarfoods) {
//     return next(new AppError('No donarfood found with that ID', 404));
//   }
//   res.status(200).json({
//     status: 'success',
//     data: null
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
exports.getAlldonarfoods = factory.getAll(donarfood);
exports.getdonarfood = factory.getOne(donarfood, { path: 'reviews' });
exports.createdonarfood = factory.createOne(donarfood);
exports.updatedonarfood = factory.updateOne(donarfood);
exports.deletedonarfood = factory.deleteOne(donarfood);

exports.getdonarfoodstats = catchAsync(async (req, res, next) => {
  // try {
  const stats = await donarfood.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        // _id: '$ratingsAverage',
        _id: { $toUpper: '$difficulty' },
        numdonarfoods: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },

        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    },
    {
      $match: {
        _id: { $ne: 'EASY' }
      }
    }
  ]);

  res.status(200).json({
    status: 'sucess',
    data: {
      stats
    }
  });
  // } catch (err) {
  //   res.status(404).json({
  //     status: 'fail',
  //     message: err
  //   });
  // }
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  // try {
  const year = req.params.year * 1;
  const plan = await donarfood.aggregate([
    {
      $unwind: '$startDates'
    },

    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numdonarfoodStarts: { $sum: 1 },
        donarfoods: {
          $push: '$name'
        }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numdonarfoodStarts: -1 }
    },
    {
      $limit: 12
    }
  ]);
  res.status(200).json({
    status: 'sucess',
    data: {
      plan
    }
  });
  // } catch (err) {
  //   res.status(404).json({
  //     status: 'fail',
  //     message: err
  //   });
  // }
});

exports.getdonarfoodsWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;
  if (!lat || !lng) {
    next(
      new AppError(
        'please provide latitude and longitude in the format lat,lng.',
        400
      )
    );
  }
  const donarfoods = await donarfood.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });
  // console.log(distance, lat, lng, unit);
  res.status(200).json({
    status: 'sucess',
    results: donarfoods.length,
    data: {
      data: donarfoods
    }
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');
  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;
  if (!lat || !lng) {
    next(
      new AppError(
        'please provide latitude and longitude in the format lat,lng.',
        400
      )
    );
  }

  const distances = await donarfood.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1]
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier
      }
    },
    {
      $project: {
        distance: 1,
        name: 1
      }
    }
  ]);

  res.status(200).json({
    status: 'sucess',

    data: {
      data: distances
    }
  });
});
