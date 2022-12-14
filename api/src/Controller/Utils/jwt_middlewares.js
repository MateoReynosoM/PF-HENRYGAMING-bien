const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../../db");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    
    if (!token) return res.status(403).json({ mesagge: "No token provided" });
    
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    var a = req.userId;
    

    const user = await User.findAll({ where: { id: a } }, { password: 0 });
    if (!user) return res.status(404).json({ mesagge: "User not found" });
    next();
  } catch (error) {
    
    res.status(401).json({ mesagge: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    if (user.adminPrivileges === true) {
      next();
    } else {
      return res.status(401).json({ mesagge: "Require admin role" });
    }
  } catch (error) {
    
    res.status(401).json({ mesagge: "Unauthorized" });
  }
};

module.exports = {
  verifyToken,
  isAdmin,
};
