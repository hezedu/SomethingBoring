import{a1 as e,bn as t,ar as l,b4 as o,a2 as n,a5 as a,bM as i,at as s,f as u,aV as c,h as r,be as v,a4 as p,bY as d,aK as m,a as f,a7 as h,ax as b,aG as g,a6 as x,au as w,a3 as y,aI as H,w as O,b0 as k,ab as T,ay as I,aw as N,p as S,b_ as C,a9 as B}from"./index-ZSwLI674.js";const[D,M,V]=e("picker"),P=e=>e.find((e=>!e.disabled))||e[0];function $(e,t){for(let l=t=o(t,0,e.length);l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const j=(e,t,l)=>void 0!==t&&!!e.find((e=>e[l.value]===t));function E(e,t,l){const o=e.findIndex((e=>e[l.value]===t));return e[$(e,o)]}const[A,F]=e("picker-column"),Y=Symbol(A);var z=n({name:A,props:{value:a,fields:i(Object),options:s(),readonly:Boolean,allowHtml:Boolean,optionHeight:i(Number),swipeDuration:i(a),visibleOptionNum:i(a)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:l}){let n,a,i,s,b;const g=u(),x=u(),w=u(0),y=u(0),H=c(),O=()=>e.options.length,k=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,T=l=>{let o=$(e.options,l);const a=-o*e.optionHeight,i=()=>{o>O()-1&&(o=$(e.options,l));const n=e.options[o][e.fields.value];n!==e.value&&t("change",n)};n&&a!==w.value?b=i:i(),w.value=a},I=()=>e.readonly||!e.options.length,N=t=>o(Math.round(-t/e.optionHeight),0,O()-1),S=r((()=>N(w.value))),C=()=>{n=!1,y.value=0,b&&(b(),b=null)},B=e=>{if(!I()){if(H.start(e),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(x.value);w.value=Math.min(0,e-k())}y.value=0,a=w.value,i=Date.now(),s=a,b=null}},D=()=>{if(I())return;const t=w.value-s,l=Date.now()-i;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const o=Math.abs(t/l);t=w.value+o/.003*(t<0?-1:1);const n=N(t);y.value=+e.swipeDuration,T(n)})(t,l);const o=N(w.value);y.value=200,T(o),setTimeout((()=>{n=!1}),0)},M=()=>{const o={height:`${e.optionHeight}px`};return e.options.map(((a,i)=>{const s=a[e.fields.text],{disabled:u}=a,c=a[e.fields.value],r={role:"button",style:o,tabindex:u?-1:0,class:[F("item",{disabled:u,selected:c===e.value}),a.className],onClick:()=>(l=>{n||I()||(b=null,y.value=200,T(l),t("clickOption",e.options[l]))})(i)},v={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return f("li",r,[l.option?l.option(a,i):f("div",v,null)])}))};return v(Y),p({stopMomentum:C}),d((()=>{const t=n?Math.floor(-w.value/e.optionHeight):e.options.findIndex((t=>t[e.fields.value]===e.value)),l=$(e.options,t),o=-l*e.optionHeight;n&&l<t&&C(),w.value=o})),m("touchmove",(l=>{if(I())return;H.move(l),H.isVertical()&&(n=!0,h(l,!0));const u=o(a+H.deltaY.value,-O()*e.optionHeight,e.optionHeight),c=N(u);c!==S.value&&t("scrollInto",e.options[c]),w.value=u;const r=Date.now();r-i>300&&(i=r,s=u)}),{target:g}),()=>f("div",{ref:g,class:F(),onTouchstartPassive:B,onTouchend:D,onTouchcancel:D},[f("ul",{ref:x,style:{transform:`translate3d(0, ${w.value+k()}px, 0)`,transitionDuration:`${y.value}ms`,transitionProperty:y.value?"all":"none"},class:F("wrapper"),onTransitionend:C},[M()])])}});const[G]=e("picker-toolbar"),K={title:String,cancelButtonText:String,confirmButtonText:String},L=["cancel","confirm","title","toolbar"],_=Object.keys(K);var q=n({name:G,props:K,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const o=()=>t("cancel"),n=()=>t("confirm"),a=()=>{var t;const n=null!=(t=e.cancelButtonText)?t:V("cancel");if(l.cancel||n)return f("button",{type:"button",class:[M("cancel"),b],onClick:o},[l.cancel?l.cancel():n])},i=()=>{var t;const o=null!=(t=e.confirmButtonText)?t:V("confirm");if(l.confirm||o)return f("button",{type:"button",class:[M("confirm"),b],onClick:n},[l.confirm?l.confirm():o])};return()=>f("div",{class:M("toolbar")},[l.toolbar?l.toolbar():[a(),l.title?l.title():e.title?f("div",{class:[M("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[J,Q]=e("picker-group"),R=Symbol(J);l({tabs:s(),activeTab:g(0),nextStepText:String,showToolbar:x},K);const U=l({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:g(44),showToolbar:x,swipeDuration:g(1e3),visibleOptionNum:g(6)},K);const W=B(n({name:D,props:l({},U,{columns:s(),modelValue:s(),toolbarPosition:w("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const a=u(),i=u(e.modelValue.slice(0)),{parent:s}=v(R),{children:c,linkChildren:d}=y(Y);d();const b=r((()=>function(e){return l({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),g=r((()=>H(e.optionHeight))),x=r((()=>function(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}(e.columns,b.value))),w=r((()=>{const{columns:l}=e;switch(x.value){case"multiple":return l;case"cascade":return function(e,l,o){const n=[];let a={[l.children]:e},i=0;for(;a&&a[l.children];){const e=a[l.children],s=o.value[i];a=t(s)?E(e,s,l):void 0,!a&&e.length&&(a=E(e,P(e)[l.value],l)),i++,n.push(e)}return n}(l,b.value,i);default:return[l]}})),B=r((()=>w.value.some((e=>e.length)))),D=r((()=>w.value.map(((e,t)=>E(e,i.value[t],b.value))))),V=r((()=>w.value.map(((e,t)=>e.findIndex((e=>e[b.value.value]===i.value[t])))))),$=(e,t)=>{if(i.value[e]!==t){const l=i.value.slice(0);l[e]=t,i.value=l}},A=()=>({selectedValues:i.value.slice(0),selectedOptions:D.value,selectedIndexes:V.value}),F=()=>{c.forEach((e=>e.stopMomentum()));const e=A();return I((()=>{o("confirm",e)})),e},G=()=>o("cancel",A()),K=()=>w.value.map(((t,a)=>f(z,{value:i.value[a],fields:b.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{$(t,e),"cascade"===x.value&&i.value.forEach(((e,t)=>{const l=w.value[t];j(l,e,b.value)||$(t,l.length?l[0][b.value.value]:void 0)})),I((()=>{o("change",l({columnIndex:t},A()))}))})(e,a),onClickOption:e=>((e,t)=>{const n={columnIndex:t,currentOption:e};o("clickOption",l(A(),n)),o("scrollInto",n)})(e,a),onScrollInto:e=>{o("scrollInto",{currentOption:e,columnIndex:a})}},{option:n.option}))),J=e=>{if(B.value){const t={height:`${g.value}px`},l={backgroundSize:`100% ${(e-g.value)/2}px`};return[f("div",{class:M("mask"),style:l},null),f("div",{class:[C,M("frame")],style:t},null)]}},Q=()=>{const t=g.value*+e.visibleOptionNum,l={height:`${t}px`};return f("div",{ref:a,class:M("columns"),style:l},[K(),J(t)])},U=()=>{if(e.showToolbar&&!s)return f(q,S(N(e,_),{onConfirm:F,onCancel:G}),N(n,L))};let W;O(w,(e=>{e.forEach(((e,t)=>{e.length&&!j(e,i.value[t],b.value)&&$(t,P(e)[b.value.value])}))}),{immediate:!0}),O((()=>e.modelValue),(e=>{k(e,i.value)||k(e,W)||(i.value=e.slice(0),W=e.slice(0))}),{deep:!0}),O(i,(t=>{k(t,e.modelValue)||(W=t.slice(0),o("update:modelValue",W))}),{immediate:!0}),m("touchmove",h,{target:a});return p({confirm:F,getSelectedOptions:()=>D.value}),()=>{var t,l;return f("div",{class:M()},["top"===e.toolbarPosition?U():null,e.loading?f(T,{class:M("loading")},null):null,null==(t=n["columns-top"])?void 0:t.call(n),Q(),null==(l=n["columns-bottom"])?void 0:l.call(n),"bottom"===e.toolbarPosition?U():null])}}}));export{W as P,U as p};