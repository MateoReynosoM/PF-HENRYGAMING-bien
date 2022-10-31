const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "favoritesProduct",
    {
      type: {
        type: DataTypes.STRING,
        allownull: true,
      },
      model: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
