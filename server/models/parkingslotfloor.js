'use strict';

module.exports = (sequelize, DataTypes) => {
  const ParkingSlotFloor = sequelize.define('ParkingSlotFloor', {
    name: DataTypes.STRING
  }, {});
  ParkingSlotFloor.associate = (models) => {
    ParkingSlotFloor.hasMany(models.ParkingSlotZone, {
        foreignKey: 'parkingSlotFloorId',
        constraints: true,
        as: 'parkingSlotZones'
    });
  };
  return ParkingSlotFloor;
};