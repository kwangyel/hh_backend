'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member= sequelize.define('Member', {
    idNumber: DataTypes.BIGINT,
    age: DataTypes.INTEGER,
    hhId: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};