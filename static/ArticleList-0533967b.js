import{r as e,j as s}from"./index-154b26d8.js";import{a as i}from"./index-8369ff8f.js";import"./axios-28bc18a3.js";function l(){const[r,a]=e.useState(null);return e.useEffect(()=>{i("blog_text_editor").then(t=>{const o=t.data.hits.hits;a(o)}).catch(t=>{console.error(1701770252,"获取ES数据失败：",t)})},[]),s.jsx("div",{children:r?r.map(t=>s.jsx("div",{children:t._id},t._id)):null})}export{l as default};
