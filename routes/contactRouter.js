const express = require("express");
const { contacts } = require("../controllers");
const { validateBody, isValidId, authenticate } = require("../middlewares");
const { addSchema, updateFavoriteSchema } = require("../models/contact");

const router = express.Router();

router.get("/", authenticate, contacts.getAll);
router.get("/:id", authenticate, isValidId, contacts.getContactById);
router.post("/", authenticate, validateBody(addSchema), contacts.createContact);
router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  contacts.updateContact
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  contacts.updateContact
);

router.delete("/:id", authenticate, isValidId, contacts.removeContact);

module.exports = router;
