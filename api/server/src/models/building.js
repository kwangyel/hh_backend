'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    structure_id: DataTypes.INTEGER,
    buildingOwnership: DataTypes.STRING,
    cidOwner: DataTypes.STRING,
    nameOfBuildingOwner: DataTypes.STRING,
    contactOwner: DataTypes.NUMBER,
    existancyStatus: DataTypes.STRING,
    costOfConstruction: DataTypes.FLOAT,
    constructionYear: DataTypes.STRING,
    buildingUse: DataTypes.STRING,
    floors: DataTypes.STRING,
    attic: DataTypes.BOOLEAN,
    basement: DataTypes.BOOLEAN,
    jamthog: DataTypes.BOOLEAN,
    buildingStyle: DataTypes.STRING,
    buildingType: DataTypes.STRING,
    structureType: DataTypes.STRING,
    buildingMaterial: DataTypes.STRING,
    floorType: DataTypes.STRING,
    roofingMaterial: DataTypes.STRING,
    sewerTreatment: DataTypes.STRING,
    wasteCollection: DataTypes.STRING,
    wasteCollectionFrequency: DataTypes.INTEGER,
    waterSupply: DataTypes.STRING
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
  };
  return Building;
};