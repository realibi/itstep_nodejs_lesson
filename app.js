const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
const carsRouter = require("./routers/carsRouter")
const phonesRouter = require("./routers/phonesRouter")
const laptopsRouter = require("./routers/laptopsRouter")
const companiesRouter = require("./routers/companiesRouter")
const usersRouter = require("./routers/usersRouter")
const coffeesRouter = require("./routers/coffeesRouter")
app.use(cors());

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/cars", carsRouter);
app.use("/phones", phonesRouter);
app.use("/laptops", laptopsRouter);
app.use("/companies", companiesRouter);
app.use("/users", usersRouter);
app.use("/coffees", coffeesRouter);

app.get('/contacts', (req, res) => {
    res.render('contacts.hbs', {
        email: "privet",
        phone: "877777777",
        userAddress: "abaya 24",
        showPhone: true,
        branches: [
            {address: "abaya 24", phone: "475623"},
            {address: "imanova 7", phone: "669944"},
            {address: "seifullina 40", phone: "345678"}
        ]
    });
});




app.listen(8080);