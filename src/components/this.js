class Car {
	setDriveSound(sound) {
	  this.sound = sound;
	}
  drive() {
    return this.sound;
  }
}

const car = new Car();
car.setDriveSound('whoosh');

const truck = {
	sound: 'vrooom',
	driveThatTruck: car.drive
}

truck.driveThatTruck()
// vroom

// It returns vroom because the value to the right of the assignment operator '.'
// is 'truck' which is what 'this' is getting updated with. NOT the CAR, but the TRUCK!
// confusing but true!!!

const plane = {
	sound: 'eeeeeee',
	soundOfAPlane: car.drive
}

plane.soundOfAPlane();
// eeeee

// testing it:
plane.soundOfAPlane() === plane.sound 
// boolean of TRUE


// However when we declare a variable that points to an instance of the objecct,
// it doesn't have a way to use the instance easily IF there is no object to the right
// of the function call... WEIRD!

const drive = car.drive;

drive(); // is UNDEFINED!!!! cuz its not getting called and there's no object to the left of it!
