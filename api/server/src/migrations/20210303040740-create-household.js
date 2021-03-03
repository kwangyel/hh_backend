'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Households', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id: {
        type: Sequelize.INTEGER
      },
      unitId: {
        type: Sequelize.STRING
      },
      familiesSharing: {
        type: Sequelize.INTEGER
      },
      unitOwnership: {
        type: Sequelize.STRING
      },
      unitUse: {
        type: Sequelize.STRING
      },
      numberOfRooms: {
        type: Sequelize.INTEGER
      },
      cid: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      martialStatus: {
        type: Sequelize.STRING
      },
      employment: {
        type: Sequelize.STRING
      },
      employmentOrg: {
        type: Sequelize.STRING
      },
      yearsInService: {
        type: Sequelize.INTEGER
      },
      distToWork: {
        type: Sequelize.INTEGER
      },
      modeTransport: {
        type: Sequelize.STRING
      },
      commuteCost: {
        type: Sequelize.DOUBLE
      },
      utilityBill: {
        type: Sequelize.DOUBLE
      },
      numberHousehold: {
        type: Sequelize.INTEGER
      },
      incomeEarner: {
        type: Sequelize.INTEGER
      },
      schoolGoers: {
        type: Sequelize.INTEGER
      },
      householdIncome: {
        type: Sequelize.DOUBLE
      },
      ownHouse: {
        type: Sequelize.BOOLEAN
      },
      censusDzo: {
        type: Sequelize.STRING
      },
      rent: {
        type: Sequelize.DOUBLE
      },
      typeRent: {
        type: Sequelize.STRING
      },
      yearsResiding: {
        type: Sequelize.INTEGER
      },
      rentIncreased: {
        type: Sequelize.BOOLEAN
      },
      rentWaived: {
        type: Sequelize.BOOLEAN
      },
      rentWaivedAmount: {
        type: Sequelize.DOUBLE
      },
      rentIncreaseFiveYears: {
        type: Sequelize.STRING
      },
      hindrance: {
        type: Sequelize.STRING
      },
      compliantResponse: {
        type: Sequelize.STRING
      },
      maintenanceFrequency: {
        type: Sequelize.STRING
      },
      waterAdequacy: {
        type: Sequelize.STRING
      },
      parkingAedequacy: {
        type: Sequelize.STRING
      },
      accessAdequacy: {
        type: Sequelize.STRING
      },
      publicTransportAccess: {
        type: Sequelize.STRING
      },
      femaleSafety: {
        type: Sequelize.STRING
      },
      ownType: {
        type: Sequelize.STRING
      },
      meansOwning: {
        type: Sequelize.STRING
      },
      yearAcquisition: {
        type: Sequelize.INTEGER
      },
      purchasePrice: {
        type: Sequelize.DOUBLE
      },
      meanFinance: {
        type: Sequelize.STRING
      },
      emi: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Households');
  }
};