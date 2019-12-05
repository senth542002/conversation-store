'use strict';
module.exports = (sequelize, DataTypes) => {
  const EntryAccessDetails = sequelize.define('EntryAccessDetails', {
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  EntryAccessDetails.associate = function(models) {
    // associations can be defined here
  };
  return EntryAccessDetails;
};