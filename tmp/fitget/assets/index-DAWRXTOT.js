const __vite__fileDeps=["assets/switchEmail-CVkIH-Ac.js","assets/securityAuthorityTip-Dm6sSZpp.js","assets/index-ZSwLI674.js","assets/index-Dhgwn7zY.css","assets/securityAuthorityTip-CtfJNRa0.css","assets/switchAuthority-CLS5H4cg.js","assets/switchAuthority-DgQdsq9R.css","assets/icon_safe_message-CHmBK9wl.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as e,f as a,w as l,o,l as s,z as t,b as i,G as r,c as n,m as u,n as p,a as m,E as c,u as d,r as A,s as g,U as y,p as v,_ as h,q as f,h as w,j as C,aU as b,am as x}from"./index-ZSwLI674.js";import{_ as I}from"./headItem-BRJ0w2uz.js";import{D as _}from"./index-BcALmiiH.js";import{B}from"./index-Cxe8Vk9V.js";import{u as E}from"./useCountDown-BDOyrk-B.js";import{_ as D}from"./index-MP83Mxf-.js";import{M as Q}from"./MsgService-B21ojECZ.js";import{v as T}from"./validators-D3H_ul3D.js";import{_ as j}from"./index-DN0_f2XM.js";import"./index-CqDlCCNj.js";import"./use-id-BUjKeJ2W.js";/* empty css                                              */import"./index-D9ybKy9M.js";/* empty css                                              */const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAiVJREFUeF7l2DFPAjEUB/B/EyMOriYODgzubi4uCovK4sfwQ2hC4uK30cQoDupNTn4J3Ul0YGAgqQEUhTuupX1tX1vWA3r/X/t6ryeQ+Ufg5eEAwCOAzRwtxCR0xghTgIwR/gAyRZgHyBChDJAZQjVARgjLATJBqAeIF2EIYEOnr1EDxIUwAMQZWifPKO6vIMWFCkEPIA6EAYBjtE5fJ6GL7hrk/qeqw9UH4I0wH35yr702IJ/oVgDfjrEivP75ZrUVwA/BKvw4jhkAeTnIPiDGp1GtnftnHqzD2wFQIQh5DbxdYri3g0ajANBU1S0AkvD2ANYIso9WZ2sWuHfT1EAgC08DYIcwgpS7aHc+NBFIw9MB2CG8Q8pDDQTy8LQAbhGchKcHcIKwfgeI81mHZzdGaX81fwzWbdXm7xjL5TBuaY+6o9lw5v9decduAOxmqYzgsAFzB0CNQDzzv6ZuAagQpgebW9XJTqOB8rQHLA5jPntDQH4BYtsknM5v3K8Ah/WrE1D1HX8AduWgymF83S8AQwT/AMwQwgAwQggHwAQhLAADhPAAgRF4AARE4AMQCIEXQAAEfgCeEXgCeETgC+AJgTeABwT+AI4R4gBwiBAPgCOEuAAcIMQHQIwQJwAhQrwARAhxAxAgxA9giZAGgAVCOgCGCGkBGCCkB7AiQpoAKyCkC6CJkDaABkL6AAqEPABqEPIBWIKQF0AFQn4ACwh5AvxD+AbDxCSR4TJa9gAAAABJRU5ErkJggg==",k={class:"add-authority-tip-wrapper flex align-center justify-center"},U=i("p",{class:"title"},"附加验证",-1),O=i("p",{class:"text"},"请选择一项额外的验证方式以保护您的账户。",-1),M={class:"choose-authority-type-wrapper flex"},q={key:0,class:"icon-tip-wrapper"},R=["src"],S={class:"authority-icon-wrapper"},G=["src"],H=i("span",{class:"text-type"},"Google验证器",-1),z=i("span",{class:"text-tip"},"推荐",-1),P={key:0,class:"icon-tip-wrapper"},F=["src"],J={class:"authority-icon-wrapper"},K=["src"],X=i("span",{class:"text-type"},"手机验证",-1),Y={class:"authority-type-button-wrapper"},N={__name:"addAuthorityTip",props:{modelValue:{type:Boolean}},emits:["update:modelValue","onKnow"],setup(d,{emit:A}){const g=e(),y=A,v=d,h=a(!1),f=a("google"),w=e=>{f.value=e},C=()=>{h.value=!1,y("update:modelValue",!1)},b=()=>{h.value=!1,"google"!==f.value?"phone"!==f.value||g.push({name:"securePhone",query:{moduleType:"phoneSecretAuthority"}}):g.push({name:"secureGoogle",query:{moduleType:"downGoogle"}})};return l((()=>v.modelValue),(e=>{h.value=e,y("update:modelValue",e)}),{immediate:!0}),(e,a)=>{const l=B,d=_;return o(),s(d,{show:h.value,"onUpdate:show":a[2]||(a[2]=e=>h.value=e),showCancelButton:!1,showConfirmButton:!1,className:"add-authority-tip-dialog-wrapper"},{default:t((()=>[i("div",k,[U,O,i("div",M,[i("div",{class:r(["authority-wrapper flex flex-column align-center","google"===f.value?"activite":""]),onClick:a[0]||(a[0]=e=>w("google"))},["google"===f.value?(o(),n("span",q,[i("img",{src:u(V)},null,8,R)])):p("",!0),i("p",S,[i("img",{src:u("/SomethingBoring/tmp/fitget/assets/icon_img_security_email_google-Buhdup2K.png")},null,8,G)]),H,z],2),i("div",{class:r(["authority-wrapper flex flex-column align-center","phone"===f.value?"activite":""]),onClick:a[1]||(a[1]=e=>w("phone"))},["phone"===f.value?(o(),n("span",P,[i("img",{src:u(V)},null,8,F)])):p("",!0),i("p",J,[i("img",{src:u("/SomethingBoring/tmp/fitget/assets/icon_img_security_email_phone-C7twPHqK.png")},null,8,K)]),X],2)]),i("div",Y,[m(l,{type:"primary",class:"cancel-wrapper",plain:"",onClick:C},{default:t((()=>[c("取消")])),_:1}),m(l,{type:"primary",onClick:b},{default:t((()=>[c("确定")])),_:1})])])])),_:1},8,["show"])}}},W={class:"mobile-authority-wrapper"},L="bind-email",Z={__name:"index",props:{security:{type:Object,require:!0},userInfo:{type:Object,require:!0}},emits:["next"],setup(e,{emit:s}){const t=s,i=e,{t:r}=d(),u=A({}),p=a(!0),c=a(null),h=/^\d{6}$/,f=A({formModelValues:{},submitText:r("提交"),submitDisabled:p,onSubmit:e=>{console.log(e),w(e)},formConfigList:[{componentType:"input",type:"text",label:r("请输入您的邮箱编号"),key:"mobile",labelAlign:"top",areaCode:c,placeholder:r("请输入邮箱编号"),rules:[{required:!0,message:r("请输入邮箱编号")},{validator:T,trigger:["onBlur"]}]},{componentType:"sms",type:"text",key:"emailCode",label:`${r("将发送验证码到")}${r("您的新邮箱")}`,labelAlign:"top",placeholder:r("请输入验证码"),isImmediate:!1,countDownData:E(),handlerCountdown:(e,a)=>{(async e=>{if(!f.formModelValues.mobile)return!1;const a=await Q.sendVerifyCodeToReceiver({bizType:L,fullAccount:f.formModelValues.mobile});u.email=a,console.log(u),e()})(e)},maxlength:6,rules:[{pattern:h,message:r("请输入6位数字验证码")}]},{componentType:"sms",type:"text",key:"sms",label:`${r("将发送验证码到")}${i.userInfo.mobile}`,labelAlign:"top",placeholder:r("请输入验证码"),countDownData:E(),isImmediate:!1,handlerCountdown:(e,a)=>{(async e=>{const a=await Q.sendVerifyCode({bizType:L,type:"phone"});u.mobile=a,console.log(u),e()})(e)},maxlength:6,rules:[{pattern:h,message:r("请输入6位数字验证码")}]}]}),w=async({mobile:e,sms:a,emailCode:l})=>{const o=u.mobile,s=u.email;if(!o||!s)return g(r("请先发送验证码")),!1;await y.bindEmailOrMobile({mobileOrEmail:e,verifyCode:a,verifyCodeId:o,bizType:L,emailVerifyCode:l,emailVerifyCodeId:s}),t("next")};return l((()=>f.formModelValues),(e=>{console.log("newFormData",e),(e=>{p.value=!e.sms})(e)}),{immediate:!0,deep:!0}),(e,a)=>(o(),n("div",W,[m(D,v({modelValue:f.formModelValues,"onUpdate:modelValue":a[0]||(a[0]=e=>f.formModelValues=e)},f),null,16,["modelValue"])]))}},$={class:"phone-auth-wrapper"},ee={key:0,class:"phone-secure-wrapper"},ae=h({__name:"index",setup(l){const t=b((()=>x((()=>import("./switchEmail-CVkIH-Ac.js")),__vite__mapDeps([0,1,2,3,4,5,6,7])))),i=e(),{t:r}=d(),c=f(),A=w((()=>c.userInfo)),v=w((()=>null==c.userInfo?null:c.userInfo.security)),h=a(r("邮箱验证")),_=a(!0),B=a(!1),E=a(!1),D=a(!1);a(!1);const Q=()=>{i.push({name:"userCenterSecure"})},T=e=>{if(e)_.value=!1,A.mobile?(isShowEnablePhoneAuthority.value=!0,h.value=r("启用邮箱验证")):(B.value=!0,h.value=r("绑定邮箱"));else{if(!v.value.mobile)return g(r("邮箱和手机至少需要绑定一个")),!1;_.value=!1,E.value=!0,h.value=r("解绑邮箱")}},V=w((()=>{let e=v.value;return!!e.email&&!e.mobile})),k=async e=>{await y.unbindEmailOrMobile(e),E.value=!1,_.value=!0,y.getUserInfo()};return C((async()=>{y.getUserInfo()})),(e,a)=>{const l=I;return o(),n("div",$,[m(l,{headTt:h.value,goBack:Q},null,8,["headTt"]),A.value?(o(),n("div",ee,[_.value?(o(),s(u(t),{key:0,onOnSwitch:T,disabled:V.value,isSwitchOn:v.value.email},null,8,["disabled","isSwitchOn"])):p("",!0),B.value?(o(),s(Z,{key:1,security:v.value,userInfo:A.value,onNext:a[0]||(a[0]=e=>{B.value=!1,_.value=!0,u(y).getUserInfo()})},null,8,["security","userInfo"])):p("",!0),E.value?(o(),s(j,{key:2,bizType:"unbind-email",security:v.value,userInfo:A.value,onNext:k},null,8,["security","userInfo"])):p("",!0)])):p("",!0),m(N,{modelValue:D.value,"onUpdate:modelValue":a[1]||(a[1]=e=>D.value=e)},null,8,["modelValue"])])}}},[["__scopeId","data-v-32b17acd"]]);export{ae as default};