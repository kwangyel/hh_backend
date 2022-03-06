'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Redmembers', {
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
      name: {
        type: Sequelize.STRING
      },
      cid: {
        type: Sequelize.STRING
      },
      isComorbid: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
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
    await queryInterface.dropTable('Redmembers');
  }
};