'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dailystat = sequelize.define('Dailystat', {
    red_flats: DataTypes.INTEGER,
    red_buildings: DataTypes.INTEGER,
    date: DataTypes.DATEONLY
  }, {});
  Dailystat.associate = function(models) {
    // associations can be defined here
    // Public.belongsToMany(models.Contact,{through:'Public_contacts',foreignKey:'desuup_contact_id',as:'desuup_contact'})
  };
  return Dailystat;
};