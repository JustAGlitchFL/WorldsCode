"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42],{588:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(5893),r=n(1151),t=n(4866),l=n(5162);const a={layout:"default",title:"Autonomous Functions",parent:"Docs",description:"",nav_order:4},d=void 0,o={id:"docs/auton_functions",title:"Autonomous Functions",description:"",source:"@site/ez-template-docs/docs/auton_functions.md",sourceDirName:"docs",slug:"/docs/auton_functions",permalink:"/EZ-Template/next/docs/auton_functions",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/${versionDocsDirPath}/${docPath}/ez-template-docs/docs/auton_functions.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Autonomous Functions",parent:"Docs",description:"",nav_order:4},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/EZ-Template/next/category/docs"},next:{title:"Autonomous Selector",permalink:"/EZ-Template/next/docs/auton_selector"}},c={},p=[{value:"Setter functions",id:"setter-functions",level:2},{value:"pid_drive_set()",id:"pid_drive_set",level:3},{value:"pid_turn_set()",id:"pid_turn_set",level:3},{value:"pid_swing_set()",id:"pid_swing_set",level:3},{value:"pid_targets_reset()",id:"pid_targets_reset",level:3},{value:"set_angle()",id:"set_angle",level:3},{value:"pid_speed_max_set()",id:"pid_speed_max_set",level:3},{value:"set_pid_constants()",id:"set_pid_constants",level:3},{value:"slew_power_min_set()",id:"slew_power_min_set",level:3},{value:"slew_distance_set()",id:"slew_distance_set",level:3},{value:"exit_condition_set()",id:"exit_condition_set",level:3},{value:"pid_swing_min_set()",id:"pid_swing_min_set",level:3},{value:"pid_turn_min_set()",id:"pid_turn_min_set",level:3},{value:"drive_mode_set()",id:"drive_mode_set",level:3},{value:"pid_drive_toggle()",id:"pid_drive_toggle",level:3},{value:"pid_print_toggle()",id:"pid_print_toggle",level:3},{value:"Getter",id:"getter",level:2},{value:"pid_swing_min_get()",id:"pid_swing_min_get",level:3},{value:"pid_turn_min_get()",id:"pid_turn_min_get",level:3},{value:"interfered",id:"interfered",level:3},{value:"drive_mode_get()",id:"drive_mode_get",level:3},{value:"drive_tick_per_inch()",id:"drive_tick_per_inch",level:3},{value:"Misc.",id:"misc",level:2},{value:"pid_wait()",id:"pid_wait",level:3},{value:"pid_wait_until()",id:"pid_wait_until",level:3}];function u(e){const s={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"setter-functions",children:"Setter functions"}),"\n",(0,i.jsx)(s.h3,{id:"pid_drive_set",children:"pid_drive_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the drive to go forward using PID and heading correction."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"target"})," is in inches.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"speed"})," is -127 to 127.  It's recommended to keep this at 110.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"slew_on"})," will ramp the drive up.\r\n",(0,i.jsx)(s.code,{children:"toggle_heading"})," will disable heading correction when false."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples1",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_drive_set(24, 110, true);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_drive_set(double target, int speed, bool slew_on = false, bool toggle_heading = true);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_turn_set",children:"pid_turn_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the drive to turn using PID."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"target"})," is in degrees.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"speed"})," is -127 to 127."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_drive_set(24, 110, true);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_turn_set(double target, int speed);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_swing_set",children:"pid_swing_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the robot to swing using PID.  The robot will turn using one side of the drive, either the left or right."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"type"})," is either ",(0,i.jsx)(s.code,{children:"ez::LEFT_SWING"})," or ",(0,i.jsx)(s.code,{children:"ez::RIGHT_SWING"}),".",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"target"})," is in degrees.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"speed"})," is -127 to 127."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_swing_set(e_swing type, double target, int speed);\n"})})}),(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_swing_set(ez::LEFT_SWING, 45, 110);\r\n  chassis.pid_wait();\r\n\r\n  chassis.pid_swing_set(ez::RIGHT_SWING, 0, 110);\r\n  chassis.pid_wait();\r\n}\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_targets_reset",children:"pid_targets_reset()"}),"\n",(0,i.jsx)(s.p,{children:"Resets all drive PID targets to 0."}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_targets_reset(); // Resets PID targets to 0\r\n  chassis.drive_imu_reset(); // Reset gyro position to 0\r\n  chassis.drive_sensor_reset(); // Reset drive sensors to 0\r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); // Set motors to hold.  This helps autonomous consistency.\r\n\r\n  ez::as::auton_selector.selected_auton_call(); // Calls selected auton from autonomous selector.\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_targets_reset();\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"set_angle",children:"set_angle()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the angle of the robot.  This is useful when your robot is setup in at an unconventional angle and you want 0 to be when you're square with the field."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"angle"})," angle that the robot will think it's now facing"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples5",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void set_angle(double angle);\n"})})}),(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_targets_reset(); // Resets PID targets to 0\r\n  chassis.drive_imu_reset(); // Reset gyro position to 0\r\n  chassis.drive_sensor_reset(); // Reset drive sensors to 0\r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); // Set motors to hold.  This helps autonomous consistency.\r\n\r\n  chassis.set_angle(45);\r\n\r\n  chassis.pid_turn_set(0, TURN_SPEED);\r\n  chassis.pid_wait();\r\n}\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_speed_max_set",children:"pid_speed_max_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the max speed of the drive."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"speed"})," an integer between -127 and 127."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples6",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_drive_set(48, 110);\r\n  chassis.pid_wait_until(24);\r\n  chassis.pid_speed_max_set(40);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_speed_max_set(int speed);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"set_pid_constants",children:"set_pid_constants()"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Note: this function was changed with 2.0.1"})}),"\n",(0,i.jsx)(s.p,{children:"Set PID constants.  Below are the defaults."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pid"})," either ",(0,i.jsx)(s.code,{children:"&chassis.headingPID"}),", ",(0,i.jsx)(s.code,{children:"&chassis.forward_drivePID"}),", ",(0,i.jsx)(s.code,{children:"&chassis.backward_drivePID"}),", ",(0,i.jsx)(s.code,{children:"&chassis.turnPID"}),", or ",(0,i.jsx)(s.code,{children:"&chassis.swingPID"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p"})," proportion constant",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"i"})," integral constant\r\n",(0,i.jsx)(s.code,{children:"d"})," derivative constant",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_start_i"})," error needs to be within this for i to start"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples7",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void initialize() {\r\n  chassis.set_pid_constants(&chassis.headingPID, 11, 0, 20, 0);\r\n  chassis.set_pid_constants(&chassis.forward_drivePID, 0.45, 0, 5, 0);\r\n  chassis.set_pid_constants(&chassis.backward_drivePID, 0.45, 0, 5, 0);\r\n  chassis.set_pid_constants(&chassis.turnPID, 5, 0.003, 35, 15;\r\n  chassis.set_pid_constants(&chassis.swingPID, 7, 0, 45, 0);\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void set_pid_constants(PID* pid, double p, double i, double d, double p_start_i);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"slew_power_min_set",children:"slew_power_min_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the starting speed for slew, with the ability to have different constants for forward and reverse.  Below are the defaults."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"fwd"})," integer between -127 and 127\r\n",(0,i.jsx)(s.code,{children:"rev"})," integer between -127 and 127"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples8",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void initialize() {\r\n  chassis.slew_power_min_set(80, 80);\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void slew_power_min_set(int fwd, int rev);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"slew_distance_set",children:"slew_distance_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the distance the drive will slew for, with the ability to have different constants for forward and reverse.  Input is inches.  Below are the defaults."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"fwd"})," a distance in inches",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"rev"})," a distance in inches"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples9",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void initialize() {\r\n  chassis.set_slew_min_distance(7, 7);\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void slew_distance_set (int fwd, int rev);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"exit_condition_set",children:"exit_condition_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the exit condition constants. This uses the exit conditions from the PID class.  Below are the defaults."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"type"})," either ",(0,i.jsx)(s.code,{children:"chassis.turn_exit"}),", ",(0,i.jsx)(s.code,{children:"chassis.swing_exit"}),", or ",(0,i.jsx)(s.code,{children:"chassis.drive_exit"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_small_exit_time"})," time, in ms, before exiting ",(0,i.jsx)(s.code,{children:"p_small_error"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_small_error"})," small error threshold",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_big_exit_time"})," time, in ms, before exiting ",(0,i.jsx)(s.code,{children:"p_big_error"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_big_error"})," big error threshold",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_velocity_exit_time"})," time, in ms, for velocity to be 0",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"p_mA_timeout"})," time, in ms, for ",(0,i.jsx)(s.code,{children:"is_over_current"})," to be true"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples10",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void initialize() {\r\n  chassis.exit_condition_set(chassis.turn_exit,  100, 3,  500, 7,   500, 500);\r\n  chassis.exit_condition_set(chassis.swing_exit, 100, 3,  500, 7,   500, 500);\r\n  chassis.exit_condition_set(chassis.drive_exit, 80,  50, 300, 150, 500, 500);\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void exit_condition_set(exit_condition_ &type, int p_small_exit_time, double p_small_error, int p_big_exit_time, double p_big_error, int p_velocity_exit_time, int p_mA_timeout);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_swing_min_set",children:"pid_swing_min_set()"}),"\n",(0,i.jsxs)(s.p,{children:["Sets the max power of the drive when the robot is within ",(0,i.jsx)(s.code,{children:"start_i"}),".  This only enables when ",(0,i.jsx)(s.code,{children:"i"})," is enabled, and when the movement is greater then ",(0,i.jsx)(s.code,{children:"start_i"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"min"})," the minimum speed the robot will turn at when integral is being used"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples11",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_swing_min_set(30);\r\n\r\n  chassis.pid_swing_set(45, 110);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_swing_min_set(int min);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_turn_min_set",children:"pid_turn_min_set()"}),"\n",(0,i.jsxs)(s.p,{children:["Sets the max power of the drive when the robot is within ",(0,i.jsx)(s.code,{children:"start_i"}),".  This only enables when ",(0,i.jsx)(s.code,{children:"i"})," is enabled, and when the movement is greater then ",(0,i.jsx)(s.code,{children:"start_i"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"min"})," the minimum speed the robot will turn at when integral is being used"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples12",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_turn_min_set(30);\r\n\r\n  chassis.pid_turn_set(45, 110);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_turn_min_set(int min);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"drive_mode_set",children:"drive_mode_set()"}),"\n",(0,i.jsx)(s.p,{children:"Sets the current mode of the drive."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"p_mode"})," the current task running for the drive.  accepts ",(0,i.jsx)(s.code,{children:"ez::DISABLE"}),", ",(0,i.jsx)(s.code,{children:"ez::SWING"}),", ",(0,i.jsx)(s.code,{children:"ez::TURN"}),", ",(0,i.jsx)(s.code,{children:"ez::DRIVE"})]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples13",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_drive_set(12, DRIVE_SPEED);\r\n  chassis.pid_wait();\r\n\r\n  chassis.drive_mode_set(ez::DISABLE); // Disable drive\r\n\r\n  chassis.drive_set(-127, -127); // Run drive motors myself\r\n  pros::delay(2000);\r\n  chassis.drive_set(0, 0);\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void drive_mode_set(e_mode p_mode);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_drive_toggle",children:"pid_drive_toggle()"}),"\n",(0,i.jsx)(s.p,{children:"Enables/disables the drive from moving in autonomous.  This is useful for debugging and checking PID variables."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"toggle"})," true enables the drive, false disables the drive"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples14",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:'void autonomous() {\r\n  chassis.pid_drive_set(12, DRIVE_SPEED);\r\n  chassis.pid_wait();\r\n\r\n  pid_drive_toggle(false); // Disable drive\r\n\r\n  chassis.pid_drive_set(-12, DRIVE_SPEED);\r\n  while (true) {\r\n    printf(" Left Error: %f  Right Error: %f\\n", chassis.leftPID.error, chassis.rightPID.error);\r\n    pros::delay(ez::util::DELAY_TIME);\r\n  }\r\n}\n'})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_drive_toggle(bool toggle);\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_print_toggle",children:"pid_print_toggle()"}),"\n",(0,i.jsx)(s.p,{children:"Enables/disables the drive functions printing every drive motion.  This is useful when you're debugging something and don't want terminal cluttered."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"toggle"})," true enables printing, false disables"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples15",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_drive_set(12, DRIVE_SPEED); // This will print\r\n  chassis.pid_wait(); // This will print\r\n\r\n  pid_print_toggle(false); // Disable prints\r\n\r\n  chassis.pid_drive_set(-12, DRIVE_SPEED); // This won't print\r\n  chassis.pid_wait(); // This won't print\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_print_toggle(bool toggle);\n"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"getter",children:"Getter"}),"\n",(0,i.jsx)(s.h3,{id:"pid_swing_min_get",children:"pid_swing_min_get()"}),"\n",(0,i.jsx)(s.p,{children:"Returns the minimum power the robot will swing at while integral is enabled."}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples16",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:'void autonomous() {\r\n  chassis.pid_swing_min_set(30);\r\n\r\n  printf("Swing Min: %i", chassis.pid_swing_min_get());\r\n}\n'})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"int pid_swing_min_get();\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_turn_min_get",children:"pid_turn_min_get()"}),"\n",(0,i.jsx)(s.p,{children:"Returns the minimum power the robot will turn at while integral is enabled."}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples17",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:'void autonomous() {\r\n  chassis.pid_turn_min_set(30);\r\n\r\n  printf("Turn Min: %i", chassis.pid_turn_min_get());\r\n}\n'})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"int pid_turn_min_get();\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"interfered",children:"interfered"}),"\n",(0,i.jsxs)(s.p,{children:["Boolean that returns true when ",(0,i.jsx)(s.code,{children:"pid_wait()"})," or ",(0,i.jsx)(s.code,{children:"pid_wait_until()"})," exit with velocity or is_over_current.  This can be used to detect unwanted motion and stop the drive motors from overheating during autonomous."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples18",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:' void tug (int attempts) {\r\n   for (int i=0; i<attempts-1; i++) {\r\n     // Attempt to drive backwards\r\n     printf("i - %i", i);\r\n     chassis.pid_drive_set(-12, 127);\r\n     chassis.pid_wait();\r\n\r\n     // If failsafed...\r\n     if (chassis.interfered) {\r\n       chassis.drive_sensor_reset();\r\n       chassis.pid_drive_set(-2, 20);\r\n       pros::delay(1000);\r\n     }\r\n     // If robot successfully drove back, return\r\n     else {\r\n       return;\r\n     }\r\n   }\r\n }\r\n\r\nvoid auto1() {\r\n  chassis.pid_drive_set(24, 110, true);\r\n  chassis.pid_wait();\r\n\r\n  if (chassis.interfered) {\r\n    tug(3);\r\n    return;\r\n  }\r\n\r\n  chassis.pid_turn_set(90, 90);\r\n  chassis.pid_wait();\r\n}\n'})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"bool interfered = false;\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"drive_mode_get",children:"drive_mode_get()"}),"\n",(0,i.jsxs)(s.p,{children:["Returns the current drive mode that the task is running.  Returns ",(0,i.jsx)(s.code,{children:"ez::DISABLE"}),", ",(0,i.jsx)(s.code,{children:"ez::SWING"}),", ",(0,i.jsx)(s.code,{children:"ez::TURN"}),", ",(0,i.jsx)(s.code,{children:"ez::DRIVE"}),"."]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples19",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.pid_drive_set(12, DRIVE_SPEED);\r\n  chassis.pid_wait();\r\n\r\n  if (chassis.interfered)\r\n    chassis.drive_mode_set(ez::DISABLE);\r\n  \r\n  if (chassis.drive_mode_get() == ez::DISABLE) {\r\n    chassis.drive_set(-127, -127); // Run drive motors myself\r\n    pros::delay(2000);\r\n    chassis.drive_set(0, 0);\r\n  }\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"e_mode drive_mode_get();\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"drive_tick_per_inch",children:"drive_tick_per_inch()"}),"\n",(0,i.jsx)(s.p,{children:"Returns the conversion between raw sensor value and inches."}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples20",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:'void initialize() {\r\n  printf("Tick Per Inch: %f\\n", chassis.drive_tick_per_inch());\r\n}\n'})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"double drive_tick_per_inch();\n"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"misc",children:"Misc."}),"\n",(0,i.jsx)(s.h3,{id:"pid_wait",children:"pid_wait()"}),"\n",(0,i.jsx)(s.p,{children:"Locks the code in place until the drive has settled.  This uses the exit conditions from the PID class."}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples21",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_turn_set(90, 110);\r\n  chassis.pid_wait();\r\n\r\n  chassis.pid_turn_set(0, 110);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_wait();\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"pid_wait_until",children:"pid_wait_until()"}),"\n",(0,i.jsx)(s.p,{children:"Locks the code in place until the drive has passed the input parameter.  This uses the exit conditions from the PID class."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"target"})," the distance the robot needs to travel before unlocking the code"]}),"\n",(0,i.jsxs)(t.Z,{groupId:"examples22",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,i.jsx)(l.Z,{value:"example",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.drive_imu_reset(); \r\n  chassis.drive_sensor_reset(); \r\n  chassis.drive_brake_set(MOTOR_BRAKE_HOLD); \r\n\r\n  chassis.pid_drive_set(48, 110);\r\n  chassis.pid_wait_until(24);\r\n  chassis.pid_speed_max_set(40);\r\n  chassis.pid_wait();\r\n}\n"})})}),(0,i.jsx)(l.Z,{value:"proto",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"void pid_wait_until(double target);\n"})})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>l});n(7294);var i=n(6010);const r={tabItem:"tabItem_Ymn6"};var t=n(5893);function l(e){let{children:s,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>w});var i=n(7294),r=n(6010),t=n(2466),l=n(6550),a=n(469),d=n(1980),o=n(7392),c=n(12);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,i.useMemo)((()=>{const e=s??function(e){return p(e).map((e=>{let{props:{value:s,label:n,attributes:i,default:r}}=e;return{value:s,label:n,attributes:i,default:r}}))}(n);return function(e){const s=(0,o.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function _(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d._X)(t),(0,i.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=u(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:t}))),[o,p]=_({queryString:n,groupId:r}),[x,v]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,c.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),m=(()=>{const e=o??x;return h({value:e,tabValues:t})?e:null})();(0,a.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),v(e)}),[p,v,t]),tabValues:t}}var v=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function j(e){let{className:s,block:n,selectedValue:i,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const s=e.currentTarget,n=d.indexOf(s),r=a[n].value;r!==i&&(o(s),l(r))},p=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===s?0:-1,"aria-selected":i===s,ref:e=>d.push(e),onKeyDown:p,onClick:c,...t,className:(0,r.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":i===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function f(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,{...e,...s}),(0,g.jsx)(b,{...e,...s})]})}function w(e){const s=(0,v.Z)();return(0,g.jsx)(f,{...e,children:p(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var i=n(7294);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);