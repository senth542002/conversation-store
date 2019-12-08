const ParkingSlotFloor = require('../models').ParkingSlotFloor;
const ParkingSlotZone = require('../models').ParkingSlotZone;
const ParkingSlotNumber = require('../models').ParkingSlotNumber;

module.exports = {
    create(req, res) {
        return ParkingSlotFloor
          .create({
            name: req.body.name
          })
          .then(parkingSlotFloor => res.status(201).send(parkingSlotFloor))
          .catch(error => res.status(400).send(error));
      },
      list (req, res) {
        console.log('Request:'+req.body);
        return ParkingSlotFloor.findAll({
          include: [
            {
              model: ParkingSlotZone,
              as: 'parkingSlotZones',
              include: [{
                model: ParkingSlotNumber,
                as: 'parkingSlotNumbers'
              }]
            }
          ]
        })
          .then(parkingSlotFloors => res.status(200).send(parkingSlotFloors))
          .catch(error => {
            console.log(error);
            res.status(400).send(error)
          })
      },
}