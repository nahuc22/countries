const axios = require("axios");
const getAllCountries = async () => {
  const url = await axios({url: "https://restcountries.com/v3/all", method: "get"})
  const models = url.data.map(pais => {
        return {
            id: pais.cca3,
            nombre: pais.name.common,
            imagen: pais.flags[1],
            continente: pais.continents,
            capital: pais.capital,
            subregion: pais.subregion,
            area: pais.area,
            poblacion: pais.population
        }
  })
  return models;
}
module.exports = getAllCountries;

/*
ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población.
*/