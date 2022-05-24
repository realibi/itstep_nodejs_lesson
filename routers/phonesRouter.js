const express = require("express");
let phonesRouter = express.Router();

let phonesArray = [
    {
    model: "iPhone 99Xs Max Pro Ultra Premium Edition",
    color: "Car",
    price: "100$"
},{
    model: "Nokia 3310",
    color: "Beton",
    price: "1$"
},{
    model: "Motorola",
    color: "Meat",
    price: "570 ТГ"
}
];

phonesRouter.get('/', (request, response) => {
    let array = phonesArray
    response.render('phones.hbs', {
        phones: array 
    })
});

phonesRouter.post('/', (req, res) => {
    let {model, price, color} = req.body;

    let newPhone = {model,price, color}
    phonesArray.push(newPhone)

    res.status(201).send("phone added");
});

module.exports = phonesRouter;