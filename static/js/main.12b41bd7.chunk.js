(this.webpackJsonpvibes=this.webpackJsonpvibes||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/pic1.7e9166b7.png"},14:function(e,t,n){e.exports=n(44)},19:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),c=(n(19),n(4)),u=n(1),l=n(2);function f(e){return e.reduce((function(e,t){return e+t}),0)/e.length}function s(e){var t=[];if(0!=e.length)for(var n=function(n){t.push(f(e.map((function(e){return e[n]}))))},r=0;r<e[0].length;r++)n(r);return t}function m(e){return e.reduce((function(e,t){return t<e.min&&(e.min=t),t>e.max&&(e.max=t),e}),{min:e[0],max:e[0]})}var h={mean:f,meanPoint:s,rangeOf:m,rangesOf:function(e){for(var t=[],n=function(n){t.push(m(e.map((function(e){return e[n]}))))},r=0;r<e[0].length;r++)n(r);return t}};function d(e,t){if(e.length!=t.length)return Math.infinity;for(var n=0,r=0;r<e.length;r++)n+=Math.pow(t[r]-e[r],2);return Math.sqrt(n)}function g(e,t){var n=[];return t.forEach((function(){n.push([])})),e.forEach((function(e){var r=t[0];t.forEach((function(t){d(e,t)<d(e,r)&&(r=t)})),n[t.indexOf(r)].push(e)})),n}function p(e){var t=[];return e.forEach((function(e){t.push(h.meanPoint(e))})),t}Array.prototype.equals=function(e){if(!e)return!1;if(this.length!=e.length)return!1;for(var t=0,n=this.length;t<n;t++)if(this[t]instanceof Array&&e[t]instanceof Array){if(!this[t].equals(e[t]))return!1}else if(this[t]!=e[t])return!1;return!0},Object.defineProperty(Array.prototype,"equals",{enumerable:!1});var v=function e(t,n){var r,a,i,o=!1,c=0;for(r=function(e,t){for(var n,r,a=h.rangesOf(e),i=[],o=0;o<t;o++){var c=[];for(var u in a)c.push((n=a[u].min,r=a[u].max,Math.floor(Math.random()*(r-n+1))+n));i.push(c)}return i}(t,n);!o;){if(c+=1,i=a,(a=g(t,r)).some((function(e){return 0==e.length})))return e(t,n);(a.equals(i)||c>=19)&&(o=!0),r=p(a)}return a};function x(){var e=Object(u.a)(["\n  display: grid;\n  width: 40vw;\n  min-width: 600px;\n  grid-template-columns: repeat(4, 1fr);\n"]);return x=function(){return e},e}function w(){var e=Object(u.a)(["\n  width: 100%;\n  background: ",";\n\n  min-height: 150px;\n  height: 10vw;\n"]);return w=function(){return e},e}var b=l.a.div(w(),(function(e){return e.color})),E=l.a.div(x()),y=function(e){var t=e.colors;return console.log(t),a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null,t.map((function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{key:t,color:e}))}))),a.a.createElement(E,null,t.map((function(e,t){return a.a.createElement("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},e)}))))},O=n(12),j=n.n(O),k=function(e){var t=e.inputRef;return a.a.createElement("div",{className:"self-center"},a.a.createElement("h2",{className:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"Looking for a color pallete?",a.a.createElement("br",null),a.a.createElement("span",{className:"text-teal-600"},"Find it using your favourite image.")),a.a.createElement("div",{className:"mt-8 flex lg:flex-shrink-0 lg:mt-8"},a.a.createElement("div",{className:"inline-flex rounded-md shadow"},a.a.createElement("button",{onClick:function(){t.current.click()},className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"Upload Image"))))},M=n(13),N=n.n(M);n(42);function R(){var e=Object(u.a)(["\n  display: grid;\n  width: 100vw;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n    @media (max-width: 1100px) {\n        height:auto;\n        row-gap:50px;\n        grid-template-columns:1fr;\n  }\n}"]);return R=function(){return e},e}function S(){var e=Object(u.a)(["\n  display: grid;\n  height: 80vh;\n  align-items: center;\n  justify-items: center;\n  @media (max-width: 1100px) {\n    height: auto;\n  }\n"]);return S=function(){return e},e}var q=l.a.div(S()),A=l.a.div(R());var I=function(e,t){return v(e,t).map((function(e){return s(e)})).map((function(e){return{r:e[0],g:e[1],b:e[2],a:e[3]}})).map((function(e){return t=e.r,n=e.g,r=e.b,t=Math.round(t),n=Math.round(n),r=Math.round(r),"#"+F(t)+F(n)+F(r);var t,n,r}))};function F(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var W=function(){var e=Object(r.useState)(["#475e78","#b7aeae","#2c2832","#a44646"]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(!1),u=Object(c.a)(o,2),l=u[0],f=u[1],s=Object(r.useState)(!1),m=Object(c.a)(s,2),h=m[0],d=m[1],g=Object(r.useRef)(null),p=Object(r.useRef)(null),v=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=g.current;p.current=e.getContext("2d");var t=p.current;t.fillStyle="#ffffff",t.fillRect(0,0,t.canvas.width,t.canvas.height)}),[]);var x=Math.max(.4*window.innerWidth,600),w=l?"block":"none";return w=h?"none":w,a.a.createElement("div",null,a.a.createElement(A,{className:"py-12 md:px-4 sm:px-6 lg:py-16 lg:px-8 "},a.a.createElement(q,null,a.a.createElement(k,{inputRef:v})),a.a.createElement("div",{className:"text-center"},a.a.createElement("canvas",{style:{display:w},ref:g,width:x,height:200}),!l&&a.a.createElement("img",{alt:"pic",src:N.a,width:x}),h&&a.a.createElement(q,null,a.a.createElement(j.a,{name:"folding-cube",color:"teal"})),n&&a.a.createElement(y,{colors:n}),a.a.createElement("input",{style:{display:"none"},type:"file",ref:v,onChange:function(e){!function(e){var t=g.current,n=p.current,r=new FileReader;i([]),d(!0),f(!0),r.onload=function(e){var r=new Image;r.src=e.target.result,r.onload=function(){var e=r.height/r.width;t.width=Math.max(.4*window.innerWidth,600),t.height=e*t.width,n.drawImage(r,0,0,t.width,t.height);for(var a=n.getImageData(0,0,t.width,t.height).data,o=[],c=0;c<a.length;c+=4)o.push([a[c],a[c+1],a[c+2],a[c+3]]);i(I(o,4)),d(!1)}},r.readAsDataURL(e.target.files[0])}(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(43);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.12b41bd7.chunk.js.map