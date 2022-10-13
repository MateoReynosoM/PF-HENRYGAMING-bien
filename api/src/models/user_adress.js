const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('userAdress', {

      adress:{
        type:DataTypes.STRING,
        allownull:false,
      },
      city:{
        type:DataTypes.STRING,
        allownull:false,
      },
      postalCode:{
          type:DataTypes.INTEGER,
          allownull:false,
      },
      country:{
          type:DataTypes.STRING,
          allownull:false,
      },
      phoneNumber:{
          type:DataTypes.STRING,
          allownull:false,
      },
    },
    {
      timestamps: false
    }

  )}
