const express = require("express");
let phonesRouter = express.Router();

let phonesArray = [
    {
    model: "iPhone 99Xs Max Pro Ultra Premium Edition",
    color: "Car",
    price: "100$",
    id: 1
},{
    model: "Nokia 3310",
    color: "Beton",
    price: "1$",
    id: 2
},{
    model: "Motorola",
    color: "Meat",
    price: "570 ТГ",
    id: 3
}
];

phonesRouter.get('/', (request, response) => {
    let array = phonesArray
    response.render('phones.hbs', {
        phones: array,
        id: false
    })
});

phonesRouter.get('/:id', (request, response) => {
    let array = phonesArray

    let phoneId = request.params.id
    let foundCarIndex = array.findIndex(item => item.id == phoneId)
    if(foundCarIndex != -1){
        response.render('phones.hbs', {
            phonesId: array[foundCarIndex],
            id: true
        })
    }
});

phonesRouter.post('/', (req, res) => {
    let {model, price, color, id} = req.body;

    let newPhone = {model,price, color, id}
    phonesArray.push(newPhone)

    res.status(201).send("phone added");
});



module.exports = phonesRouter;