const {Sequelize, Model, DataTypes} = require('Sequelize');
const sequelize = import('../config/connection');

class Categories extends Sequelize.Model {}

Categories.init(
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
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "categories",
      }
);

module.exports = Categories;