const fs = require('fs');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
const donarfood = require('./../../models/donarfoodModels');
const User = require('./../../models/userModels');
const Review = require('./../../models/reviewModels');

const { config } = require('process');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {}).then(() => console.log('DB CONNECTED successfully'));

const donarfoods = JSON.parse(
  fs.readFileSync(`${__dirname}/donarfoods.json`, 'utf-8')
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);

const importData = async () => {
  try {
    await donarfood.create(donarfoods);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await donarfood.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data Succesfully deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
// console.log(process.argv);
