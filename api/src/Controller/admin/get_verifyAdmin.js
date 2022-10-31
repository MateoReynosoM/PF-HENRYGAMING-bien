const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/verifyAdmin

const verifyAdmin = Router();

verifyAdmin.get("/", verifyToken, async (req, res, next) => {
    const tokennn = req.headers["x-access-token"];
    const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;
    try {
        const user = await User.findOne({
            where: { id: userId },
            attributes: ["adminPrivileges"],
        });
        if (!user) return res.status(404).json({ mesagge: "User not found" });
        return res.status(200).json(user.adminPrivileges);
    } catch (error) {
        next(error);
    }
});

module.exports = verifyAdmin;
