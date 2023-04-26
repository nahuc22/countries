const { getCountryById } = require ("../controllers/countryController");
const getCountryByNameHandler = (req, res) => {
    const {name} = req.query;
    if(name) res.send(`Este es el nombre:${name}`);
    else res.send("Estos son todos los paises")    
}
const getAllCountriesHandler = (req, res) => {
    res.status(200).send("Estoy acá, fack");
}
const getCountryByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const country = await getCountryById(id)
        res.status(200).send(`Acá esta el id:${id}`);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCountryByNameHandler,
    getCountryByIdHandler,
    getAllCountriesHandler,
}; 