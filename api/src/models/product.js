const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
      img:{
        type:DataTypes.STRING,
        allownull:false,
      },
      type:{
        type:DataTypes.STRING,
        allownull:false,
      },
      brand:{
        type:DataTypes.STRING,
        allownull:false,
      },
      model:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true,
      },
      price:{
        type:DataTypes.NUMBER,
        allownull:false,
      },
      createdInDb:{
          type:DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull:false
      }
    },
    {
      timestamps: false
    }
  )}