const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      img: {
        type: DataTypes.STRING,
        allownull: false,
      },
      type: {
        type: DataTypes.STRING,
        allownull: true,
      },
      model: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      /* rank: {
        type: DataTypes.INTEGER,
      },
      urlBenchMark: {
        type: DataTypes.STRING,
      }, */
      detail: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
