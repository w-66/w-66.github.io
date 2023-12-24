import{p as s,q as e,aR as oe,aS as ae,aT as f,aU as K,aV as D,aW as ne,aX as se,aY as le,aZ as ie,a_ as re,a$ as ce,b0 as de,b1 as ue,b2 as ge,b3 as he,b4 as me,J as _e,b5 as fe,b6 as pe,b7 as xe}from"./index-2c5cc3df.js";import{L as B,a as o,b as _,c as L,d as F,e as y,f as p,T as g,g as k,h as Ne,i as Ce,j as be,k as ke,l as Le,m as ye,n as je,o as Se,p as G,q as Ee,r as P}from"./LexicalLinkPlugin-4e56d474.js";import{A as q}from"./index-64924646.js";import"./SearchOutlined-30b41272.js";import"./useLocale-87a9c90c.js";function Te(t){const i=t.getNodes();return i.length===0?new Set([t.anchor.getNode().getParentOrThrow(),t.focus.getNode().getParentOrThrow()]):new Set(i.map(d=>o.$isElementNode(d)?d:d.getParentOrThrow()))}function Me(t){const i=o.$getSelection();if(!o.$isRangeSelection(i))return!1;const d=Te(i);let u=0;for(const r of d)if(_.$isListNode(r))u=Math.max(_.$getListDepth(r)+1,u);else if(_.$isListItemNode(r)){const h=r.getParent();if(!_.$isListNode(h))throw new Error("ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.");u=Math.max(_.$getListDepth(h)+1,u)}return u<=t}function Oe({maxDepth:t}){const[i]=B.useLexicalComposerContext();return s.useEffect(()=>i.registerCommand(o.INDENT_CONTENT_COMMAND,()=>!Me(t??7),o.COMMAND_PRIORITY_HIGH),[i,t]),null}function Re(){const[t]=B.useLexicalComposerContext();return s.useEffect(()=>L.registerCodeHighlighting(t),[t]),null}const $=1,Ae=new Set(["paragraph","quote","code","h1","h2","h3","h4","h5","h6","ul","ol"]);function Ie(){const[t,i]=s.useState(!1),[d,u]=s.useState("paragraph"),[r,h]=s.useState(!1),[j,S]=s.useState(!1),[m,R]=s.useState(!1),[x,c]=s.useState(!1),[E,T]=s.useState(!1),[A,M]=s.useState(!1),[N,C]=s.useState(!1),[O,H]=s.useState(""),[v,Q]=s.useState(null),[a]=B.useLexicalComposerContext(),w=s.useCallback(()=>{const n=o.$getSelection();if(o.$isRangeSelection(n)){const l=n.anchor.getNode(),b=l.getKey()==="root"?l:l.getTopLevelElementOrThrow(),U=b.getKey();if(a.getElementByKey(U)!==null)if(Q(U),_.$isListNode(b)){const I=F.$getNearestNodeOfType(l,_.ListNode),te=I?I.getTag():b.getTag();u(te)}else{const I=y.$isHeadingNode(b)?b.getTag():b.getType();u(I),L.$isCodeNode(b)&&H(b.getLanguage()||L.getDefaultCodeLanguage())}i(n.hasFormat("bold")),c(n.hasFormat("italic")),T(n.hasFormat("underline")),M(n.hasFormat("strikethrough")),C(n.hasFormat("code"));const z=V(n),ee=z.getParent();p.$isLinkNode(ee)||p.$isLinkNode(z)?R(!0):R(!1)}},[a]);s.useEffect(()=>F.mergeRegister(a.registerUpdateListener(({editorState:n})=>{n.read(()=>{w()})}),a.registerCommand(o.SELECTION_CHANGE_COMMAND,(n,l)=>(w(),!1),$),a.registerCommand(o.CAN_UNDO_COMMAND,n=>(h(n),!1),$),a.registerCommand(o.CAN_REDO_COMMAND,n=>(S(n),!1),$)),[a,w]);const Y=s.useCallback(()=>{m?a.dispatchCommand(p.TOGGLE_LINK_COMMAND,null):a.dispatchCommand(p.TOGGLE_LINK_COMMAND,"https://")},[a,m]),J=n=>{if(n===d)return null;n==="h1"?a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&(console.log("设置h1"),k.$setBlocksType(l,()=>y.$createHeadingNode("h1")))}):n==="h2"?a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&k.$setBlocksType(l,()=>y.$createHeadingNode("h2"))}):n==="h3"?a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&k.$setBlocksType(l,()=>y.$createHeadingNode("h3"))}):n==="code"?a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&k.$setBlocksType(l,()=>L.$createCodeNode())}):n==="paragraph"?a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&k.$setBlocksType(l,()=>o.$createParagraphNode())}):n==="ul"?a.dispatchCommand(_.INSERT_UNORDERED_LIST_COMMAND):n==="ol"?a.dispatchCommand(_.INSERT_ORDERED_LIST_COMMAND):n==="quote"&&a.update(()=>{const l=o.$getSelection();o.$isRangeSelection(l)&&k.$setBlocksType(l,()=>y.$createQuoteNode())})},W=s.useMemo(()=>L.getCodeLanguages(),[]),Z=s.useCallback(n=>{H(n),a.update(()=>{if(v!==null){const l=o.$getNodeByKey(v);L.$isCodeNode(l)&&l.setLanguage(n)}})},[a,v]);return e.jsxs("div",{className:"toolbar_plugin",children:[e.jsx(g,{bordered:!1,color:"white","aria-label":"Undo",className:"toolbar_item "+(r?"active":""),onClick:()=>{a.dispatchCommand(o.UNDO_COMMAND)},children:e.jsx(oe,{style:{opacity:r?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Redo",className:"toolbar_item "+(j?"active":""),onClick:()=>{a.dispatchCommand(o.REDO_COMMAND)},children:e.jsx(ae,{style:{opacity:j?1:.5},className:"toolbar_plugin_icon"})}),Ae.has(d)&&e.jsx(g,{bordered:!1,color:"white","aria-label":"Redo",className:"toolbar_item",children:e.jsx(q,{className:"toolbar_node_selector",bordered:!1,value:d,onSelect:J,options:[{value:"paragraph",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(K,{style:{fontSize:10}}),e.jsx("div",{children:"Normal"})]})},{value:"code",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(D,{style:{fontSize:10}}),e.jsx("div",{children:"Code"})]})},{value:"ul",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(ne,{style:{fontSize:10}}),e.jsx("div",{children:"List"})]})},{value:"ol",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(se,{style:{fontSize:10}}),e.jsx("div",{children:"List"})]})},{value:"quote",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(le,{style:{fontSize:10}}),e.jsx("div",{children:"Quote"})]})},{value:"h1",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(ie,{style:{fontSize:10}}),e.jsx("div",{children:"H1"})]})},{value:"h2",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(re,{style:{fontSize:10}}),e.jsx("div",{children:"H2"})]})},{value:"h3",label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(ce,{style:{fontSize:10}}),e.jsx("div",{children:"H3"})]})}]})}),d==="code"?e.jsx(g,{bordered:!1,color:"white","aria-label":"Redo",className:"toolbar_item",children:e.jsx(q,{className:"toolbar_code_language_selector",bordered:!1,value:O,onSelect:Z,options:W.map(n=>({value:n,label:e.jsxs(f,{size:4,align:"start",children:[e.jsx(D,{style:{fontSize:10}}),e.jsx("div",{children:n})]})}))})}):e.jsxs(e.Fragment,{children:[e.jsx(g,{bordered:!1,color:"white","aria-label":"Format Bold",className:"toolbar_item "+(t?"active":""),onClick:()=>{a.dispatchCommand(o.FORMAT_TEXT_COMMAND,"bold")},children:e.jsx(de,{style:{opacity:t?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Format Italics",className:"toolbar_item "+(x?"active":""),onClick:()=>{a.dispatchCommand(o.FORMAT_TEXT_COMMAND,"italic")},children:e.jsx(ue,{style:{opacity:x?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Format Underline",className:"toolbar_item "+(E?"active":""),onClick:()=>{a.dispatchCommand(o.FORMAT_TEXT_COMMAND,"underline")},children:e.jsx(ge,{style:{opacity:E?1:.5},className:"toolbar_plugin_icon"})}),e.jsxs(g,{bordered:!1,color:"white","aria-label":"Format Strikethrough",className:"toolbar_item "+(A?"active":""),onClick:()=>{a.dispatchCommand(o.FORMAT_TEXT_COMMAND,"strikethrough")},children:[" ",e.jsx(he,{style:{opacity:A?1:.5},className:"toolbar_plugin_icon"})]}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Insert Code",onClick:()=>{a.dispatchCommand(o.FORMAT_TEXT_COMMAND,"code")},className:"toolbar_item "+(N?"active":""),children:e.jsx(D,{style:{opacity:N?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Insert Link",onClick:Y,className:"toolbar_item "+(m?"active":""),children:e.jsx(me,{style:{opacity:m?1:.5},className:"toolbar_plugin_icon"})}),m&&_e.createPortal(e.jsx($e,{editor:a}),document.body),e.jsx(g,{bordered:!1,color:"white","aria-label":"Left Align",onClick:()=>{a.dispatchCommand(o.FORMAT_ELEMENT_COMMAND,"left")},className:"toolbar_item ",children:e.jsx(fe,{style:{opacity:m?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Center Align",onClick:()=>{a.dispatchCommand(o.FORMAT_ELEMENT_COMMAND,"center")},className:"toolbar_item ",children:e.jsx(pe,{style:{opacity:m?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Left Align",onClick:()=>{a.dispatchCommand(o.FORMAT_ELEMENT_COMMAND,"right")},className:"toolbar_item ",children:e.jsx(xe,{style:{opacity:m?1:.5},className:"toolbar_plugin_icon"})}),e.jsx(g,{bordered:!1,color:"white","aria-label":"Left Align",onClick:()=>{a.dispatchCommand(o.FORMAT_ELEMENT_COMMAND,"justify")},className:"toolbar_item ",children:e.jsx(K,{style:{opacity:m?1:.5},className:"toolbar_plugin_icon"})})]})]})}function V(t){const i=t.anchor,d=t.focus,u=t.anchor.getNode(),r=t.focus.getNode();return u===r?u:t.isBackward()?k.$isAtNodeEnd(d)?u:r:k.$isAtNodeEnd(i)?r:u}function X(t,i){i===null?(t.style.opacity="0",t.style.top="-1000px",t.style.left="-1000px"):(t.style.opacity="1",t.style.top=`${i.top+i.height+window.pageYOffset+10}px`,t.style.left=`${i.left+window.pageXOffset-t.offsetWidth/2+i.width/2}px`)}function $e({editor:t}){const i=s.useRef(null),d=s.useRef(null),u=s.useRef(!1),[r,h]=s.useState(""),[j,S]=s.useState(!1),[m,R]=s.useState(null),x=s.useCallback(()=>{const c=o.$getSelection();if(o.$isRangeSelection(c)){const N=V(c),C=N.getParent();p.$isLinkNode(C)?h(C.getURL()):p.$isLinkNode(N)?h(N.getURL()):h("")}const E=i.current,T=window.getSelection(),A=document.activeElement;if(E===null)return;const M=t.getRootElement();if(c!==null&&!T.isCollapsed&&M!==null&&M.contains(T.anchorNode)){const N=T.getRangeAt(0);let C;if(T.anchorNode===M){let O=M;for(;O.firstElementChild!=null;)O=O.firstElementChild;C=O.getBoundingClientRect()}else C=N.getBoundingClientRect();u.current||X(E,C),R(c)}else(!A||A.className!=="link-input")&&(X(E,null),R(null),S(!1),h(""));return!0},[t]);return s.useEffect(()=>F.mergeRegister(t.registerUpdateListener(({editorState:c})=>{c.read(()=>{x()})}),t.registerCommand(o.SELECTION_CHANGE_COMMAND,()=>(x(),!0),$)),[t,x]),s.useEffect(()=>{t.getEditorState().read(()=>{x()})},[t,x]),s.useEffect(()=>{j&&d.current&&d.current.focus()},[j]),e.jsx("div",{ref:i,className:"link-editor",children:j?e.jsx("input",{ref:d,className:"link-input",value:r,onChange:c=>{h(c.target.value)},onKeyDown:c=>{c.key==="Enter"?(c.preventDefault(),m!==null&&(r!==""&&t.dispatchCommand(p.TOGGLE_LINK_COMMAND,r),S(!1))):c.key==="Escape"&&(c.preventDefault(),S(!1))}}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"link-input",children:[e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:r}),e.jsx("div",{className:"link-edit",role:"button",tabIndex:0,onMouseDown:c=>c.preventDefault(),onClick:()=>{S(!0)}})]})})})}const ve={ltr:"e_ltr",rtl:"e_rtl",placeholder:"e_placeholder",paragraph:"e_paragraph",quote:"e_quote",heading:{h1:"e_heading_h1",h2:"e_heading_h2",h3:"e_heading_h3",h4:"e_heading_h4",h5:"e_heading_h5"},table:"e_table",text:{underline:"e_text_underline",strikethrough:"e_text_strikethrough",underlineStrikethrough:"e_text_underlineStrikethrough",code:"e_text_code"},code:"e_node_code",codeHighlight:{atrule:"e_tokenAttr",attr:"e_tokenAttr",boolean:"e_tokenProperty",builtin:"e_tokenSelector",cdata:"e_tokenComment",char:"e_tokenSelector",class:"e_tokenFunction","class-name":"e_tokenFunction",comment:"e_tokenComment",constant:"e_tokenProperty",deleted:"e_tokenProperty",doctype:"e_tokenComment",entity:"e_tokenOperator",function:"e_tokenFunction",important:"e_tokenVariable",inserted:"e_tokenSelector",keyword:"e_tokenAttr",namespace:"e_tokenVariable",number:"e_tokenProperty",operator:"e_tokenOperator",prolog:"e_tokenComment",property:"e_tokenProperty",punctuation:"e_tokenPunctuation",regex:"e_tokenVariable",selector:"e_tokenSelector",string:"e_tokenSelector",symbol:"e_tokenProperty",tag:"e_tokenProperty",url:"e_tokenOperator",variable:"e_tokenVariable"}};const we={theme:ve,onError(t){throw t},nodes:[y.HeadingNode,y.QuoteNode,_.ListNode,_.ListItemNode,L.CodeNode,L.CodeHighlightNode,p.LinkNode,p.AutoLinkNode,P.TableNode,P.TableRowNode,P.TableCellNode]};function De(){return e.jsx(e.Fragment,{children:e.jsx(Ne.LexicalComposer,{initialConfig:we,children:e.jsxs("div",{className:"e-container",children:[e.jsx(Ie,{}),e.jsxs("div",{className:"e-inner",children:[e.jsx(Ce.RichTextPlugin,{contentEditable:e.jsx(be.ContentEditable,{className:"e-input"}),placeholder:e.jsx(Pe,{}),ErrorBoundary:ke}),e.jsx(Le.MarkdownShortcutPlugin,{transformers:ye.TRANSFORMERS}),e.jsx(Oe,{maxDepth:7}),e.jsx(je.AutoFocusPlugin,{}),e.jsx(Re,{}),e.jsx(Se.ListPlugin,{}),e.jsx(G.LinkPlugin,{}),e.jsx(Ee.HistoryPlugin,{}),e.jsx(G.LinkPlugin,{})]})]})})})}function Pe(){return e.jsx("div",{className:"e_placeholder",children:"Typing..."})}function Ge(){return e.jsx(De,{})}export{Ge as default};
