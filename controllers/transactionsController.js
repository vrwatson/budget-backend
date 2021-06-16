const transactions = require("express").Router;
const transactionsArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})


transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
    res.redirect("/transactions/") 
    //**should be one or the other,  best practices, line 11
})

module.exports = transactions;