#include "main.h"

// Motor definitions
pros::Motor intakeauton(6, pros::E_MOTOR_GEAR_200, false, pros::E_MOTOR_ENCODER_DEGREES);
pros::Motor kicker1auton(4, pros::E_MOTOR_GEAR_200, false, pros::E_MOTOR_ENCODER_DEGREES);
pros::Motor kicker2auton(17, pros::E_MOTOR_GEAR_200, true, pros::E_MOTOR_ENCODER_DEGREES);

// Pneumatics
ez::Piston left_wingauton('B');
ez::Piston right_wingauton('C');
ez::Piston back_wingauton('A');
ez::Piston hangauton('D');

/////
// For installation, upgrading, documentations and tutorials, check out our website!
// https://ez-robotics.github.io/EZ-Template/
/////

// These are out of 127
const int DRIVE_SPEED = 110;  
const int TURN_SPEED = 90;
const int SWING_SPEED = 90;

///
// Constants
///
void default_constants() {
  chassis.pid_heading_constants_set(3, 0, 20);
  chassis.pid_drive_constants_set(10, 0, 0);
  chassis.pid_turn_constants_set(3, 0, 20);
  chassis.pid_swing_constants_set(5, 0, 30);

  chassis.pid_turn_exit_condition_set(100_ms, 3_deg, 300_ms, 7_deg, 500_ms, 750_ms);
  chassis.pid_swing_exit_condition_set(100_ms, 3_deg, 300_ms, 7_deg, 500_ms, 750_ms);
  chassis.pid_drive_exit_condition_set(100_ms, 1_in, 300_ms, 3_in, 500_ms, 500_ms);

  chassis.slew_drive_constants_set(7_in, 80);
}

double last_set_angle = 0.0;
double added_angle = 3.0;
double added_distance = 3.0;
void swing(ez::e_swing swing_type, double angle, int speed, int curve, bool slew = false) {
  last_set_angle = angle;
  chassis.pid_swing_set(swing_type, angle + added_angle, speed, curve, slew);
  chassis.pid_wait_until(angle);
}

void turn(double angle, int speed, bool slew = false) {
  last_set_angle = angle;
  chassis.pid_turn_set(angle + added_angle, speed, slew);
  chassis.pid_wait_until(angle);
}

void drive(double distance, int speed, bool slew = false) {
  if (chassis.turnPID.target != last_set_angle) {
    chassis.pid_drive_toggle(false);
    chassis.pid_turn_set(last_set_angle, 0, false);
  }
  chassis.pid_drive_set(distance + added_distance, speed, slew);
  chassis.pid_drive_toggle(true);
  chassis.pid_wait_until(distance);
}

// Auton Functions

void close_awp() {
  drive(-10, DRIVE_SPEED);
  swing(ez::RIGHT_SWING, 45, SWING_SPEED, 45);
  drive(-14, DRIVE_SPEED);

  drive(8, DRIVE_SPEED);
  turn(0, TURN_SPEED);

  drive(6, DRIVE_SPEED);
  back_wingauton.set(true);

  drive(6, DRIVE_SPEED);
  turn(-70, TURN_SPEED);
  back_wingauton.set(false);
  turn(-180, TURN_SPEED);
  swing(ez::LEFT_SWING, -225, SWING_SPEED, 30);
  drive(-30, DRIVE_SPEED);
  back_wingauton.set(true);
  drive(-5, DRIVE_SPEED);
}

// void close_score() {
//   NULL;
// }
// //intake.movevelocity(200 or -200)

void far_6ball() {
  //chassis.drive_imu_reset(-103);
  // drive(44, DRIVE_SPEED);
  // back_wingauton.set(true);

  // turn(238, TURN_SPEED);
  // intakeauton.move_velocity(200);
  // swing(ez::LEFT_SWING, 283, SWING_SPEED, 60);
  
  // drive(-15, DRIVE_SPEED);
  // swing(ez::LEFT_SWING, 373, SWING_SPEED, 10);
  // turn(103, TURN_SPEED);
  // drive(-30, DRIVE_SPEED);

  intakeauton.move_velocity(200);
  drive(6, DRIVE_SPEED);
  drive(-36, DRIVE_SPEED);
  turn(-45,TURN_SPEED);

  drive(-10, DRIVE_SPEED);
  back_wingauton.set(true);
  turn(-90,TURN_SPEED);
  drive(-14, DRIVE_SPEED);
  drive(8, DRIVE_SPEED);
  //bar touch which is mirrored close
  turn(-45, TURN_SPEED);

  drive(12, DRIVE_SPEED);
  turn(0, TURN_SPEED);
  turn(-115, TURN_SPEED);
  swing(ez::LEFT_SWING, -180, SWING_SPEED, 30);
  drive(-30, DRIVE_SPEED);
  back_wingauton.set(true);
  drive(-5, DRIVE_SPEED);
  




}

