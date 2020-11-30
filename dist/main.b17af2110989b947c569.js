(()=>{var t={426:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(645),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing:border-box;\r\n}\r\nbody {\r\n\tbackground: #14bdac;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n}",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&i[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},654:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});var n=r(379),i=r.n(n),s=r(426);i()(s.Z,{insert:"head",singleton:!1});const o=s.Z.locals||{}},379:(t,e,r)=>{"use strict";var n,i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),s=[];function o(t){for(var e=-1,r=0;r<s.length;r++)if(s[r].identifier===t){e=r;break}return e}function a(t,e){for(var r={},n=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var h=o(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(s[h].references++,s[h].updater(d)):s.push({identifier:u,updater:m(d,e),references:1}),n.push(u)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=r.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function h(t,e,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function d(t,e,r){var n=r.css,i=r.media,s=r.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var x=null,f=0;function m(t,e){var r,n,i;if(e.singleton){var s=f++;r=x||(x=c(e)),n=h.bind(null,r,s,!1),i=h.bind(null,r,s,!0)}else r=c(e),n=d.bind(null,r,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var i=o(r[n]);s[i].references--}for(var c=a(t,e),l=0;l<r.length;l++){var u=o(r[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}r=c}}}},493:(t,e,r)=>{"use strict";const{Timer:n}=r(356);t.exports=class{constructor(t,e){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.canvas.width=t,this.canvas.height=e,this.restartTimer=new n({start:0,max:1}),this.scale=void 0,this.resize(),document.body.appendChild(this.canvas)}resize(){let t=window.innerWidth,e=window.innerHeight,r=Math.min(t/this.canvas.width,e/this.canvas.height);this.canvas.style.transform="scale("+r+")",this.canvas.style.left=(t-this.canvas.width)/2+"px",this.canvas.style.top=(e-this.canvas.height)/2+"px",this.scale=r}listen(t,e){this.canvas.addEventListener(t,e)}}},249:(t,e,r)=>{"use strict";const{Timer:n}=r(356);t.exports=class{constructor(t="none",e=["X","O","none"]){this.type="none"===t?"none":t,this.types=e}avail(){return"none"===this.type}update(t){this.circleTimer&&this.circleTimer.update(t),this.xTimer&&this.xTimer.update(t)}occupy(t){if(this.types.indexOf(t)<=-1)throw new Error("This is the wrong cell type || cell.js");if(this.type=t,"O"===this.type){const t=.2;this.circleTimer=new n({start:0,max:360,mult:360/t}),this.circleTimer.begin()}else if("X"===this.type){const t=.2;this.xTimer=new n({start:0,max:20,mult:20/t}),this.xTimer.begin()}}}},556:t=>{"use strict";const e=Math.round(400/3),r=Math.round(400/3);t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,CELL_WIDTH:e,CELL_HEIGHT:r,BACKGROUND_COLOR:"#14bdac",CENTER_X:800,CENTER_Y:450,SIZE:3,PADDING:200,GRID_OUTLINE_COLOR:"#0da192",X_COLOR:"#545454",O_COLOR:"#f2ebd3",TEXT_COLOR:"#0a786d",HIGHLIGHT_COLOR:"#0ddec9"}},123:(t,e,r)=>{"use strict";const{Timer:n}=r(356),i=r(249);t.exports=class t{constructor(t=3,e=[[new i,new i,new i],[new i,new i,new i],[new i,new i,new i]]){this.size=t,this.matrix=e,this.gridTimer=new n({start:0,max:260,mult:520})}full(){for(let t in this.matrix)for(let e in this.matrix[t])if(this.matrix[t][e].avail())return!1;return!0}copy(){return new t(this.size,this.matrix)}cellUpdate(t){for(let e in this.matrix)for(let r in this.matrix[e])this.matrix[e][r].update(t);this.gridTimer&&this.gridTimer.update(t)}availableSpots(){const t=[];for(let e in this.matrix)for(let r in this.matrix[e]){const n=this.matrix[e][r];n.avail()&&t.push({cell:n,row:e,col:r})}return t}makeMove({row:t,col:e,turn:r}){this.matrix[t][e].occupy(r)}clear(){for(let t in this.matrix)for(let e in this.matrix[t])this.matrix[t][e]=new i}}},212:(t,e,r)=>{"use strict";function n(t){return t*Math.PI/180}const{CELL_WIDTH:i,CELL_HEIGHT:s,BACKGROUND_COLOR:o,CENTER_X:a,CENTER_Y:c,SIZE:l,GAME_WIDTH:u,GAME_HEIGHT:h,PADDING:d,GRID_OUTLINE_COLOR:x,X_COLOR:f,O_COLOR:m,TEXT_COLOR:p,HIGHLIGHT_COLOR:v}=r(556);t.exports=function({canvas:t,grid:e,mouse:r,turn:y,delta:w,scores:T,state:g,choseDif:b,mode:O,human:E}){if(!e||!t)throw new Error("called from render... canvas || grid is not defined");if(!b){t.ctx.fillStyle=o,t.ctx.fillRect(0,0,u,h),t.ctx.font="25px sans-serif",t.ctx.textAlign="center",t.ctx.fillStyle=p,t.ctx.textBaseline="middle",t.ctx.fillText("Player vs Player",a-225,c),t.ctx.fillText("Player vs Computer",a+275,c),t.ctx.strokeStyle=x,t.ctx.lineWidth=10;let e=a-350,n=c-50,i=250,s=100;if(r.touches({x:e,y:n,width:i,height:s})){if(r.on)return{type:"pvp"};t.ctx.strokeStyle=v}if(t.ctx.strokeRect(e,n,i,s),t.ctx.strokeStyle=x,e=a+150,n=c-50,i=250,s=100,r.touches({x:e,y:n,width:i,height:s})){if(r.on)return{type:"pvc"};t.ctx.strokeStyle=v}return void t.ctx.strokeRect(a+150,c-50,250,100)}if((g.is("win")||g.is("tie"))&&(t.restartTimer.update(w),t.restartTimer.current>=t.restartTimer.max&&r.on))return!0;e.cellUpdate(w),t.ctx.fillStyle=o,t.ctx.fillRect(0,0,u,h);const C=a-i*(l/2),M=c-s*(l/2);let S=!1;for(let o in e.matrix)for(let a in e.matrix[o]){const c=e.matrix[o][a],l=C+o*i-1,u=M+a*s-1,h=i+1,d=s+1;if(r.touches({x:l,y:u,width:h,height:d})&&c.avail()&&g.not("win")&&r.on&&!S&&("pvc"===O&&y===E||"pvp"===O)&&(e.makeMove({row:o,col:a,turn:y}),S=!0),t.ctx.strokeStyle=x,t.ctx.strokeRect(l,u,h,d),"O"===c.type&&(t.ctx.lineWidth=12,t.ctx.strokeStyle=m,t.ctx.save(),t.ctx.translate(l+h/2,u+d/2),t.ctx.scale(-1,1),t.ctx.rotate(n(-90)),t.ctx.beginPath(),c.circleTimer&&c.circleTimer.current>0&&t.ctx.arc(0,0,40,0,n(c.circleTimer.current)),t.ctx.stroke(),t.ctx.restore()),"X"===c.type){t.ctx.lineWidth=12,t.ctx.strokeStyle=f;let e=50;c.xTimer&&c.xTimer.current>0&&(e=-1*c.xTimer.current+50),t.ctx.beginPath(),t.ctx.lineTo(l+e,u+e),t.ctx.lineTo(l+h-e,u+d-e),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.lineTo(l+h-e,u+e),t.ctx.lineTo(l+e,u+d-e),t.ctx.stroke()}t.ctx.lineWidth=8}t.ctx.strokeStyle=o,t.ctx.lineWidth=15,t.ctx.lineWidth=-1*e.gridTimer.current+290,t.ctx.strokeRect(C,M,i*l,s*l),t.ctx.lineWidth=8,t.ctx.textAlign="center",t.ctx.fillStyle=p,t.ctx.font="30px sans-serif";let _=`${y} Turn`;g.is("tie")&&(_="The board is full"),g.is("win")&&(_=`Player ${y} has won`);const k=a,R=c-d-10;t.ctx.fillText(_,k,R),t.ctx.fillStyle=p,t.ctx.save(),t.ctx.globalAlpha=t.restartTimer.current/t.restartTimer.max,(g.is("win")||g.is("tie"))&&t.ctx.fillText("Click the screen to play again",k,c+1.5*d),t.ctx.globalAlpha=1,t.ctx.restore(),t.ctx.strokeStyle=x,t.ctx.font="40px sans-serif","X"===y&&(t.ctx.strokeStyle=v),t.ctx.strokeRect(a-350,d/2,300,70),t.ctx.strokeStyle=x,t.ctx.fillStyle=p,t.ctx.textBaseline="alphabetic",t.ctx.fillText("X",a-300,d/2+50);let L=String(T[0]);0===T[0]&&(L="-"),t.ctx.font="45px Arial",t.ctx.fillText(L,a-75,d/2+50),"O"===y&&(t.ctx.strokeStyle=v),t.ctx.strokeRect(a+50,d/2,300,70),t.ctx.font="40px sans-serif",t.ctx.fillText("O",a+100,d/2+50);let I=String(T[1]);return 0===T[1]&&(I="-"),t.ctx.font="45px Arial",t.ctx.fillText(I,a+325,d/2+50),t.ctx.font="30px sans-serif",S}},949:t=>{"use strict";t.exports=class{constructor(){this.x=-1,this.y=-1,this.on=!1}update({event:t,canvas:e}){const r=e.canvas.getBoundingClientRect();this.x=Math.round((t.pageX-r.left)/e.scale),this.y=Math.round((t.pageY-r.top)/e.scale)}down(){this.on=!0}up(){this.on=!1}touches({x:t,y:e,width:r,height:n}){return this.x>t&&this.x<t+r&&this.y>e&&this.y<e+n}}},265:t=>{t.exports=class{constructor(t="game",e=["game","tie","win"]){this.state=t,this.states=e}is(t){return this.state===t}not(t){return this.state!==t}set(t){if(!(this.states.indexOf(t)>-1))throw new Error("Cannot set state of undefined, try adding it in the states array || called from state.js");this.state=t}}},356:t=>{"use strict";t.exports={Time:class{constructor(){this.lastTime=0,this.delta=0}update(t){this.delta=(t-this.lastTime)/1e3,this.lastTime=t}},Timer:class{constructor({start:t,max:e,mult:r=1}){this.start=t,this.max=e,this.mult=r,this.current=this.max}begin(){this.current=this.start}update(t){this.current<this.max&&(this.current+=t*this.mult,this.mult>1&&(this.current+=this.current/this.max*5)),this.current>=this.max&&(this.current=this.max)}}}},359:t=>{t.exports=class{constructor(t=["X","O"]){this.types=t,this.index=0}get turn(){return this.types[this.index]}next(){this.index+=1,this.index>this.types.length-1&&(this.index=0)}randomize(){this.index=Math.floor(Math.random()*this.types.length)}}},795:t=>{function e(t){return t.every((e=>e===t[0]))}function r(t){return t.map((t=>t.type))}function n(t){return t.every((t=>!t.avail()))}t.exports=function(t){for(let i in t)if(e(r(t[i]))&&n(t[i]))return!0;for(let i=0;i<t.length;i++){const s=[];for(let e=0;e<t[i].length;e++)s.push(t[e][i]);if(e(r(s))&&n(s))return!0}const i=(()=>{const e=[];for(let r=0;r<t.length;r++)e.push(t[r][r]);return e})(),s=(()=>{const e=[];let r=0;for(let n=t.length-1;n>=0;n--)e.push(t[n][r]),r++;return e})();return!(!e(r(i))||!n(i))||!(!e(r(s))||!n(s))}}},e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";r(654);const{GAME_WIDTH:t,GAME_HEIGHT:e}=r(556),n=r(493),i=r(123),s=r(949),o=r(359),{Time:a}=r(356),c=r(265),l=r(212),u=r(795),h=new n(t,e),d=new i,x=new s,f=new a,m=new c,p=new o,v=[0,0],y="X";let w=!1,T=null;function g(){u(d.matrix)&&m.not("win")?(m.set("win"),v[p.index]++,h.restartTimer.begin()):p.next()}window.addEventListener("resize",(()=>{h.resize()})),h.listen("mousemove",(t=>x.update({event:t,canvas:h}))),h.listen("mousedown",(()=>x.down())),h.listen("mouseup",(()=>x.up()));const b=t=>new Promise((e=>setTimeout(e,t))),O=()=>new Promise((t=>{t(E(d.copy(),0,!0))}));function E(t,e,r){if(u(t.matrix))return r?10-e+Math.random():e-10+Math.random();if(t.full())return 0;if(e>=5)return 1;const n=[];for(let i in t.matrix)for(let s in t.matrix[i]){const o=t.copy();if(!o.matrix[i][s].avail())continue;o.makeMove({row:i,col:s,turn:r?y:"O"});const a=E(o.copy(),e+1,!r);o.makeMove({row:i,col:s,turn:"none"}),n.push({cost:a,cell:{row:i,col:s}})}if(r){const t=n.sort(((t,e)=>t.cost-e.cost))[0];return 0===e?t.cell:t.cost+5*Math.random()-2.5}{const t=n.sort(((t,e)=>e.cost-t.cost))[0];return 0===e?t.cell:t.cost+5*Math.random()-2.5}}async function C(){p.randomize(),d.clear(),m.set("game"),x.up(),d.gridTimer.begin(),"pvc"===T&&p.turn===y&&(await b(500),function(){const t=[{row:0,col:0},{row:0,col:2},{row:2,col:0},{row:2,col:2},{row:1,col:1}],{row:e,col:r}=t[Math.floor(Math.random()*t.length)];d.makeMove({row:e,col:r,turn:y}),g()}())}!function t(e){f.update(e);const r=l({canvas:h,grid:d,mouse:x,turn:p.turn,delta:f.delta,scores:v,state:m,choseDif:w,mode:T,human:"O"});!0===r&&(u(d.matrix)&&m.not("win")?(m.set("win"),v[p.index]++,h.restartTimer.begin()):m.is("win")||m.is("tie")?C():(p.next(),"pvc"===T&&d.availableSpots().length>0&&async function(){const t=Date.now(),{row:e,col:r}=await O();Date.now()-t<1500&&await b(100*Math.random()+500),d.makeMove({row:e,col:r,turn:y}),g()}())),"object"==typeof r&&r.type&&!w&&(w=!0,"pvp"===r.type&&(T="pvp"),"pvc"===r.type&&(T="pvc"),C()),d.full()&&m.not("win")&&m.not("tie")&&(m.set("tie"),h.restartTimer.begin()),requestAnimationFrame(t)}()})()})();