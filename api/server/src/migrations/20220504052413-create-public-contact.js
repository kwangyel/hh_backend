'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Public_contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type:{
        type:Sequelize.STRING,
      },
      public_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Publics',
          key: 'id'
        } 
      },
      contact_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Contacts',
          key: 'id'
        } 
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Public_contacts');
  }
};