const { Activities, Countries } = require("../db.js");

const addActivity = async ({nombre,
  dificultad,
  duracion,
  temporada,
  countries}
  ) => {
if (!countries) throw new Error("Debe enviar algun pais");
  const arrayCountries = Array.isArray(countries) ? countries : [countries];
  const countriesFind = await Promise.all(
    arrayCountries.map((id) => Countries.findByPk(id.toUpperCase()))
  );
  if (countriesFind.includes(undefined)) {
    throw new Error("No se encontraron países válidos");
  }

  const newActivity = await Activities.create({
    nombre,
    dificultad,
    duracion,
    temporada,
  });

  await newActivity.addCountries(countriesFind.filter((country) => !!country));

  return newActivity;
};

const getActivities = async () => {
    const actividades = await Activities.findAll({
      include: {
        model: Countries,
        attributes: ["id", "nombre"],
        through: { attributes: [] },
      },
    });
    if (actividades) {
      return actividades;
    } else {
      throw new Error("No se encontro ninguna actividad");
    }
  };

module.exports = {
    getActivities,
    addActivity    
}
