const routes = require("express").Router();
const reviews = require("../controllers/review.js");

routes.get("/", reviews.getReviews);

// routes.post("/", reviews.create);

// routes.put("./:review_id", reviews.update);

// routes.delete("./:review_id", reviews.deleteOne);

module.exports = routes;
