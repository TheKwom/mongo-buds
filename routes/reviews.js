const routes = require("express").Router();
const reviews = require("../controllers/review.js");

routes.get("/", reviews.getReviews);
routes.get("/:id", reviews.getReviewById);
routes.post("/", reviews.createReview);
routes.put("./:id", reviews.updateReview);
routes.delete("./:review_id", reviews.deleteReview);

module.exports = routes;
