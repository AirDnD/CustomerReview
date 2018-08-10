var db = require('./config.js');
var dg= ('../data_generator.js')

const getRatings = (listing_id, whenRatings) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, _value \
              FROM reviews WHERE listing_id = ${listing_id}`;

  db.query(qs, whenRatings);
}

const getReviews = (listing_id, whenReviews) => {
  const qs = `select users.name, users.photo, reviews._date, reviews.content, reviews.is_reported \
              FROM users JOIN reviews \
              WHERE reviews.listing_id = ${listing_id} AND users.id = reviews.user_id
              ORDER BY reviews._date DESC`;

  db.query(qs, whenReviews); 
}

const insertReview = () => {
  let qs;
  for (let i = 1; i <= 100; i++) {
    let listing_id = i;
    let users = dg.getUsers();
    users.forEach(function(user) {
      let review = dg.getReview();
      review.listing_id = listing_id;
      review.user_id = user;

      qs = `INSERT INTO reviews (listing_id, user_id, accuracy, communication, cleanliness, location, check_in, \
            _value, _date, content) \
            VALUES ("${review.listing_id}", "${review.user_id}", "${review.accuracy}", "${review.communication}", \
             "${review.cleanliness}", "${review.location}", "${review.check_in}", "${review._value}", "${review.date}", "${review._content}")`;
      db.query(qs, function(err) {
          if(err) {
              console.log(err);
              return;
          }
      });
    });
  }
};



module.exports = {
  getRatings: getRatings,
  getReviews: getReviews
}



// Create / POST - create a new item
// Read / GET - read an item
// Update / PUT - update an item
// Delete / DELETE - delete an item
