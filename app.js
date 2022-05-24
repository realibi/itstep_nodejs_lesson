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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/cars", carsRouter);
// app.use("/phones", phonesRouter);
// app.use("/laptops", laptopsRouter);
// app.use("/companies", companiesRouter);
// app.use("/users", usersRouter);
// app.use("/coffees", coffeesRouter);

app.listen(8080);