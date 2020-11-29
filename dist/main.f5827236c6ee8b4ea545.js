(()=>{var t={426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing:border-box;\r\n}\r\nbody {\r\n\tbackground: rgb(20,20,20);\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tbackground:black;\r\n\tcursor:crosshair;\r\n}",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},654:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var r=n(379),i=n.n(r),s=n(426);i()(s.Z,{insert:"head",singleton:!1});const o=s.Z.locals||{}},379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function o(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=o(u),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(s[d].references++,s[d].updater(h)):s.push({identifier:u,updater:v(h,e),references:1}),r.push(u)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,p=0;function v(t,e){var n,r,i;if(e.singleton){var s=p++;n=f||(f=c(e)),r=d.bind(null,n,s,!1),i=d.bind(null,n,s,!0)}else n=c(e),r=h.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=o(n[r]);s[i].references--}for(var c=a(t,e),l=0;l<n.length;l++){var u=o(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=c}}}},493:t=>{"use strict";t.exports=class{constructor(t,e){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.textAlign="center",this.canvas.width=t,this.canvas.height=e,this.state="game",this.scale=void 0,this.resize(),document.body.appendChild(this.canvas)}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(t/this.canvas.width,e/this.canvas.height);this.canvas.style.transform="scale("+n+")",this.canvas.style.left=(t-this.canvas.width)/2+"px",this.canvas.style.top=(e-this.canvas.height)/2+"px",this.scale=n}listen(t,e){this.canvas.addEventListener(t,e)}}},249:t=>{"use strict";t.exports=class{constructor(t="none"){this.type="none"===t?"none":t,this.color=0}avail(){return"none"===this.type}occupy(t){this.type=t}}},556:t=>{"use strict";const e=Math.round(400/3),n=Math.round(400/3);t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,CELL_WIDTH:e,CELL_HEIGHT:n,BACKGROUND_COLOR:"rgb(230,230,230)",CENTER_X:800,CENTER_Y:450,SIZE:3,PADDING:200}},123:(t,e,n)=>{"use strict";const r=n(249);t.exports=class t{constructor(t=3,e=[[new r,new r,new r],[new r,new r,new r],[new r,new r,new r]]){this.size=t,this.matrix=e}updateCells({mouse:t}){for(let e in this.matrix)for(let n in this.matrix[e])this.matrix[e][n].update({mouse:t})}copy(){return new t(this.size,this.matrix)}}},212:(t,e,n)=>{"use strict";const{CELL_WIDTH:r,CELL_HEIGHT:i,BACKGROUND_COLOR:s,CENTER_X:o,CENTER_Y:a,SIZE:c,GAME_WIDTH:l,GAME_HEIGHT:u,PADDING:d}=n(556);t.exports=function({canvas:t,grid:e,mouse:n,turn:h}){if(!e||!t)throw new Error("called from render... canvas || grid is not defined");t.ctx.fillStyle=s,t.ctx.fillRect(0,0,l,u);const f=o-r*(c/2),p=a-i*(c/2);t.ctx.strokeStyle="black",t.ctx.lineWidth=5,t.ctx.strokeRect(f,p,r*c,i*c);let v=!1;for(let s in e.matrix)for(let o in e.matrix[s]){const a=e.matrix[s][o],c=f+s*r-1,l=p+o*i-1,u=r+1,d=i+1;if(n.x>c&&n.x<c+u&&n.y>l&&n.y<l+d&&"none"===a.type&&"win"!==t.state&&!v&&(t.ctx.lineWidth=9,!v&&n.on&&(a.type=h,v=!0)),t.ctx.strokeStyle=`rgb(${a.color},${a.color},${a.color})`,t.ctx.strokeRect(c,l,u,d),"O"===a.type&&(t.ctx.lineWidth=9,t.ctx.beginPath(),t.ctx.arc(c+u/2,l+d/2,45,0,2*Math.PI),t.ctx.stroke()),"X"===a.type){t.ctx.lineWidth=9;const e=20;t.ctx.beginPath(),t.ctx.lineTo(c+e,l+e),t.ctx.lineTo(c+u-e,l+d-e),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.lineTo(c+u-e,l+e),t.ctx.lineTo(c+e,l+d-e),t.ctx.stroke()}t.ctx.lineWidth=5}t.ctx.fillStyle="black",t.ctx.font="30px sans-serif";let x=`It's ${h}'s Turn`;return"tie"===t.state&&(x="The board is full"),"win"===t.state&&(x=`Player ${h} has won`),t.ctx.fillText(x,u-d,o),v}},949:t=>{"use strict";t.exports=class{constructor(){this.x=-1,this.y=-1,this.on=!1}update({event:t,canvas:e}){const n=e.canvas.getBoundingClientRect();this.x=Math.round((t.pageX-n.left)/e.scale),this.y=Math.round((t.pageY-n.top)/e.scale)}down(){this.on=!0}up(){this.on=!1}}},356:t=>{"use strict";t.exports=class{constructor(){this.lastTime=0,this.delta=0}update(t){this.delta=(t-this.lastTime)/1e3,this.lastTime=t}}},795:t=>{function e(t){return t.every((e=>e===t[0]))}function n(t){return t.map((t=>t.type))}t.exports=function(t){for(let r in t)if(e(n(t[r]))&&"none"!==t[r][0].type)return!0;for(let r=0;r<t.length;r++){const i=[];for(let e=0;e<t[r].length;e++)i.push(t[e][r]);if(e(n(i))&&"none"!==t[0][r].type)return!0}const r=(()=>{const e=[];for(let n=0;n<t.length;n++)e.push(t[n][n]);return e})(),i=(()=>{const e=[];let n=0;for(let r=t.length-1;r>=0;r--)e.push(t[r][n]),n++;return e})();return!(!e(n(r))||"none"===t[0][0].type)||!(!e(n(i))||"none"===t[t.length-1][t.length-1].type)}}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";n(654);const{GAME_WIDTH:t,GAME_HEIGHT:e}=n(556),r=n(493),i=n(123),s=n(949),o=n(356),a=n(212),c=n(795),l=new r(t,e),u=new i,d=new s,h=new o;let f="X";window.addEventListener("resize",(()=>{l.resize()})),l.listen("mousemove",(t=>d.update({event:t,canvas:l}))),l.listen("mousedown",(()=>d.down())),l.listen("mouseup",(()=>d.up())),function t(e){h.update(e),a({canvas:l,grid:u,mouse:d,turn:f})&&(c(u.matrix)?l.state="win":f=function(t){return"X"===t?"O":"X"}(f)),function(t){let e=!0;for(let n in t)for(let r in t[n])"none"===t[n][r].type&&(e=!1);return e}(u.matrix)&&"win"!=l.state&&(l.state="tie"),requestAnimationFrame(t)}()})()})();