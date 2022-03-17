'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case= sequelize.define('Case', {
    red_building_id: DataTypes.INTEGER,
    case_id: DataTypes.STRING,
    numCases: DataTypes.DOUBLE,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    releaseDate: DataTypes.DATEONLY,
    remarks: DataTypes.STRING
  }, {});
  Case.associate = function(models) {
    // associations can be defined here
    Case.belongsTo(models.Redbuilding,{foreignKey:'red_building_id',as:'red_building'})
  };
  return Case;
};