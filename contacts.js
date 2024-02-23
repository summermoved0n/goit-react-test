import { nanoid } from "nanoid";
import fs from "fs/promises";
import path from "path";

const contactPath = path.resolve("data", "contacts.json");
const upgradeContacts = (contacts) =>
  fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));

export async function getAllContacts() {
  const contacts = await fs.readFile(contactPath, "utf-8");
  return JSON.parse(contacts);
}

export async function getContactById(id) {
  const contacts = await getAllContacts();
  const result = await contacts.find((item) => item.id === id);
  return result || null;
}

export async function removeContact(id) {
  const contacts = await getAllContacts();
  const index = await contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await upgradeContacts(contacts);
  return result;
}

export async function addContact(data) {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await upgradeContacts(contacts);
  return newContact;
}

export async function upgradeContact(id, data) {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...data };
  await upgradeContacts(contacts);
  return contacts[index];
}
