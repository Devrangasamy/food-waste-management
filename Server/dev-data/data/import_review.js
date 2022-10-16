const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('../../models/reviewModels');
const fs = require('fs');
dotenv.config({
  path: './config.env'
});

const Database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(Database).then(() => {
  console.log('Datebase connected Successfully');
});
const Reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);
// console.log(Reviews);
const insertData = async () => {
  try {
    console.log('importiong');
    await Review.create(Reviews);
    console.log('Data inserted successffully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  insertData();
}
