const express = require("express");
let phonersRouter = express.Router();

let phonesArray = []

phonersRouter.get('/', (request, response) => {
    let array = phonesArray
    response.json(array)
});

phonersRouter.post('/', (req, res) => {
    let {model, price} = req.body;

    let newPhone = {model,price}
    phonesArray.push(newPhone)

    res.status(201).send("phone added");
});