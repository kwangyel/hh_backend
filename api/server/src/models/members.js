'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member= sequelize.define('Member', {
    idNumber: DataTypes.BIGINT,
    age: DataTypes.INTEGER,
    hhId: DataTypes.INTEGER,
    gender: DataTypes.STRING,

    name:DataTypes.STRING, //name new
    contact:DataTypes.INTEGER, // new
    occupation: DataTypes.STRING, //new
    workplace: DataTypes.STRING, //new
    workzone: DataTypes.STRING,

    covid_test_status: DataTypes.BOOLEAN, //new
    vaccine_status: DataTypes.BOOLEAN, //new
    most_active:DataTypes.BOOLEAN, //new

    incomeEarner: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
    Member.belongsTo(models.Household,{foreignKey:'hhId',as:'household'})
  };
  return Member;
};