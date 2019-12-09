'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ParkingSlotNumbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.INTEGER
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     parkingSlotZoneId: {
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
       allowNull: false,
       references: {
         model: 'ParkingSlotZones',
         key: 'id',
         as: 'parkingSlotZoneId',
       },
     },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ParkingSlotNumbers');
  }
};