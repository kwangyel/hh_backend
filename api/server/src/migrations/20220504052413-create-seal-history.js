'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sealhistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flat_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Redflats',
          key: 'id'
        } 
      },
      date: {
        type: Sequelize.DATEONLY
      },
      open_time: {
        type: Sequelize.STRING
      },
      close_time: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.STRING
      },
      operator_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        } 
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
    await queryInterface.dropTable('Sealhistories');
  }
};