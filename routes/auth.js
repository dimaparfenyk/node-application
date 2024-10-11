const express = require("express");

const { validateBody, authenticate, upload } = require("../middlewares");
const { schemas } = require("../models/user");
const { auth } = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), auth.register);

router.get("/verify/:verificationToken", auth.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  auth.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), auth.login);

router.get("/current", authenticate, auth.getCurrent);

router.post("/logout", authenticate, auth.logout);

router.patch(
  "/user",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  auth.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  auth.updateAvatar
);

module.exports = router;
