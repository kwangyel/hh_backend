'use strict';
module.exports = (sequelize, DataTypes) => {
  const Household = sequelize.define('Household', {
    head: DataTypes.STRING,
    gender: DataTypes.STRING,
    cidHead: DataTypes.STRING,
    age: DataTypes.INTEGER,
    martialStatus: DataTypes.STRING,
    employment: DataTypes.STRING,
    employmentOrg: DataTypes.STRING,
    yearsInService: DataTypes.DOUBLE,
    numberHousehold: DataTypes.INTEGER,
    incomeEarner: DataTypes.INTEGER,
    householdIncome: DataTypes.DOUBLE,
    ownHouse: DataTypes.BOOLEAN,
    censusDzo: DataTypes.STRING,
    distToWork: DataTypes.DOUBLE,
    commuteCost: DataTypes.DOUBLE,
    houseOccupation: DataTypes.STRING,
    rent: DataTypes.DOUBLE,
    typeRent: DataTypes.STRING,
    rooms: DataTypes.INTEGER,
    yearsResiding: DataTypes.DOUBLE,
    rentIncreased: DataTypes.BOOLEAN,
    rentWaived: DataTypes.BOOLEAN,
    rentWaivedPrecent: DataTypes.DOUBLE,
    ownType: DataTypes.STRING,
    howOwned: DataTypes.ENUM('purchased', 'constructed'),
    yearAcquisition: DataTypes.INTEGER,
    cost: DataTypes.DOUBLE,
    meanFinance: DataTypes.STRING,
    emi: DataTypes.DOUBLE
  }, {});
  Household.associate = function(models) {
    // associations can be defined here
  };
  return Household;
};