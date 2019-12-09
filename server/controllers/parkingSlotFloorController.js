const ParkingSlotFloor = require('../models').ParkingSlotFloor;
const ParkingSlotZone = require('../models').ParkingSlotZone;
const ParkingSlotNumber = require('../models').ParkingSlotNumber;

module.exports = {
    create(req, res) {
        return ParkingSlotFloor
          .create({
            name: req.body.name,
            description: req.body.description
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

      nextAvailableParkingSlot(req, res) {
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
                }).then(parkingSlotFloors => {
                    console.log('Response: '+parkingSlotFloors)
                    for(var i=0; i < parkingSlotFloors.length; i++) {
                        console.log('parkingSlotFloor: '+parkingSlotFloors[i])
                        for(var j=0; j < parkingSlotFloors[i].parkingSlotZones.length; j++){
                              console.log('parkingSlotZone: '+parkingSlotFloors[i].parkingSlotZones[j])
                            for(var k=0; k < parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers.length; k++){
                                console.log('Return: '+
                                parkingSlotFloors[i].name+'-'+
                                parkingSlotFloors[i].parkingSlotZones[j].name+'-'+
                                parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers[k].name);

                                if(parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers[k].available) {
                                     var parkingSlot = parkingSlotFloors[i].name+'-'+
                                                       parkingSlotFloors[i].parkingSlotZones[j].name+'-'+
                                                       parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers[k].name;
                                     console.log('parkingSlot: '+parkingSlot);
                                     return res.status(200).send(parkingSlot);
                                }
                            }
                        }
                    }
                }).catch(error => {
                             console.log(error);
                             res.status(400).send(error)
                           });
      },
}