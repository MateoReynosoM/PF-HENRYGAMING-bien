require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/HenryGaming`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Cart_product,
  Cart,
  Payment_detail,
  Payment_method,
  Product_category,
  Product_inventory,
  Product,
  Purchase_detail,
  Purchased_product,
  User_adress,
  User,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

User.hasMany(User_adress, { through: "User_UserAdress" });
User_adress.belongsTo(User, { through: "User_UserAdress" });

User.hasMany(Payment_method, { through: "User_PaymentMethod" });
Payment_method.belongsTo(User, { through: "User_PaymentMethod" });

User.hasMany(Cart_product, { through: "User_CartProduct" });
Cart_product.belongsTo(User, { through: "User_CartProduct" });

User.hasOne(Cart, { through: "User_Cart" });
Cart.belongsTo(User, { through: "User_Cart" });

User.hasMany(Payment_detail, { through: "User_PaymentDetail" });
Payment_detail.belongsTo(User, { through: "User_PaymentDetail" });

Cart.hasMany(Cart_product, { through: "Cart_CartProduct" });
Cart_product.belongsTo(Cart, { through: "Cart_CartProduct" });

Product.hasOne(Cart_product, { through: "Product_CartProduct" });
Cart_product.belongsTo(Product, { through: "Product_CartProduct" });

Product.hasOne(Product_inventory, { through: "Product_ProductInventory" });
Product_inventory.belongsTo(Product, { through: "Product_ProductInventory" });

Product.hasMany(Purchased_product, { through: "Product_PurchasedProduct" });
Purchased_product.belongsTo(Product, { through: "Product_PurchasedProduct" });

Product_category.hasMany(Product, { through: "ProductCategory_Product" });
Product.belongsTo(Product_category, { through: "ProductCategory_Product" });

Payment_detail.hasOne(Purchase_detail, {
  through: "PaymentDetail_PurchaseDetail",
});
Purchase_detail.belongsTo(Payment_detail, {
  through: "PaymentDetail_PurchaseDetail",
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
