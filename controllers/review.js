const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getReviews = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("taste-buds")
    .collection("reviews")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const createReview = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const review = new Review({
    review_id: req.body.review_id,
    menu_item: req.body.menu_item,
    image: req.body.image,
    review_text: req.body.review_text,
    restaurant_name: req.body.restaurant_name,
    restaurant_city: req.body.restaurant_city,
    restaurant_state: req.body.restaurant_state,
    rating: req.body.rating,
    user: req.body.user,
  });

  // save review to the db
  review
    .save(review)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while creating the review",
      });
    });
};

module.exports = {
  getReviews,
  createReview,
};
