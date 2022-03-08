'use strict';
module.exports = (sequelize, DataTypes) => {
  const Public = sequelize.define('Public', {
    sub_zone_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    health_contact_id: DataTypes.INTEGER,
    desuup_contact_id: DataTypes.INTEGER
  }, {});
  Public.associate = function(models) {
    // associations can be defined here
    Public.belongsTo(models.Contact,{foreignKey:'desuup_contact_id',as:'desuup_contact'})
    Public.belongsTo(models.Contact,{foreignKey:'health_contact_id',as:'health_contact'})
    Public.belongsTo(models.Subzone,{foreignKey:'sub_zone_id',as:'sub_zone'})
  };
  return Public;
};