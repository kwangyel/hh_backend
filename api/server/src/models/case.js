'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case= sequelize.define('Case', {
    structure_id: DataTypes.INTEGER,
    case_id: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    numCases: DataTypes.DOUBLE,
    date: DataTypes.DATE,
    day: DataTypes.DOUBLE,
    dzo_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    remarks: DataTypes.STRING
  }, {});
  Case.associate = function(models) {
    // associations can be defined here
  };
  return Case;
};