import express from "express";
import contacts from "./data.contacts.js";

const app = express();

app.use((req, res, next) => {
  console.log("First");
  next();
});

app.use((req, res, next) => {
  console.log("Second");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => {
  console.log("Server was started! PORT - 3000");
});
