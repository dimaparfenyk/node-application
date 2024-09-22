const { model, Schema } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: false }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("Contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { Contact, addSchema, updateFavoriteSchema };
