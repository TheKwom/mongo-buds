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

const createReview = async (req, res) => {
  const review = {
    review_id: req.body.review_id,
    menu_item: req.body.menu_item,
    image: req.body.image,
    review_text: req.body.review_text,
    restaurant_name: req.body.restaurant_name,
    restaurant_city: req.body.restaurant_city,
    restaurant_state: req.body.restaurant_state,
    rating: req.body.rating,
    user: req.body.user,
  };

  const response = await mongodb
    .getDb()
    .db("taste-buds")
    .collection("reviews")
    .insertOne(review);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(respnse.error || "An error occurred while creating the review.");
  }
};

const getReviewById = async (req, res) => {};
const updateReview = async (req, res) => {};
const deleteReview = async (req, res) => {};

module.exports = {
  getReviews,
  createReview,
  getReviewById,
  updateReview,
  deleteReview,
};
