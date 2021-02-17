'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    structure_id: DataTypes.INTEGER,
    block_no: DataTypes.STRING,
    building_owner: DataTypes.STRING,
    cidOwner: DataTypes.STRING,
    contactOwner: DataTypes.INTEGER,
    constYear: DataTypes.INTEGER,
    floors: DataTypes.INTEGER,
    attic: DataTypes.BOOLEAN,
    basement: DataTypes.BOOLEAN,
    buildingStyle: DataTypes.STRING,
    structureType: DataTypes.STRING,
    materialType: DataTypes.STRING,
    roofMaterial: DataTypes.STRING,
    sewerTreatment: DataTypes.STRING,
    wasteCollection: DataTypes.STRING,
    wasteCollectionFrequency: DataTypes.STRING,
    waterSupply: DataTypes.STRING,
    buildingUse: DataTypes.STRING,
    residentialUnits: DataTypes.INTEGER,
    commercialUnits: DataTypes.INTEGER,
    officeUnits: DataTypes.INTEGER
  }, {});
  Building.associate = function(models) {
    // associations can be defined here
  };
  return Building;
};