const ParkingSlotZone = require('../models').ParkingSlotZone;
const ParkingSlotNumber = require('../models').ParkingSlotNumber;

module.exports = {
    create(req, res) {
        return ParkingSlotZone
          .create({
            name: req.body.name,
            parkingSlotFloorId: req.body.parkingSlotFloorId
          })
          .then(parkingSlotZones => res.status(201).send(parkingSlotZones))
          .catch(error => res.status(400).send(error));
      },
      list (req, res) {
        console.log('Request:'+req.body);
        return ParkingSlotZone.findAll({
          include: [
            {
              model: ParkingSlotNumber,
              as: 'parkingSlotNumbers'
            }
          ]
        })
          .then(parkingSlotZones => res.status(200).send(parkingSlotZones))
          .catch(error => {
            console.log(error);
            res.status(400).send(error)
          })
      },
}