const transactions = require("express").Router();
const transactionsArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})


transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
    // res.redirect("/transactions/") 
    //**should be one or the other,  best practices, line 11
});


transactions.get("/:arrIndex", (req, res) => {
    const { arrIndex } = req.params;
    if(transactionsArray[arrIndex]) {
        res.json(transactionsArray[arrIndex]);
    } else {
        res.redirect("/404");
    }
});

transactions.delete("/:arrIndex", (req, res) => {
    const { arrIndex } = req.params;
    const  deletedTransaction = transactionsArray.splice(arrIndex, 1);
    console.log(deletedTransaction);
    res.json(deletedTransaction[0]);
});


transactions.put("/:arrIndex", (req, res) => {
    const { arrIndex } = req.params;
    const { body } = req;
    transactionsArray[arrIndex] = body;
    res.json(transactionsArray[arrIndex])
});


module.exports = transactions;