const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const contactsPath = require("../db/pathToDb");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const data = await getAll();

  const result = data.find((contact) => contact.id === id);
  return result || null;
};

const addContact = async (data) => {
  const contacts = await getAll();
  const newContact = { id: nanoid(), ...data };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const removeContact = async (id) => {
  const data = await getAll();
  const indexOfContact = data.findIndex((contact) => contact.id === id);
  if (indexOfContact !== -1) {
    const result = data.splice(indexOfContact, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return result;
  }
  return null;
};

const updateContact = async (data, id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }

  contacts[index] = {
    id,
    ...data,
  };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  getAll,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
