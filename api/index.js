//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { User, CartProduct,Favorites,Cart } = require("./src/db");

const loadData = require("./src/Controller/Utils/load_data");
const getFavorites = require("./src/Controller/Favorites/get_favorites.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    loadData();
    //------testCart--------   
    
    await User.create(JSON.parse(process.env.ADMIN_USER));
    await Favorites.create({amount:0,userId: 1})
    await Cart.create({total: 0, userId: 1})

    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
