(function(){"use strict";var t={9303:function(t,i,n){var e=n(9242),h=(n(560),n(3396));const r={id:"drawHeart",width:"1903",height:"937"};var a={__name:"App",setup(t){var i=[],e="",a="",s=window.innerWidth,o=window.innerHeight,f="";function c(){var t=100;e.width=s,e.height=o;for(var n=0;n<t;n++)i.push(new l(n%5));requestAnimationFrame(v)}function u(){var t=10*Math.random();return t>0&&t<=1?"#00f":t>1&&t<=2?"#f00":t>2&&t<=3?"#0f0":t>3&&t<=4?"#368":t>4&&t<=5?"#08e2af":t>5&&t<=6?"#66e44c":t>6&&t<=7?"#f50":t>7&&t<=8?"#fc5531":t>8&&t<=9?"#5be9e9":"#d41d50"}function d(){var t=15*Math.random();return t>1&&t<=3?"爱你一辈子":t>3&&t<=5?"感谢你":t>5&&t<=8?"喜欢你":t>8&&t<=10?"表白赵佳宁":t>10&&t<=12?"哈哈哈":t>12&&t<=14?"爱你~":"I Love You"}function l(t){this.type=t,this.x=Math.random()*s,this.y=Math.random()*o,this.opacity=.5*Math.random()+.5,this.vel={x:5*(Math.random()-.5),y:5*(Math.random()-.5)},this.initialH=.5*o,this.targetScale=.15*Math.random()+.02,this.scale=Math.random()*this.targetScale,this.fx=Math.random()*s,this.fy=Math.random()*o,this.fs=10*Math.random(),this.text=d(),this.fvel={x:5*(Math.random()-.5),y:5*(Math.random()-.5),f:2*(Math.random()-.5)}}function v(){a.clearRect(0,0,s,o);for(var t=0;t<i.length;t++)i[t].draw(),i[t].update();requestAnimationFrame(v)}return(0,h.bv)((()=>{(0,h.Y3)((()=>{e=document.getElementById("drawHeart"),a=e.getContext("2d"),f=new Image,f.src=n(4392),c()}))})),window.addEventListener("resize",(function(){s=window.innerWidth,o=window.innerHeight})),l.prototype.draw=function(){a.save(),a.globalAlpha=this.opacity,a.drawImage(f,this.x,this.y,this.width,this.height),a.scale(this.scale+1,this.scale+1),this.type||(a.fillStyle=u(),a.font="italic "+this.fs+"px sans-serif",a.fillText(this.text,this.fx,this.fy)),a.restore()},l.prototype.update=function(){this.x+=this.vel.x,this.y+=this.vel.y,(this.x-this.width>s||this.x+this.width<0)&&(this.scale=0,this.x=Math.random()*s,this.y=Math.random()*o),(this.y-this.height>o||this.y+this.height<0)&&(this.scale=0,this.x=Math.random()*s,this.y=Math.random()*o),this.scale+=.1*(this.targetScale-this.scale),this.height=this.scale*this.initialH,this.width=1.4*this.height,this.fx+=this.fvel.x,this.fy+=this.fvel.y,this.fs+=this.fvel.f,this.fs>50&&(this.fs=2),(this.fx-this.fs>s||this.fx+this.fs<0)&&(this.fx=Math.random()*s,this.fy=Math.random()*o),(this.fy-this.fs>o||this.fy+this.fs<0)&&(this.fx=Math.random()*s,this.fy=Math.random()*o)},(t,i)=>((0,h.wg)(),(0,h.iD)("canvas",r))}},s=n(89);const o=(0,s.Z)(a,[["__scopeId","data-v-74acd186"]]);var f=o;(0,e.ri)(f).mount("#app")},4392:function(t,i,n){t.exports=n.p+"img/heart-rate.390643b9.svg"}},i={};function n(e){var h=i[e];if(void 0!==h)return h.exports;var r=i[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(i,e,h,r){if(!e){var a=1/0;for(c=0;c<t.length;c++){e=t[c][0],h=t[c][1],r=t[c][2];for(var s=!0,o=0;o<e.length;o++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](e[o])}))?e.splice(o--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var f=h();void 0!==f&&(i=f)}}return i}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,h,r]}}(),function(){n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,{a:i}),i}}(),function(){n.d=function(t,i){for(var e in i)n.o(i,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(i){return 0===t[i]};var i=function(i,e){var h,r,a=e[0],s=e[1],o=e[2],f=0;if(a.some((function(i){return 0!==t[i]}))){for(h in s)n.o(s,h)&&(n.m[h]=s[h]);if(o)var c=o(n)}for(i&&i(e);f<a.length;f++)r=a[f],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},e=self["webpackChunkwhw"]=self["webpackChunkwhw"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(9303)}));e=n.O(e)})();
//# sourceMappingURL=app.928cd3ca.js.map