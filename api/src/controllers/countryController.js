const { Countries } = require("../db.js");
const getAllCountries = require("./dbGetApi.js");

const getCountryById = async(id) => {
    const countryId  = await getAllCountries()
    const filterCountry = countryId.filter(elem => elem.id === id)
    const response =  Countries.create({...filterCountry[0], capital: filterCountry[0].capital[0], continente: filterCountry[0].continente[0]});
    return response;
}

module.exports = getCountryById;
