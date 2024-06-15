const router = require("express").Router();
const reviews = require("../controllers/review.js");

router.get("/", reviews.getReviews);
router.get("/:id", reviews.getReviewById);
router.post("/", reviews.createReview);
router.put("/:id", reviews.updateReview);
router.delete("/:id", reviews.deleteReview);

module.exports = router;
