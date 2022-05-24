let express = require("express");
let companiesRouter = express.Router();

let companiesArray = [
    {id: 1, name: 'Air Astana', year: 2001},
    {id: 2, name: 'Berkut Air', year: 2000},
    {id: 3, name: 'Euro-Asia Air', year: 1997},
    {id: 4, name: 'SCAT', year: 1997},
    {id: 5, name: 'Semeyavia', year: 1991}
]

companiesRouter.get('/', (request, response) => {
    response.render('companies.hbs', {
        company: companiesArray
    })
    // response.json(companiesArray);
});


companiesRouter.get('/:id', (request, response) => {
    let companyId = request.params.id;
    let idx = companiesArray.findIndex(item => item.id == companyId)
    response.render('companies.hbs', {
        findCompanyId: companiesArray[idx]
    })
});

companiesRouter.post('/', (req, res) => {
    let {name, year}  = req.body;
    let newCompany = {name, year};
    companiesArray.push(newCompany)
    res.status(201).send("Company added");
});

module.exports = companiesRouter;