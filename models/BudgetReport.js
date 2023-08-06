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
        income_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        income_amount: {
            type: DataTypes.DECIMAL,
            allowNull: true,
                validate: {
                    isDecimal: true,
                }
        },
        expense_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        expense_amount: {
            type: DataTypes.DECIMAL,
            allowNull: true,
                validate: {
                    isDecimal: true,
                }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'budgetreport',
    }

)




module.exports = BudgetReport