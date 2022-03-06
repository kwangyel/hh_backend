'use strict';
module.exports = (sequelize, DataTypes) => {
  const Redflat= sequelize.define('Redflat', {
    red_building_id: DataTypes.INTEGER,
    unitName: DataTypes.STRING,
    status: DataTypes.STRING,
    hh_name: DataTypes.STRING,
    cid: DataTypes.STRING,
    contact: DataTypes.STRING,
    first_seal_date: DataTypes.DATEONLY,
    first_seal_time: DataTypes.STRING,
    final_unseal_date: DataTypes.DATEONLY,
    remarks: DataTypes.STRING,
    sealer_id: DataTypes.INTEGER
  }, {});
  Redflat.associate = function(models) {
    // associations can be defined here
    Redflat.belongsTo(models.Redbuilding,{foreignKey:'red_building_id',as:'red_building'})
    Redflat.belongsTo(models.User,{foreignKey:'sealer_id',as:'sealer'})
    Redflat.hasMany(models.Redmember,{foreignKey:'flat_id',as:'members'})
  };
  return Redflat;
};