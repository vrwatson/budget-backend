const express = require("express");
const cors = require('cors');

const app = express();

const transactionsController = require("./controllers/transactionsController.js");

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

// ROOT
app.get("/", (req, res) => {
  res.send("Vanessa's Budgeting App - ROOT");
});

module.exports = app;
