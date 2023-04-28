const { Activities, Countries } = require("../db.js");

const createActivity = async(data) => {
    const response = await Activities.create(data);
    return response.dataValues;
}

const getActivities = async () => {
    const actividades = await Activities.findAll({
      include: {
        model: Countries,
        attributes: ["id", "name"],
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
    createActivity,
    getActivities    
}
