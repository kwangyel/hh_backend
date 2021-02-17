'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Households', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      head: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      cidHead: {
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
        type: Sequelize.DOUBLE
      },
      numberHousehold: {
        type: Sequelize.INTEGER
      },
      incomeEarner: {
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
      distToWork: {
        type: Sequelize.DOUBLE
      },
      commuteCost: {
        type: Sequelize.DOUBLE
      },
      houseOccupation: {
        type: Sequelize.STRING
      },
      rent: {
        type: Sequelize.DOUBLE
      },
      typeRent: {
        type: Sequelize.STRING
      },
      rooms: {
        type: Sequelize.INTEGER
      },
      yearsResiding: {
        type: Sequelize.DOUBLE
      },
      rentIncreased: {
        type: Sequelize.BOOLEAN
      },
      rentWaived: {
        type: Sequelize.BOOLEAN
      },
      rentWaivedPrecent: {
        type: Sequelize.DOUBLE
      },
      ownType: {
        type: Sequelize.STRING
      },
      howOwned: {
        type: Sequelize.ENUM('purchased', 'constructed')
      },
      yearAcquisition: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.DOUBLE
      },
      meanFinance: {
        type: Sequelize.STRING
      },
      emi: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Households');
  }
};