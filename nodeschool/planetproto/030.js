// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
var machine = {}
var vehicle = {}
var robot = {}

// -> Make machine the prototype of vehicle
// -> Make machine the prototype of robot
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> What is `vehicle.motors`?
claim(vehicle.motors, machine.motors);

// -> What is `robot.motors`?
claim(robot.motors, machine.motors);

// -> Define a 'motors' property on machine, set this to 4
machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, machine.motors);

// -> What is `robot.motors`?
claim(robot.motors, machine.motors);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
