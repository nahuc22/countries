const axios = require("axios");
const { Countries } = require("../db");
const getAllCountries = async () => {
  const temp =  await Countries.findAll()
  if(temp.length){
  return temp
  } else {
    const url = await axios({url: "https://restcountries.com/v3/all", method: "get"})
    const models = url.data.map((pais) => {
          return {
              id: pais.cca3,
              nombre: pais.name.common,
              imagen: pais.flags[1],
              continente: pais.continents[0],
              capital: pais.capital? pais.capital[0]: "not found",
              subregion: pais.subregion,
              area: pais.area,
              poblacion: pais.population
          }
    })
    await Countries.bulkCreate(models);
    const response = Countries.findAll()
    return response
  }
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