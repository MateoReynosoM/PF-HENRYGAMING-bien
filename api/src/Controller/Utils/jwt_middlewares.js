const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../../db");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log(token);
    if (!token) return res.status(403).json({ mesagge: "No token provided" });

    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    var a = req.userId;
    

    const user = await User.findAll({ where: { id: a } }, { password: 0 });
    if (!user) return res.status(404).json({ mesagge: "User not found" });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ mesagge: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (user.isAdmin === true) {
      next();
    } else {
      return res.status(401).json({ mesagge: "Require admin role" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ mesagge: "Unauthorized" });
  }
};

module.exports = {
  verifyToken,
  isAdmin,
};
