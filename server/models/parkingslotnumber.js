'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingSlotNumber = sequelize.define('ParkingSlotNumber', {
    name: DataTypes.INTEGER
  }, {});
  ParkingSlotNumber.associate = (models) => {
    ParkingSlotNumber.belongsTo(models.ParkingSlotZone, {
        foreignKey: 'parkingSlotZoneId',
        onDelete: 'CASCADE',
    });
  };
  return ParkingSlotNumber;
};