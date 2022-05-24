let express = require('express');
let coffeeRouter = express.Router();

let coffeeArray = [{
    name: "latte",
    volume: 0.33,
    price: 1100,
    takeAway: false,
    syrop: "caramel"
},
{
    name: "Americano",
    volume: 0.33,
    price: 800,
    takeAway: true,
    syrop: "none"
},
{
    name: "Capucino",
    volume: 0.45,
    price: 1100,
    takeAway: true,
    syrop: "chocolate"
},
{
    name: "Espresso",
    volume: 0.25,
    price: 700,
    takeAway: false,
    syrop: "none"
}];


coffeeRouter.get('/', (request, response) => {
    response.render('coffees.hbs', {coffeeArray})
});

coffeeRouter.get('/:name', (request, response) => {
    let coffeName = request.params.name;
    let foundCoffeeIndex = coffeeArray.findIndex(item => item.name == coffeName);

    if(foundCoffeeIndex != -1){
        response.send(coffeeArray[foundCoffeeIndex]);
    }else{
        response.status(404).send("Not found");
    }
});

coffeeRouter.post('/', (req, res) => {
    let {name, volume, price, takeAway, syrop} = req.body;

    let newCoffee = {name, volume, price, takeAway, syrop}
    coffeeArray.push(newCoffee);

    res.status(201).send("coffee added");
});

coffeeRouter.delete('/', (req, res) => {
    let {name} = req.body;

    let nameIndex = coffeeArray.findIndex(item => item.name == name);
    coffeeArray.splice(nameIndex, 1);

    res.status(200).send("coffee deleted");
});

coffeeRouter.put('/', (req, res) => {
    let {name, volume, price, takeAway, syrop} = req.body;
    
    carsArray[index].name = nameNew;
    carsArray[index].volume = volumeNew;
    carsArray[index].price = priceNew;
    carsArray[index].takeAway = takeAwayNew;
    carsArray[index].syrop = syropNew;

    res.status(200).send("coffee changed");
});


module.exports = coffeeRouter;