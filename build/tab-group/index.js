(()=>{"use strict";var e,t={341:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,r=window.wp.data,l=window.ReactJSXRuntime,n=["goodmotion/tab-item"],a=JSON.parse('{"UU":"goodmotion/tab-group"}');(0,e.registerBlockType)(a.UU,{edit:function(e){const{clientId:a,setAttributes:i,attributes:s}=e,{selectBlock:c}=(0,r.useDispatch)("core/block-editor"),d=(0,r.useSelect)((e=>e(o.store).getBlock(a).innerBlocks));return(0,t.useEffect)((()=>{d.length>0&&i({showID:d[0].clientId})}),[]),(0,l.jsxs)("div",{...(0,o.useBlockProps)(),"aria-label":"Tab control","aria-labelledby":"tab-control-label",children:[(0,l.jsx)("div",{className:"tab-control",id:"tab-control-label",role:"tablist",children:d.map((e=>(0,l.jsx)("button",{onClick:()=>(({clientId:e})=>{i({showID:e}),c(e)})(e),className:e.clientId===s.showID?"tab-is-active":"",id:`tab-${d[0].clientId}`,role:"tab","aria-selected":e.clientId===s.showID,"aria-controls":`tab-content-${e.clientId}`,children:e.attributes.title})))}),(0,l.jsx)("div",{className:"tab-content",children:(0,l.jsx)(o.InnerBlocks,{allowedBlocks:n})})]})},save:function(e){return(0,l.jsx)(o.InnerBlocks.Content,{})}})}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,l,n)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],l=e[d][1],n=e[d][2];for(var i=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,l,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={367:0,175:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var l,n,a=o[0],i=o[1],s=o[2],c=0;if(a.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(s)var d=s(r)}for(t&&t(o);c<a.length;c++)n=a[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},o=self.webpackChunkmarvelous_tab=self.webpackChunkmarvelous_tab||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=r.O(void 0,[175],(()=>r(341)));l=r.O(l)})();