let express = require("express");
let companiesRouter = express.Router();

let companiesArray = [
    {name: 'Air Astana', year: 2001},
    {name: 'Berkut Air', year: 2000},
    {name: 'Euro-Asia Air', year: 1997},
    {name: 'SCAT', year: 1997},
    {name: 'Semeyavia', year: 1991}
];

companiesRouter.get('/', (request, response) => {
    response.json(companiesArray);
});

companiesRouter.post('/', (req, res) => {
    let {name, year}  = req.body;
    let newCompany = {name, year};
    companiesArray.push(newCompany)
    res.status(201).send("Company added");
});

module.exports = companiesRouter;