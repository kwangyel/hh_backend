'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sealhistory= sequelize.define('Sealhistory', {
    flat_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING,
    reason: DataTypes.STRING,
    operator_id: DataTypes.INTEGER
  }, {});
  Sealhistory.associate = function(models) {
    // associations can be defined here
    Sealhistory.belongsTo(models.Redflat,{foreignKey:'flat_id',as:'red_falt'})
    Sealhistory.belongsTo(models.User,{foreignKey:'operator_id',as:'operator'})
  };
  return Sealhistory;
};