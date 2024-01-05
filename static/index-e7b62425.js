import{r as R,A as ae,_ as ce,R as M,g as he,m as de,a as ue,u as fe,b as ge,C as me,c as pe,B as Ce,j as h,d as $,e as Ee,f as we,h as D,S as ve,i as Me,L as Q,I as Re,k as xe,l as ye,n as Se,o as Ae,p as _e,q as Ne,s as Pe,O as Ie}from"./index-1b6323ef.js";import{P as j}from"./index-d623530f.js";import{L as Y}from"./LayoutResponsiveLeft-775ce721.js";import{M as b,N as be}from"./NavbarAntd-66c87e42.js";import{S as je}from"./index-bc0f2d0e.js";import{u as Oe}from"./statusUtils-9b9d8852.js";import Le from"./index-ba9e16ec.js";import{T as L}from"./index-67944f92.js";import"./useBreakpoint-b852e6e0.js";import"./index-4a63b51c.js";import"./RightOutlined-c47acce2.js";import"./EllipsisOutlined-efcb588e.js";import"./Overflow-62a15762.js";import"./PurePanel-72c8a244.js";import"./useDispatch-7930dae9.js";import"./index-87e7e444.js";import"./index-5babdb67.js";import"./CheckOutlined-1d2fd4b2.js";import"./styleChecker-fd4ecb06.js";import"./TextArea-e64046db.js";var ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};const Te=ze;var Fe=function(r,l){return R.createElement(ae,ce({},r,{ref:l,icon:Te}))};const He=R.forwardRef(Fe);var Be=Object.defineProperty,O=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,U=(a,r,l)=>r in a?Be(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,T=(a,r)=>{for(var l in r||(r={}))G.call(r,l)&&U(a,l,r[l]);if(O)for(var l of O(r))W.call(r,l)&&U(a,l,r[l]);return a},X=(a,r)=>{var l={};for(var i in a)G.call(a,i)&&r.indexOf(i)<0&&(l[i]=a[i]);if(a!=null&&O)for(var i of O(a))r.indexOf(i)<0&&W.call(a,i)&&(l[i]=a[i]);return l};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var P;(a=>{const r=class{constructor(e,t,n,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let s=[];for(let c=0;c<this.size;c++)s.push(!1);for(let c=0;c<this.size;c++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const d=this.addEccAndInterleave(n);if(this.drawCodewords(d),o==-1){let c=1e9;for(let C=0;C<8;C++){this.applyMask(C),this.drawFormatBits(C);const m=this.getPenaltyScore();m<c&&(o=C,c=m),this.applyMask(C)}}u(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(e,t){const n=a.QrSegment.makeSegments(e);return r.encodeSegments(n,t)}static encodeBinary(e,t){const n=a.QrSegment.makeBytes(e);return r.encodeSegments([n],t)}static encodeSegments(e,t,n=1,o=40,s=-1,d=!0){if(!(r.MIN_VERSION<=n&&n<=o&&o<=r.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let c,C;for(c=n;;c++){const p=r.getNumDataCodewords(c,t)*8,w=E.getTotalBits(e,c);if(w<=p){C=w;break}if(c>=o)throw new RangeError("Data too long")}for(const p of[r.Ecc.MEDIUM,r.Ecc.QUARTILE,r.Ecc.HIGH])d&&C<=r.getNumDataCodewords(c,p)*8&&(t=p);let m=[];for(const p of e){i(p.mode.modeBits,4,m),i(p.numChars,p.mode.numCharCountBits(c),m);for(const w of p.getData())m.push(w)}u(m.length==C);const S=r.getNumDataCodewords(c,t)*8;u(m.length<=S),i(0,Math.min(4,S-m.length),m),i(0,(8-m.length%8)%8,m),u(m.length%8==0);for(let p=236;m.length<S;p^=253)i(p,8,m);let v=[];for(;v.length*8<m.length;)v.push(0);return m.forEach((p,w)=>v[w>>>3]|=p<<7-(w&7)),new r(c,t,v,s)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let o=0;o<t;o++)n==0&&o==0||n==0&&o==t-1||n==t-1&&o==0||this.drawAlignmentPattern(e[n],e[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let s=0;s<10;s++)n=n<<1^(n>>>9)*1335;const o=(t<<10|n)^21522;u(o>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,g(o,s));this.setFunctionModule(8,7,g(o,6)),this.setFunctionModule(8,8,g(o,7)),this.setFunctionModule(7,8,g(o,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,g(o,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,g(o,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,g(o,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;u(t>>>18==0);for(let n=0;n<18;n++){const o=g(t,n),s=this.size-11+n%3,d=Math.floor(n/3);this.setFunctionModule(s,d,o),this.setFunctionModule(d,s,o)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let o=-4;o<=4;o++){const s=Math.max(Math.abs(o),Math.abs(n)),d=e+o,c=t+n;0<=d&&d<this.size&&0<=c&&c<this.size&&this.setFunctionModule(d,c,s!=2&&s!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)this.setFunctionModule(e+o,t+n,Math.max(Math.abs(o),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=r.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const o=r.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],s=r.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],d=Math.floor(r.getNumRawDataModules(t)/8),c=o-d%o,C=Math.floor(d/o);let m=[];const S=r.reedSolomonComputeDivisor(s);for(let p=0,w=0;p<o;p++){let x=e.slice(w,w+C-s+(p<c?0:1));w+=x.length;const A=r.reedSolomonComputeRemainder(x,S);p<c&&x.push(0),m.push(x.concat(A))}let v=[];for(let p=0;p<m[0].length;p++)m.forEach((w,x)=>{(p!=C-s||x>=c)&&v.push(w[p])});return u(v.length==d),v}drawCodewords(e){if(e.length!=Math.floor(r.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let o=0;o<this.size;o++)for(let s=0;s<2;s++){const d=n-s,C=(n+1&2)==0?this.size-1-o:o;!this.isFunction[C][d]&&t<e.length*8&&(this.modules[C][d]=g(e[t>>>3],7-(t&7)),t++)}}u(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let o;switch(e){case 0:o=(n+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=n%3==0;break;case 3:o=(n+t)%3==0;break;case 4:o=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:o=n*t%2+n*t%3==0;break;case 6:o=(n*t%2+n*t%3)%2==0;break;case 7:o=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&o&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let d=!1,c=0,C=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[s][m]==d?(c++,c==5?e+=r.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,C),d||(e+=this.finderPenaltyCountPatterns(C)*r.PENALTY_N3),d=this.modules[s][m],c=1);e+=this.finderPenaltyTerminateAndCount(d,c,C)*r.PENALTY_N3}for(let s=0;s<this.size;s++){let d=!1,c=0,C=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[m][s]==d?(c++,c==5?e+=r.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,C),d||(e+=this.finderPenaltyCountPatterns(C)*r.PENALTY_N3),d=this.modules[m][s],c=1);e+=this.finderPenaltyTerminateAndCount(d,c,C)*r.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let d=0;d<this.size-1;d++){const c=this.modules[s][d];c==this.modules[s][d+1]&&c==this.modules[s+1][d]&&c==this.modules[s+1][d+1]&&(e+=r.PENALTY_N2)}let t=0;for(const s of this.modules)t=s.reduce((d,c)=>d+(c?1:0),t);const n=this.size*this.size,o=Math.ceil(Math.abs(t*20-n*10)/n)-1;return u(0<=o&&o<=9),e+=o*r.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let o=this.size-7;n.length<e;o-=t)n.splice(1,0,o);return n}}static getNumRawDataModules(e){if(e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return u(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(r.getNumRawDataModules(e)/8)-r.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*r.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let o=0;o<e-1;o++)t.push(0);t.push(1);let n=1;for(let o=0;o<e;o++){for(let s=0;s<t.length;s++)t[s]=r.reedSolomonMultiply(t[s],n),s+1<t.length&&(t[s]^=t[s+1]);n=r.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(o=>0);for(const o of e){const s=o^n.shift();n.push(0),t.forEach((d,c)=>n[c]^=r.reedSolomonMultiply(d,s))}return n}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let n=0;for(let o=7;o>=0;o--)n=n<<1^(n>>>7)*285,n^=(t>>>o&1)*e;return u(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];u(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let l=r;l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=l;function i(e,t,n){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let o=t-1;o>=0;o--)n.push(e>>>o&1)}function g(e,t){return(e>>>t&1)!=0}function u(e){if(!e)throw new Error("Assertion error")}const f=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new f(f.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!f.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const o=Math.min(e.length-n,3);i(parseInt(e.substr(n,o),10),o*3+1,t),n+=o}return new f(f.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!f.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let o=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;o+=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),i(o,11,t)}return n<e.length&&i(f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new f(f.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:f.isNumeric(e)?[f.makeNumeric(e)]:f.isAlphanumeric(e)?[f.makeAlphanumeric(e)]:[f.makeBytes(f.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,t)}static isNumeric(e){return f.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return f.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const o of e){const s=o.mode.numCharCountBits(t);if(o.numChars>=1<<s)return 1/0;n+=4+s+o.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let E=f;E.NUMERIC_REGEX=/^[0-9]*$/,E.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,E.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",a.QrSegment=E})(P||(P={}));(a=>{(r=>{const l=class{constructor(g,u){this.ordinal=g,this.formatBits=u}};let i=l;i.LOW=new l(0,1),i.MEDIUM=new l(1,0),i.QUARTILE=new l(2,3),i.HIGH=new l(3,2),r.Ecc=i})(a.QrCode||(a.QrCode={}))})(P||(P={}));(a=>{(r=>{const l=class{constructor(g,u){this.modeBits=g,this.numBitsCharCount=u}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};let i=l;i.NUMERIC=new l(1,[10,12,14]),i.ALPHANUMERIC=new l(2,[9,11,13]),i.BYTE=new l(4,[8,16,16]),i.KANJI=new l(8,[8,10,12]),i.ECI=new l(7,[0,0,0]),r.Mode=i})(a.QrSegment||(a.QrSegment={}))})(P||(P={}));var I=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var V={L:I.QrCode.Ecc.LOW,M:I.QrCode.Ecc.MEDIUM,Q:I.QrCode.Ecc.QUARTILE,H:I.QrCode.Ecc.HIGH},K=128,Z="L",q="#FFFFFF",J="#000000",ee=!1,F=4,ke=.1;function te(a,r=0){const l=[];return a.forEach(function(i,g){let u=null;i.forEach(function(f,E){if(!f&&u!==null){l.push(`M${u+r} ${g+r}h${E-u}v1H${u+r}z`),u=null;return}if(E===i.length-1){if(!f)return;u===null?l.push(`M${E+r},${g+r} h1v1H${E+r}z`):l.push(`M${u+r},${g+r} h${E+1-u}v1H${u+r}z`);return}f&&u===null&&(u=E)})}),l.join("")}function ne(a,r){return a.slice().map((l,i)=>i<r.y||i>=r.y+r.h?l:l.map((g,u)=>u<r.x||u>=r.x+r.w?g:!1))}function oe(a,r,l,i){if(i==null)return null;const g=l?F:0,u=a.length+g*2,f=Math.floor(r*ke),E=u/r,e=(i.width||f)*E,t=(i.height||f)*E,n=i.x==null?a.length/2-e/2:i.x*E,o=i.y==null?a.length/2-t/2:i.y*E;let s=null;if(i.excavate){let d=Math.floor(n),c=Math.floor(o),C=Math.ceil(e+n-d),m=Math.ceil(t+o-c);s={x:d,y:c,w:C,h:m}}return{x:n,y:o,h:t,w:e,excavation:s}}var De=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Qe(a){const r=a,{value:l,size:i=K,level:g=Z,bgColor:u=q,fgColor:f=J,includeMargin:E=ee,style:e,imageSettings:t}=r,n=X(r,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),o=t==null?void 0:t.src,s=R.useRef(null),d=R.useRef(null),[c,C]=R.useState(!1);R.useEffect(()=>{if(s.current!=null){const v=s.current,p=v.getContext("2d");if(!p)return;let w=I.QrCode.encodeText(l,V[g]).getModules();const x=E?F:0,A=w.length+x*2,y=oe(w,i,E,t),_=d.current,H=y!=null&&_!==null&&_.complete&&_.naturalHeight!==0&&_.naturalWidth!==0;H&&y.excavation!=null&&(w=ne(w,y.excavation));const B=window.devicePixelRatio||1;v.height=v.width=i*B;const k=i/A*B;p.scale(k,k),p.fillStyle=u,p.fillRect(0,0,A,A),p.fillStyle=f,De?p.fill(new Path2D(te(w,x))):w.forEach(function(re,se){re.forEach(function(ie,le){ie&&p.fillRect(le+x,se+x,1,1)})}),H&&p.drawImage(_,y.x+x,y.y+x,y.w,y.h)}}),R.useEffect(()=>{C(!1)},[o]);const m=T({height:i,width:i},e);let S=null;return o!=null&&(S=M.createElement("img",{src:o,key:o,style:{display:"none"},onLoad:()=>{C(!0)},ref:d})),M.createElement(M.Fragment,null,M.createElement("canvas",T({style:m,height:i,width:i,ref:s},n)),S)}function Ue(a){const r=a,{value:l,size:i=K,level:g=Z,bgColor:u=q,fgColor:f=J,includeMargin:E=ee,imageSettings:e}=r,t=X(r,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=I.QrCode.encodeText(l,V[g]).getModules();const o=E?F:0,s=n.length+o*2,d=oe(n,i,E,e);let c=null;e!=null&&d!=null&&(d.excavation!=null&&(n=ne(n,d.excavation)),c=M.createElement("image",{xlinkHref:e.src,height:d.h,width:d.w,x:d.x+o,y:d.y+o,preserveAspectRatio:"none"}));const C=te(n,o);return M.createElement("svg",T({height:i,width:i,viewBox:`0 0 ${s} ${s}`},t),M.createElement("path",{fill:u,d:`M0,0 h${s}v${s}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:f,d:C,shapeRendering:"crispEdges"}),c)}const $e=a=>{const{componentCls:r,lineWidth:l,lineType:i,colorSplit:g}=a;return{[r]:Object.assign(Object.assign({},ue(a)),{display:"flex",justifyContent:"center",alignItems:"center",padding:a.paddingSM,backgroundColor:a.colorWhite,borderRadius:a.borderRadiusLG,border:`${fe(l)} ${i} ${g}`,position:"relative",overflow:"hidden",[`& > ${r}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:a.colorText,lineHeight:a.lineHeight,background:a.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${r}-expired`]:{color:a.QRCodeExpiredTextColor}},"> canvas":{alignSelf:"stretch",flex:"auto",minWidth:0},"&-icon":{marginBlockEnd:a.marginXS,fontSize:a.controlHeight}}),[`${r}-borderless`]:{borderColor:"transparent"}}},Ye=()=>({}),Ge=he("QRCode",a=>{const r=de(a,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"});return $e(r)},Ye),We=a=>{const[,r]=ge(),{value:l,type:i="canvas",icon:g="",size:u=160,iconSize:f=40,color:E=r.colorText,errorLevel:e="M",status:t="active",bordered:n=!0,onRefresh:o,style:s,className:d,rootClassName:c,prefixCls:C,bgColor:m="transparent"}=a,{getPrefixCls:S}=R.useContext(me),v=S("qrcode",C),[p,w]=Ge(v),A={value:l,size:u,level:e,bgColor:m,fgColor:E,style:{width:void 0,height:void 0},imageSettings:g?{src:g,x:void 0,y:void 0,height:f,width:f,excavate:!0}:void 0},[y]=Oe("QRCode");if(!l)return null;const _=pe(v,d,c,w,{[`${v}-borderless`]:!n});return p(M.createElement("div",{className:_,style:Object.assign(Object.assign({},s),{width:u,height:u,backgroundColor:m})},t!=="active"&&M.createElement("div",{className:`${v}-mask`},t==="loading"&&M.createElement(je,null),t==="expired"&&M.createElement(M.Fragment,null,M.createElement("p",{className:`${v}-expired`},y==null?void 0:y.expired),o&&M.createElement(Ce,{type:"link",icon:M.createElement(He,null),onClick:o},y==null?void 0:y.refresh))),i==="canvas"?M.createElement(Qe,Object.assign({},A)):M.createElement(Ue,Object.assign({},A))))},Xe=We,Ve=a=>{const{hoverEvent:r=!1,hoverTitle:l="",hoverContent:i=h.jsx("div",{children:"hover content"}),clickEvent:g=!1,clickTitle:u="clickTitle",clickContent:f=h.jsx("div",{children:"This is click content."})}=a,[E,e]=R.useState(!1),[t,n]=R.useState(!1),o=()=>{e(!1),n(!1)},s=c=>{n(c),e(!1)},d=c=>{n(!1),e(c)};return r&&g?h.jsx(j,{style:{width:500},content:i,title:l,trigger:"hover",open:t,onOpenChange:s,children:h.jsx(j,{content:h.jsxs("div",{children:[f,h.jsx("div",{onClick:o,children:"Close"})]}),title:u,trigger:"click",open:E,onOpenChange:d,children:h.jsx(h.Fragment,{children:a.children})})}):r?h.jsx(j,{style:{width:500},content:i,title:l,trigger:"hover",open:t,onOpenChange:s,children:h.jsx(h.Fragment,{children:a.children})}):h.jsx(j,{content:h.jsxs("div",{children:[f,h.jsx("div",{onClick:o,children:"Close"})]}),title:u,trigger:"click",open:E,onOpenChange:d,children:h.jsx(h.Fragment,{children:a.children})})},N="26px";function Ke(a){let r;const l=$(u=>u.elementState.Navbar.Height),{parentHeight:i}=a,{height:g}=Ee();return g>i+l+35&&(r=g-(i+l+35)),h.jsx(Y,{children:h.jsxs(we,{justify:"start",style:{marginBottom:10,padding:"10px 8px 4px 8px",marginTop:`${r}px`},children:[h.jsxs(D,{flex:1,children:[h.jsx(ve,{}),h.jsx("span",{className:"ms-2 pixel_font",style:{fontSize:"13px"},children:"Qusay"})]}),h.jsx(D,{flex:3,style:{display:"flex",justifyContent:"flex-end"},children:h.jsxs(Me,{size:2,children:[h.jsx(b,{children:h.jsx(Q,{to:"/",children:h.jsx(Re,{style:{fontSize:N}})})}),h.jsx(z,{url:"https://github.com/w-66",children:h.jsx(xe,{style:{fontSize:N}})}),h.jsx(z,{url:"https://gitee.com/q-66",children:h.jsx(ye,{style:{fontSize:N}})}),h.jsx(z,{url:"https://t.me/+7D46eOjisPc3YzQ1",children:h.jsx(Se,{style:{fontSize:N}})}),h.jsx(b,{children:h.jsx(Q,{to:"/about",children:h.jsx(Ae,{style:{fontSize:N}})})}),h.jsx(b,{children:h.jsx(_e,{style:{fontSize:N}})}),h.jsx(b,{children:h.jsx(Ne,{style:{fontSize:N}})})]})})]})})}function z(a){const{url:r,children:l}=a;return h.jsx(Ve,{hoverEvent:!0,hoverTitle:"",hoverContent:h.jsx(Xe,{errorLevel:"H",value:r,icon:"/static/icon/site_logo_small.svg",size:130}),children:h.jsx(b,{children:h.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:l})})})}function Et(){const a=window.location.hostname,r=()=>{e(window.innerHeight),u.current.offsetHeight&&g(u.current.offsetHeight)},l=$(n=>n.elementState.Navbar.Height),[i,g]=R.useState(null),u=R.useRef(null),f=R.useRef(null);R.useEffect(()=>{g(u.current.offsetHeight)},[u]);const[E,e]=R.useState(window.innerHeight);R.useEffect(()=>{window.addEventListener("resize",r);function n(){if(i<E){let o=E-window.innerHeight*.382-t+98;f.current.style.height=`${o}px`}else f.current.style.height=null}return n(),()=>{window.removeEventListener("resize",r)}},[E,u,f,i,l]);const t=100;return h.jsxs(h.Fragment,{children:[h.jsx(be,{}),"                  ",h.jsxs("div",{ref:f,children:[h.jsx("div",{style:{width:window.innerWidth,position:"absolute",top:-t},children:h.jsx(Ze,{y:t,duration:.8,scale:1,children:h.jsx(Le,{})})}),h.jsx("div",{id:"topSection",ref:u,style:{padding:"0px 8px",marginTop:window.innerHeight*(1-.618)-60-80+t},children:h.jsxs(Y,{className:"pixel_font",children:[h.jsxs("h2",{children:[h.jsx(L,{words:["Welcome to my "],loop:1,cursor:!1}),h.jsx("span",{style:{color:"red"},children:h.jsx(L,{words:["Blog","博客"],loop:0,cursor:!1})})]}),h.jsxs("span",{children:["root@",a,":~# ",h.jsx(L,{words:["Hi","Hello","我的朋友"],loop:2})]})]})})]}),h.jsx(Ke,{})]})}function Ze(a){const{children:r,y:l,style:i,delay:g=.3,duration:u=1.2}=a;return h.jsx(Pe.div,{style:i,initial:{y:0},animate:{y:l},transition:{delay:g,duration:u},children:h.jsx(Ie,{delay:.2,duration:1.2,children:r})})}export{Et as default};
