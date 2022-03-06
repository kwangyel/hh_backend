'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subzone = sequelize.define('Subzone', {
    name: DataTypes.STRING,
    zone_id: DataTypes.INTEGER,
    mega_zone_id: DataTypes.INTEGER
  }, {
    timestamps:false
  });
  Subzone.associate = function(models) {
    // associations can be defined here
  };
  return Subzone;
};