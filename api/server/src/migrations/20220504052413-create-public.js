'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Publics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sub_zone_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Subzones',
          key: 'id'
        } 
      },
      content: {
        type: Sequelize.STRING
      },
      health_contact_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Contacts',
          key: 'id'
        } 
      },
      desuup_contact_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Contacts',
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
    await queryInterface.dropTable('Publics');
  }
};