'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Redbuildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dzo_id: {
        type: Sequelize.INTEGER,
      },
      structure_id: {
        type: Sequelize.INTEGER,
        unique:true
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "ACTIVE"
      },
      remarks: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Redbuildings');
  }
};