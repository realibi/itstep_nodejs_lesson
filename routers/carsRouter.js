let express = require('express');
let carsRouter = express.Router();

let array = [
    {
        "model":"BMW",
        "price":25000000
    },
    {
        "model":"Mercedes",
        "price":20000000
    }
]

carsRouter.get('/',(request, response)=>{
    
    response.send(array);
});


carsRouter.post('/',(request, response)=>{
    
    let {model, price} = request.body;

    let newCar = {
        model,
        price
    }

    array.push(newCar)

    console.log(model)
    response.status(200).send("car addeb")
});

module.exports = carsRouter;