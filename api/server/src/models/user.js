'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    cid: DataTypes.BIGINT,
    password: DataTypes.STRING,
    isadmin: DataTypes.STRING,
    role: DataTypes.STRING,
    scope: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
