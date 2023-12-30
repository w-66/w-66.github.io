import{k as m,g as G,d as F,bc as f,h as E,c3 as p,a1 as N}from"./index-154b26d8.js";const x=["wrap","nowrap","wrap-reverse"],d=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],u=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],P=(e,n)=>{const l={};return x.forEach(t=>{l[`${e}-wrap-${t}`]=n.wrap===t}),l},I=(e,n)=>{const l={};return u.forEach(t=>{l[`${e}-align-${t}`]=n.align===t}),l[`${e}-align-stretch`]=!n.align&&!!n.vertical,l},V=(e,n)=>{const l={};return d.forEach(t=>{l[`${e}-justify-${t}`]=n.justify===t}),l};function T(e,n){return m(Object.assign(Object.assign(Object.assign({},P(e,n)),I(e,n)),V(e,n)))}const W=e=>{const{componentCls:n}=e;return{[n]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},_=e=>{const{componentCls:n}=e;return{[n]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},L=e=>{const{componentCls:n}=e,l={};return x.forEach(t=>{l[`${n}-wrap-${t}`]={flexWrap:t}}),l},z=e=>{const{componentCls:n}=e,l={};return u.forEach(t=>{l[`${n}-align-${t}`]={alignItems:t}}),l},A=e=>{const{componentCls:n}=e,l={};return d.forEach(t=>{l[`${n}-justify-${t}`]={justifyContent:t}}),l},D=()=>({}),J=G("Flex",e=>{const{paddingXS:n,padding:l,paddingLG:t}=e,s=F(e,{flexGapSM:n,flexGap:l,flexGapLG:t});return[W(s),_(s),L(s),z(s),A(s)]},D);var M=globalThis&&globalThis.__rest||function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(l[t[s]]=e[t[s]]);return l};const R=f.forwardRef((e,n)=>{const{prefixCls:l,rootClassName:t,className:s,style:y,flex:g,gap:o,children:C,vertical:c=!1,component:h="div"}=e,S=M(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:a,direction:b,getPrefixCls:j}=f.useContext(E),r=j("flex",l),[$,v]=J(r),w=c??(a==null?void 0:a.vertical),O=m(s,t,a==null?void 0:a.className,r,v,T(r,e),{[`${r}-rtl`]:b==="rtl",[`${r}-gap-${o}`]:p(o),[`${r}-vertical`]:w}),i=Object.assign(Object.assign({},a==null?void 0:a.style),y);return g&&(i.flex=g),o&&!p(o)&&(i.gap=o),$(f.createElement(h,Object.assign({ref:n,className:O,style:i},N(S,["justify","wrap","align"])),C))}),X=R;export{X as F};
