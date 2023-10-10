require('dotenv').config()

//Models
const ApiUsers = require('../models/apiUser.model');

//functions

//autenticacion, retorna token de acceso
async function getAccessToken(obj) {
    const access = await ApiUsers.findOne({user: obj.user, pass: obj.pass})
    console.log(access);
}

module.exports = {
    getAccessToken
}