var db = require('./config.js');

const getReviews = (listing_id, callback) => {
  const qs = `select users.name, users.photo, reviews._date, reviews.content FROM users INNER JOIN reviews ON users.id = reviews.user_id where reviews.listing_id = ${listing_id};`
   db.query(qs, callback);
}


const getRatings = (listing_id, callback) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, _value \
              FROM reviews WHERE listing_id = ${listing_id}`;
  db.query(qs, callback);
}



const insertReview = (inputObj, callback) => {
  const qs =  `INSERT INTO reviews (listing_id,user_id,accuracy,communication,cleanliness,location,check_in,_value,_date,content) \
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`
  db.query(qs, Object.values(inputObj), callback)
}

var inputObj = {
  listing_id:8140709,
  user_id: 1133267,
  accuracy:2.5,
  communication: 2.5,
  cleanliness: 2.5,
  location: 2.5,
  check_in: 2.5,
  _value: 2.5,
  _date: '2017-01-28',
  content: "tis a great place"
  };


var inputObj = {
  "listing_id":8140709,
  "user_id": 1133267,
  "accuracy":2.5,
  "communication": 2.5,
  "cleanliness": 2.5,
  "location": 2.5,
  "check_in": 2.5,
  "_value": 2.5,
  "_date": '2017-01-28',
  "content": "tis a great place"
  };


const randomRating  = () => {
  return Math.round((Math.random() * (4 - 1) + 1) * 2)/2;
}
var inputObj = {
  listing_id:8140709,
  user_id: 1133267,
  accuracy:randomRating(),
  communication: randomRating(),
  cleanliness: randomRating(),
  location: randomRating(),
  check_in: randomRating(),
  _value: randomRating(),
  _date: '2017-01-28',
  content: "tis a great place"
  };

// getReviews(8140709, console.log)
// getRatings(8140709, console.log)
// insertReview(inputObj, console.log)

module.exports = {
  getReviews: getReviews,
  getRatings: getRatings,
  insertReview: insertReview
}


