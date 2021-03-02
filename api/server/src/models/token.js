'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    service: DataTypes.STRING,
    token: DataTypes.STRING,
    expiry: DataTypes.DATE
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};
