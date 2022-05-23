const { request } = require('express');
const express = require('express');
let carsRouter = express.Router();

let users = [
    {
        name: 'Hursand',
        login: 'kaef777',
        password: '123123',
    },
    {
        name: 'Alibi',
        login: 'realibi',
        password: 'asdasd',
    },
    {
        name: 'ruslan',
        login: '1988kaef',
        password: '789789',
    },
]

carsRouter.get('/', (request, response) => {
    response.send(users);
});

carsRouter.post('/', (request, response) => {
    let {newName, newLogin, newPasword} = request.body;
    
    users.name = newName;
    users.login = newLogin;
    users.password = newPasword;

    response.status("user added");
});

module.exports = carsRouter;