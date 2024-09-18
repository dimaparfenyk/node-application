const express = require("express");
const ctrlContacts = require("../controllers");
const { validateBody } = require("../middlewares");
const { addSchema } = require("../schemas");

const router = express.Router();

router.get("/", ctrlContacts.getAll);
router.get("/:id", ctrlContacts.getContactById);
router.post("/", validateBody(addSchema), ctrlContacts.createContact);
router.put("/:id", validateBody(addSchema), ctrlContacts.updateContact);
router.delete("/:id", ctrlContacts.removeContact);

module.exports = router;
