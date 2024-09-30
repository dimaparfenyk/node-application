const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contactRouter.js");
const authRouter = require("./routes/auth.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
