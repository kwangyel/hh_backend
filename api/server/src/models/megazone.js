'use strict';
module.exports = (sequelize, DataTypes) => {
  const Megazone = sequelize.define('Megazone', {
    name: DataTypes.STRING
  }, {
    timestamps:false
  });
  Megazone.associate = function(models) {
    // associations can be defined here
  };
  return Megazone;
};