const express = require("express");
const hbs = require("hbs");
let laptopsRouter = express.Router();

let laptopsArray = [
    {
        manufacturer: "Acer",
        name: "Nitro 5",
        price: 392800
    },

    {
        manufacturer: "Lenovo",
        name: "IdeaPad Gaming 3",
        price: 428755
    },

    {
        manufacturer: "HP",
        name: "Victus 16",
        price: 439900
    }
];

laptopsRouter.get("/", (request, response) => {
    response.render("laptops.hbs", {
        laptopsarray: laptopsArray
    });
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