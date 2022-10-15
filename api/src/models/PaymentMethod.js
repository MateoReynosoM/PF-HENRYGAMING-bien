const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('paymentMethod', {

      paymentMethod:{
        type:DataTypes.STRING,
        allownull:false,
      },
      expirationDate:{
        type:DataTypes.DATE,
        allownull:false,
      },
      provider:{
          type:DataTypes.STRING,
          allownull:false,
      },
      accountNumber:{
          type:DataTypes.INTEGER,
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

    