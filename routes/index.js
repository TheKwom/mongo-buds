const express = require("express");
const router = express.Router();

router.use("/", require("./swagger"));

router.get("/reviews", review);

module.exports = router;
