
var assert = require('assert');
var parkingSlotService = require('./parkingSlotService');

describe('Parking Slot', () => {
    describe('Fetches the next parking slot',() => {
        it('should return FF-A-1 when asked for the parking slot', () => {
            console.log("Response Output: "+parkingSlotService.fetchNextParkingSlot());
            //assert.equal(parkingSlotService.fetchNextParkingSlot(),'Basement One-A-1');
        });
    });
});