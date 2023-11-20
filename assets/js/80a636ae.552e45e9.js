"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5308],{6942:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=s(5893),o=s(1151),a=s(4866),n=s(5162);const l={layout:"default",title:"PTO",parent:"Docs",description:"",nav_order:7},i=void 0,c={id:"docs/pto",title:"PTO",description:"",source:"@site/versioned_docs/version-2.x/docs/pto.md",sourceDirName:"docs",slug:"/docs/pto",permalink:"/EZ-Template/docs/pto",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/${versionDocsDirPath}/${docPath}/versioned_docs/version-2.x/docs/pto.md",tags:[],version:"2.x",frontMatter:{layout:"default",title:"PTO",parent:"Docs",description:"",nav_order:7},sidebar:"tutorialSidebar",previous:{title:"PID",permalink:"/EZ-Template/docs/pid"},next:{title:"Drive and Telemetry",permalink:"/EZ-Template/docs/set_and_get_drive"}},u={},d=[{value:"pto_check()",id:"pto_check",level:2},{value:"pto_add()",id:"pto_add",level:2},{value:"pto_remove()",id:"pto_remove",level:2},{value:"pto_toggle()",id:"pto_toggle",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"pto_check",children:"pto_check()"}),"\n",(0,r.jsx)(t.p,{children:"Checks if the port is in the pto_list."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"check_if_pto"})," a PROS motor that is in the drive"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"ex1",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,r.jsx)(n.Z,{value:"example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'void initialize() {\r\n  pros::delay(500);\r\n\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 0 0\r\n  chassis.pto_add({chassis.left_motors[1], chassis.right_motors[1]});\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 1 1\r\n}\n'})})}),(0,r.jsx)(n.Z,{value:"proto",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"bool pto_check(pros::Motor check_if_pto);\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"pto_add",children:"pto_add()"}),"\n",(0,r.jsx)(t.p,{children:"Adds motors to the pto_list.  You cannot add the first index because it's used for autonomous."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pto_list"})," a vector of motors to remove from the drive"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"ex2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,r.jsx)(n.Z,{value:"example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'void initialize() {\r\n  pros::delay(500);\r\n\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 0 0\r\n  chassis.pto_add({chassis.left_motors[1], chassis.right_motors[1]});\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 1 1\r\n}\n'})})}),(0,r.jsx)(n.Z,{value:"proto",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"void pto_add(std::vector<pros::Motor> pto_list);\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"pto_remove",children:"pto_remove()"}),"\n",(0,r.jsx)(t.p,{children:"Removes motors from the pto_list."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pto_list"})," a vector of motors to add back to the drive"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"ex3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,r.jsx)(n.Z,{value:"example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'void initialize() {\r\n  pros::delay(500);\r\n\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 0 0\r\n  chassis.pto_add({chassis.left_motors[1], chassis.right_motors[1]});\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 1 1\r\n  chassis.pto_remove({chassis.left_motors[1], chassis.right_motors[1]});\r\n  printf("Check: %i %i\\n", chassis.pto_check(chassis.left_motors[1]), chassis.pto_check(chassis.right_motors[1]))); // This prints 0 0\r\n\r\n}\n'})})}),(0,r.jsx)(n.Z,{value:"proto",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"void pto_remove(std::vector<pros::Motor> pto_list);\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"pto_toggle",children:"pto_toggle()"}),"\n",(0,r.jsxs)(t.p,{children:["Runs ",(0,r.jsx)(t.code,{children:"pto_add"})," if ",(0,r.jsx)(t.code,{children:"toggle"})," is true, and ",(0,r.jsx)(t.code,{children:"pto_remove"})," if ",(0,r.jsx)(t.code,{children:"toggle"})," is false."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pto_list"})," a vector of motors to add / remove to the drive\r\n",(0,r.jsx)(t.code,{children:"toggle"})," boolean to add / remove motors to drive"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"ex4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,r.jsx)(n.Z,{value:"example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"void pto_intake(bool toggle) {\r\n  pto_intake_enabled = toggle;\r\n  chassis.pto_toggle({chassis.left_motors[1], chassis.right_motors[1]}, toggle);\r\n  pto_intake_piston.set_value(toggle);\r\n  if (toggle) {\r\n    chassis.left_motors[1].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n    chassis.right_motors[1].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n  }\r\n}\n"})})}),(0,r.jsx)(n.Z,{value:"proto",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"void pto_toggle(std::vector<pros::Motor> pto_list, bool toggle);\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,t,s)=>{s.d(t,{Z:()=>n});s(7294);var r=s(6010);const o={tabItem:"tabItem_Ymn6"};var a=s(5893);function n(e){let{children:t,hidden:s,className:n}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,n),hidden:s,children:t})}},4866:(e,t,s)=>{s.d(t,{Z:()=>k});var r=s(7294),o=s(6010),a=s(2466),n=s(6550),l=s(469),i=s(1980),c=s(7392),u=s(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:o}}=e;return{value:t,label:s,attributes:r,default:o}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const o=(0,n.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function v(e){const{defaultValue:t,queryString:s=!1,groupId:o}=e,a=p(e),[n,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:s,groupId:o}),[v,_]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Nk)(s);return[o,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:o}),f=(()=>{const e=c??v;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),_(e)}),[d,_,a]),tabValues:a}}var _=s(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function x(e){let{className:t,block:s,selectedValue:r,selectValue:n,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),o=l[s].value;o!==r&&(c(t),n(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(b,{...e,...t})]})}function k(e){const t=(0,_.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>n});var r=s(7294);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);