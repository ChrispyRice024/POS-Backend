const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id:{
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            allowNull: false,
            type: DataTypes.STRING
        // },
        // item:{
        //     allowNull:true,
        //     type: DataTypes.STRING,
            // references:{
            //     model:'item',
            //     key:'name'
            // },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
      }
);

module.exports = Category;