let express = require('express');
let coffeeRouter = express.Router();

let coffeeArray = [{
    name: "latte",
    volume: 0.33,
    price: 1100,
    takeAway: false,
    syrop: "Caramel", 
    id: 1
},
{
    name: "Americano",
    volume: 0.33,
    price: 800,
    takeAway: true,
    syrop: "none", 
    id: 2
},
{
    name: "Capucino",
    volume: 0.45,
    price: 1100,
    takeAway: true,
    syrop: "Chocolate", 
    id: 3
},
{
    name: "Espresso",
    volume: 0.25,
    price: 700,
    takeAway: false,
    syrop: "none", 
    id: 4
}];


coffeeRouter.get('/', (request, response) => {
    response.render('coffees.hbs', {coffeeArray, showArray: true});
});

coffeeRouter.get('/:id', (request, response) => {
    let coffeeId = request.params.id;
    let foundCoffeeIndex = coffeeArray.findIndex(item => item.id == coffeeId);

    if(foundCoffeeIndex != -1){
        response.render('coffees.hbs', {coffee: coffeeArray[foundCoffeeIndex], showArray: false});
    }else{
        response.status(404).send("Not found");
    };

    
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