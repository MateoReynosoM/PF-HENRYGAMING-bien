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
        defaultValue:false
      },
      img:{
        type:DataTypes.STRING,
        defaultValue:"https://res.cloudinary.com/dkfqpw0yr/image/upload/v1667447252/v5fgeh3rn91atyfld8cv.png",
      }  
    },
    {
      paranoid:true,
    }
  )}
