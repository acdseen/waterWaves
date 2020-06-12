(function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push(["6b90","chunk-vendors"]),n()})({"6b90":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Example")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("water-waves",{model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),n("h3",{staticClass:"num"},[e._v(e._s(e.level))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"swipe",attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:e.level},on:{__r:function(t){e.level=t.target.value}}})],1)},l=[],c=(n("7f7f"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"waterwaves"},[n("canvas",{attrs:{id:"canvas",width:"400px",height:"400px"}})])}],u=(n("8e6e"),n("ade3")),f=(n("ac6a"),n("cadf"),n("456d"),n("c5f6"),n("6c7b"),function(e,t){t=t||{};var n={wrapW:3,cW:130,cH:130,lineWidth:2,baseY:20,nowRange:0,lineColor:"rgb(176,204,53)",oneColor:"rgba(176,204,53,.6)",twoColor:"rgba(176,204,53,.4)",oneWaveWidth:.06,twoWaveWidth:.06,oneWaveHeight:4,twoWaveHeight:4,oneOffsetX:10,twoOffsetX:20,speed:.2},r=null,o=null;Object.defineProperty(this,"options",{get:function(){return n},set:function(e){a(e,n)}});var a=function(e,t){Object.keys(e).forEach((function(n){t[n]=e[n]}))},i=function(e,t,r,o,a){e.save();var i=[];e.beginPath();for(var l=0;l<n.cW;l+=20/n.cW){var c=-Math.sin(l*r+t),s=n.cH*(1-n.nowRange/100);i.push([l,s+c*o]),e.lineTo(l,s+c*o)}e.lineTo(n.cW,n.cH),e.lineTo(0,n.cH),e.lineTo(i[0][0],i[0][1]),e.fillStyle=a,e.fill(),e.restore()},l=function(){a(t,n),r=document.getElementById(e),o=r.getContext("2d"),r.width=n.cW,r.height=n.cH,o.lineWidth=n.lineWidth;var l=n.cH/2,c=l-6,s=function(e){e.beginPath(),e.strokeStyle=n.lineColor,e.arc(l,l,c+n.wrapW,0,2*Math.PI),e.stroke(),e.beginPath(),e.arc(l,l,c,0,2*Math.PI),e.clip()};s(o),function e(){window.requestAnimationFrame(e),o.clearRect(0,0,n.cW,n.cH);var t=1;n.nowRange<=n.baseY&&(n.nowRange+=t),n.nowRange>n.baseY&&(n.nowRange-=t),i(o,n.oneOffsetX,n.oneWaveWidth,n.oneWaveHeight,n.oneColor),i(o,n.twoOffsetX,n.twoWaveWidth,n.twoWaveHeight,n.twoColor),n.oneOffsetX+=n.speed,n.twoOffsetX+=n.speed}()};l()}),p=f;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"WaterWaves",props:{value:{type:String||Number,default:"50"},options:{type:Object,default:function(){return{}}}},data:function(){return{waterwaves:null}},watch:{value:function(e){this.waterwaves.options.baseY=e,this.$emit("change",e)},options:function(e){var t=this;Object.keys(e).map((function(n){t.waterwaves.options[n]=e[n]}))}},methods:{initWaterWaves:function(){this.waterwaves=new p("canvas",h(h({},this.options),{},{baseY:this.value}))}},mounted:function(){this.initWaterWaves()}},b=d,w=n("2877"),g=Object(w["a"])(b,c,s,!1,null,null,null),O=g.exports;O.install=function(e){e.component(O.name,O)};var m=O,y={components:{WaterWaves:m},data:function(){return{level:"30"}}},W=y,j=Object(w["a"])(W,i,l,!1,null,null,null),P=j.exports,_={name:"app",components:{Example:P}},x=_,H=Object(w["a"])(x,o,a,!1,null,null,null),C=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.cad4b562.js.map