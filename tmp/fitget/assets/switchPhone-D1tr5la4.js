import{S as t}from"./securityAuthorityTip-Dm6sSZpp.js";import{_ as i}from"./switchAuthority-CLS5H4cg.js";import{I as s}from"./icon_safe_phone-DnUmqWkN.js";import{o,c as e,a,m as r}from"./index-ZSwLI674.js";const h={class:"google-secure-wrapper"},n={__name:"switchPhone",props:{isSwitchOn:Boolean,disabled:Boolean},emits:["onSwitch"],setup(n,{emit:p}){const c=p,u=n,m=t=>{c("onSwitch",t)};return(p,c)=>(o(),e("div",h,[a(t,{authorityTypeImg:r(s),authorityTypeTipText:`${p.$t("手机验证为您的提现")}${p.$t("和")}HOTEX ${p.$t("账号增加了另一层安全保护")}。`},null,8,["authorityTypeImg","authorityTypeTipText"]),a(i,{switchAuthorityText:p.$t("手机验证"),disabled:u.disabled,onChange:m,isSwitchOn:n.isSwitchOn},null,8,["switchAuthorityText","disabled","isSwitchOn"])]))}};export{n as default};