'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    name: DataTypes.STRING,
    dzongkhag_id: DataTypes.INTEGER
  }, {
    timestamps:false
  });
  Zone.associate = function(models) {
    // associations can be defined here
  };
  return Zone;
};