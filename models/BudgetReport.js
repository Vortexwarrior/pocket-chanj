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
        total_income: {
            type: DataTypes.DECIMAL,
            allowNull: true,
                validate: {
                    isDecimal: true,
                }
        },
        total_expense: {
            type: DataTypes.DECIMAL,
            allowNull: true,
                validate: {
                    isDecimal: true,
                }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'BudgetReport',
    }

)




module.exports = BudgetReport