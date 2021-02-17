'use strict';
module.exports = (sequelize, DataTypes) => {
  const Structure= sequelize.define('Structure', {
    building_number: DataTypes.INTEGER,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    status: DataTypes.STRING,
    sub_zone_id: DataTypes.INTEGER
  }, {});
  Structure.associate = function(models) {
    // associations can be defined here
  };
  return Structure;
};