const {DataTypes} = require('sequelize');



module.exports = (sequelize)=>{

    sequelize.define('review',{

        review:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
)};