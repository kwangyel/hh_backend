'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    timestamps:false
  });
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.hasMany(models.Public,{foreignKey:'health_contact_id',as:'health_contact'})
    Contact.hasMany(models.Public,{foreignKey:'desuup_contact_id',as:'desuup_contact'})
  };
  return Contact;
};