(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(129),d=o()((function(e){return e[1]})),l=a()(c.Z);d.push([e.id,"body {\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: rgb(33, 111, 212);\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    margin: 0;\r\n    margin-top: 25px;\r\n}\r\n\r\nheader {\r\n    padding-left: 25px;\r\n    height: 100px;\r\n}\r\n\r\n.back-button {\r\n    margin-top: 25px;\r\n}\r\n\r\n[type=\"text\"],\r\nbutton {\r\n  display: inline-block;\r\n  -webkit-appearance: none;\r\n  padding: .5rem 1rem;\r\n  font-size: 1rem;\r\n  border-radius: 4px;\r\n}\r\n\r\nbutton {\r\n  margin-top: 50px;\r\n  cursor: pointer;\r\n  background: white;\r\n  color: black;\r\n  border: 1px solid black;\r\n}\r\n\r\n#container {\r\n    height: 100%;\r\n    padding: 25px;\r\n}\r\n\r\n.card {\r\n    width: 250px;\r\n    height:250px;\r\n    display: inline-block;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 5px;\r\n    margin: 20px 20px 20px 0px;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n.delete {\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    background-image: url("+l+") center center no-repeat;\r\n}\r\n\r\n.card:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    width: 250px;\r\n    height:250px;\r\n    display: inline-block;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 5px;\r\n    margin: 20px 20px 20px 0px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.project:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }",""]);const s=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},129:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"abf8c9a6e9d40979b21970c52e840208.png"},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:g(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function g(e,n){var t,r,o;if(n.singleton){var i=h++;t=f||(f=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=(e,n,t)=>({title:e,id:n,todos:t}),n=(()=>{var n="";let t=[];t=[e("Project 1",0),e("Project 2",1)];const r=function(e){n=e};return{selectProject:e=>{r(parseInt(e.target.id)),c.renderTodos()},projects:t,setProjectId:r,getProjectId:function(){return n}}})(),r=()=>{let e=n.projects;localStorage.setItem("projects",JSON.stringify(e));let t=a.getTodos();localStorage.setItem("todos",JSON.stringify(t))},o=()=>{n.projects=JSON.parse(localStorage.getItem("projects")),console.log(JSON.parse(localStorage.getItem("todos"))),a.setTodos(JSON.parse(localStorage.getItem("todos")))};class i{constructor(e,n,t,r,o,i,a,c){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.notes=o,this.checklist=i,this.todoId=a,this.projectId=c}}const a=(()=>{let e=JSON.parse(localStorage.getItem("todos"))||[];if(0===e.length){let n=new i("clean the house 1","clean everything in the house","31/12/2020","HIGH","",[],0,0),t=new i("shower 2","everyone","31/12/2020","low","",[],1,1),r=new i("shower 3","everyone","31/12/2021","low","",[],2,1);e.push(n),e.push(t),e.push(r)}const n=()=>e;return{selectTodo:e=>{console.log("SELECTING TODO")},getTodos:n,setTodos:e=>{e=e},removeTodo:t=>{var r;r=n().map((function(e){return e.todoId})).indexOf(t),e.splice(r,1)},addTodo:(n,t)=>{e.push(new i(n,t,Date(),"low","",[],3,0)),r()}}})(),c=(()=>{let e=document.querySelector("#container");const t=()=>{e.innerHTML="",r();let o=a.getTodos().filter((e=>e.projectId===n.getProjectId()));for(const n of o){let r=document.createElement("div");r.classList.add("card"),r.textContent=n.title,r.id=n.todoId;let o=document.createElement("div");o.classList.add("delete"),o.textContent="X",o.addEventListener("click",(e=>{a.removeTodo(Number(e.target.parentNode.id)),t()})),r.appendChild(o),e.appendChild(r)}},r=()=>{if(null===document.querySelector(".back-button")){let e=document.querySelector("header"),n=document.createElement("button");n.classList.add("back-button"),n.innerText="Back to projects",n.addEventListener("click",c.renderProjects),e.appendChild(n)}else{let e=document.querySelector(".back-button");null===n.getProjectId()?e.style.display="none":e.style.display="inline-block"}};return{renderProjects:()=>{e.innerHTML="",n.setProjectId(null),r();for(const t of n.projects){let r=document.createElement("div");r.classList.add("project"),r.textContent=t.title,r.id=t.id,r.addEventListener("click",n.selectProject),e.appendChild(r)}},renderTodos:t,createModal:()=>{var e=document.getElementById("myModal"),n=document.getElementById("add-button"),t=document.getElementsByClassName("close")[0];n.onclick=function(){e.style.display="block"},t.onclick=function(){e.style.display="none"},document.getElementById("create-todo").addEventListener("click",(n=>{let t=document.getElementById("name").value,r=document.getElementById("description").value;a.addTodo(t,r),e.style.display="none"})),window.onclick=function(n){n.target==e&&(e.style.display="none")}}}})();var d=t(379),l=t.n(d),s=t(426);l()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,o(),c.createModal(),c.renderProjects()})()})();