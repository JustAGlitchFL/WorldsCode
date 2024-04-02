"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3136],{2719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),o=t(1151);const i={title:"Tuning Constants",description:"Tuning the PID system to accurately rotate the desired amount"},a="Tuning Constants",r={id:"tutorials/tuning_constants",title:"Tuning Constants",description:"Tuning the PID system to accurately rotate the desired amount",source:"@site/versioned_docs/version-2.x/tutorials/tuning_constants.md",sourceDirName:"tutorials",slug:"/tutorials/tuning_constants",permalink:"/EZ-Template/2.x/tutorials/tuning_constants",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/versioned_docs/version-2.x/tutorials/tuning_constants.md",tags:[],version:"2.x",frontMatter:{title:"Tuning Constants",description:"Tuning the PID system to accurately rotate the desired amount"},sidebar:"tutorialSidebar",previous:{title:"PTO Tutorial",permalink:"/EZ-Template/2.x/tutorials/pto_tutorial"},next:{title:"Using Autonomous Selector",permalink:"/EZ-Template/2.x/tutorials/using_auton_selector"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Uncommenting Default Constants",id:"uncommenting-default-constants",level:3},{value:"Running the Autonomous",id:"running-the-autonomous",level:3},{value:"Modifying Constants",id:"modifying-constants",level:3},{value:"Different Constants",id:"different-constants",level:3},{value:"Tuning PID",id:"tuning-pid",level:2},{value:"Step 1 - kP",id:"step-1---kp",level:3},{value:"Step 2 - kD",id:"step-2---kd",level:3},{value:"Step 3 - Repeat",id:"step-3---repeat",level:3},{value:"Step 4 - kI",id:"step-4---ki",level:3},{value:"Tuning Forward/Backward Constants",id:"tuning-forwardbackward-constants",level:2},{value:"Step 1 - Forward/Backwards Constants",id:"step-1---forwardbackwards-constants",level:3},{value:"Step 2 - Heading Correction",id:"step-2---heading-correction",level:3},{value:"Step 3 - Slew",id:"step-3---slew",level:3},{value:"Tuning Turns and Swings",id:"tuning-turns-and-swings",level:2},{value:"Step 1 - Constants",id:"step-1---constants",level:3},{value:"Step 2 - kI",id:"step-2---ki",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tuning-constants",children:(0,s.jsx)(n.strong,{children:"Tuning Constants"})}),"\n",(0,s.jsxs)(n.p,{children:["For more information on how PID controllers work, ",(0,s.jsx)(n.a,{href:"http://georgegillard.com/documents/2-introduction-to-pid-controllers",children:"reference this document made by George Gillard"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"uncommenting-default-constants",children:"Uncommenting Default Constants"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"src/main.cpp"}),", make sure ",(0,s.jsx)(n.code,{children:"default_constants()"})," is uncommented in ",(0,s.jsx)(n.code,{children:"void initialize()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n    . . .\r\n    default_constants();\r\n    . . .\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-the-autonomous",children:"Running the Autonomous"}),"\n",(0,s.jsxs)(n.p,{children:["You can run one of the example autonomous routines to tune your constants.  When you're tuning drive constants, run ",(0,s.jsx)(n.code,{children:"drive_example()"}),".  When you're tuning turn constants, run ",(0,s.jsx)(n.code,{children:"turn_example()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Look at our ",(0,s.jsx)(n.a,{href:"https://ez-robotics.github.io/EZ-Template/tutorials/using_auton_selector",children:"Using Auton Selector tutorial"})," for how to select autonomous routines!"]}),"\n",(0,s.jsx)(n.h3,{id:"modifying-constants",children:"Modifying Constants"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"src/autons.cpp"}),", there is a function called ",(0,s.jsx)(n.code,{children:"default_constants()"}),".  This function is where all of your modified PID constants can be set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void default_constants() {\r\n  chassis.set_slew_min_power(80, 80);\r\n  chassis.set_slew_distance(7, 7);\r\n  chassis.set_pid_constants(&chassis.headingPID, 11, 0, 20, 0);\r\n  chassis.set_pid_constants(&chassis.forward_drivePID, 0.45, 0, 5, 0);\r\n  chassis.set_pid_constants(&chassis.backward_drivePID, 0.45, 0, 5, 0);\r\n  chassis.set_pid_constants(&chassis.turnPID, 5, 0.003, 35, 15);\r\n  chassis.set_pid_constants(&chassis.swingPID, 7, 0, 45, 0);\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"different-constants",children:"Different Constants"}),"\n",(0,s.jsx)(n.p,{children:"When your robot has huge weight shifts (grabbing a mobile goal, raising a lift, etc), you might want to have different constants for those states.  You can have multiple functions with constants for different states, and change constants during your autonomous routine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void grab_mogo() {\r\n  chassis.set_drive_pid(40, 110, true);\r\n  chassis.wait_drive();\r\n\r\n  one_mogo_constants();\r\n  chassis.set_drive_pid(-40, 110, true);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tuning-pid",children:"Tuning PID"}),"\n",(0,s.jsx)(n.p,{children:"This video is a good visual representation of what each constant does."}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qKy98Cbcltw?si=tC9FrdKh6DR1Imrp",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h3,{id:"step-1---kp",children:"Step 1 - kP"}),"\n",(0,s.jsx)(n.p,{children:"You'll start with kP.  Set it to some number, and run your example autonomous.  The robot will either undershoot the target (kP too low), or the robot is oscillate around the target (kP too high)."}),"\n",(0,s.jsx)(n.p,{children:"To tune a PD controller, you want the kP to oscillate a little bit, usually a bounce or two."}),"\n",(0,s.jsx)(n.h3,{id:"step-2---kd",children:"Step 2 - kD"}),"\n",(0,s.jsx)(n.p,{children:'After finding a kP that oscillates a little, we can tune kD.  Increase kD until the oscillation goes away.  This movement should look more "snappy" then just a P loop.'}),"\n",(0,s.jsx)(n.h3,{id:"step-3---repeat",children:"Step 3 - Repeat"}),"\n",(0,s.jsx)(n.p,{children:"Repeat Steps 1 and Steps 2 until kD cannot remove oscillation from the movement.  Then go back to the last values that worked."}),"\n",(0,s.jsx)(n.h3,{id:"step-4---ki",children:"Step 4 - kI"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you need a little extra power to get your robot all the way there.  Integral can be a dangerous variable because it grows exponentially.  The fourth parameter is what the error needs to be for I to start.  For turns, we found around 15 degrees is good."}),"\n",(0,s.jsx)(n.p,{children:"Increase kI until any minor disturbances are accounted for.  You might need to adjust kD while tuning kI."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tuning-forwardbackward-constants",children:"Tuning Forward/Backward Constants"}),"\n",(0,s.jsx)(n.h3,{id:"step-1---forwardbackwards-constants",children:"Step 1 - Forward/Backwards Constants"}),"\n",(0,s.jsx)(n.p,{children:"Using the steps above, modify your kP, kD, and if you chose to, kI."}),"\n",(0,s.jsx)(n.p,{children:"If you see the robot acting differently going forwards and backwards, you can have different constants for each.  This is usually only needed when something is off balance on your robot mechanically."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"  chassis.set_pid_constants(&chassis.forward_drivePID, 0.45, 0, 5, 0);\r\n  chassis.set_pid_constants(&chassis.backward_drivePID, 0.45, 0, 5, 0);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2---heading-correction",children:"Step 2 - Heading Correction"}),"\n",(0,s.jsx)(n.p,{children:"Heading correction tries to keep your robot facing an angle while driving forward.  The constants for this are generally higher then other PID controllers because you're only correcting for a few degrees of error."}),"\n",(0,s.jsx)(n.p,{children:"The same steps above can be used to tune the heading constants.  Increase kP until there's a little oscillation, increase kD until it goes away, repeat."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"  chassis.set_pid_constants(&chassis.headingPID, 11, 0, 20, 0);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-3---slew",children:"Step 3 - Slew"}),"\n",(0,s.jsxs)(n.p,{children:["Slew ramps the speed of the robot up from the start of the motion to avoid wheelies and wheel slip.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"slew_min_power()"})," is the starting power the robot will use when slewing.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"slew_distance()"})," is the distance the robot will increase from min power to the max power you set in your autonomous function."]}),"\n",(0,s.jsx)(n.p,{children:"Minimum power should be as high as it can be without causing the robot to wheelie or cause wheel slip.  Slew distance should be as small as it can be without causing the same."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"  chassis.set_slew_min_power(80, 80);\r\n  chassis.set_slew_distance(7, 7);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tuning-turns-and-swings",children:"Tuning Turns and Swings"}),"\n",(0,s.jsx)(n.h3,{id:"step-1---constants",children:"Step 1 - Constants"}),"\n",(0,s.jsx)(n.p,{children:"Using the same steps as above, set kP to some number and modify it until there is slight oscillation, one or two bounces."}),"\n",(0,s.jsx)(n.p,{children:"Increase kD until the oscillation is gone."}),"\n",(0,s.jsx)(n.p,{children:"Repeat until kD cannot fix the oscillation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"  chassis.set_pid_constants(&chassis.turnPID, 5, 0.003, 35, 15);\r\n  chassis.set_pid_constants(&chassis.swingPID, 7, 0, 45, 0);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2---ki",children:"Step 2 - kI"}),"\n",(0,s.jsx)(n.p,{children:"What about when PD isn't enough?"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you need a little extra power to get your robot all the way there.  Integral can be a dangerous variable because it grows exponentially.  The fourth parameter is what the error needs to be for I to start.  For turns, we found around 15 degrees is good."}),"\n",(0,s.jsx)(n.p,{children:"Increase kI until any minor disturbances are accounted for.  You might need to adjust kD while tuning kI."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"  chassis.set_pid_constants(&chassis.turnPID, 5, 0.003, 35, 15);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);