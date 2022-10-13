require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrygaming`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

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
  Brand,
  CartProduct,
  Cart,
  PaymentDetail,
  PaymentMethod,
  Category,
  ProductInventory,
  Product,
  PurchaseDetail,
  PurchasedProduct,
  UserAdress,
  User,
} = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);


//Asociacion Producto:Marca

Brand.hasMany(Product,/* {foreignKey: 'brandId'} */);
Product.belongsTo(Brand);
//Asociacion Producto:Categoria
Category.hasMany(Product,/* {foreignKey: 'categoryId'} */);
Product.belongsTo(Category);

User.hasMany(UserAdress, /* { foreignKey: "userIdAdress" } */);
UserAdress.belongsTo(User);

User.hasMany(PaymentMethod, /* { foreignKey: "userIdPayment" } */);
PaymentMethod.belongsTo(User);

User.hasMany(CartProduct, /* { through: "User_CartProduct" } */);
CartProduct.belongsTo(User, /* { through: "User_CartProduct" } */);

User.hasOne(Cart,/*  { through: "User_Cart" } */);
Cart.belongsTo(User, /* { through: "User_Cart" } */);

User.hasMany(PaymentDetail,/*  { through: "User_PaymentDetail" } */);
PaymentDetail.belongsTo(User, /* { through: "User_PaymentDetail" } */);

Cart.hasMany(CartProduct, /* { through: "Cart_CartProduct" } */);
CartProduct.belongsTo(Cart,/*  { through: "Cart_CartProduct" } */);

Product.hasOne(CartProduct, /* { through: "Product_CartProduct" } */);
CartProduct.belongsTo(Product, /* { through: "Product_CartProduct" } */);

Product.hasOne(ProductInventory, /* { through: "Product_ProductInventory" } */);
ProductInventory.belongsTo(Product, /* { through: "Product_ProductInventory" } */);

Product.hasMany(PurchasedProduct, /* { through: "Product_PurchasedProduct" } */);
PurchasedProduct.belongsTo(Product, /* { through: "Product_PurchasedProduct" } */);

//Product_category.hasMany(Product, { through: "ProductCategory_Product" });
//Product.belongsTo(Product_category, { through: "ProductCategory_Product" });

PaymentDetail.hasOne(PurchaseDetail /* {through: "PaymentDetail_PurchaseDetail"} */);
PurchaseDetail.belongsTo(PaymentDetail/* {through: "PaymentDetail_PurchaseDetail"} */);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
