module.exports = (mongoose) => {
  const Review = mongoose.model(
    "review",
    mongoose.Schema(
      {
        menu_item: { type: String, required: true },
        image: String,
        review_text: String,
        restaurant_name: { type: String, required: true },
        restaurant_city: { type: String, required: true },
        restaurant_state: { type: String, required: true },
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
