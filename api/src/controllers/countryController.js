const { Activities, Countries } = require("../db.js");
const getAllCountries = require("./dbGetApi.js");

const getCountryById = async(id) => {
    const countryId  = await getAllCountries()
    const filterCountry = countryId.map(elem => elem.id === id)
    const response =  Countries.create({...filterCountry[0], 
        capital: filterCountry[0].capital[0] , continente: filterCountry[0].continente[0]},
         {include: Activities});
    return response;
}

module.exports = getCountryById;
