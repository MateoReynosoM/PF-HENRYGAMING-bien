const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
      userName:{
        type:DataTypes.STRING,
        allownull:false,
      },
      firstName:{
        type:DataTypes.STRING,
        allownull:false,
      },
      lastName:{
        type:DataTypes.STRING,
        allownull:false,
      },
      email:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true,
      },
      password:{
        type:DataTypes.STRING,
        allownull:false,
      },
      adminPrivileges:{
        type:DataTypes.BOOLEAN,
        allownull:false,
      }
    },
    {
      timestamps: false
    }
  )}