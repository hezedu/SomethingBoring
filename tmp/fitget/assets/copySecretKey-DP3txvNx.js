import{S as t}from"./securityAuthorityTip-Dm6sSZpp.js";import{S as e}from"./secureItem-CODoSCcY.js";import{N as o}from"./nextStepButton-CAg4Ki7M.js";import{I as a}from"./icon_img_security-DnL5Ur2x.js";import{u as i,f as r,j as s,U as u,o as c,c as p,a as l,m}from"./index-ZSwLI674.js";import"./index-Cxe8Vk9V.js";const y={class:"copy-secret-key-wrapper"},n={__name:"copySecretKey",emits:["click","copy"],setup(n,{emit:T}){const{t:f}=i(),x=T,g=f("请将16位密钥记录在纸上，并保存在安全的地方，如遇手机丢失，你可以通过该密钥恢复你的谷歌验证。"),h=r(),v=r(null);return s((async()=>{v.value=await u.getGoogleInfo(),setTimeout((()=>{h.value=v.value.secret}),400)})),(i,r)=>(c(),p("div",y,[l(t,{authorityTypeImg:m(a),authorityTypeTipText:m(g),authorityTypeMarginBottom:"1.17333rem"},null,8,["authorityTypeImg","authorityTypeTipText"]),l(e,{leftText:h.value,rightText:m(f)("复制"),rightColor:"var(--basic---)",onClick:r[0]||(r[0]=()=>x("copy",h.value))},null,8,["leftText","rightText"]),l(o,{onClick:r[1]||(r[1]=()=>x("click",v.value))})]))}};export{n as default};