const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expenses extends Model {}

//fields and expenses model

Expenses.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }, 
      source_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      due_date:{
        type:DataTypes.DATEONLY,
        allowNull: true
      },
      amount_due:{
        type: DataTypes.DECIMAL,
        allowNull:false,
            validate:{
                isDecimal:true
            }
      },
      total_expenses:{
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
      modelName: 'Expenses',
    }
    );

module.exports = Expenses