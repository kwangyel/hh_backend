'use strict';
module.exports = (sequelize, DataTypes) => {
  const Household = sequelize.define('Household', {
    structure_id: DataTypes.INTEGER,
    unitId: DataTypes.STRING,
    familiesSharing: DataTypes.INTEGER,
    unitOwnership: DataTypes.STRING,
    unitUse: DataTypes.STRING,
    numberOfRooms: DataTypes.INTEGER,
    cid: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    martialStatus: DataTypes.STRING,
    employment: DataTypes.STRING,
    employmentOrg: DataTypes.STRING,
    yearsInService: DataTypes.INTEGER,
    distToWork: DataTypes.INTEGER,
    modeTransport: DataTypes.STRING,
    commuteCost: DataTypes.DOUBLE,
    utilityBill: DataTypes.DOUBLE,
    numberHousehold: DataTypes.INTEGER,
    incomeEarner: DataTypes.INTEGER,
    schoolGoers: DataTypes.INTEGER,
    householdIncome: DataTypes.DOUBLE,
    ownHouse: DataTypes.BOOLEAN,
    censusDzo: DataTypes.STRING,
    rent: DataTypes.DOUBLE,
    typeRent: DataTypes.STRING,
    yearsResiding: DataTypes.STRING,
    rentIncreased: DataTypes.BOOLEAN,
    rentWaived: DataTypes.BOOLEAN,
    rentWaivedAmount: DataTypes.DOUBLE,
    rentIncreaseFiveYears: DataTypes.STRING,
    hindrance: DataTypes.STRING,
    compliantResponse: DataTypes.STRING,
    maintenanceFrequency: DataTypes.STRING,
    waterAdequacy: DataTypes.STRING,
    parkingAedequacy: DataTypes.STRING,
    accessAdequacy: DataTypes.STRING,
    publicTransportAccess: DataTypes.STRING,
    femaleSafety: DataTypes.STRING,
    ownType: DataTypes.STRING,
    meansOwning: DataTypes.STRING,
    yearAcquisition: DataTypes.INTEGER,
    purchasePrice: DataTypes.DOUBLE,
    meanFinance: DataTypes.STRING,
    emi: DataTypes.DOUBLE,
    shopOfficeName: DataTypes.STRING,
    shopOfficeRent: DataTypes.DOUBLE,
    shopOfficeContact:DataTypes.STRING,
    remarks: DataTypes.STRING
  }, {
  });
  Household.associate = function(models) {
    // associations can be defined here
  };
  return Household;
};