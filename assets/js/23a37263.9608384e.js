"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1267],{8060:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=o(5893),i=o(1151);const n={title:"Active Brake",description:"Powerful, tunable brake for driver control"},s=void 0,a={id:"tutorials/activebrake",title:"Active Brake",description:"Powerful, tunable brake for driver control",source:"@site/ez-template-docs/tutorials/activebrake.md",sourceDirName:"tutorials",slug:"/tutorials/activebrake",permalink:"/EZ-Template/tutorials/activebrake",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/ez-template-docs/tutorials/activebrake.md",tags:[],version:"current",frontMatter:{title:"Active Brake",description:"Powerful, tunable brake for driver control"},sidebar:"docs",previous:{title:"Joystick Curves",permalink:"/EZ-Template/tutorials/joystick_curve"},next:{title:"Practice Mode",permalink:"/EZ-Template/tutorials/practice_mode"}},c={},l=[{value:"Enabling",id:"enabling",level:2},{value:"Disabling",id:"disabling",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"If you put the motors on brake type hold, a robot can still push the robot a bit, and when you let go of the joysticks the robot just locks in place. Active brake runs a P loop on the drive when you let go of the joysticks. By adjusting the kP, you adjust how hard the robot fights back. If you make it smaller, there will be a larger dead zone and you'll coast a little bit. Active brake vs brake type is personal preference."}),"\n",(0,r.jsxs)(t.p,{children:["This is nice to use while the robot's brake mode is set to ",(0,r.jsx)(t.code,{children:"coast"})," so you have full control over how much the robot will fight back when pushed."]}),"\n",(0,r.jsx)(t.h2,{id:"enabling",children:"Enabling"}),"\n",(0,r.jsxs)(t.p,{children:["To adjust the kP, in ",(0,r.jsx)(t.code,{children:"src/main.cpp"})," change ",(0,r.jsx)(t.code,{children:"chassis.opcontrol_drive_activebrake_set(0)"})," to whatever you like! We suggest around ",(0,r.jsx)(t.code,{children:"2.0"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"disabling",children:"Disabling"}),"\n",(0,r.jsxs)(t.p,{children:["To disable active brake, in ",(0,r.jsx)(t.code,{children:"src/main.cpp"})," make sure the kP is 0 with ",(0,r.jsx)(t.code,{children:"chassis.opcontrol_drive_activebrake_set(0)"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var r=o(7294);const i={},n=r.createContext(i);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);