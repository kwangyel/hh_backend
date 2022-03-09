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
    Contact.belongsToMany(models.Public,{through:'Public_contacts',foreignKey:'contact_id',as:'publics'})
  };
  return Contact;
};