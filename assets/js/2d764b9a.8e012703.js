"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>E,default:()=>V,frontMatter:()=>N,metadata:()=>O,toc:()=>P});var a=n(87462),r=n(67294),o=n(3905),l=n(86010),i=n(72957),u=n(16550),c=n(75238),s=n(33609),p=n(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,c]=b({queryString:n,groupId:a}),[s,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=u??s;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var g=n(51048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.default)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.default)({},e,t)),r.createElement(y,(0,a.default)({},e,t)))}function x(e){const t=(0,g.Z)();return r.createElement(w,(0,a.default)({key:String(t)},e))}const S={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(S.tabItem,a),hidden:n},t)}const N={description:"Create a doc page with rich content.",sidebar_position:2},E="Getting Started",O={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"Create a doc page with rich content.",source:"@site/docs/Getting Started.mdx",sourceDirName:".",slug:"/Getting Started",permalink:"/react-native-flix-snackbar/Getting Started",draft:!1,editUrl:"https://github.com/flixyudh/react-native-flix-snackbar/tree/main/docs/docs/Getting Started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a doc page with rich content.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-native-flix-snackbar/"},next:{title:"SnackbarProvider",permalink:"/react-native-flix-snackbar/API/SnackbarProvider"}},I={},P=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],C={toc:P},j="wrapper";function V(e){let{components:t,...n}=e;return(0,o.kt)(j,(0,a.default)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(x,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(T,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-flix-snackbar\n"))),(0,o.kt)(T,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-flix-snackbar\n"))),(0,o.kt)(T,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-native-flix-snackbar\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Wrap your root component in ",(0,o.kt)("inlineCode",{parentName:"p"},"SnackbarProvider")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-flix-snackbar"),". This will usually be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," file. If you have an Expo project, you can do this inside the exported component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," file."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { SnackbarProvider } from 'react-native-flix-snackbar';\n\nexport default function App() {\n  return (\n    // highlight-start\n    <SnackbarProvider>\n      // highlight-end\n      <MainApp />\n      // highlight-start\n    </SnackbarProvider>\n    // highlight-end\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After wrapping ",(0,o.kt)("inlineCode",{parentName:"p"},"SnackbarProvider")," in root component, you can show snackbar in all of it's children components using ",(0,o.kt)("a",{parentName:"p",href:"./API/usesnackbar"},(0,o.kt)("inlineCode",{parentName:"a"},"useSnackbar"))," hooks without declaring ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," and import JSX in every component.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSnackbar")," Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {View, TouchableOpacity, Text} from 'react-native';\nimport { useSnackbar } from 'react-native-flix-snackbar';\n\nexport default MainApp = props => {\n  const { show } = useSnackbar();\n\n  return (\n    <View style={{flex: 1}}>\n      // showing snackbar\n      <TouchableOpacity onPress={() => show('Hi snackbar!')}>\n        <Text>Open Snackbar</Text>\n      </TouchableOpacity>;\n    </View>\n  );\n};\n")))}V.isMDXComponent=!0}}]);