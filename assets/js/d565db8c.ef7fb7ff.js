"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[770],{7314:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(5893),o=t(1151),s=t(4866),i=t(5162);const a={layout:"default",title:"Drive Constructors",parent:"Docs",description:"",nav_order:1},l=void 0,c={id:"docs/constructor",title:"Drive Constructors",description:"",source:"@site/ez-template-docs/docs/constructor.md",sourceDirName:"docs",slug:"/docs/constructor",permalink:"/EZ-Template/docs/constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/ez-template-docs/docs/constructor.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Drive Constructors",parent:"Docs",description:"",nav_order:1},sidebar:"tutorialSidebar",previous:{title:"Autonomous Selector",permalink:"/EZ-Template/docs/auton_selector"},next:{title:"PID",permalink:"/EZ-Template/docs/pid"}},d={},u=[{value:"Integrated Encoders",id:"integrated-encoders",level:2},{value:"ADI Encoders in Brain",id:"adi-encoders-in-brain",level:2},{value:"ADI Encoders in Expander",id:"adi-encoders-in-expander",level:2},{value:"Rotation Sensor",id:"rotation-sensor",level:2}];function h(e){const r={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"integrated-encoders",children:"Integrated Encoders"}),"\n",(0,n.jsx)(r.p,{children:"This is the standard setup that uses built in motor encoders."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"left_motor_ports"})," a vector of left motor ports, negative reverses the port.  first motor is used for sensing\r\n",(0,n.jsx)(r.code,{children:"right_motor_ports"})," a vector of right motor ports, negative reverses the port.  first motor is used for sensing\r\n",(0,n.jsx)(r.code,{children:"imu_port"})," the port an imu is in\r\n",(0,n.jsx)(r.code,{children:"wheel_diameter"})," diameter of your drive wheel\r\n",(0,n.jsx)(r.code,{children:"ticks"})," cartridge rpm\r\n",(0,n.jsx)(r.code,{children:"ratio"})," external ratio of your drive.  should be wheel gear / motor gear"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"ex1",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,n.jsx)(i.Z,{value:"example",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'Drive chassis (\r\n  // Left Chassis Ports (negative port will reverse it!)\r\n  //   the first port is the sensored port (when trackers are not used!)\r\n  {1, -2, 3}\r\n\r\n  // Right Chassis Ports (negative port will reverse it!)\r\n  //   the first port is the sensored port (when trackers are not used!)\r\n  ,{-4, 5, -6}\r\n\r\n  // IMU Port\r\n  ,7\r\n\r\n  // Wheel Diameter (Remember, 4" wheels are actually 4.125!)\r\n  ,4.125\r\n\r\n  // Cartridge RPM\r\n  ,600\r\n\r\n  // External Gear Ratio (MUST BE DECIMAL)\r\n  // eg. if your drive is 84:36 where the 36t is powered, your RATIO would be 2.333.\r\n  // eg. if your drive is 36:60 where the 60t is powered, your RATIO would be 0.6.\r\n  ,2.333\r\n);\n'})})}),(0,n.jsx)(i.Z,{value:"proto",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"Drive(std::vector<int> left_motor_ports, std::vector<int> right_motor_ports, int imu_port, \r\ndouble wheel_diameter, double ticks, double ratio);\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"adi-encoders-in-brain",children:"ADI Encoders in Brain"}),"\n",(0,n.jsx)(r.p,{children:"Only supports parallel trackers."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"left_motor_ports"})," a vector of left motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"right_motor_ports"})," a vector of right motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"imu_port"})," the port an imu is in\r\n",(0,n.jsx)(r.code,{children:"wheel_diameter"})," diameter of your tracking wheel\r\n",(0,n.jsx)(r.code,{children:"ticks"})," ticks per rotation of your sensor.  360 if using ADI quadrature encoders\r\n",(0,n.jsx)(r.code,{children:"ratio"})," external ratio of your tracking wheel.  should be wheel gear / motor gear\r\n",(0,n.jsx)(r.code,{children:"left_tracker_ports"})," vector of left tracker ports, negative will reverse the encoder\r\n",(0,n.jsx)(r.code,{children:"right_tracker_ports"})," vector of right tracker ports, negative will reverse the encoder"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"ex2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,n.jsx)(i.Z,{value:"example",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'// Chassis constructor\r\nDrive chassis (\r\n  // Left Chassis Ports (negative port will reverse it!)\r\n  {1, -2, 3}\r\n\r\n  // Right Chassis Ports (negative port will reverse it!)\r\n  ,{-4, 5, -6}\r\n\r\n  // IMU Port\r\n  ,7\r\n\r\n  // Tracking Wheel Diameter (Remember, 4" wheels are actually 4.125!)\r\n  ,4.125\r\n\r\n  // Ticks per Rotation of Encoder\r\n  ,360\r\n\r\n  // External Gear Ratio of Tracking Wheel (MUST BE DECIMAL)\r\n  // eg. if your drive is 84:36 where the 36t is sensored, your RATIO would be 2.333.\r\n  // eg. if your drive is 36:60 where the 60t is sensored, your RATIO would be 0.6.\r\n  ,1\r\n\r\n  // Left Tracking Wheel Ports (negative port will reverse it!)\r\n  ,{1, 2}\r\n\r\n  // Right Tracking Wheel Ports (negative port will reverse it!)\r\n  ,{-3, -4}\r\n);\n'})})}),(0,n.jsx)(i.Z,{value:"proto",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"Drive(std::vector<int> left_motor_ports, std::vector<int> right_motor_ports, int imu_port, \r\ndouble wheel_diameter, double ticks, double ratio, std::vector<int> left_tracker_ports,\r\nstd::vector<int> right_tracker_ports);\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"adi-encoders-in-expander",children:"ADI Encoders in Expander"}),"\n",(0,n.jsx)(r.p,{children:"Only supports parallel trackers."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"left_motor_ports"})," a vector of left motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"right_motor_ports"})," a vector of right motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"imu_port"})," the port an imu is in\r\n",(0,n.jsx)(r.code,{children:"wheel_diameter"})," diameter of your tracking wheel\r\n",(0,n.jsx)(r.code,{children:"ticks"})," ticks per rotation of your sensor.  360 if using ADI quadrature encoders\r\n",(0,n.jsx)(r.code,{children:"ratio"})," external ratio of your tracking wheel.  should be wheel gear / motor gear\r\n",(0,n.jsx)(r.code,{children:"left_tracker_ports"})," vector of left tracker ports, negative will reverse the encoder\r\n",(0,n.jsx)(r.code,{children:"right_tracker_ports"})," vector of right tracker ports, negative will reverse the encoder\r\n",(0,n.jsx)(r.code,{children:"expander_smart_port"})," port of the 3 wire expander"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"ex3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,n.jsx)(i.Z,{value:"example",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'// Chassis constructor\r\nDrive chassis (\r\n  // Left Chassis Ports (negative port will reverse it!)\r\n  {1, -2, 3}\r\n\r\n  // Right Chassis Ports (negative port will reverse it!)\r\n  ,{-4, 5, -6}\r\n\r\n  // IMU Port\r\n  ,7\r\n\r\n  // Tracking Wheel Diameter (Remember, 4" wheels are actually 4.125!)\r\n  ,4.125\r\n\r\n  // Ticks per Rotation of Encoder\r\n  ,360\r\n\r\n  // External Gear Ratio of Tracking Wheel(MUST BE DECIMAL)\r\n  // eg. if your drive is 84:36 where the 36t is sensored, your RATIO would be 2.333.\r\n  // eg. if your drive is 36:60 where the 60t is sensored, your RATIO would be 0.6.\r\n  ,1\r\n\r\n  // Left Tracking Wheel Ports (negative port will reverse it!)\r\n  ,{1, 2}\r\n\r\n  // Right Tracking Wheel Ports (negative port will reverse it!)\r\n  ,{-3, -4}\r\n  \r\n  // 3 Wire Port Expander Smart Port\r\n  ,9\r\n);\n'})})}),(0,n.jsx)(i.Z,{value:"proto",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"Drive(std::vector<int> left_motor_ports, std::vector<int> right_motor_ports, int imu_port, \r\ndouble wheel_diameter, double ticks, double ratio, std::vector<int> left_tracker_ports, \r\nstd::vector<int> right_tracker_ports, int expander_smart_port);\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"rotation-sensor",children:"Rotation Sensor"}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsx)(r.p,{children:"Note: smart encoders might not work as intended as of of 2.0.0"})}),"\n",(0,n.jsx)(r.p,{children:"Only supports parallel trackers."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"left_motor_ports"})," a vector of left motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"right_motor_ports"})," a vector of right motor ports, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"imu_port"})," the port an imu is in\r\n",(0,n.jsx)(r.code,{children:"wheel_diameter"})," diameter of your tracking wheel\r\n",(0,n.jsx)(r.code,{children:"ticks"})," ticks per rotation of your sensor.  360 if using ADI quadrature encoders\r\n",(0,n.jsx)(r.code,{children:"ratio"})," external ratio of your tracking wheel.  should be wheel gear / motor gear\r\n",(0,n.jsx)(r.code,{children:"left_rotation_port"})," port for left rotation sensor, negative reverses the port\r\n",(0,n.jsx)(r.code,{children:"right_rotation_port"})," port for right rotation sensor, negative reverses the port"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"ex4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,n.jsx)(i.Z,{value:"example",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'// Chassis constructor\r\nDrive chassis (\r\n  // Left Chassis Ports (negative port will reverse it!)\r\n  //   the first port is the sensored port (when trackers are not used!)\r\n  {1, -2, 3}\r\n\r\n  // Right Chassis Ports (negative port will reverse it!)\r\n  //   the first port is the sensored port (when trackers are not used!)\r\n  ,{-4, 5, -6}\r\n\r\n  // IMU Port\r\n  ,7\r\n\r\n  // Wheel Diameter (Remember, 4" wheels are actually 4.125!)\r\n  //    (or tracking wheel diameter)\r\n  ,4.125\r\n\r\n  // External Gear Ratio (MUST BE DECIMAL)\r\n  //    (or gear ratio of tracking wheel)\r\n  // eg. if your drive is 84:36 where the 36t is powered, your RATIO would be 2.333.\r\n  // eg. if your drive is 36:60 where the 60t is powered, your RATIO would be 0.6.\r\n  ,1\r\n\r\n  // Left Rotation Port (negative port will reverse it!)\r\n  ,8\r\n\r\n  // Right Rotation Port (negative port will reverse it!)\r\n  ,-9\r\n);\n'})})}),(0,n.jsx)(i.Z,{value:"proto",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"Drive(std::vector<int> left_motor_ports, std::vector<int> right_motor_ports, int imu_port, \r\ndouble wheel_diameter, double ratio, int left_rotation_port, int right_rotation_port);\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>i});t(7294);var n=t(6010);const o={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:t,children:r})}},4866:(e,r,t)=>{t.d(r,{Z:()=>j});var n=t(7294),o=t(6010),s=t(2466),i=t(6550),a=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:t}=e;const o=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,s=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,u]=v({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,d.Nk)(t);return[o,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function b(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),o=a[t].value;o!==n&&(c(r),i(o))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function w(e){let{lazy:r,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function _(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...e,...r}),(0,x.jsx)(w,{...e,...r})]})}function j(e){const r=(0,f.Z)();return(0,x.jsx)(_,{...e,children:u(e.children)},String(r))}},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(7294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);