import{bl as e,a5 as a,a2 as l,ar as o,bM as t,a6 as i,f as s,h as n,a as r,aq as d,a_ as u,a1 as c,be as p,w as m,a4 as v,a$ as b,aw as g,p as h,a9 as f,t as y,u as x,r as k,o as _,c as w,m as V,z as C,b as T,l as j,U as S,bN as B,F as G,B as M,C as z}from"./index-ZSwLI674.js";/* empty css              *//* empty css              *//* empty css              */import{L as P}from"./heade-DUivnrKO.js";import{_ as F}from"./chooseCountry.vue_vue_type_style_index_0_lang-Dd6ON4BW.js";import{_ as D}from"./index-MP83Mxf-.js";import{B as E,A as O}from"./bizType-DoDjwnwK.js";import{v as U,a as q,b as I}from"./validators-D3H_ul3D.js";import{T as R,a as H}from"./index-C0sISGSw.js";/* empty css                                                              */import"./index-Cxe8Vk9V.js";import"./index-CqDlCCNj.js";import"./use-id-BUjKeJ2W.js";/* empty css                                              */import"./index-D9ybKy9M.js";import"./headItem-BRJ0w2uz.js";import"./use-tab-status-yiZOeCkD.js";import"./index-DXU4Ikqf.js";import"./index-BpQst5nk.js";const L={name:e,disabled:Boolean,iconSize:a,modelValue:e,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var X=l({props:o({},L,{bem:t(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:i,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:a,slots:l}){const o=s(),t=a=>{if(e.parent&&e.bindGroup)return e.parent.props[a]},i=n((()=>{if(e.parent&&e.bindGroup){const a=t("disabled")||e.disabled;if("checkbox"===e.role){const l=t("modelValue").length,o=t("max");return a||o&&l>=+o&&!e.checked}return a}return e.disabled})),c=n((()=>t("direction"))),p=n((()=>{const a=e.checkedColor||t("checkedColor");if(a&&e.checked&&!i.value)return{borderColor:a,backgroundColor:a}})),m=n((()=>e.shape||t("shape")||"round")),v=l=>{const{target:t}=l,s=o.value,n=s===t||(null==s?void 0:s.contains(t));i.value||!n&&e.labelDisabled||a("toggle"),a("click",l)},b=()=>{var a,s;const{bem:n,checked:c,indeterminate:v}=e,b=e.iconSize||t("iconSize");return r("div",{ref:o,class:n("icon",[m.value,{disabled:i.value,checked:c,indeterminate:v}]),style:"dot"!==m.value?{fontSize:u(b)}:{width:u(b),height:u(b),borderColor:null==(a=p.value)?void 0:a.borderColor}},[l.icon?l.icon({checked:c,disabled:i.value}):"dot"!==m.value?r(d,{name:v?"minus":"success",style:p.value},null):r("div",{class:n("icon--dot__icon"),style:{backgroundColor:null==(s=p.value)?void 0:s.backgroundColor}},null)])},g=()=>{const{checked:a}=e;if(l.default)return r("span",{class:e.bem("label",[e.labelPosition,{disabled:i.value}])},[l.default({checked:a,disabled:i.value})])};return()=>{const a="left"===e.labelPosition?[g(),b()]:[b(),g()];return r("div",{role:e.role,class:e.bem([{disabled:i.value,"label-disabled":e.labelDisabled},c.value]),tabindex:i.value?void 0:0,"aria-checked":e.checked,onClick:v},[a])}}});const[A,N]=c("checkbox-group"),W=Symbol(A),[$,Y]=c("checkbox");const Z=f(l({name:$,props:o({},L,{shape:String,bindGroup:i,indeterminate:{type:Boolean,default:null}}),emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const{parent:o}=p(W),t=n((()=>o&&e.bindGroup?-1!==o.props.modelValue.indexOf(e.name):!!e.modelValue)),i=(l=!t.value)=>{o&&e.bindGroup?(a=>{const{name:l}=e,{max:t,modelValue:i}=o.props,s=i.slice();if(a)t&&s.length>=+t||s.includes(l)||(s.push(l),e.bindGroup&&o.updateValue(s));else{const a=s.indexOf(l);-1!==a&&(s.splice(a,1),e.bindGroup&&o.updateValue(s))}})(l):a("update:modelValue",l),null!==e.indeterminate&&a("change",l)};return m((()=>e.modelValue),(l=>{null===e.indeterminate&&a("change",l)})),v({toggle:i,props:e,checked:t}),b((()=>e.modelValue)),()=>r(X,h({bem:Y,role:"checkbox",parent:o,checked:t.value,onToggle:i},e),g(l,["default","icon"]))}})),J={key:0,class:"register-wrapper"},K={class:"agreement-wrapper"},Q={class:"flex"},ee={class:"text"},ae={class:"agreement-content"},le={class:"agreement-tip"},oe={__name:"index",setup(e){const a=y(),{t:l}=x(),o=s({height:" 24px",lineHeight:"24px",fontSize:"16px",fontWeight:500,padding:"0 0 6px 0",marginRight:"24px"}),t=s("email"),i=s(),n=s(""),d=s(!1),u=s(!0),c=s(!0),p=s(!1),v=s(null),b=k({bizType:E.REGISTER,email:"",ga:"",phone:"",verifyEmail:!1,verifyGa:!1,verifyPhone:!1}),g=s([{tabTitle:l("邮箱注册"),name:"email",children:[{componentType:"input",type:"text",key:"email",placeholder:l("请输入邮箱"),rules:[{required:!0,message:l("请输入邮箱")},{validator:U,trigger:["onBlur"]}]},{componentType:"password",type:"password",key:"password",placeholder:l("请输入密码"),rules:[{required:!0,message:l("请输入密码")},{validator:q,trigger:["onBlur"]}]},{componentType:"input",type:"id",key:"id",placeholder:l("推荐人ID(选填)")}]},{tabTitle:l("手机注册"),name:"mobile",children:[{componentType:"input",type:"text",key:"mobile",areaCode:n,leftIcon:"left-icon",placeholder:l("请输入手机号"),onChooseCountry:()=>{d.value=!0},rules:[{required:!0,message:l("请输入手机号")},{validator:I,trigger:["onBlur"]}]},{componentType:"password",type:"password",key:"password",placeholder:l("请输入密码"),rules:[{required:!0,message:l("请输入密码")},{validator:q,trigger:["onBlur"]}]},{componentType:"input",type:"id",key:"id",placeholder:l("推荐人ID(选填)")}]}]),f=()=>{a.push({name:"login"})},L=e=>{A.formModelValues[e.name]=null,u.value=!0;const a=Object.keys(A.formModelValues);switch(e.name){case"email":case"mobile":a.forEach((e=>{A.formModelValues[e]=null}))}},X=async({fullAccount:e,result:l})=>{const o=v.value;l.areaCode=o.areaCode,l.loginPwd=o.loginPwd;let t=!1;try{console.log("register ",e),o.inviteCode&&(l.followMid=o.inviteCode),console.log(l),t=await S.register(e,l)}catch(i){console.error("register error",i)}t&&a.push("/login")},A=k({formModelValues:{},submitText:l("注册"),submitDisabled:u,onSubmit:e=>{console.log(e);if(!!c.value||(p.value=!0,!1)){const{mobile:e,email:a,password:l,id:o}=A.formModelValues,t=e?"phone":"email",i="phone"===t?e:a;console.log("register account",i),v.value={account:i,accountType:t,areaCode:n.value,inviteCode:o,loginPwd:l,bizType:E.REGISTER,ext:{...b}},console.log("twiceParams",v)}},formConfigList:[]}),N=e=>{i.value=e.icon,n.value=e.countryCode};return m((()=>A.formModelValues),(e=>{console.log("newFormData",e),(e=>{switch(t.value){case"email":u.value=!(e.email&&e.password);break;case"mobile":u.value=!(e.mobile&&e.password)}})(e)}),{immediate:!0,deep:!0}),(e,a)=>{const i=H,s=R,n=Z,u=B;return v.value?(_(),j(O,{key:1,twiceParams:v.value,onNext:X,onBack:a[5]||(a[5]=e=>v.value=null)},null,8,["twiceParams"])):(_(),w("div",J,[r(P,{leftText:V(l)("注册"),rightText:V(l)("登录"),onOnClick:f},null,8,["leftText","rightText"]),r(s,{active:t.value,"onUpdate:active":a[1]||(a[1]=e=>t.value=e),shrink:"","title-inactive-color":"#FFFFFF","title-active-color":"var(--basic---)",background:"var(--Misc-body-bg)",color:"var(--basic---)","line-width":"64px","line-height":"2px",onClickTab:L},{default:C((()=>[(_(!0),w(G,null,M(g.value,(e=>(_(),j(i,{title:e.tabTitle,name:e.name,key:e.name,"title-style":o.value},{default:C((()=>[r(D,h({modelValue:A.formModelValues,"onUpdate:modelValue":a[0]||(a[0]=e=>A.formModelValues=e),ref_for:!0},{...A,formConfigList:e.children}),null,16,["modelValue"])])),_:2},1032,["title","name","title-style"])))),128))])),_:1},8,["active"]),T("div",K,[r(n,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),shape:"square","checked-color":"#009688","icon-size":"18px"},{default:C((()=>[T("p",Q,[T("span",ee,z(V(l)("已阅读并同意")),1),T("i",ae,z(V(l)("《HOTEX服务条款》")),1)])])),_:1},8,["modelValue"])]),r(F,{modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value=e),onChoose:N},null,8,["modelValue"]),r(u,{show:p.value,"onUpdate:show":a[4]||(a[4]=e=>p.value=e),style:{padding:"0"},duration:"1000"},{message:C((()=>[T("span",le,z(V(l)("请先阅读并同意《HOTEX服务条款》")),1)])),_:1},8,["show"])]))}}};export{oe as default};