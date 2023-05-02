const { Countries } = require("../db.js");
const getAllCountries = require("./dbGetApi.js");


const getCountryById = async (id) => {
    const country = await Countries.findByPk(id.toUpperCase(),{
        attributes: [
            "id",
            "nombre",
            "imagen",
            "continente",
            "poblacion",
            "subregion",
            "area",
            "capital",
          ],
    });
    return country;
}
module.exports = getCountryById;
