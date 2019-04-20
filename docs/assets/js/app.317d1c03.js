(function(t){function e(e){for(var i,a,s=e[0],o=e[1],c=e[2],h=0,d=[];h<s.length;h++)a=s[h],u[a]&&d.push(u[a][0]),u[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==u[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},u={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/web-midi-router/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),u=n.n(i);u.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i,u=n("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t.loaded?[i("div",{staticClass:"conn-wrapper",attrs:{id:"connection-list"}},[i("h3",[t._v("Connections")]),i("button",{on:{click:t.addBlankBus}},[t._v("Add connection")]),t._l(t.busList,function(e,n){return i("ConnectionBus",{key:n,staticClass:"conn",attrs:{cb_index:n,midiInputs:t.availableInputs,midiOutputs:t.availableOutputs},on:{"input-change":t.handleInputChange,"output-change":t.handleOutputChange}})})],2)]:t._e()],2)},a=[],s=(n("7f7f"),n("5d73")),o=n.n(s),c=n("d225"),l=n("b0b4"),h=n("795b"),d=n.n(h),p=function(){function t(e,n){Object(c["a"])(this,t),this.dispatcher=n,this.isAttached=!1,this.label=e.name,this.value=e.id,this.portId=e.id,this.manufacturer=e.manufacturer,this.name=e.name}return Object(l["a"])(t,[{key:"receiveEvent",value:function(t){this._sysMidiOutput.send(t.data,t.timeStamp||t.timestamp),console.log(t.data,t.timestamp,this.value)}},{key:"attachOutput",value:function(t){var e=this;return new d.a(function(n,i){t.open().then(function(){e.label=t.name,e.value=t.id,e.portId=t.id,e.manufacturer=t.manufacturer,e.name=t.name,e._sysMidiOutput=t,e.isAttached=!0,n(e.value)}).catch(function(t){e.isAttached=!1,i(t)})})}},{key:"isAttached",value:function(){return this.isAttached&&"connected"===this._sysMidiOutput.state&&"closed"===this._sysMidiOutput.connection}}]),t}(),f=p,v=function(){function t(e,n){Object(c["a"])(this,t),this.dispatcher=n,this.isAttached=!1,this.label=e.name,this.value=e.id,this.portId=e.id,this.manufacturer=e.manufacturer,this.name=e.name}return Object(l["a"])(t,[{key:"attachInput",value:function(t){var e=this;return new d.a(function(n,i){t.open().then(function(){e.label=t.name,e.value=t.id,e.portId=t.id,e.manufacturer=t.manufacturer,e.name=t.name,e._sysMidiInput=t,t.onmidimessage=e.dispatcher.midiMessageHandler,e.isAttached=!0,n(e.value)}).catch(function(t){e.isAttached=!1,i(t)})})}},{key:"isAttached",value:function(){return this.isAttached&&"connected"===this._sysMidiInput.state&&"closed"===this._sysMidiInput.connection}}]),t}(),b=v,y=(n("5df3"),n("ac6a"),n("bd86")),m=function(){function t(e){var n=this;Object(c["a"])(this,t),Object(y["a"])(this,"midiMessageHandler",function(t){n.hasMapping(t.target.id)?n.routes[t.target.id].receiveMidiEvent(t):n.logger("MIDI Message Sent No Where!",t)}),this.logger=e||function(t){console.log(t)},this.routes=[]}return Object(l["a"])(t,[{key:"addMapping",value:function(t,e){this.routes[t]=e}},{key:"hasMapping",value:function(t){return!!this.routes[t]}},{key:"removeMapping",value:function(t){this.hasMapping(t)&&delete this.routes[t]}}]),t}(),g=m;function O(){return navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(function(t){i=t;for(var e=[],n=i.inputs.values(),u=n.next();u&&!u.done;u=n.next())e.push(u.value.open());for(var r=i.outputs.values(),a=r.next();a&&!a.done;a=r.next())e.push(a.value.open());return d.a.all(e).then(function(){return i})},function(t){console.log("Failed to get MIDI."+t)}):d()(function(t,e){e("Your browser doesn't have navigator.requestMIDIAccess. Please try Google Chrome.")})}function I(t,e){return t.id===e.portId&&e.label===t.name}var M=function(){function t(e,n,i,u){var r,a=this;Object(c["a"])(this,t),e=e||function(){console.log("ready")},this._highInputs=n||[],this._highOutputs=i||[],this.readyPromise=new d.a(function(t){return r=t}).then(e),this.dispatcher=u||new g,O().then(function(t){return a.midiAccess=t}).then(function(){return a.updateAllPorts()}).then(r)}return Object(l["a"])(t,[{key:"updateAllPorts",value:function(){var t=this;return console.log(this),this.updateInputs(this.midiAccess,this._highInputs,this.dispatcher).then(function(){return t.updateOutputs(t.midiAccess,t._highOutputs,t.dispatcher)})}},{key:"retrieveMidiAccess",value:function(){return this.midiAccess||!1}},{key:"retrieveDispatcher",value:function(){return this.dispatcher||!1}},{key:"retrieveInputs",value:function(){return this._highInputs||[]}},{key:"retrieveOutputs",value:function(){return this._highOutputs||[]}},{key:"updateInputs",value:function(t,e,n){var i=t.inputs.values(),u=[],r=!0,a=!1,s=void 0;try{for(var c,l=function(){var t=c.value,i=!0,r=!0,a=!1,s=void 0;try{for(var l,h=o()(e);!(r=(l=h.next()).done);r=!0){var p=l.value;if(I(t,p)){u.push(p.attachInput(t)),i=!1;break}}}catch(f){a=!0,s=f}finally{try{r||null==h.return||h.return()}finally{if(a)throw s}}i&&u.push(new d.a(function(i){var u=new b(t,n);e.push(u),u.attachInput(t).then(i)}))},h=o()(i);!(r=(c=h.next()).done);r=!0)l()}catch(p){a=!0,s=p}finally{try{r||null==h.return||h.return()}finally{if(a)throw s}}return d.a.all(u)}},{key:"updateOutputs",value:function(t,e,n){var i=t.outputs.values(),u=[],r=!0,a=!1,s=void 0;try{for(var c,l=function(){var t=c.value,i=!0,r=!0,a=!1,s=void 0;try{for(var l,h=o()(e);!(r=(l=h.next()).done);r=!0){var p=l.value;if(I(t,p)){u.push(p.attachOutput(t)),i=!1;break}}}catch(v){a=!0,s=v}finally{try{r||null==h.return||h.return()}finally{if(a)throw s}}i&&u.push(new d.a(function(i){var u=new f(t,n);e.push(u),u.attachOutput(t).then(i)}))},h=o()(i);!(r=(c=h.next()).done);r=!0)l()}catch(p){a=!0,s=p}finally{try{r||null==h.return||h.return()}finally{if(a)throw s}}return d.a.all(u)}},{key:"onReady",value:function(t){this.readyPromise.then(t)}}]),t}(),_=M,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h5",[t._v("Input")]),n("vSelect",{attrs:{options:t.midiInputs},on:{change:function(e){return t.$emit("input-change",e,t.cb_index)}}})],1),n("div",[n("h5",[t._v("Output")]),n("vSelect",{attrs:{options:t.midiOutputs},on:{change:function(e){return t.$emit("output-change",e,t.cb_index)}}})],1)])},k=[],x=n("4a7a"),A=n.n(x),j={props:["midiInputs","midiOutputs","cb_index"],components:{vSelect:A.a}},C=j,P=n("2877"),R=Object(P["a"])(C,w,k,!1,null,null,null),S=R.exports,D={name:"app",data:function(){return{loaded:!1,busList:[],busIndex:0,WebMidiRouter:""}},computed:{dispatch:function(){return this.WebMidiRouter.retrieveDispatcher()},availableInputs:function(){var t=[],e=this.WebMidiRouter.retrieveDispatcher(),n=!0,i=!1,u=void 0;try{for(var r,a=o()(this.WebMidiRouter.retrieveInputs());!(n=(r=a.next()).done);n=!0){var s=r.value;e.hasMapping(s)||t.push(s)}}catch(c){i=!0,u=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw u}}return t},availableOutputs:function(){var t=[],e=(this.WebMidiRouter.retrieveDispatcher(),!0),n=!1,i=void 0;try{for(var u,r=o()(this.WebMidiRouter.retrieveOutputs());!(e=(u=r.next()).done);e=!0){var a=u.value;t.push(a)}}catch(s){n=!0,i=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}return t}},methods:{addBlankBus:function(){this.busList.push({input:!1,output:!1})},handleInputChange:function(t,e){this.busList[e].input=t,this.doConnection(e)},handleOutputChange:function(t,e){this.busList[e].output=t,this.doConnection(e)},doConnection:function(t){var e=this.WebMidiRouter.retrieveDispatcher();if(this.busList[t].output&&this.busList[t].input){var n=this.busList[t].input,i=this.busList[t].output;e.addMapping(n.id,i),console.log(n.name+" connected to "+i.name)}}},created:function(){var t=this;this.WebMidiRouter=new _,this.WebMidiRouter.onReady(function(){t.loaded=!0})},components:{vSelect:A.a,ConnectionBus:S}},W=D,L=(n("034f"),Object(P["a"])(W,r,a,!1,null,null,null)),B=L.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"assets/img/logo.82b9c7a5.png"}});