'use strict';
module.exports = (sequelize, DataTypes) => {
  const NotificationDetails = sequelize.define('NotificationDetails', {
    hasNotification: DataTypes.BOOLEAN,
    lowerLimit: DataTypes.INTEGER,
    higherLimit: DataTypes.INTEGER,
  }, {});
  NotificationDetails.associate = function(models) {
    // associations can be defined here
  };
  return NotificationDetails;
};