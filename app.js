const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
const carsRouter = require("./routers/carsRouter")
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/cars", carsRouter);

app.listen(8080);