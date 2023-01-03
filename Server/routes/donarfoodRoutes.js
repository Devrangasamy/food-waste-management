const express = require('express');
const donarfoodController = require('../controllers/donarfoodController');
const authController = require('../controllers/authController');
// const reviewController = require('./../controllers/reviewController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// router.param('id', donarfoodController.checkID);

// router
//   .route('/:donarfoodId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictTo('user '),
//     reviewController.createReview
//   );
router.use('/:donarfoodId/reviews', reviewRouter);
router
  .route('/top-5-cheap')
  .get(
    donarfoodController.aliasTopdonarfoods,
    donarfoodController.getAlldonarfoods
  );

router.route('/donarfood-stats').get(donarfoodController.getdonarfoodstats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    donarfoodController.getMonthlyPlan
  );

router
  .route('/donarfoods-within/:distance/center/:latlng/unit/:unit')
  .get(donarfoodController.getdonarfoodsWithin);
router
  .route('/distances/:latlng/unit/:unit')
  .get(donarfoodController.getDistances);

router
  .route('/')
  .get(donarfoodController.getAlldonarfoods)
  .post(
    authController.protect,
    // authController.restrictTo('admin', 'lead-guide'),
    donarfoodController.createdonarfood
  );

router
  .route('/:id')
  .get(donarfoodController.getdonarfood)
  .patch(authController.protect, donarfoodController.updatedonarfood)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    donarfoodController.deletedonarfood
  );

module.exports = router;
