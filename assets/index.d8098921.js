var A=Object.defineProperty;var q=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var O=(t,a,c)=>a in t?A(t,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[a]=c,R=(t,a)=>{for(var c in a||(a={}))Y.call(a,c)&&O(t,c,a[c]);if(q)for(var c of q(a))Z.call(a,c)&&O(t,c,a[c]);return t};import{R as e,P as h,N as p,B as j,a as i,C as l,b as x,L as g,c as o,d as m,e as G,f as D,g as y,u as C,r as w,h as U,i as T,j as S,k as M,T as W,l as _,A as K,V as z,F as J,m as Q,n as X}from"./vendor.a7813d7c.js";const ee=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function c(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=c(r);fetch(r.href,s)}};ee();const te=({f7router:t})=>e.createElement(h,{style:{display:"flex",justifyContent:"center",alignItems:"center"},name:"home"},e.createElement(p,{title:"Home"}),e.createElement(j,{style:{textAlign:"center"}},"Go To Device"),e.createElement(i,null,e.createElement(l,null,e.createElement(x,{onClick:()=>t.navigate("/device/",{transition:"f7-parallax"}),fill:!0},"Go to Device")))),ae=({f7router:t,deviceId:a})=>e.createElement(h,{name:"settings"},e.createElement(p,{backLink:"Settings"}),e.createElement("div",{className:"page-cards"},e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/common-settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Common Settings"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/switch/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Switch Settings"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Other Settings"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/device-info/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Device Info"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))))),ne="http://13.126.210.17",P=`${ne}/settings`,k=G({state:{devices:[],deviceInfo:[],deviceSettings:[],isLoading:!1},getters:{devices({state:t}){return t.devices},loading({state:t}){return t.isLoading},deviceInfo({state:t}){return t.deviceInfo},deviceSettings({state:t}){return t.deviceSettings}},actions:{setLoading({state:t},a){t.isLoading=a},getDevices({state:t,dispatch:a}){a("setLoading",!0);const c={token:"EVSZ5qnOHYmN1gwmliYI0YEVVDGnrkhj"};D.post(`${P}/getDevicesForRoom`,c).then(n=>{t.devices=n.data.data,a("setLoading",!1)}).catch(n=>console.log(n))},getDeviceInfo({state:t,dispatch:a},c){a("setLoading",!0);const n={token:"EVSZ5qnOHYmN1gwmliYI0YEVVDGnrkhj",deviceId:c};D.post(`${P}/getDeviceInfo`,n).then(r=>{t.deviceInfo=r.data,a("setLoading",!1)}).catch(r=>console.log(r))},getDeviceSettings({state:t,dispatch:a},c){a("setLoading",!0);const n={token:"EVSZ5qnOHYmN1gwmliYI0YEVVDGnrkhj",deviceId:c};D.post(`${P}/getDeviceSettings`,n).then(r=>{t.deviceSettings=r.data,a("setLoading",!1)}).catch(r=>console.log(r))}}});function le({router:t,name:a,identifier:c}){return e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"device-card"},e.createElement(i,null,e.createElement(l,{width:"20"},e.createElement("div",{className:"img-header"},e.createElement("svg",{width:"28",height:"42",viewBox:"0 0 28 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M27.2857 3.08577C27.0285 2.91434 26.6857 3.00006 26.2571 3.2572L6.4571 15.0858C5.59995 15.6001 7.91424 16.8858 7.91424 17.9143L4.82852 40.5429C4.82852 41.0572 4.82852 41.3143 5.17138 41.4858L0.714237 38.9143C0.457094 38.7429 0.285666 38.4001 0.285666 37.9715L0.199951 14.9143C0.199951 13.9715 0.885666 12.7715 1.74281 12.2572L21.7142 0.600056C22.1428 0.428627 22.5714 0.342913 22.8285 0.514342L27.2857 3.08577Z",fill:"#AA6256"})),e.createElement("div",null,e.createElement("div",{className:"dots active"}),e.createElement("div",{className:"dots active"}),e.createElement("div",{className:"dots active"}),e.createElement("div",{className:"dots active"})))),e.createElement(l,{width:"80"},e.createElement(m,null,e.createElement("h1",{className:"heading"},a),e.createElement("p",null,c))))))}const re=()=>e.createElement(y,{width:400,height:100,backgroundColor:"#ececec",foregroundColor:"#fafafa"},e.createElement("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"400",height:"100"})),ce=()=>e.createElement(y,{width:400,height:100,backgroundColor:"#ececec",foregroundColor:"#fafafa"},e.createElement("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"400",height:"100"})),ie=()=>e.createElement(y,{width:400,height:100,backgroundColor:"#ececec",foregroundColor:"#fafafa"},e.createElement("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"400",height:"100"})),se=()=>e.createElement(y,{width:400,height:100,backgroundColor:"#ececec",foregroundColor:"#fafafa"},e.createElement("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"400",height:"100"})),b=()=>e.createElement("div",{className:"loading-container"},e.createElement(re,null),e.createElement(ce,null),e.createElement(ie,null),e.createElement(se,null)),me=({f7router:t})=>{const a=C("loading"),c=C("devices");w.exports.useEffect(()=>{k.dispatch("getDevices")},[]);const n=c.map(r=>e.createElement(le,{router:t,key:r.name,name:r.name,identifier:r.identifier}));return e.createElement(h,{name:"device"},e.createElement(p,{backLink:"Select Device"}),e.createElement("div",{className:"page-cards"},a?e.createElement(b,null):n))},oe=({f7router:t,deviceId:a})=>e.createElement(h,{name:"switch"},e.createElement(p,{backLink:"Select Switch"}),e.createElement("div",{className:"page-cards"},e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/switch-settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"EFG Light"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/switch-settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Mark Desk"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/switch-settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Switch Off Light"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/switch-settings/",{props:{deviceId:a},transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Switch"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))))),de=({f7router:t,deviceId:a=null})=>{var s,u,f,d,v,L;const c=C("loading"),n=C("deviceInfo"),r=new Date((s=n==null?void 0:n.data)==null?void 0:s.lastOnline);return w.exports.useEffect(()=>{k.dispatch("getDeviceInfo",a)},[]),e.createElement(h,{name:"device-info"},e.createElement(p,{backLink:"Device Info"}),e.createElement("div",{className:"page-cards"},e.createElement("div",{className:"top-header"},e.createElement("div",{className:"img-header"},e.createElement("svg",{width:"28",height:"42",viewBox:"0 0 28 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M27.2857 3.08577C27.0285 2.91434 26.6857 3.00006 26.2571 3.2572L6.4571 15.0858C5.59995 15.6001 7.91424 16.8858 7.91424 17.9143L4.82852 40.5429C4.82852 41.0572 4.82852 41.3143 5.17138 41.4858L0.714237 38.9143C0.457094 38.7429 0.285666 38.4001 0.285666 37.9715L0.199951 14.9143C0.199951 13.9715 0.885666 12.7715 1.74281 12.2572L21.7142 0.600056C22.1428 0.428627 22.5714 0.342913 22.8285 0.514342L27.2857 3.08577Z",fill:"#AA6256"})),e.createElement("div",{className:"dots-container"},e.createElement("div",{className:"dots active"}),e.createElement("div",{className:"dots"}),e.createElement("div",{className:"dots"}),e.createElement("div",{className:"dots"}))),e.createElement("div",{className:"title"},e.createElement("h1",null,(u=n==null?void 0:n.data)==null?void 0:u.deviceId),e.createElement("p",null,"no data from api for this Identifier"))),c?e.createElement(b,null):e.createElement(o,{className:"top-header-card"},e.createElement("li",null,e.createElement(i,null,e.createElement(l,{width:"60"},e.createElement(m,null,e.createElement("p",{className:"card-key"},"WIFI"))),e.createElement(l,{width:"60"},e.createElement("p",{className:"card-value"},((f=n==null?void 0:n.data)==null?void 0:f.WifiSSID)||"-")))),e.createElement("li",null,e.createElement(i,null,e.createElement(l,{width:"60"},e.createElement(m,null,e.createElement("p",{className:"card-key"},"WIFI Strength"))),e.createElement(l,{width:"60"},e.createElement("p",{className:"card-value"},((d=n==null?void 0:n.data)==null?void 0:d.strength)||"-")))),e.createElement("li",null,e.createElement(i,null,e.createElement(l,{width:"60"},e.createElement(m,null,e.createElement("p",{className:"card-key"},"Last Online"))),e.createElement(l,{width:"60"},e.createElement("p",{className:"card-value"},r.toLocaleString("sv-SE")||"-")))),e.createElement("li",null,e.createElement(i,null,e.createElement(l,{width:"60"},e.createElement(m,null,e.createElement("p",{className:"card-key"},"Wifi Mac"))),e.createElement(l,{width:"60"},e.createElement("p",{className:"card-value"},((v=n==null?void 0:n.data)==null?void 0:v.wifiMac)||"-")))),e.createElement("li",null,e.createElement(i,null,e.createElement(l,{width:"60"},e.createElement(m,null,e.createElement("p",{className:"card-key"},"Firmware Version"))),e.createElement(l,{width:"60"},e.createElement("p",{className:"card-value"},((L=n==null?void 0:n.data)==null?void 0:L.firmwareVersion)||"-")))))))},ge=({deviceId:t})=>{var H,V,B;const[a,c]=w.exports.useState(4),[n,r]=w.exports.useState(10.15),s=1,u=10,f=C("loading"),d=C("deviceSettings");w.exports.useEffect(()=>{var N,I;k.dispatch("getDeviceSettings",t),c(((N=d==null?void 0:d.data)==null?void 0:N.fadeTime)<=0?1:(I=d==null?void 0:d.data)==null?void 0:I.fadeTime)},[]);const v=()=>{T.dialog.alert(`Range: ${a}, Counter: ${n.toFixed(2)} 

        Data Saved Successfully`)},L=()=>{T.dialog.alert("Upgraded Successfully")},F=N=>{c(N)},E=()=>{r(N=>N+.05)},$=()=>{r(N=>N-.05)};return e.createElement(h,{name:"common-settings"},e.createElement(p,{backLink:"Common Settings"}),f?e.createElement(b,null):e.createElement("div",{className:"page-cards"},e.createElement(o,{className:"common-settings-card"},((H=d==null?void 0:d.data)==null?void 0:H.fadeTime)>=0&&e.createElement("div",{className:"section1"},e.createElement("h1",null,"Fade Time"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."),e.createElement("div",{className:"slider"},e.createElement("div",{className:"minmaxlabel"},e.createElement("p",null,s),e.createElement("p",null,u)),e.createElement(U,{onRangeChange:F,min:s,max:u,step:1,value:a,label:!0}))),((V=d==null?void 0:d.data)==null?void 0:V.fadeTime)>=0&&e.createElement(e.Fragment,null,e.createElement("div",{className:"section2"},e.createElement("h1",null,"Curtain Closing Time"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."),e.createElement("div",{className:"counter"},e.createElement("div",{onClick:$,className:"decrement"}," ",e.createElement("svg",{width:"12",height:"2",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M12 0.997792C12 1.26269 11.8983 1.51876 11.7081 1.70419C11.5223 1.89404 11.2658 2 11.0004 2H7.00184H4.99816H0.999631C0.734243 2 0.4777 1.89404 0.291928 1.70419C0.106156 1.51876 0 1.26269 0 0.997792C0 0.732892 0.106156 0.481236 0.291928 0.291391C0.4777 0.10596 0.734243 0 0.999631 0H4.99816H7.00184H11.0004C11.2658 0 11.5223 0.10596 11.7081 0.291391C11.8983 0.481236 12 0.732892 12 0.997792Z",fill:"#3872FF"}))),e.createElement("div",{className:"counter-value"},e.createElement("p",null,n.toFixed(2)),e.createElement("span",null,e.createElement("svg",{width:"64",height:"1",viewBox:"0 0 64 1",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("line",{y1:"0.5",x2:"64",y2:"0.5",stroke:"#3872FF",strokeOpacity:"0.1"})))),e.createElement("div",{onClick:E,className:"increment"}," ",e.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M12 5.99779C12 6.26269 11.8983 6.51876 11.7081 6.70419C11.5223 6.89404 11.2658 7 11.0004 7H7.00184H4.99816H0.999631C0.734243 7 0.4777 6.89404 0.291928 6.70419C0.106156 6.51876 0 6.26269 0 5.99779C0 5.73289 0.106156 5.48124 0.291928 5.29139C0.4777 5.10596 0.734243 5 0.999631 5H4.99816H7.00184H11.0004C11.2658 5 11.5223 5.10596 11.7081 5.29139C11.8983 5.48124 12 5.73289 12 5.99779Z",fill:"#3872FF"}),e.createElement("path",{d:"M5.99779 0C6.26269 0 6.51876 0.101732 6.70419 0.291927C6.89404 0.4777 7 0.734242 7 0.999631L7 4.99816V7.00184V11.0004C7 11.2658 6.89404 11.5223 6.70419 11.7081C6.51876 11.8938 6.26269 12 5.99779 12C5.73289 12 5.48124 11.8938 5.29139 11.7081C5.10596 11.5223 5 11.2658 5 11.0004V7.00184V4.99816L5 0.999631C5 0.734242 5.10596 0.4777 5.29139 0.291927C5.48124 0.101732 5.73289 0 5.99779 0Z",fill:"#3872FF"}))))),e.createElement("div",{className:"button"},e.createElement(x,{onClick:v,fill:!0},"Save Changes")))),e.createElement(o,{style:{marginBottom:"2rem"},className:"common-settings-card"},((B=d==null?void 0:d.data)==null?void 0:B.firmwareUpgrade)&&e.createElement(e.Fragment,null,e.createElement("div",{className:"section1"},e.createElement("h1",null,"Firmware Upgrade"),e.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit volu ptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archit ecto be atae vitae dicta sunt expli cabo. Nemo enim ipsam voluptatem quia voluptas sit aspe rnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nes ciunt.")),e.createElement("div",{className:"button"},e.createElement(x,{onClick:L,fill:!0},"Upgrade Now"))))))};function ue({switches:t,setType:a}){const c=t.map(n=>e.createElement(S,{key:n.name,radio:!0,onChange:r=>a(r.target.value),name:"type-radio",value:n.name,title:n.name,text:`Port: ${n.port} | Dimming Strategy: ${n.dimmingStrategy} | Port Type: ${n.portType} `}));return e.createElement(e.Fragment,null,e.createElement(M,{onChange:n=>alert(n),mediaList:!0},c))}const Ee=({f7router:t,deviceId:a})=>{const[c,n]=w.exports.useState(!0),[r,s]=w.exports.useState(""),[u,f]=w.exports.useState("Type 1"),d=C("loading"),v=C("deviceSettings");w.exports.useEffect(()=>{k.dispatch("getDeviceSettings",a)},[]);const L=()=>{T.dialog.alert(`Selected Type: ${u} | Selected Switch Type: ${r} | Saved Changes Successfully`)},F=()=>{n(E=>!E)};return e.createElement(h,{name:"switch-settings"},e.createElement(p,{backLink:"Switch Settings"}),e.createElement("div",{className:"page-cards"},e.createElement(o,{style:{marginBottom:"2rem"},className:"switch-settings-card"},e.createElement("div",{className:"section1"},e.createElement("div",{className:"heading"},e.createElement("h1",null,"Firmware Upgrade"),e.createElement(W,{checked:c,onToggleChange:F})),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")),e.createElement("div",{className:"types"},d?e.createElement(b,null):e.createElement(ue,{switches:v==null?void 0:v.data.switches,setType:f})),e.createElement("div",{className:"section2"},e.createElement("h1",null,"Switch Type"),e.createElement(M,null,e.createElement(S,{radio:!0,onChange:E=>s(E.target.value),radioIcon:"start",title:"Standard Switch",value:"Standard Switch",name:"switch-settings-radio"}),e.createElement(S,{radio:!0,onChange:E=>s(E.target.value),radioIcon:"start",title:"Bell Push",value:"Bell Push",name:"switch-settings-radio"}),e.createElement(S,{onChange:E=>s(E.target.value),radio:!0,radioIcon:"start",title:"Standard Switch Scene",value:"Standard Switch Scene",name:"switch-settings-radio"}),e.createElement(S,{radio:!0,onChange:E=>s(E.target.value),radioIcon:"start",title:"Bell Push Scene",value:"Bell Push Scene",name:"switch-settings-radio"})))),r==="Standard Switch Scene"&&e.createElement("div",{className:"scene"},e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/scene/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Switch Settings"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"}))))))),e.createElement("div",{className:"button"},e.createElement(x,{onClick:L,fill:!0},"Save Changes"))))},he=({f7router:t})=>e.createElement(h,{name:"scene"},e.createElement(p,{backLink:"Scene"}),e.createElement("div",{className:"page-cards"},e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/execution/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Single Press"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/execution/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Double Press"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/execution/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Triple Press"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))))),pe=({f7router:t})=>e.createElement(h,{name:"execution"},e.createElement(p,{backLink:"Execution"}),e.createElement("div",{className:"page-cards"},e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Scenes"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Single Switch"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))),e.createElement(g,{noLinkClass:!0,onClick:()=>t.navigate("/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Alexa Routine"),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"})))))))),we=()=>e.createElement(h,{name:"error"},e.createElement(p,{backLink:"Not found"}),e.createElement("div",{className:"page-cards"},e.createElement(g,{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5rem"},noLinkClass:!0,onClick:()=>f7router.navigate("/",{transition:"f7-parallax"})},e.createElement(o,{className:"switch-card"},e.createElement(i,null,e.createElement(l,{width:"90"},e.createElement(m,null,e.createElement("h1",{className:"heading"},"Not Found"),e.createElement("p",null,"Requested Content Not Found. Go to Home"))),e.createElement(l,{width:"10"},e.createElement("div",{className:"img-header"},e.createElement("img",{src:"img/arrow-right.svg",alt:"arrow-right"}))))))));var ve=[{path:"/",component:te},{path:"/settings/",component:ae},{path:"/switch/",component:oe},{path:"/device/",component:me},{path:"/device-info/",component:de},{path:"/common-settings/",component:ge},{path:"/switch-settings/",component:Ee},{path:"/scene/",component:he},{path:"/execution/",component:pe},{path:"(.*)",component:we}];const Ne=()=>{const t={name:"Picostone",theme:"aurora",store:k,routes:ve,view:{browserHistory:!0,browserHistorySeperator:""}};return _(()=>{}),e.createElement(K,R({},t),e.createElement(z,{main:!0,className:"safe-areas",url:"/"}))};J.use(Q);X.render(e.createElement(Ne),document.getElementById("app"));
