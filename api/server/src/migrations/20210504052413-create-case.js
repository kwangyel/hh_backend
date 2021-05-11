'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id: {
        type: Sequelize.INTEGER,
        unique:true
      },
      case_id: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      numCases: {
        type: Sequelize.DOUBLE
      },
      date: {
        type: Sequelize.DATE
      },
      day: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "ACTIVE"
      },
      remarks: {
        type: Sequelize.STRING
      },
      day: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cases');
  }
};