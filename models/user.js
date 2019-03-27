'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {tableName: "user" });
  User.associate = function(models) {

    User.hasMany(models.Tool, {
      foreignKey: "user_id",
      onDelete: "CASCADE"
    }),
    User.hasMany(models.Reservation,{
      foreignKey: "user_id",
      onDelete: "CASCADE"

    })
    
  };
  return User;
};