'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingSlotZone = sequelize.define('ParkingSlotZone', {
    name: DataTypes.STRING
  }, {});
  ParkingSlotZone.associate = (models) => {
    ParkingSlotZone.belongsTo(models.ParkingSlotFloor, {
        foreignKey: 'parkingSlotFloorId',
        constraints: true,
        onDelete: 'CASCADE',
    });

    ParkingSlotZone.hasMany(models.ParkingSlotNumber, {
        foreignKey: 'parkingSlotZoneId',
        constraints: true,
        as: 'parkingSlotNumbers'
    });
  };
  return ParkingSlotZone;
};