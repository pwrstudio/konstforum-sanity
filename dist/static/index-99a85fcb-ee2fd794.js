import{t as h,af as x,r as c,I as d,P as j,j as o,c5 as I,as as v,cz as B,B as H,aW as k,at as E,bb as y}from"./desk-eb7b3548-1e35eb67.js";import{useDeskTool as C}from"./index-66ec8894-5f1feb7a.js";import"./index-6c624746.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(B,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(H,{as:k,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const z=h(x)(u||(u=O([`
  position: relative;
`])));function L(t){const{children:e}=t,{collapsed:s}=y();return o(z,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:T,...P}=s,[l,b]=c.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(L,{children:[I.isValidElementType(a)&&c.createElement(a,{...r,...P,ref:b,child:i,paneKey:n}),c.isValidElement(a)&&a]})]})}export{G as default};
