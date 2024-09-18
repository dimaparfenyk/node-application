const contactsServices = require("../services/contactsServices");
const { HttpError, ctrlWrapper } = require("../helpers");
const { addSchema } = require("../schemas");

const getAll = async (req, res) => {
  const result = await contactsServices.getAll();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const createContact = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }

  const result = await contactsServices.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }

  const { id } = req.params;
  const result = await contactsServices.updateContact(req.body, id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.removeContact(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  // res.status(204).send()
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  removeContact: ctrlWrapper(removeContact),
};
