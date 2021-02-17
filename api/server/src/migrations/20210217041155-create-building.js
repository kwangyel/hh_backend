'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id: {
        type: Sequelize.INTEGER
      },
      block_no: {
        type: Sequelize.STRING
      },
      building_owner: {
        type: Sequelize.STRING
      },
      cidOwner: {
        type: Sequelize.STRING
      },
      contactOwner: {
        type: Sequelize.INTEGER
      },
      constYear: {
        type: Sequelize.INTEGER
      },
      floors: {
        type: Sequelize.INTEGER
      },
      attic: {
        type: Sequelize.BOOLEAN
      },
      basement: {
        type: Sequelize.BOOLEAN
      },
      buildingStyle: {
        type: Sequelize.STRING
      },
      structureType: {
        type: Sequelize.STRING
      },
      materialType: {
        type: Sequelize.STRING
      },
      roofMaterial: {
        type: Sequelize.STRING
      },
      sewerTreatment: {
        type: Sequelize.STRING
      },
      wasteCollection: {
        type: Sequelize.STRING
      },
      wasteCollectionFrequency: {
        type: Sequelize.STRING
      },
      waterSupply: {
        type: Sequelize.STRING
      },
      buildingUse: {
        type: Sequelize.STRING
      },
      residentialUnits: {
        type: Sequelize.INTEGER
      },
      commercialUnits: {
        type: Sequelize.INTEGER
      },
      officeUnits: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Buildings');
  }
};