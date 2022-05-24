const express = require("express");
let phonesRouter = express.Router();

let phonesArray = [];

phonesRouter.get('/', (request, response) => {
    let array = phonesArray
    response.json(array)
});

phonesRouter.post('/', (req, res) => {
    let {model, price} = req.body;

    let newPhone = {model,price}
    phonesArray.push(newPhone)

    res.status(201).send("phone added");
});

module.exports = phonesRouter;