(()=>{"use strict";var e,t={341:()=>{const e=window.wp.blocks,t=window.React,o=window.wp.blockEditor,r=window.wp.data,n=window.ReactJSXRuntime,s=["goodmotion/tab-item"],i=JSON.parse('{"UU":"goodmotion/tab-group"}');(0,e.registerBlockType)(i.UU,{edit:function(e){const{clientId:i,setAttributes:a,attributes:l}=e,c=(0,r.useSelect)((e=>e(o.store).getBlock(i).innerBlocks));return(0,t.useEffect)((()=>{c.length>0&&a({showID:c[0].clientId})}),[]),(0,n.jsxs)("div",{...(0,o.useBlockProps)(),children:[(0,n.jsx)("div",{className:"tab-control",children:c.map((e=>(0,n.jsx)("button",{onClick:()=>a({showID:e.clientId}),className:e.clientId===l.showID?"tab-is-active":"",children:e.attributes.title})))}),(0,n.jsx)("div",{className:"tab-content",children:(0,n.jsx)(o.InnerBlocks,{allowedBlocks:s})})]})},save:function(e){return(0,n.jsx)(o.InnerBlocks.Content,{})}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,o,n,s)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],s=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,n,s]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={367:0,175:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,s,i=o[0],a=o[1],l=o[2],c=0;if(i.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(t&&t(o);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self.webpackChunkmarvelous_tab=self.webpackChunkmarvelous_tab||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[175],(()=>r(341)));n=r.O(n)})();