//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.isScheduleService = false;
    }


    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.isScheduleService = true
            return this.scheduleService
        }
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            console.log('Plenty of space!')
        }
        else if((num + this.passengers) >= this.maxPassengers) {
            console.log('No more room for passengers!')
        }
    }
}

let myCar = new Car("Mercury", "Sedan", "1965", "black", "31000")
myCar.start()
myCar.scheduleService()
myCar.loadPassenger(5)
console.log(myCar)
