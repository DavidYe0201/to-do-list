(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"html{\r\n  height:100%;\r\n}\r\nbody{\r\n  height:100%;\r\n  margin: 0;\r\n}\r\n\r\n.list {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  background-color: rgb(202, 202, 216);\r\n  border: black;\r\n}\r\n#sidenav {\r\n  background-color: grey;\r\n}\r\n/*\r\n#sidenav {\r\n  height: 100%; \r\n  width: 16%; \r\n  position: fixed; \r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(172, 167, 167);\r\n  overflow-x: hidden; \r\n  padding-top: 20px;\r\n}\r\n*/\r\n\r\n\r\n#todolist { \r\n  background-color: pink;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.project {\r\n  border: 1px solid #000000;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.project:hover {\r\n  color: white;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:o(f,r),references:1}),a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var c=r(e,o),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),d=n(565),c=n.n(d),s=n(216),u=n.n(s),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("sidenav"),h=(document.getElementById("projects"),document.createElement("button"));function g(){let e=prompt("Enter your new task","");if(null==e||""==e)return;let t=document.createElement("div"),n=document.createElement("button"),r=document.createElement("br");n.id="deleteButton",n.innerHTML="X",n.addEventListener("click",E),t.classList.add("task"),t.textContent=e,t.id=e,document.getElementById("tasks").append(r),document.getElementById("tasks").append(e)}function b(){const e=document.getElementById("tasks");let t=document.createElement("button");t.textContent="New Task",t.addEventListener("click",g),e.innerHTML=this.id,e.appendChild(t)}function E(){this.parentNode.remove(),console.log(this),console.log("Parent"+this.parentNode)}h.id="deleteButton",h.innerHTML="X",v.innerHTML='To Do List <button id="newProject">Add</button><br>';let y=document.createElement("div");y.classList.add("project"),y.id="Project",y.textContent="Project",y.addEventListener("click",b),y.appendChild(h),v.appendChild(y),document.getElementById("deleteButton").addEventListener("click",E),document.getElementById("newProject").addEventListener("click",(function(){let e=prompt("Enter your new project","");if(null==e||""==e)return;let t=document.createElement("div"),n=document.createElement("button");n.id="deleteButton",n.innerHTML="X",n.addEventListener("click",E),t.addEventListener("click",b),t.classList.add("project"),t.textContent=e,t.id=e,v.appendChild(t),t.appendChild(n)}))})()})();