const ParkingSlotNumber = require('../models').ParkingSlotNumber;

module.exports = {
    create(req, res) {
        return ParkingSlotNumber
          .create({
            name: req.body.name,
            parkingSlotZoneId: req.body.parkingSlotZoneId
          })
          .then(parkingSlotNumbers => res.status(201).send(parkingSlotNumbers))
          .catch(error => res.status(400).send(error));
      },
      list (req, res) {
        console.log('Request:'+req.body);
        return ParkingSlotNumber.findAll()
          .then(parkingSlotNumbers => res.status(200).send(parkingSlotNumbers))
          .catch(error => {
            console.log(error);
            res.status(400).send(error)
          })
      },
}