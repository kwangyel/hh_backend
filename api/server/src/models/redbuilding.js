'use strict';
module.exports = (sequelize, DataTypes) => {
  const Redbuilding= sequelize.define('Redbuilding', {
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    structure_id: DataTypes.INTEGER,
    dzo_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    redbuildingStatus: DataTypes.STRING,
    zone_id: DataTypes.INTEGER,
    mega_zone_id: DataTypes.INTEGER,
    remarks: DataTypes.STRING
  }, {});
  Redbuilding.associate = function(models) {
    // associations can be defined here
    Redbuilding.hasMany(models.Case,{foreignKey:'red_building_id',as:'cases'})
    Redbuilding.hasMany(models.Redflat,{foreignKey:'red_building_id',as:'red_flat'})
  };
  return Redbuilding;
};