import{r as t,g as re,d as se,e as ne,X as H,af as oe,h as B,$ as ae,b2 as ie,i as F,k as A,R as le,W as ce,au as ge}from"./index-154b26d8.js";import{u as ue}from"./useBreakpoint-cbf209a2.js";import{P as de}from"./index-6f81d76a.js";const me=t.createContext({}),I=me,pe=e=>{const{antCls:n,componentCls:s,iconCls:r,avatarBg:i,avatarColor:$,containerSize:v,containerSizeLG:c,containerSizeSM:S,textFontSize:u,textFontSizeLG:x,textFontSizeSM:R,borderRadius:p,borderRadiusLG:f,borderRadiusSM:C,lineWidth:y,lineType:E,calc:O}=e,b=(g,z,d)=>({width:g,height:g,lineHeight:H(O(g).sub(O(y).mul(2)).equal()),borderRadius:"50%",[`&${s}-square`]:{borderRadius:d},[`${s}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${s}-icon`]:{fontSize:z,[`> ${r}`]:{margin:0}}});return{[s]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:$,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:i,border:`${H(y)} ${E} transparent`,"&-image":{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),b(v,u,p)),{"&-lg":Object.assign({},b(c,x,f)),"&-sm":Object.assign({},b(S,R,C)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},fe=e=>{const{componentCls:n,groupBorderColor:s,groupOverlapping:r,groupSpace:i}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:s},"> *:not(:first-child)":{marginInlineStart:r}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:i}}}},he=e=>{const{controlHeight:n,controlHeightLG:s,controlHeightSM:r,fontSize:i,fontSizeLG:$,fontSizeXL:v,fontSizeHeading3:c,marginXS:S,marginXXS:u,colorBorderBg:x}=e;return{containerSize:n,containerSizeLG:s,containerSizeSM:r,textFontSize:Math.round(($+v)/2),textFontSizeLG:c,textFontSizeSM:i,groupSpace:u,groupOverlapping:-S,groupBorderColor:x}},_=re("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:s}=e,r=se(e,{avatarBg:s,avatarColor:n});return[pe(r),fe(r)]},he);var ve=globalThis&&globalThis.__rest||function(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]]);return s};const Se=(e,n)=>{const[s,r]=t.useState(1),[i,$]=t.useState(!1),[v,c]=t.useState(!0),S=t.useRef(null),u=t.useRef(null),x=oe(n,S),{getPrefixCls:R,avatar:p}=t.useContext(B),f=t.useContext(I),C=()=>{if(!u.current||!S.current)return;const a=u.current.offsetWidth,o=S.current.offsetWidth;if(a!==0&&o!==0){const{gap:m=4}=e;m*2<o&&r(o-m*2<a?(o-m*2)/a:1)}};t.useEffect(()=>{$(!0)},[]),t.useEffect(()=>{c(!0),r(1)},[e.src]),t.useEffect(C,[e.gap]);const y=()=>{const{onError:a}=e;(a==null?void 0:a())!==!1&&c(!1)},{prefixCls:E,shape:O,size:b,src:g,srcSet:z,icon:d,className:j,rootClassName:k,alt:X,draggable:q,children:w,crossOrigin:D}=e,N=ve(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),l=ae(a=>{var o,m;return(m=(o=b??(f==null?void 0:f.size))!==null&&o!==void 0?o:a)!==null&&m!==void 0?m:"default"}),J=Object.keys(typeof l=="object"?l||{}:{}).some(a=>["xs","sm","md","lg","xl","xxl"].includes(a)),G=ue(J),K=t.useMemo(()=>{if(typeof l!="object")return{};const a=ie.find(m=>G[m]),o=l[a];return o?{width:o,height:o,lineHeight:`${o}px`,fontSize:o&&(d||w)?o/2:18}:{}},[G,l]),h=R("avatar",E),M=F(h),[Q,U]=_(h,M),Y=A({[`${h}-lg`]:l==="large",[`${h}-sm`]:l==="small"}),T=t.isValidElement(g),Z=O||(f==null?void 0:f.shape)||"circle",ee=A(h,Y,p==null?void 0:p.className,`${h}-${Z}`,{[`${h}-image`]:T||g&&v,[`${h}-icon`]:!!d},M,j,k,U),te=typeof l=="number"?{width:l,height:l,lineHeight:`${l}px`,fontSize:d?l/2:18}:{};let P;if(typeof g=="string"&&v)P=t.createElement("img",{src:g,draggable:q,srcSet:z,onError:y,alt:X,crossOrigin:D});else if(T)P=g;else if(d)P=d;else if(i||s!==1){const a=`scale(${s}) translateX(-50%)`,o={msTransform:a,WebkitTransform:a,transform:a},m=typeof l=="number"?{lineHeight:`${l}px`}:{};P=t.createElement(le,{onResize:C},t.createElement("span",{className:`${h}-string`,ref:u,style:Object.assign(Object.assign({},m),o)},w))}else P=t.createElement("span",{className:`${h}-string`,style:{opacity:0},ref:u},w);return delete N.onError,delete N.gap,Q(t.createElement("span",Object.assign({},N,{style:Object.assign(Object.assign(Object.assign(Object.assign({},te),K),p==null?void 0:p.style),N.style),className:ee,ref:x}),P))},be=t.forwardRef(Se),W=be,L=e=>{const{size:n,shape:s}=t.useContext(I),r=t.useMemo(()=>({size:e.size||n,shape:e.shape||s}),[e.size,e.shape,n,s]);return t.createElement(I.Provider,{value:r},e.children)},xe=e=>{const{getPrefixCls:n,direction:s}=t.useContext(B),{prefixCls:r,className:i,rootClassName:$,style:v,maxCount:c,maxStyle:S,size:u,shape:x,maxPopoverPlacement:R="top",maxPopoverTrigger:p="hover",children:f}=e,C=n("avatar",r),y=`${C}-group`,E=F(C),[O,b]=_(C,E),g=A(y,{[`${y}-rtl`]:s==="rtl"},E,i,$,b),z=ce(f).map((j,k)=>ge(j,{key:`avatar-key-${k}`})),d=z.length;if(c&&c<d){const j=z.slice(0,c),k=z.slice(c,d);return j.push(t.createElement(de,{key:"avatar-popover-key",content:k,trigger:p,placement:R,overlayClassName:`${y}-popover`},t.createElement(W,{style:S},`+${d-c}`))),O(t.createElement(L,{shape:x,size:u},t.createElement("div",{className:g,style:v},j)))}return O(t.createElement(L,{shape:x,size:u},t.createElement("div",{className:g,style:v},z)))},Ce=xe,V=W;V.Group=Ce;const Oe=V;export{Oe as A};
