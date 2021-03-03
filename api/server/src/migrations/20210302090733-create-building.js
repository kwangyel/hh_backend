'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id: {
        type: Sequelize.INTEGER
      },
      buildingOwnership: {
        type: Sequelize.STRING
      },
      cidOwner: {
        type: Sequelize.STRING
      },
      nameOfBuildingOwner: {
        type: Sequelize.STRING
      },
      contactOwner: {
        type: Sequelize.BIGINT
      },
      existancyStatus: {
        type: Sequelize.STRING
      },
      costOfConstruction: {
        type: Sequelize.DOUBLE
      },
      constructionYear: {
        type: Sequelize.STRING
      },
      buildingUse: {
        type: Sequelize.STRING
      },
      floors: {
        type: Sequelize.STRING
      },
      attic: {
        type: Sequelize.BOOLEAN
      },
      basement: {
        type: Sequelize.BOOLEAN
      },
      jamthog: {
        type: Sequelize.BOOLEAN
      },
      buildingStyle: {
        type: Sequelize.STRING
      },
      structureType: {
        type: Sequelize.STRING
      },
      buildingMaterial: {
        type: Sequelize.STRING
      },
      floorType: {
        type: Sequelize.STRING
      },
      roofingMaterial: {
        type: Sequelize.STRING
      },
      sewerTreatment: {
        type: Sequelize.STRING
      },
      wasteCollection: {
        type: Sequelize.STRING
      },
      wasteCollectionFrequency: {
        type: Sequelize.INTEGER
      },
      waterSupply: {
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
    await queryInterface.dropTable('Buildings');
  }
};