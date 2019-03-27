'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define('Tool', {
    price: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
  }, {tableName: "tool"});
  Tool.associate = function(models) {
    Tool.belongsTo(models.User,{
      foreignKey: "user_id"
    })
  };
  return Tool;
};