const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
