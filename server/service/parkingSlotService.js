'use strict';
var models  = require('../models');
const controllers = require('../controllers')
const A = [ false, true, true, true, true, true, true, true, true, true];
const B = [ false, true, true, true, true, true, true, true, true, true ];
const C = [ false, true, true, true, true, true, true, true, true, true ];
const D = [ false, true, true, true, true, true, true, true, true, true];
const E = [ false, true, true, true, true, true, true, true, true, true ];

const Basement1= [ A, B, C, D, E ]
const Basement2= [ A, B, C, D, E ]

const parkingDB = [ Basement1, Basement2 ]

var fetchNextParkingSlot = () =>  {

    var parkingSlotFloors = models.ParkingSlotFloor.findAll({
          include: [
            {
              model: models.ParkingSlotZone,
              as: 'parkingSlotZones',
              include: [{
                model: models.ParkingSlotNumber,
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

                        if(parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers[k].name == 1) {
                            parkingSlotFloors = parkingSlotFloors[i].parkingSlotZones[j].parkingSlotNumbers[k].name;
                            return
                        }

                    }
                }
            }
        });

    console.log('Calculated Output:'+parkingSlotFloors)
    return null;
}

module.exports.fetchNextParkingSlot = fetchNextParkingSlot;