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
      red_building_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Redbuildings',
          key: 'id'
        } 
      },
      case_id: {
        type: Sequelize.STRING
      },
      numCases: {
        type: Sequelize.DOUBLE
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Cases');
  }
};