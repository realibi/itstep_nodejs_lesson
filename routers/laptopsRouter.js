const express = require("express");
let laptopsRouter = express.Router();

let laptopsArray = [
    {
        manufacturer: "Acer",
        name: "Nitro 5",
        price: 392800,
        id: 1
    },

    {
        manufacturer: "Lenovo",
        name: "IdeaPad Gaming 3",
        price: 428755,
        id: 2
    },

    {
        manufacturer: "HP",
        name: "Victus 16",
        price: 439900,
        id: 3
    }
];

laptopsRouter.get("/", (request, response) => {
<<<<<<< HEAD
    response.send(laptopsArray);
=======
    response.render("laptops.hbs", {
        laptopsarray: laptopsArray,
        showArray: true
    });
});

laptopsRouter.get("/:id", (request, response) => {
    let idx = request.params.id;

    let foundIndex = laptopsArray.findIndex(item => item.id == idx);

    response.render("laptops.hbs", {
        manufacturer: laptopsArray[foundIndex].manufacturer,
        name: laptopsArray[foundIndex].name,
        price: laptopsArray[foundIndex].price,
        showArray: false
    });
>>>>>>> 282c6231e73de439e29784d0fca94a2ba8ac14c5
});

laptopsRouter.post("/", (request, response) => {
    let {manufacturer, name, price} = request.body;

    let newLaptop = {
        manufacturer,
        name,
        price
    }

    laptopsArray.push(newLaptop);

    response.send("new laptop added");
});

module.exports = laptopsRouter;