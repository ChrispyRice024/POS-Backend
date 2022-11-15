const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        id:{
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        category:{
            type: DataTypes.STRING,
            allowNull: false
        },
        // tag:{
        //     type:DataTypes.STRING,
        //     allowNull:true
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "item",
    }
)

module.exports = Item