'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dzongkhag = sequelize.define('Dzongkhag', {
    name: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE
  }, {});
  Dzongkhag.associate = function(models) {
    // associations can be defined here
  };
  return Dzongkhag;
};