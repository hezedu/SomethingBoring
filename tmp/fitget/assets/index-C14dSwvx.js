import{f as a,F as e}from"./index-CqDlCCNj.js";import{u as l}from"./use-id-BUjKeJ2W.js";import{a1 as o,ar as c,au as s,a6 as n,a2 as t,f as r,a4 as i,a as u,aw as d,p as f,a7 as b,a9 as p}from"./index-ZSwLI674.js";const[h,k,m]=o("search");const g=p(t({name:h,props:c({},a,{label:String,shape:s("square"),leftIcon:s("search"),clearable:n,actionText:String,background:String,showAction:Boolean}),emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(o,{emit:s,slots:n,attrs:t}){const p=l(),h=r(),g=()=>{n.action||(s("update:modelValue",""),s("cancel"))},v=a=>{13===a.keyCode&&(b(a),s("search",o.modelValue))},I=()=>o.id||`${p}-input`,w=()=>{if(n.label||o.label)return u("label",{class:k("label"),for:I()},[n.label?n.label():o.label])},x=()=>{if(o.showAction){const a=o.actionText||m("cancel");return u("div",{class:k("action"),role:"button",tabindex:0,onClick:g},[n.action?n.action():a])}},C=a=>s("blur",a),y=a=>s("focus",a),V=a=>s("clear",a),j=a=>s("clickInput",a),S=a=>s("clickLeftIcon",a),A=a=>s("clickRightIcon",a),L=Object.keys(a),R=()=>{const a=c({},t,d(o,L),{id:I()});return u(e,f({ref:h,type:"search",class:k("field",{"with-message":a.errorMessage}),border:!1,onBlur:C,onFocus:y,onClear:V,onKeypress:v,onClickInput:j,onClickLeftIcon:S,onClickRightIcon:A,"onUpdate:modelValue":a=>s("update:modelValue",a)},a),d(n,["left-icon","right-icon"]))};return i({focus:()=>{var a;return null==(a=h.value)?void 0:a.focus()},blur:()=>{var a;return null==(a=h.value)?void 0:a.blur()}}),()=>{var a;return u("div",{class:k({"show-action":o.showAction}),style:{background:o.background}},[null==(a=n.left)?void 0:a.call(n),u("div",{class:k("content",o.shape)},[w(),R()]),x()])}}}));export{g as S};