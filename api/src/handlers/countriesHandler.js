const  getCountryById = require ("../controllers/countryController");
const getAllCountries = require("../controllers/dbGetApi");

const getCountryByNameHandler = async(req, res) => {
    const {name} = req.query;
    const getAll = await getAllCountries()
    const getAllFilter = getAll.filter(country => country.nombre === name)
    res.status(200).json({data: getAllFilter})
}
const getAllCountriesHandler = async (req, res) => {
    try {
        const getCountries = await getAllCountries()
        res.status(200).json(getCountries);

    } catch (error) {
        res.status(400).json({descripcion: "Hubo un error en el controllador en la funcion getAllCountriesHandler", error: error.message})
    }
}
const getCountryByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const country = await getCountryById(id)
        res.status(200).json({country});
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCountryByNameHandler,
    getCountryByIdHandler,
    getAllCountriesHandler,
}; 