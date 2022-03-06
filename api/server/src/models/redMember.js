'use strict';
module.exports = (sequelize, DataTypes) => {
  const Redmember= sequelize.define('Redmember', {
    flat_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cid: DataTypes.STRING,
    isComorbid: DataTypes.BOOLEAN
  } );
  Redmember.associate = function(models) {
    // associations can be defined here
    Redmember.belongsTo(models.Redflat,{foreignKey:'flat_id',as:'red_falt'})
  };
  return Redmember;
};