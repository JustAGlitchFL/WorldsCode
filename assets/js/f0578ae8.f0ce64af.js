"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3337],{3959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=r(5893),t=r(1151),a=r(4866),s=r(5162);const i={layout:"default",title:"Util",parent:"Docs",description:"",nav_order:8},o="Util",c={id:"docs/util",title:"Util",description:"",source:"@site/ez-template-docs/docs/util.md",sourceDirName:"docs",slug:"/docs/util",permalink:"/EZ-Template/docs/util",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/${versionDocsDirPath}/${docPath}/ez-template-docs/docs/util.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Util",parent:"Docs",description:"",nav_order:8},sidebar:"tutorialSidebar",previous:{title:"User Control",permalink:"/EZ-Template/docs/user_control"},next:{title:"2.x -> 3.x",permalink:"/EZ-Template/migration"}},u={},d=[{value:"controller",id:"controller",level:2},{value:"print_to_screen()",id:"print_to_screen",level:2},{value:"print_ez_template()",id:"print_ez_template",level:2},{value:"sgn()",id:"sgn",level:2},{value:"clip_num()",id:"clip_num",level:2},{value:"DELAY_TIME",id:"delay_time",level:2},{value:"IS_SD_CARD",id:"is_sd_card",level:2}];function p(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"util",children:(0,l.jsx)(n.strong,{children:"Util"})}),"\n",(0,l.jsx)(n.h2,{id:"controller",children:"controller"}),"\n",(0,l.jsxs)(n.p,{children:["The pros controller is defined globally in our library as ",(0,l.jsx)(n.code,{children:"master"}),"."]}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void opcontrol() {\r\n  while (true) {\r\n    int l_stick = opcontrol_curve_left(master.get_analog(ANALOG_LEFT_Y));\r\n    int r_stick = opcontrol_curve_left(master.get_analog(ANALOG_RIGHT_Y));\r\n    \r\n    chassis.drive_set(l_stick, r_stick);\r\n    \r\n    pros::delay(ez::util::DELAY_TIME);\r\n  }\r\n}\n"})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"extern pros::Controller master();\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"print_to_screen",children:"print_to_screen()"}),"\n",(0,l.jsxs)(n.p,{children:["Prints to the LLEMU.  This function handles text that's too long for a line by finding the last word and starting it on a new line, and takes ",(0,l.jsx)(n.code,{children:"\\n"})," to set a new line."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"text"})," input string",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.code,{children:"line"})," starting line"]}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"},{label:"Example 2",value:"ex2"}],children:[(0,l.jsxs)(s.Z,{value:"example",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"}),(0,l.jsx)(n.br,{}),"\n","hello, this is line 0",(0,l.jsx)(n.br,{}),"\n","this is line 1"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'void initialize() {\r\n  ez::print_to_screen("hello, this is line 0\\nthis is line 1");\r\n}\n'})})]}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void print_to_screen(std::string text, int line)\n"})})}),(0,l.jsxs)(s.Z,{value:"ex2",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"}),(0,l.jsx)(n.br,{}),"\n","01234567890123456789012345678901",(0,l.jsx)(n.br,{}),"\n","hello"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'void initialize() {\r\n  std::string 32char = 01234567890123456789012345678901;\r\n  ez::print_to_screen(32char + "hello", 2);\r\n}\n'})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"print_ez_template",children:"print_ez_template()"}),"\n",(0,l.jsxs)(n.p,{children:["Prints our branding on your terimnal ",":D","."]}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  print_ez_template();\r\n}\n"})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void print_ez_template();\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"sgn",children:"sgn()"}),"\n",(0,l.jsx)(n.p,{children:"Returns the sign of the input.  Returns 1 if positive, -1 if negative, and 0 if 0."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"input"})," value to check the sign of"]}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex5",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'void opcontrol() {\r\n  while (true) {\r\n    printf("Sgn of Controller: %i \\n", sgn(master.get_analog(ANALOG_LEFT_Y)));\r\n\r\n    pros::delay(ez::util::DELAY_TIME);\r\n  }\r\n}\n'})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"double sgn(double input);\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"clip_num",children:"clip_num()"}),"\n",(0,l.jsxs)(n.p,{children:["Checks if ",(0,l.jsx)(n.code,{children:"input"})," is within range of ",(0,l.jsx)(n.code,{children:"max"})," and ",(0,l.jsx)(n.code,{children:"min"}),".  If it's out, this returns ",(0,l.jsx)(n.code,{children:"max"})," or ",(0,l.jsx)(n.code,{children:"min"})," respectively."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"input"})," value to check if it's above/below max/min\r\n",(0,l.jsx)(n.code,{children:"max"})," biggest input can be\r\n",(0,l.jsx)(n.code,{children:"min"})," smallest input can be"]}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex6",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'void opcontrol() {\r\n  while (true) {\r\n    int joy = master.get_analog(ANALOG_LEFT_Y);\r\n\r\n    // When the joystick is between 100 and 127\r\n    // (or -100 and -127) this will print 100 (or -100).\r\n    printf("Clipped Controller: %i \\n", clip_num(joy, 100, -100)); \r\n  }\r\n}\n'})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"double clip_num(double input, double max, double min);\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"delay_time",children:"DELAY_TIME"}),"\n",(0,l.jsx)(n.p,{children:"Standard delay time for loops in ms."}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex7",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void opcontrol() {\r\n  while (true) {\r\n    chassis.opcontrol_tank();\r\n\r\n    pros::delay(ez::util::DELAY_TIME);\r\n  }\r\n}\n"})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"const int DELAY_TIME = 10;\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"is_sd_card",children:"IS_SD_CARD"}),"\n",(0,l.jsx)(n.p,{children:"Boolean that checks if an SD card is installed.  True if there is one, false if there isn't."}),"\n",(0,l.jsxs)(a.Z,{groupId:"ex8",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,l.jsx)(s.Z,{value:"example",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'void initialize() {\r\n  if (!ez::util::IS_SD_CARD) \r\n    printf("No SD Card Found!\\n");\r\n}\n'})})}),(0,l.jsx)(s.Z,{value:"proto",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"const bool IS_SD_CARD = pros::usd::is_installed();\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>s});r(7294);var l=r(6010);const t={tabItem:"tabItem_Ymn6"};var a=r(5893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t.tabItem,s),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>y});var l=r(7294),t=r(6010),a=r(2466),s=r(6550),i=r(469),o=r(1980),c=r(7392),u=r(12);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=p(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[c,d]=x({queryString:r,groupId:t}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,u.Nk)(r);return[t,(0,l.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),j=(()=>{const e=c??m;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(5893);function f(e){let{className:n,block:r,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),t=i[r].value;t!==l&&(c(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,t.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function _(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,v.Z)();return(0,b.jsx)(_,{...e,children:d(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var l=r(7294);const t={},a=l.createContext(t);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);