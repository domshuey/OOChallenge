class Vehicle {
    constructor(make, model, year){
        if(typeof(make) !== 'string'){
            throw new Error('incorrect input for vehicle make')
        }
        if(typeof(model) !== 'string'){
            throw new Error('incorrect input for vehicle model')
        }
        if(typeof(year) !== 'number'){
            throw new Error('incorrect input for vehicle year')
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'beep.'
    }
    toString(){
        return `This vehicle is a ${this.year} ${this.make} ${this.model}`
    }
}

class Car extends Vehicle {
    numWheels(){
        return 4;
    }
}

class Motorcycle extends Vehicle {
    numWheels(){
        return 2;
    }
    revEngine(){
        return 'VROOOOOOOOOOOOOOOM'
    }
}

class Garage {
    constructor(cap){
        this.vehicles = [];
        if(cap <= 0 || typeof(cap) !== 'number'){
            throw new Error('incorrect input for garage capacity')
        }
        this.cap = cap
    }
    add(newVehicle){
        if(newVehicle)
        if(this.vehicles.length >= this.cap){
            return 'Sorry, the garage is currently full.'
        }
        if(!newVehicle instanceof Vehicle){
            return 'Only vehicles are allowed to be stored in the garage!'
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle has been added to the garage!';
    }

    
}