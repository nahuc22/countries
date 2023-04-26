const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define (   
        "Activities", {
      id:{
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.INTEGER,
        validate: {
        min: 1,
        max: 5
        }
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      temporada:{
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {timestamps: false}
  )
}