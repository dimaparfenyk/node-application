const express = require("express");

const { validateBody, authenticate, isValidId } = require("../middlewares");
const { schemas } = require("../models/user");
const { auth } = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), auth.register);

router.post("/login", validateBody(schemas.loginSchema), auth.login);

router.get("/current", authenticate, auth.getCurrent);

router.post("/logout", authenticate, auth.logout);

router.patch(
  "/user",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  auth.updateSubscription
);

module.exports = router;