// void far_awp() {
//   NULL;
// }

/* examples
///
// Drive Example

void drive_example() {
  // The first parameter is target inches
  // The second parameter is max speed the robot will drive at
  // The third parameter is a boolean (true or false) for enabling/disabling a slew at the start of drive motions
  // for slew, only enable it when the drive distance is greater then the slew distance + a few inches

  chassis.pid_drive_set(24_in, DRIVE_SPEED, true);
  chassis.pid_wait();

  chassis.pid_drive_set(-12_in, DRIVE_SPEED);
  chassis.pid_wait();

  chassis.pid_drive_set(-12_in, DRIVE_SPEED);
  chassis.pid_wait();
}

///
// Turn Example
///
void turn_example() {
  // The first parameter is target degrees
  // The second parameter is max speed the robot will drive at

  chassis.pid_turn_set(90_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(0_deg, TURN_SPEED);
  chassis.pid_wait();
}

///
// Combining Turn + Drive
///
void drive_and_turn() {
  chassis.pid_drive_set(24_in, DRIVE_SPEED, true);
  chassis.pid_wait();

  chassis.pid_turn_set(45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(-45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(0_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_drive_set(-24_in, DRIVE_SPEED, true);
  chassis.pid_wait();
}

///
// Wait Until and Changing Max Speed
///
void wait_until_change_speed() {
  // pid_wait_until will wait until the robot gets to a desired position

  // When the robot gets to 6 inches, the robot will travel the remaining distance at a max speed of 30
  chassis.pid_drive_set(24_in, DRIVE_SPEED, true);
  chassis.pid_wait_until(6_in);
  chassis.pid_speed_max_set(30);  // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 30 speed
  chassis.pid_wait();

  chassis.pid_turn_set(45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(-45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_turn_set(0_deg, TURN_SPEED);
  chassis.pid_wait();

  // When the robot gets to -6 inches, the robot will travel the remaining distance at a max speed of 30
  chassis.pid_drive_set(-24_in, DRIVE_SPEED, true);
  chassis.pid_wait_until(-6_in);
  chassis.pid_speed_max_set(30);  // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 30 speed
  chassis.pid_wait();
}

///
// Swing Example
///
void swing_example() {
  // The first parameter is ez::LEFT_SWING or ez::RIGHT_SWING
  // The second parameter is target degrees
  // The third parameter is speed of the moving side of the drive
  // The fourth parameter is the speed of the still side of the drive, this allows for wider arcs

  chassis.pid_swing_set(ez::LEFT_SWING, 45_deg, SWING_SPEED, 45);
  chassis.pid_wait();

  chassis.pid_swing_set(ez::RIGHT_SWING, 0_deg, SWING_SPEED, 45);
  chassis.pid_wait();

  chassis.pid_swing_set(ez::RIGHT_SWING, 45_deg, SWING_SPEED, 45);
  chassis.pid_wait();

  chassis.pid_swing_set(ez::LEFT_SWING, 0_deg, SWING_SPEED, 45);
  chassis.pid_wait();
}

///
// Auto that tests everything
///
void combining_movements() {
  chassis.pid_drive_set(24_in, DRIVE_SPEED, true);
  chassis.pid_wait();

  chassis.pid_turn_set(45_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_swing_set(ez::RIGHT_SWING, -45_deg, SWING_SPEED, 45);
  chassis.pid_wait();

  chassis.pid_turn_set(0_deg, TURN_SPEED);
  chassis.pid_wait();

  chassis.pid_drive_set(-24_in, DRIVE_SPEED, true);
  chassis.pid_wait();
}

///
// Interference example
///
void tug(int attempts) {
  for (int i = 0; i < attempts - 1; i++) {
    // Attempt to drive backwards
    printf("i - %i", i);
    chassis.pid_drive_set(-12_in, 127);
    chassis.pid_wait();

    // If failsafed...
    if (chassis.interfered) {
      chassis.drive_sensor_reset();
      chassis.pid_drive_set(-2_in, 20);
      pros::delay(1000);
    }
    // If robot successfully drove back, return
    else {
      return;
    }
  }
}

// If there is no interference, robot will drive forward and turn 90 degrees.
// If interfered, robot will drive forward and then attempt to drive backwards.
void interfered_example() {
  chassis.pid_drive_set(24_in, DRIVE_SPEED, true);
  chassis.pid_wait();

  if (chassis.interfered) {
    tug(3);
    return;
  }

  chassis.pid_turn_set(90_deg, TURN_SPEED);
  chassis.pid_wait();
}

// . . .
// Make your own autonomous functions here!
// . . .
*/