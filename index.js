import * as ContactsServise from "./contacts.js";
import { program } from "commander";

program
  .option("-a, action <type>")
  .option("-i, id <type>")
  .option("-n, name <type>")
  .option("-e, email <type>")
  .option("-p, phone <type>");

program.parse();
const options = program.opts();

async function initialContact({ action, id, ...data }) {
  switch (action) {
    case "list":
      const getList = await ContactsServise.getAllContacts();
      return console.log(getList);

    case "getById":
      const getContactById = await ContactsServise.getContactById(id);
      return console.log(getContactById);

    case "remove":
      const removeContact = await ContactsServise.removeContact(id);
      return console.log(removeContact);

    case "add":
      const addContact = await ContactsServise.addContact(data);
      return console.log(addContact);

    case "upgrade":
      const upgrade = await ContactsServise.upgradeContact(id, data);
      return console.log(upgrade);

    default:
      return "Not found";
  }
}

initialContact(options);
