module.exports = (mongoose) => {
  const Review = mongoose.model(
    "review",
    mongoose.Schema(
      {
        menu_item: { type: String, required: true },
        image: String,
        review: String,
        restaurant: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        rating: { type: Number, min: 0, max: 5, required: true },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          requried: true,
        },
      },
      { timestamps: true }
    )
  );

  return Review;
};
