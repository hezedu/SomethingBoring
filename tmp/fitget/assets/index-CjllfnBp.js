import{_ as s,u as a,an as e,b9 as l,h as A,f as t,t as o,ac as i,o as n,c,b as u,C as r,m as p,G as d,a as v,z as g,E as m,n as C,J as h,K as I,bJ as B,F as y,B as k,l as V,bL as f,x as S,q as U}from"./index-ZSwLI674.js";import{D as E}from"./index-BcALmiiH.js";import{B as R}from"./index-Cxe8Vk9V.js";/* empty css              *//* empty css              *//* empty css              */import{_ as x}from"./icon_navbar_close_nor@2x-cBiUEbVd.js";import"./index-CqDlCCNj.js";import{S as T}from"./index-C14dSwvx.js";import{_ as b}from"./f_0icon_20_icon_lishidingdan-BZ65bQTD.js";import{E as w}from"./emptyPage-DPXgX7yJ.js";/* empty css                                                                   */import{T as G,a as q}from"./index-C0sISGSw.js";import"./use-id-BUjKeJ2W.js";import"./use-tab-status-yiZOeCkD.js";import"./index-DXU4Ikqf.js";import"./index-BpQst5nk.js";const M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA/CAYAAACIEWrAAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgB7dQxDoJAEAXQ2TWh9ghewc5WEhKP43ZSbkWo9DoWJJZ2XoEjUGIDDgkkWxCd2W0s/mvYYiYMzM8SAQAAAAAAAICCkRTVdX0dx/FMCbj/Vpal+1VnSSDLMs+PluK1fd97SaFoIOdcx194NMZ0pDT1TL3ee1HvhoSapunyPH/zC06kc+FV3aXF4oHmoZ5FUWz5eJDUz7kRrWohWllIkSdxbpIGkuRJm5uQamULQZ5UuUkeaB5qNU8xuQmpVxZayVNUbkKim/qbqqp21trXdB6GYc9/p6UE0StbBHl6xOYGAAAAAAAA/scHAXVpBUC9At0AAAAASUVORK5CYII=",D=s=>(h("data-v-b7159b53"),s=s(),I(),s),L={class:"background"},F={class:"topInfo"},J={class:"greyS"},O={class:"row2"},N={class:"whiteB"},Z=D((()=>u("span",{class:"rate"},"USD",-1))),Q=D((()=>u("img",{src:M},null,-1))),Y={class:"btnWrap"},W={class:"buttonBuyText"},P={class:"downListWrap"},K={class:"topRow"},j={class:"whiteF"},z={class:"list"},X={key:0},H={class:"leftCol"},_={class:"rightCol"},$={class:"greyS"},ss=s({__name:"mainView",setup(s){const{t:h}=a(),I=e();l.getSummary(),l.refashTon();const B=A((()=>{let s=I.total("spot");return console.log(s),s}));A((()=>I.total("contract"))),A((()=>I.total("otc")));const y=t(!1),k=()=>{y.value=!y.value},V=t(!0),f=()=>{V.value=!V.value},S=o(),U=()=>{S.push({path:"/search/coin/recharge"})},E=()=>{S.push({path:"/search/coin/withdraw"})};return(s,a)=>{const e=R,l=i("CoinToLegal");return n(),c("div",L,[u("div",F,[u("div",null,[u("span",J,r(p(h)("总资产")),1),u("span",{class:d("eye "+(V.value?"":"eyeClose")),onClick:f},null,2)]),u("div",O,[u("span",N," $"+r(V.value?B.value.USDT:"*** ***"),1),Z,Q]),u("div",Y,[v(e,{class:".custom-button",type:"primary",onClick:U},{default:g((()=>[u("p",W,r(p(h)("去充值")),1)])),_:1}),v(e,{onClick:E},{default:g((()=>[m(r(p(h)("提现")),1)])),_:1})])]),u("div",P,[u("div",K,[u("div",j,r(p(h)("账户")),1),u("div",{class:"rightCol",onClick:k},[u("span",{class:d("gou "+(y.value?"active":""))},null,2),u("span",null,r(p(h)("隐藏0资产账户")),1)])]),u("ul",z,[!y.value||y.value&&B.value.BTC>0?(n(),c("li",X,[u("div",H,[u("span",null,r(p(h)("现货账户")),1)]),u("div",_,[u("p",null,"$"+r(V.value?B.value.USDT:"***"),1),u("p",$,[m(" ≈ "),v(l,{value:V.value?B.value.USDT:"0",coin:"USDT"},null,8,["value"])])])])):C("",!0)])])])}}},[["__scopeId","data-v-b7159b53"]]),as={class:"parent-container"},es={key:0,class:"list"},ls=["onClick"],As={class:"whiteBig"},ts={class:"rightCol"},os={class:"whiteBig"},is=s({__name:"coinTypeList",props:["isGouActive","searchValue"],setup(s){const a=e(),l=B(),t=s,p=A((()=>t.isGouActive)),d=A((()=>t.searchValue)),g=A((()=>{let s=a.list("spot");return""!=d.value&&(s=s.filter((s=>s.key.toLowerCase().indexOf(d.value.toLowerCase())>-1))),p.value?s.filter((s=>s.cash>0)):s}));A((()=>l.coinConfigMap||{})),o();return(s,a)=>{const e=i("CoinLogo"),l=i("CoinToLegal");return n(),c("div",as,[g.value.length>0?(n(),c("ul",es,[(n(!0),c(y,null,k(g.value,((s,a)=>(n(),c("li",{key:a},[u("div",{class:"leftCol",onClick:s=>{}},[v(e,{class:"coin",coin:s.key},null,8,["coin"]),u("div",null,[u("p",As,r(s.key),1)])],8,ls),u("div",ts,[u("p",os,r(s.cash),1),v(l,{class:"greyS",value:s.cash,coin:s.key},null,8,["value","coin"])])])))),128))])):(n(),V(w,{key:1}))])}}},[["__scopeId","data-v-d33e2dad"]]),ns=s=>(h("data-v-2d956f56"),s=s(),I(),s),cs={class:"topInfo"},us={class:"row1"},rs={class:"flexRow"},ps={class:"greyS"},ds={class:"row2"},vs={class:"whiteB"},gs=ns((()=>u("span",{class:"rate"},"USD",-1))),ms=ns((()=>u("img",{src:M},null,-1))),Cs={class:"btnWrap"},hs={class:"buttonBuyText"},Is={class:"downListWrap"},Bs={class:"titleText"},ys={class:"top"},ks=s({__name:"currentList",emits:["showTip"],setup(s,{emit:i}){const{t:C}=a();l.getAssets("spot");const h=e(),I=A((()=>h.total("spot"))),B=o(),k=t(!1),S=()=>{k.value=!k.value},U=t(!0),E=()=>{U.value=!U.value},x=i,w=t(""),G=t(!1),q=()=>{G.value=!0},M=()=>{G.value=!1},D=()=>{w.value=""},L=()=>{B.push("/fundHisList")},F=()=>{B.push({path:"/search/coin/recharge"})},J=()=>{B.push({path:"/search/coin/withdraw"})};return(s,a)=>{const e=R,l=T;return n(),c(y,null,[u("div",cs,[u("div",us,[u("div",rs,[u("span",ps,r(p(C)("估值")),1),u("span",{class:d("eye "+(U.value?"":"eyeClose")),onClick:E},null,2)]),u("img",{class:"historyLink",onClick:L,src:b})]),u("div",ds,[u("span",vs," $"+r(U.value?I.value.USDT:"*** ***"),1),gs,ms]),u("div",Cs,[v(e,{type:"primary",onClick:F},{default:g((()=>[u("p",hs,r(p(C)("去充值")),1)])),_:1}),v(e,{onClick:J},{default:g((()=>[m(r(p(C)("提现")),1)])),_:1})])]),u("div",Is,[u("div",Bs,r(p(C)("币种")),1),u("div",ys,[u("div",{class:"inner",onClick:S},[u("span",{class:d("gou "+(k.value?"active":""))},null,2),u("span",null,r(p(C)("隐藏小额币种")),1),u("img",{class:"tips2",onClick:a[0]||(a[0]=f((s=>{x("showTip",2)}),["stop"])),src:"data:image/png;base64,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"})]),G.value?(n(),V(l,{key:1,modelValue:w.value,"onUpdate:modelValue":a[1]||(a[1]=s=>w.value=s),onBlur:M,"update:model-value":"searchValue",onSearch:q,onClear:D,placeholder:"请输入搜索关键词"},null,8,["modelValue"])):(n(),c("img",{key:0,class:"search",onClick:q,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOzSURBVHgB7ZlLThtBEIbLxrAAFr5BJjeAE3hygmDxZoN9AswJPJwAcgI7K15Cdk6AOUGcE2RygngDG7Cdv5SxFAjTj+oeS5b6k0aNmJ6e/l3V1VU9RIFAIBAIBAIaSlQAnU6nurq6GuPPWqlUitBuvHppqZROJpPh0tLS8Pn5+eHw8DClgvEq9Pb2Np5OpycQwm3V9Dn0H+Dq7uzsfKWC8CL08vIyqlQqHYiLyY0Uglu7u7vfyDPOQmHFFpq2jQV1YKyLp6ens2azOSJPOAm9vr7uwgLHVAzpeDz+5Gv9ioXe3Nx8pzdBpgC8iS2TAIi8oOJFMhEi8z1HcXKkQpbAXRM0J4bdeY31cQ15S8HaG+GK6O+PtJVtPTqitbW1c7RNcsDKdTm64hf+qesHMRw9G3t7ew+qfvCMGpoEV0waXl5e6kdHR30SYiUUE+ugaaj6cMTc398/JQuurq5a5XL5XNMtfXx83JRGYuM1yskA6UUmtiKZg4MDXvOb8AKViGh9fd10yfyHsVCIONbcZ5FnJARuPoR7nmresUVCjFy31+tVkZP+pvwJpBD5kTyA5dFDkyso224GZImRRTF4rOmSkCfwLqVVkWrWSICRUFisprjH1vSWjGfJwYDy3xeTANM1mpsccOVBnkEE7kvmohzTsJ8qMxmSZ1CrPgjnkoup6+YOjkml5BmsU+VeeXd394EsEeW6i4izUERBb3XoDKSZyjG3t7d/kSWmQnPXIdysiCpGNWZxKSBXHop74mxFgWqvFAU/02D0Q3E7QlUTkye4QiJFTo25FCd0eXlZWR5hTbXJExirpboPDxKVakZC6/U6r4uBokvMpRY5gjyX12ZuhcJZmK7GzcM46iLoKCsTriddXDhz2Z6mW5eEGAvNKoaBqg+f70gsy7UuP4s/o7w+bE0kJ+Kc2vYoZTYhHV32AN3pHR964TwoIYMzKNd61/q4E7/+OV5qZLXsU0OfozYSi5T/h7qWk4ENuHqNC2nTg2/0O4PQhIRYC82KcLbqPI47X+Ei1joF5AgMt6zzmqE5A+9oZ8et9s+SEI6ScL97w7NZr0gsK07qOdCsrKxskkPIlyKxrK/Phg1Yt+3BuiNsIQnGqeJKdJ1tLOv1Q7CD4FH2qfDL7IAaFmvrxHKcwDNGh9qFfNrnVA6T/JwdZHF0fruF8MSGnKDz9pOX1qnEZgmE8Ze2QoS+x+z4w7Zofk+srUhmbkJd+FesRCSzEEIZFoumIRG5cPj4IBwIBAKBQCCQyx/cx8n0fMFwcgAAAABJRU5ErkJggg=="}))]),v(is,{isGouActive:k.value,searchValue:w.value},null,8,["isGouActive","searchValue"])])],64)}}},[["__scopeId","data-v-2d956f56"]]),Vs={class:"bg"},fs={class:"tipsDialog"},Ss={class:"head"},Us={class:"tipContent"},Es={class:"tt"},Rs={class:"desc"},xs=s({__name:"index",setup(s){const{t:e}=a();o();const l=S();U();const A=t("total");l.params.type&&(A.value=l.params.type);let i=t(1);const d=t(!1),m=s=>{i.value=s,d.value=!0},C=()=>{d.value=!1};return(s,a)=>{const l=q,t=G,o=E;return n(),c("div",Vs,[v(t,{active:A.value,"onUpdate:active":a[0]||(a[0]=s=>A.value=s),shrink:!0,class:"glo_vant_tabs"},{default:g((()=>[v(l,{title:p(e)("总览"),name:"total"},{default:g((()=>[v(ss)])),_:1},8,["title"]),v(l,{title:p(e)("现货账户"),name:"spot"},{default:g((()=>[v(ks,{onShowTip:m})])),_:1},8,["title"])])),_:1},8,["active"]),v(o,{show:d.value,"onUpdate:show":a[1]||(a[1]=s=>d.value=s),showConfirmButton:!1},{default:g((()=>[u("div",fs,[u("div",Ss,[u("span",null,r(1==p(i)?p(e)("盈亏说明"):p(e)("隐藏小额币种")),1),u("img",{class:"close",onClick:C,src:x})]),u("div",Us,[u("p",Es,r(p(e)("本日盈亏")),1),u("p",Rs,r(p(e)("本日盈亏=目前现货账户总资产-今日初始总资产-今日净转出和转入")),1)])])])),_:1},8,["show"])])}}},[["__scopeId","data-v-2ded3ce8"]]);export{xs as default};