import{a1 as e,a6 as a,a5 as t,aG as i,a2 as l,f as s,r as o,aV as n,a3 as u,h as r,a4 as v,w as c,aN as h,aO as p,ba as d,j as f,bb as g,bc as w,aD as m,aE as b,aK as x,a as y,bd as C,aL as S,ay as $,a7 as z,b4 as M,a9 as T,be as O}from"./index-ZSwLI674.js";const[D,E]=e("swipe"),I={loop:a,width:t,height:t,vertical:Boolean,autoplay:i(0),duration:i(500),touchable:a,lazyRender:Boolean,initialSwipe:i(0),indicatorColor:String,showIndicators:a,stopPropagation:a},X=Symbol(D);const Y=T(l({name:D,props:I,emits:["change","dragStart","dragEnd"],setup(e,{emit:a,slots:t}){const i=s(),l=s(),T=o({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let O=!1;const D=n(),{children:I,linkChildren:Y}=u(X),k=r((()=>I.length)),P=r((()=>T[e.vertical?"height":"width"])),j=r((()=>e.vertical?D.deltaY.value:D.deltaX.value)),B=r((()=>{if(T.rect){return(e.vertical?T.rect.height:T.rect.width)-P.value*k.value}return 0})),R=r((()=>P.value?Math.ceil(Math.abs(B.value)/P.value):k.value)),A=r((()=>k.value*P.value)),F=r((()=>(T.active+k.value)%k.value)),G=r((()=>{const a=e.vertical?"vertical":"horizontal";return D.direction.value===a})),H=r((()=>{const a={transitionDuration:`${T.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+T.offset.toFixed(2)}px)`};if(P.value){const t=e.vertical?"height":"width",i=e.vertical?"width":"height";a[t]=`${A.value}px`,a[i]=e[i]?`${e[i]}px`:""}return a})),K=(a,t=0)=>{let i=a*P.value;e.loop||(i=Math.min(i,-B.value));let l=t-i;return e.loop||(l=M(l,B.value,0)),l},L=({pace:t=0,offset:i=0,emitChange:l})=>{if(k.value<=1)return;const{active:s}=T,o=(a=>{const{active:t}=T;return a?e.loop?M(t+a,-1,k.value):M(t+a,0,R.value):t})(t),n=K(o,i);if(e.loop){if(I[0]&&n!==B.value){const e=n<B.value;I[0].setOffset(e?A.value:0)}if(I[k.value-1]&&0!==n){const e=n>0;I[k.value-1].setOffset(e?-A.value:0)}}T.active=o,T.offset=n,l&&o!==s&&a("change",F.value)},N=()=>{T.swiping=!0,T.active<=-1?L({pace:k.value}):T.active>=k.value&&L({pace:-k.value})},V=()=>{N(),D.reset(),C((()=>{T.swiping=!1,L({pace:1,emitChange:!0})}))};let W;const q=()=>clearTimeout(W),J=()=>{q(),+e.autoplay>0&&k.value>1&&(W=setTimeout((()=>{V(),J()}),+e.autoplay))},Q=(a=+e.initialSwipe)=>{if(!i.value)return;const t=()=>{var t,l;if(!S(i)){const a={width:i.value.offsetWidth,height:i.value.offsetHeight};T.rect=a,T.width=+(null!=(t=e.width)?t:a.width),T.height=+(null!=(l=e.height)?l:a.height)}k.value&&-1===(a=Math.min(k.value-1,a))&&(a=k.value-1),T.active=a,T.swiping=!0,T.offset=K(a),I.forEach((e=>{e.setOffset(0)})),J()};S(i)?$().then(t):t()},U=()=>Q(T.active);let Z;const _=a=>{!e.touchable||a.touches.length>1||(D.start(a),O=!1,Z=Date.now(),q(),N())},ee=()=>{if(!e.touchable||!T.swiping)return;const t=Date.now()-Z,i=j.value/t;if((Math.abs(i)>.25||Math.abs(j.value)>P.value/2)&&G.value){const a=e.vertical?D.offsetY.value:D.offsetX.value;let t=0;t=e.loop?a>0?j.value>0?-1:1:0:-Math[j.value>0?"ceil":"floor"](j.value/P.value),L({pace:t,emitChange:!0})}else j.value&&L({pace:0});O=!1,T.swiping=!1,a("dragEnd",{index:F.value}),J()},ae=(a,t)=>{const i=t===F.value,l=i?{backgroundColor:e.indicatorColor}:void 0;return y("i",{style:l,class:E("indicator",{active:i})},null)};return v({prev:()=>{N(),D.reset(),C((()=>{T.swiping=!1,L({pace:-1,emitChange:!0})}))},next:V,state:T,resize:U,swipeTo:(a,t={})=>{N(),D.reset(),C((()=>{let i;i=e.loop&&a===k.value?0===T.active?0:a:a%k.value,t.immediate?C((()=>{T.swiping=!1})):T.swiping=!1,L({pace:i-T.active,emitChange:!0})}))}}),Y({size:P,props:e,count:k,activeIndicator:F}),c((()=>e.initialSwipe),(e=>Q(+e))),c(k,(()=>Q(T.active))),c((()=>e.autoplay),J),c([h,p,()=>e.width,()=>e.height],U),c(d(),(e=>{"visible"===e?J():q()})),f(Q),g((()=>Q(T.active))),w((()=>Q(T.active))),m(q),b(q),x("touchmove",(t=>{if(e.touchable&&T.swiping&&(D.move(t),G.value)){!e.loop&&(0===T.active&&j.value>0||T.active===k.value-1&&j.value<0)||(z(t,e.stopPropagation),L({offset:j.value}),O||(a("dragStart",{index:F.value}),O=!0))}}),{target:l}),()=>{var a;return y("div",{ref:i,class:E()},[y("div",{ref:l,style:H.value,class:E("track",{vertical:e.vertical}),onTouchstartPassive:_,onTouchend:ee,onTouchcancel:ee},[null==(a=t.default)?void 0:a.call(t)]),t.indicator?t.indicator({active:F.value,total:k.value}):e.showIndicators&&k.value>1?y("div",{class:E("indicators",{vertical:e.vertical})},[Array(k.value).fill("").map(ae)]):void 0])}}})),[k,P]=e("swipe-item");const j=T(l({name:k,setup(e,{slots:a}){let t;const i=o({offset:0,inited:!1,mounted:!1}),{parent:l,index:s}=O(X);if(!l)return;const n=r((()=>{const e={},{vertical:a}=l.props;return l.size.value&&(e[a?"height":"width"]=`${l.size.value}px`),i.offset&&(e.transform=`translate${a?"Y":"X"}(${i.offset}px)`),e})),u=r((()=>{const{loop:e,lazyRender:a}=l.props;if(!a||t)return!0;if(!i.mounted)return!1;const o=l.activeIndicator.value,n=l.count.value-1,u=0===o&&e?n:o-1,r=o===n&&e?0:o+1;return t=s.value===o||s.value===u||s.value===r,t}));return f((()=>{$((()=>{i.mounted=!0}))})),v({setOffset:e=>{i.offset=e}}),()=>{var e;return y("div",{class:P(),style:n.value},[u.value?null==(e=a.default)?void 0:e.call(a):null])}}}));export{Y as S,j as a};