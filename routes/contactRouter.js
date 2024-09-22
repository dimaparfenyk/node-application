const express = require("express");
const ctrlContacts = require("../controllers");
const { validateBody, isValidId } = require("../middlewares");
const { addSchema, updateFavoriteSchema } = require("../models/contact");

const router = express.Router();

router.get("/", ctrlContacts.getAll);
router.get("/:id", isValidId, ctrlContacts.getContactById);
router.post("/", validateBody(addSchema), ctrlContacts.createContact);
router.put(
  "/:id",
  isValidId,
  validateBody(addSchema),
  ctrlContacts.updateContact
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrlContacts.updateContact
);
router.delete("/:id", isValidId, ctrlContacts.removeContact);

module.exports = router;
