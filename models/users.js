module.exports = (mongoose) => {
  const User = mongoose.model(
    "users",
    mongoose.Schema(
      {
        username: String,
        first_name: String,
        last_name: String,
        email: String,
        bio: String,
        password: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
