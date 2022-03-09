'use strict';
module.exports = (sequelize, DataTypes) => {
  const Public = sequelize.define('Public', {
    sub_zone_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Public.associate = function(models) {
    // associations can be defined here
    // Public.belongsToMany(models.Contact,{through:'Public_contacts',foreignKey:'desuup_contact_id',as:'desuup_contact'})
    Public.belongsToMany(models.Contact,{through:'Public_contacts',foreignKey:'public_id',as:'contacts'})
    Public.belongsTo(models.Subzone,{foreignKey:'sub_zone_id',as:'sub_zone'})
  };
  return Public;
};