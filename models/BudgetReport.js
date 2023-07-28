const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BudgetReport extends Model { }

BudgetReport.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        total_income:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_expense:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    }

)




module.exports = BudgetReport