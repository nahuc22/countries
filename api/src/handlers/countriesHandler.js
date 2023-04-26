const getCountryByNameHandler = (req, res) => {
    const {name} = req.query;
    if(name) res.send(`Este es el nombre:${name}`);
    else res.send("Estos son todos los paises")    
}
const getAllCountriesHandler = (req, res) => {
    res.status(200).send("Estoy acá, fack");
}
const getCountryByIdHandler = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Acá esta el id:${id}`);
}

module.exports = {
    getCountryByNameHandler,
    getCountryByIdHandler,
    getAllCountriesHandler,
}; 