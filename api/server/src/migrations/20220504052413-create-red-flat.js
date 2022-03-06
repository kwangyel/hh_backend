'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Redflats', {
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
      unitName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values:['ACTIVE','INACTIVE'],
        defaultValue:'ACTIVE'
      },
      hh_name: {
        type: Sequelize.STRING
      },
      cid: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      first_seal_date: {
        type: Sequelize.DATEONLY
      },
      first_seal_time: {
        type: Sequelize.STRING
      },
      final_unseal_date: {
        type: Sequelize.DATEONLY
      },
      remarks: {
        type: Sequelize.STRING
      },
      sealer_id: {
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
    await queryInterface.dropTable('Redflats');
  }
};