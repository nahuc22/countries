const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Countries",
    {
      id: {
          type: DataTypes.STRING(3),
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continente: {
        type: DataTypes.ENUM("Asia", "Africa", "North America", "South America", "Europe", "Oceania", "Antartica"),
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area:{
        type: DataTypes.INTEGER,
      },
      poblacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {timestamps: false}
  )
}
