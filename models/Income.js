const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model {}

Income.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        source_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: DataTypes.DECIMAL,
            allowNull: false,
                validate:{
                    isDecimal:true
                }
        },
        total_amount:{
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate:{ 
                isDecimal:true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Income',
      }
)

module.exports = Income