
const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define(
    "paymentDetail",
    {
      amount: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      provider: {
        type: DataTypes.STRING,
        allownull: false,
      },
      state: {
        type: DataTypes.ENUM("success","failure","pending"),
        allownull: false,
      },
      mercadoPagoPaymentId:{
        type: DataTypes.STRING,
        allownull: false,
        unique:true
      }
    },
    {
      timestamps: true,
    }
  );
};

