(this.webpackJsonpvibes=this.webpackJsonpvibes||[]).push([[0],{12:function(n,t,e){n.exports=e(21)},17:function(n,t,e){},20:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(7),i=e.n(o),u=(e(17),e(11));function c(n){return n.reduce((function(n,t){return n+t}),0)/n.length}function f(n){var t=[];if(0!=n.length)for(var e=function(e){t.push(c(n.map((function(n){return n[e]}))))},r=0;r<n[0].length;r++)e(r);return t}function l(n){return n.reduce((function(n,t){return t<n.min&&(n.min=t),t>n.max&&(n.max=t),n}),{min:n[0],max:n[0]})}var s={mean:c,meanPoint:f,rangeOf:l,rangesOf:function(n){for(var t=[],e=function(e){t.push(l(n.map((function(n){return n[e]}))))},r=0;r<n[0].length;r++)e(r);return t}};function h(n,t){if(n.length!=t.length)return Math.infinity;for(var e=0,r=0;r<n.length;r++)e+=Math.pow(t[r]-n[r],2);return Math.sqrt(e)}function g(n,t){var e=[];return t.forEach((function(){e.push([])})),n.forEach((function(n){var r=t[0];t.forEach((function(t){h(n,t)<h(n,r)&&(r=t)})),e[t.indexOf(r)].push(n)})),e}function m(n){var t=[];return n.forEach((function(n){t.push(s.meanPoint(n))})),t}Array.prototype.equals=function(n){if(!n)return!1;if(this.length!=n.length)return!1;for(var t=0,e=this.length;t<e;t++)if(this[t]instanceof Array&&n[t]instanceof Array){if(!this[t].equals(n[t]))return!1}else if(this[t]!=n[t])return!1;return!0},Object.defineProperty(Array.prototype,"equals",{enumerable:!1});var v=function n(t,e){var r,a,o,i=!1,u=0;for(r=function(n,t){for(var e,r,a=s.rangesOf(n),o=[],i=0;i<t;i++){var u=[];for(var c in a)u.push((e=a[c].min,r=a[c].max,Math.floor(Math.random()*(r-e+1))+e));o.push(u)}return o}(t,e);!i;){if(console.log("iterated."),u+=1,o=a,(a=g(t,r)).some((function(n){return 0==n.length})))return console.log("Empty clusters found. Restarting k-means."),n(t,e);console.log(u,500),(a.equals(o)||u>=500)&&(i=!0),r=m(a)}return a},d=e(2),p=e(3);function w(){var n=Object(d.a)(["\n  width: 80vw;\n  display: grid;\n  column-gap: 40px;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n"]);return w=function(){return n},n}function b(){var n=Object(d.a)(["\n  height: 150px;\n  width: 150px;\n  background: ",";\n"]);return b=function(){return n},n}var y=p.a.div(b(),(function(n){return n.color})),E=p.a.div(w()),x=function(n){var t=n.colors;return console.log(t),a.a.createElement(E,null,t.map((function(n,t){return a.a.createElement(y,{key:t,color:n})})))};e(20);var O=function(n,t){return v(n,t).map((function(n){return f(n)})).map((function(n){return{r:n[0],g:n[1],b:n[2],a:n[3]}})).map((function(n){return t=n.r,e=n.g,r=n.b,t=Math.round(t),e=Math.round(e),r=Math.round(r),"#"+M(t)+M(e)+M(r);var t,e,r}))};function M(n){var t=n.toString(16);return 1==t.length?"0"+t:t}var j=function(){var n,t,e=Object(r.useState)(null),o=Object(u.a)(e,2),i=o[0],c=o[1],f=Object(r.useRef)(null);return Object(r.useEffect)((function(){t=f.current,(n=t.getContext("2d")).fillStyle="#000000",n.fillRect(0,0,n.canvas.width,n.canvas.height)}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("input",{type:"file",onChange:function(e){!function(e){var r=new FileReader;r.onload=function(e){var r=new Image;r.src=e.target.result,r.onload=function(){t.width=600,n.drawImage(r,0,0,t.width,t.height);for(var e=n.getImageData(0,0,t.width,t.height).data,a=[],o=0;o<e.length;o+=4)a.push([e[o],e[o+1],e[o+2],e[o+3]]);c(O(a,4))}},r.readAsDataURL(e.target.files[0])}(e)}}),i&&a.a.createElement(x,{colors:i}),a.a.createElement("canvas",{ref:f,width:100,height:200}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.63a773c1.chunk.js.map