const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Reviews",
    description: "Food reviews",
  },
  host: "mongo-buds.onrender.com",
  schemes: ["https"],
};
console.log(doc);
const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
