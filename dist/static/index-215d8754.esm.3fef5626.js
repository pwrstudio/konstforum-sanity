import{r as l,j as o,aj as ie,af as G,aH as ae,ak as ce,cr as ue,v as Y,y as le,E as de,av as pe,e as v,P as me,cs as fe,M as he,ct as ye,cu as ge,cv as Te,bc as be,bA as Pe,G as V,h as F,ad as M,a5 as Le,bq as Ie,a4 as j,a3 as C,ag as xe,F as Oe,aP as Se,cw as ve,ab as N,l as Re,q as je,t as we,aT as A,cx as _e,cy as Ce,cz as De,cA as Ee,aN as q,d as Fe,cB as Ae,c4 as $e,c5 as Me,aR as Ne,cC as qe,cD as ke,bu as k,bw as Be,cE as We,bl as Ue,aU as He,aY as Ge,cF as Ye,cG as Ve,cH as ze,bm as Ke}from"./sanity.7fb693d1.js";import{u as Xe,c as B,b as Qe}from"./index-ae1970a3.esm.320dbd87.js";import{P as Je}from"./PaneItem-34e9a828.esm.b1a9e75a.js";import"./index.83cc9888.js";function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?W(Object(t),!0).forEach(function(r){Ze(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ze(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const U=100,$=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},et={};function tt(e,n){return e._id?V(e._id):"item-".concat(n)}function nt(e){return De(e).map(n=>{const t=n.draft||n.published;return f(f({},t),{},{hasPublished:!!n.published,hasDraft:!!n.draft})})}const rt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(rt);if(!t)return null;const r=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(r[0]==="$"){const i=r.slice(1),c=n[i];return typeof c=="string"?c:null}return r}function ot(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function it(e){return e.map(n=>[at(n),(n.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ct(e,n){const t=e.by.map(r=>{if(r.mapWith)return r;const i=ut(n,r.field);return i?dt(i,"datetime")?f(f({},r),{},{mapWith:"dateTime"}):i.jsonType==="string"?f(f({},r),{},{mapWith:"lower"}):r:r});return t.every((r,i)=>r===e.by[i])?e:f(f({},e),{},{by:t})}function ut(e,n){const t=he(n);let r=e;for(const i of t){if(!r)return;if(typeof i=="string"){r=lt(r,i);continue}if(!(ye(i)||ge(i))||r.jsonType!=="array")return;const[s,a]=r.of||[];if(a||!s)return;if(!Te(s)){r=s;continue}const[h,y]=s.to||[];if(y||!h)return;r=h}return r}function lt(e,n){if(!("fields"in e))return;const t=e.fields.find(r=>r.name===n);return t?t.type:void 0}function dt(e,n){let t=e.type;for(;t;){if(t.name===n||!t.type&&t.jsonType===n)return!0;t=t.type}return!1}function pt(e){const{childItemId:n,error:t,filterIsSimpleTypeContraint:r,fullList:i,isActive:c,isLoading:s,items:a,layout:h,onListChange:y,onRetry:u,showIcons:g}=e,x=Y(),{collapsed:I}=be(),{collapsed:L,index:T}=Pe(),[O,S]=l.exports.useState(!1);l.exports.useEffect(()=>{if(L)return;const d=setTimeout(()=>{S(!0)},0);return()=>{clearTimeout(d)}},[L]);const b=l.exports.useCallback(d=>{const P=V(d._id),p=n===P;return o(Je,{icon:g===!1?!1:void 0,id:P,pressed:!c&&p,selected:c&&p,layout:h,schemaType:x.get(d._type),value:d})},[n,c,h,x,g]),m=l.exports.useMemo(()=>{if(!O)return null;if(t)return o(F,{align:"center",direction:"column",height:"fill",justify:"center",children:o(M,{width:1,children:v(Le,{paddingX:4,paddingY:5,space:4,children:[o(Ie,{as:"h3",children:"Could not fetch list items"}),v(j,{as:"p",children:["Error: ",o("code",{children:t.message})]}),u&&o(C,{children:o(G,{icon:xe,onClick:u,text:"Retry",tone:"primary"})})]})})});if(a===null)return o(F,{align:"center",direction:"column",height:"fill",justify:"center",children:o(Qe,{ms:300,children:v(Oe,{children:[o(Se,{muted:!0}),o(C,{marginTop:3,children:o(j,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!s&&a.length===0)return o(F,{align:"center",direction:"column",height:"fill",justify:"center",children:o(M,{width:1,children:o(C,{paddingX:4,paddingY:5,children:o(j,{align:"center",muted:!0,size:2,children:r?"No documents of this type":"No matching documents"})})})});const d=i&&a.length===$;return v(C,{padding:2,children:[a.length>0&&o(ve,{gap:1,getItemKey:tt,items:a,renderItem:b,onChange:y},"".concat(T,"-").concat(L)),s&&o(N,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(j,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),d&&o(N,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(j,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",$," documents"]})})]})},[t,r,i,y,s,a,u,b,O,L,T]);return o(Re,{overflow:I?void 0:"auto",children:m})}const K=l.exports.memo(e=>{let{index:n,initialValueTemplates:t=[],menuItems:r=[],menuItemGroups:i=[],setLayout:c,setSortOrder:s,title:a}=e;const{features:h}=Xe(),y=l.exports.useMemo(()=>({setLayout:u=>{let{layout:g}=u;c(g)},setSortOrder:u=>{s(u)}}),[c,s]);return o(ie,{backButton:h.backButton&&n>0&&o(G,{as:ae,"data-as":"a",icon:ce,mode:"bleed"}),title:a,actions:o(ue,{initialValueTemplateItems:t,actionHandlers:y,menuItemGroups:i,menuItems:r})})});K.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},ft=e=>({result:{documents:e},loading:!1,error:!1}),ht=e=>({result:null,loading:!1,error:e}),yt=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new Ee,r=t.next.bind(t);return e.pipe(q(s=>({client:s.client,query:s.query,params:s.params})),Fe(Ae),$e(1),Me()).pipe(Ne(s=>{const a=qe(s.client,s.query,s.params,n).pipe(q(ft),ke());return k(A({loading:!0}).pipe(Be(400),We(a)),a)})).pipe(Ue(mt),He((s,a)=>Ge(A(ht(s)),k(Ye(window,"online"),t).pipe(Ve(1),ze(a)))),Ke((s,a)=>f(f(f({},s),a),{},{onRetry:r})))};function gt(e){var n;const{apiVersion:t,filter:r,params:i,sortOrder:c}=e,s=je(we),[a,h]=l.exports.useState(!1),y=l.exports.useRef(a),[u,g]=l.exports.useState(null),x=(u==null?void 0:u.error)||null,I=(u==null?void 0:u.loading)||u===null,L=u==null?void 0:u.onRetry,T=(n=u==null?void 0:u.result)==null?void 0:n.documents,O=l.exports.useMemo(()=>T?nt(T):null,[T]),S=l.exports.useMemo(()=>{const m=c==null?void 0:c.extendedProjection,d=["_id","_type"],P=d.join(","),p=(c==null?void 0:c.by)||[],R=a?$:U,w=p.length>0?p:z.by,_=it(w);if(m){const D=d.concat(m).join(",");return["*[".concat(r,"] {").concat(D,"}"),"order(".concat(_,") [0...").concat(R,"]"),"{".concat(P,"}")].join("|")}return"*[".concat(r,"]|order(").concat(_,")[0...").concat(R,"]{").concat(P,"}")},[r,a,c]),b=l.exports.useCallback(m=>{let{toIndex:d}=m;I||y.current||d>=U/2&&(h(!0),y.current=!0)},[I]);return l.exports.useEffect(()=>{const m=a?p=>Boolean(p.result):()=>!0;g(p=>p?f(f({},p),{},{loading:!0}):null);const P=yt(A({client:s,query:S,params:i}),{apiVersion:t,tag:"desk.document-list"}).pipe(_e(m)).subscribe(g);return()=>P.unsubscribe()},[t,s,a,S,i]),l.exports.useEffect(()=>{g(null),h(!1),y.current=!1},[r,i,c,t]),{error:x,fullList:a,handleListChange:b,isLoading:I,items:O,onRetry:L}}const H=[];function Tt(e){const n=l.exports.useRef(e);return Ce(n.current,e)||(n.current=e),n.current}const xt=l.exports.memo(function(n){const{childItemId:t,index:r,isActive:i,isSelected:c,pane:s,paneKey:a}=n,h=Y(),{name:y}=le(),{defaultLayout:u="default",displayOptions:g,initialValueTemplates:x=H,menuItems:I,menuItemGroups:L,options:T,title:O}=s,{apiVersion:S,defaultOrdering:b=H,filter:m}=T,d=Tt(T.params||et),P=s.source,p=l.exports.useMemo(()=>st(m,d),[m,d]),R=(g==null?void 0:g.showIcons)!==!1,[w,_]=B(p,"layout",u),D=l.exports.useMemo(()=>(b==null?void 0:b.length)>0?{by:b}:z,[b]),[E,X]=B(p,"sortOrder",D),Q=p&&E?ct(E,h.get(p)):E,J=de(Q),Z=ot(m),{error:ee,fullList:te,handleListChange:ne,isLoading:re,items:se,onRetry:oe}=gt({filter:m,params:d,sortOrder:J,apiVersion:S});return o(pe,{name:P||y,children:v(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[fe,o(K,{index:r,initialValueTemplates:x,menuItems:I,menuItemGroups:L,setLayout:_,setSortOrder:X,title:O}),o(pt,{childItemId:t,error:ee,filterIsSimpleTypeContraint:Z,fullList:te,isActive:i,isLoading:re,items:se,layout:w,onListChange:ne,onRetry:oe,showIcons:R})]})})});export{xt as default};
