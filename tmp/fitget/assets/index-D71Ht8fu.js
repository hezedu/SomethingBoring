import{_ as e,u as a,t as l,f as t,q as s,R as n,h as o,j as i,bO as c,by as u,o as r,c as d,b as v,C as p,m,a as w,z as h,l as f,F as C,B as g,G as y,V as _,W as k,P as x,E as b,n as U,M as T,ao as R,T as j,r as S,s as I,J as L,K as M,bP as P,c3 as V}from"./index-ZSwLI674.js";/* empty css              *//* empty css              *//* empty css              */import{_ as D}from"./headItem-BRJ0w2uz.js";import{A as $}from"./index-3U2bf2de.js";import{L as z}from"./index-DIGiQeHE.js";import{B as F}from"./index-Cxe8Vk9V.js";import{c as A,_ as B}from"./circleItem-CPRU8Mr1.js";import{E as N}from"./emptyPage-DPXgX7yJ.js";import{C as E}from"./ContractService-2PATZHTl.js";import{P as q}from"./index-BjhfBHgw.js";import{_ as H}from"./icon_huazhuan_line_enter@2x-BBhcQ3fp.js";import{T as G,a as K}from"./index-C0sISGSw.js";import"./use-tab-status-yiZOeCkD.js";/* empty css                                                                   */import"./use-id-BUjKeJ2W.js";import"./index-DXU4Ikqf.js";import"./index-BpQst5nk.js";const O=e=>(L("data-v-a51298ef"),e=e(),M(),e),J={class:"top"},W={class:"leftCol"},Z=O((()=>v("img",{class:"chexiao",src:B},null,-1))),Q={class:"topRow"},X={class:"leftCol"},Y={class:"whiteB"},ee=O((()=>v("span",{class:"line"},"/",-1))),ae={class:"rightCol"},le={class:"greyS"},te={class:"inner"},se={class:"mid"},ne={class:"row"},oe={class:"value"},ie={class:"white"},ce={key:0,class:"row"},ue={class:"label"},re={class:"value"},de={class:"row"},ve={class:"label"},pe={class:"value"},me={key:1,class:"row"},we={class:"label"},he={class:"value"},fe={key:2,class:"row"},Ce={class:"label"},ge={class:"value"},ye="global.public.platform@203",_e=e({__name:"currentList",setup(e){const{t:L}=a();l(),t(!1);const M=t(!1),V=()=>{M.value=!0},D=t(!1),B=()=>{D.value=!0},q=[{name:L("全部")},{name:L("限价")},{name:L("市价")},{name:L("限价止盈止损")}];let H=t([]),G=t(0);const K=s(),O=n(),_e=t(1),ke=t(0),xe=t(!1),be=t(!1),Ue=t(null),Te=o((()=>O.contractInfoList())),Re=(e,a)=>{let l,t;const s=O.contractInfoMap[a];return l=s.multiplier,t=s.pair.maxCountDecimalDigit,j(e*l,t)},je=async()=>{let e={};G.value>0&&(1==G.value?e.entrustMode="10":2==G.value?e.entrustMode="20":e.entrustMode="11"),Ue.value&&(e.contractCode=Ue.value);let{data:{list:a,total:l}}=await E.queryContractEntrusts(S({pageNum:_e,pageSize:10}),e);H.value=[].concat(...H.value,...a),ke.value=l,xe.value=!1,_e.value++,a.length<10&&(be.value=!0)},Se=async()=>{await E.cancelAllContractEntrust({}),I(L("撤销全部发起成功"))},Ie=e=>{P(H.value,e,null)},Le=e=>{try{if(!e)return e;if(!e.success)return!1;switch(e.action){case"create-order":case"finish-match":case"finish-cancel":Ie(e.data)}}catch(a){console.error(a)}};return i((()=>{K.isLogin()&&(je(),c.on(ye,Le))})),u((()=>{c.off(ye,Le)})),(e,a)=>{const l=F,t=z,s=$;return r(),d(C,null,[v("div",J,[v("div",W,[v("div",{class:"select",onClick:V},p(m(L)("合约"))+":"+p(Ue.value||m(L)("全部")),1),v("div",{class:"select",onClick:B},p(m(L)("类型"))+":"+p(q[m(G)].name),1)]),w(l,{size:"small",onClick:Se},{default:h((()=>[Z,v("span",null,p(m(L)("撤销全部")),1)])),_:1})]),m(H).length>0?(r(),f(t,{key:0,class:"list",loading:xe.value,"onUpdate:loading":a[0]||(a[0]=e=>xe.value=e),finished:be.value,"finished-text":m(L)("没有更多了"),onLoad:je},{default:h((()=>[(r(!0),d(C,null,g(m(H),((e,a)=>(r(),d("li",{key:a},[v("div",Q,[v("div",X,[v("p",Y,p(e.contractCode.toUpperCase())+" "+p(m(L)("永续")),1),v("div",{class:y("B"==e.entrustType?"greenTittle":"redTittle")},[v("span",null,p(m(_)(e)),1),ee,v("span",null,p(m(k)(e)),1)],2)]),v("div",ae,[v("p",le,p(m(x)(e.createTime)),1),"20"!=e.orderStatus?(r(),f(l,{key:0,size:"mini",onClick:a=>(async({orderNo:e})=>{await E.cancelContractEntrust({orderNo:e}),I(L("撤单发起成功"))})(e)},{default:h((()=>[b(p(m(L)("撤单")),1)])),_:2},1032,["onClick"])):U("",!0)])]),v("div",te,[w(A,{rate:m(T)(e)},null,8,["rate"]),v("div",se,[v("div",ne,[v("span",null,p(m(L)("数量"))+" ("+p(e.leftCoin.toUpperCase())+")",1),v("p",oe,[v("span",ie,p(Re(e.leftAmountDeal,e.contractCode)),1),v("span",null," / "+p(Re(e.leftAmount,e.contractCode)),1)])]),"C"==e.entrustSide?(r(),d("div",ce,[v("span",ue,p(m(L)("平仓")),1),v("p",re,[v("span",null,p(m(L)("是")),1)])])):U("",!0),v("div",de,[v("span",ve,p(m(L)("价格")),1),v("p",pe,p(e.entrustPrice||m(L)("市价")),1)]),e.triggerPrice?(r(),d("div",me,[v("span",we,p(m(L)("触发类型")),1),v("p",he,p(m(L)("最新价格"))+" "+p("B"==e.entrustType?"≤":"≥")+" "+p(e.triggerPrice),1)])):U("",!0),"MAKER"==e.entrustStrategy?(r(),d("div",fe,[v("span",Ce,p(m(L)("只做Marker")),1),v("p",ge,p(m(L)("是")),1)])):U("",!0)])])])))),128))])),_:1},8,["loading","finished","finished-text"])):(r(),f(N,{key:1})),w(s,{show:M.value,"onUpdate:show":a[1]||(a[1]=e=>M.value=e),actions:Te.value,"cancel-text":m(L)("取消"),"close-on-click-action":"",onSelect:a[2]||(a[2]=(e,a)=>{Ue.value=Te.value[a].name,je()})},null,8,["show","actions","cancel-text"]),w(s,{show:D.value,"onUpdate:show":a[3]||(a[3]=e=>D.value=e),actions:q,"cancel-text":m(L)("取消"),"close-on-click-action":"",onSelect:a[4]||(a[4]=(e,a)=>{R(G)?G.value=a:G=a,_e.value=1,R(H)?H.value=[]:H=[],je()})},null,8,["show","cancel-text"])],64)}}},[["__scopeId","data-v-a51298ef"]]),ke=e=>(L("data-v-663cb888"),e=e(),M(),e),xe={class:"top"},be={class:"leftCol"},Ue=["onClick"],Te={class:"itemRow"},Re={class:"whiteF"},je={class:"span2"},Se={class:"rightCol"},Ie={class:"time"},Le=ke((()=>v("img",{src:H},null,-1))),Me={class:"itemRow"},Pe=ke((()=>v("span",{class:"line"},"/",-1))),Ve={key:0,class:"sign"},De={key:1,class:"sign signGreen"},$e={class:"itemRow downrow"},ze={class:"value"},Fe={class:"white"},Ae={class:"itemRow downrow"},Be={class:"value"},Ne={class:"white"},Ee={key:0,class:"row"},qe={class:"label"},He={class:"value"},Ge={key:1,class:"itemRow downrow"},Ke={class:"value"},Oe={class:"white"},Je=e({__name:"historyListToDo",setup(e){const s=l(),c=t(!1),{t:u}=a(),b=n(),T=()=>{c.value=!c.value,W()},I=t(!1),L=()=>{I.value=!0},M=t(!1),P=()=>{M.value=!0},V=[{name:u("全部")},{name:u("限价")},{name:u("市价")},{name:u("限价止盈止损")}],D=t(null);let F=t(0);const A=o((()=>b.contractInfoList()));let B=t([]);const H=t(1),G=t(0),K=t(!1),O=t(!1),J=t(!1),W=()=>{O.value=!1,K.value=!0,J.value=!1,H.value=1,B.value=[],Z()},Z=async()=>{let e={};c.value&&(e.isHiddenCancel=!0),F.value>0&&(1==F.value?e.entrustMode="10":2==F.value?e.entrustMode="20":e.entrustMode="11"),D.value&&(e.symbol=D.value.toLowerCase());let{data:{list:a,total:l}}=await E.queryContractHistorys(S({pageNum:H,pageSize:10}),e);B.value=[].concat(...B.value,...a),G.value=l,K.value=!1,H.value++,a.length<10&&(O.value=!0)},Q=(e,a)=>{let l,t;const s=b.contractInfoMap[a];return l=s.multiplier,t=s.pair.maxCountDecimalDigit,j(e*l,t)};return i((()=>{Z()})),(e,a)=>{const l=z,t=q,n=$;return r(),d(C,null,[v("div",xe,[v("div",be,[v("div",{class:"select",onClick:L},p(m(u)("合约"))+":"+p(D.value||m(u)("全部")),1),v("div",{class:"select",onClick:P},p(m(u)("类型"))+":"+p(V[m(F)].name),1)]),v("span",{class:y("gou "+(c.value?"active":"")),onClick:T},null,2),v("span",null,p(m(u)("隐藏已撤销")),1)]),w(t,{modelValue:J.value,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value=e),onRefresh:W},{default:h((()=>[m(B).length>0?(r(),f(l,{key:0,class:"list",loading:K.value,"onUpdate:loading":a[0]||(a[0]=e=>K.value=e),finished:O.value,"finished-text":m(u)("没有更多了"),onLoad:Z},{default:h((()=>[(r(!0),d(C,null,g(m(B),((e,a)=>(r(),d("li",{key:a,onClick:a=>m(s).push("/contract/entrust?orderNo="+e.orderNo)},[v("div",Te,[v("div",Re,[v("span",null,p(e.contractCode.toUpperCase()),1),v("span",je,p(m(u)("永续")),1)]),v("div",Se,[v("span",Ie,p(m(x)(e.createTime)),1),Le])]),v("div",Me,[v("div",{class:y("B"==e.entrustType?"greenTittle":"redTittle")},[v("span",null,p(m(_)(e)),1),Pe,v("span",null,p(m(k)(e)),1)],2),"21"==e.orderStatus?(r(),d("div",Ve,p(m(u)("已撤销")),1)):U("",!0),"01"==e.orderStatus?(r(),d("div",De,p(m(u)("完全成交")),1)):U("",!0)]),v("div",$e,[v("span",null,p(m(u)("数量"))+" ("+p(e.leftCoin.toUpperCase())+") ",1),v("p",ze,[v("span",Fe,p(Q(e.leftAmountDeal,e.contractCode)),1),v("span",null," / "+p(Q(e.leftAmount,e.contractCode)),1)])]),v("div",Ae,[v("span",null,p(m(u)("价格")),1),v("p",Be,[v("span",Ne,p(e.entrustPrice||m(u)("市价")),1)])]),e.triggerPrice?(r(),d("div",Ee,[v("span",qe,p(m(u)("触发类型")),1),v("p",He,p(m(u)("最新价格"))+" "+p("B"==e.entrustType?"≤":"≥")+" "+p(e.triggerPrice),1)])):U("",!0),"C"==e.entrustSide?(r(),d("div",Ge,[v("span",null,p(m(u)("只减仓")),1),v("p",Ke,[v("span",Oe,p(m(u)("是")),1)])])):U("",!0)],8,Ue)))),128))])),_:1},8,["loading","finished","finished-text"])):(r(),f(N,{key:1}))])),_:1},8,["modelValue"]),w(n,{show:I.value,"onUpdate:show":a[2]||(a[2]=e=>I.value=e),actions:A.value,"cancel-text":m(u)("取消"),"close-on-click-action":"",onSelect:a[3]||(a[3]=(e,a)=>{D.value=A.value[a].name,W()})},null,8,["show","actions","cancel-text"]),w(n,{show:M.value,"onUpdate:show":a[4]||(a[4]=e=>M.value=e),actions:V,"cancel-text":m(u)("取消"),"close-on-click-action":"",onSelect:a[5]||(a[5]=(e,a)=>{R(F)?F.value=a:F=a,W()})},null,8,["show","cancel-text"])],64)}}},[["__scopeId","data-v-663cb888"]]),We={class:"itemRow"},Ze={class:"whiteF"},Qe={class:"span2"},Xe={class:"rightCol"},Ye={class:"time"},ea={class:"itemRow"},aa={class:"itemRow downrow",style:{"margin-top":"5px"}},la={class:"value"},ta={class:"white"},sa={class:"itemRow downrow"},na={class:"value"},oa={class:"white"},ia={class:"itemRow downrow"},ca={class:"value"},ua={class:"white"},ra=e({__name:"historyListDone",setup(e){l();let a=t([]);const o=t(1),c=t(0),u=t(!1),w=t(!1),_=s(),k=t(!1),b=()=>{w.value=!1,u.value=!0,k.value=!1,o.value=1,a.value=[],T()},U=n(),T=async()=>{let{data:{list:e,total:l}}=await E.queryContractTrades(S({pageNum:o,pageSize:10}),{});a.value=[].concat(...a.value,...e),c.value=l,u.value=!1,o.value++,e.length<10&&(w.value=!0)},R=(e,a)=>{let l,t;const s=U.contractInfoMap[a];return l=s.multiplier,t=s.pair.maxCountDecimalDigit,j(e*l,t)};return i((()=>{T()})),(e,l)=>{const t=z,s=q;return r(),f(s,{modelValue:k.value,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value=e),onRefresh:b},{default:h((()=>[m(a).length>0?(r(),f(t,{key:0,class:"list",loading:u.value,"onUpdate:loading":l[0]||(l[0]=e=>u.value=e),finished:w.value,"finished-text":e.$t("没有更多了"),onLoad:T},{default:h((()=>[(r(!0),d(C,null,g(m(a),((a,l)=>(r(),d("li",{key:l},[v("div",We,[v("div",Ze,[v("span",null,p(a.contractCode.toUpperCase()),1),v("span",Qe,p(e.$t("永续")),1)]),v("div",Xe,[v("span",Ye,p(m(x)(a.createTime)),1)])]),v("div",ea,[v("div",{class:y("B"==a.entrustType?"greenTittle":"redTittle")},[v("span",null,p(m(V)(a,m(_).mid)),1)],2)]),v("div",aa,[v("span",null,p(e.$t("价格"))+" ("+p(a.rightCoin.toUpperCase())+") ",1),v("p",la,[v("span",ta,p(a.dealPrice),1)])]),v("div",sa,[v("span",null,p(e.$t("成交数量"))+" ("+p(a.leftCoin.toUpperCase())+") ",1),v("p",na,[v("span",oa,p(R(a.leftAmount,a.contractCode)),1)])]),v("div",ia,[v("span",null,p(e.$t("手续费"))+"("+p(a.sellerFeeCoin.toUpperCase())+") ",1),v("p",ca,[v("span",ua,p(m(_).mid==a.buyerId?a.buyerFee:a.sellerFee),1)])])])))),128))])),_:1},8,["loading","finished","finished-text"])):(r(),f(N,{key:1}))])),_:1},8,["modelValue"])}}},[["__scopeId","data-v-ae046bc9"]]),da={class:"top"},va={class:"leftCol"},pa={class:"itemRow"},ma={class:"whiteF"},wa={class:"rightCol"},ha={class:"time"},fa={class:"itemRow downrow",style:{"margin-top":"5px"}},Ca={class:"value"},ga={class:"white"},ya={class:"itemRow downrow",style:{"margin-top":"5px"}},_a={class:"value"},ka={class:"white"},xa={class:"itemRow downrow"},ba={class:"value"},Ua={class:"white"},Ta=e({__name:"moneyFlowList",setup(e){l();const s=t(!1),{t:c}=a(),u=n(),y=t(!1),_=()=>{y.value=!0},k=t(!1),b=()=>{k.value=!0},U=[{name:c("全部")},{name:c("盈亏")},{name:c("资金费用")},{name:c("手续费")}],T=t(null);let j=t(0);const I=o((()=>u.contractInfoList()));let L=t([]);const M=t(1),P=t(0),V=t(!1),D=t(!1),F=t(!1),A=()=>{D.value=!1,V.value=!0,F.value=!1,M.value=1,L.value=[],B()},B=async()=>{let e={};s.value&&(e.isHiddenCancel=!0),j.value>0&&(e.bizTypeStatus=j.value),T.value&&(e.contractCode=T.value.toLowerCase());let{data:{list:a,total:l}}=await E.queryContractFincialSerials(S({pageNum:M,pageSize:10}),e);L.value=[].concat(...L.value,...a),P.value=l,V.value=!1,M.value++,a.length<10&&(D.value=!0)};return i((()=>{B()})),(e,a)=>{const l=z,t=q,s=$;return r(),d(C,null,[v("div",da,[v("div",va,[v("div",{class:"select",onClick:_},p(m(c)("合约"))+":"+p(T.value||m(c)("全部")),1),v("div",{class:"select",onClick:b},p(m(c)("类型"))+":"+p(U[m(j)].name),1)])]),w(t,{modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value=e),onRefresh:A},{default:h((()=>[m(L).length>0?(r(),f(l,{key:0,class:"list",loading:V.value,"onUpdate:loading":a[0]||(a[0]=e=>V.value=e),finished:D.value,"finished-text":m(c)("没有更多了"),onLoad:B},{default:h((()=>[(r(!0),d(C,null,g(m(L),((e,a)=>(r(),d("li",{key:a},[v("div",pa,[v("div",ma,[v("span",null,p(e.currency.toUpperCase()),1)]),v("div",wa,[v("span",ha,p(m(x)(e.createTime)),1)])]),v("div",fa,[v("span",null,p(m(c)("类型")),1),v("p",Ca,[v("span",ga,p(m(c)(e.remark)),1)])]),v("div",ya,[v("span",null,p(m(c)("合约")),1),v("p",_a,[v("span",ka,p(e.contractCode.toUpperCase())+" "+p(m(c)("永续")),1)])]),v("div",xa,[v("span",null,p(m(c)("总额")),1),v("p",ba,[v("span",Ua,p(e.amount),1)])])])))),128))])),_:1},8,["loading","finished","finished-text"])):(r(),f(N,{key:1}))])),_:1},8,["modelValue"]),w(s,{show:y.value,"onUpdate:show":a[2]||(a[2]=e=>y.value=e),actions:I.value,"cancel-text":m(c)("取消"),"close-on-click-action":"",onSelect:a[3]||(a[3]=(e,a)=>{T.value=I.value[a].name,A()})},null,8,["show","actions","cancel-text"]),w(s,{show:k.value,"onUpdate:show":a[4]||(a[4]=e=>k.value=e),actions:U,"cancel-text":m(c)("取消"),"close-on-click-action":"",onSelect:a[5]||(a[5]=(e,a)=>{R(j)?j.value=a:j=a,A()})},null,8,["show","cancel-text"])],64)}}},[["__scopeId","data-v-62784eb4"]]),Ra=e({__name:"index",setup(e){const a=t(0);return(e,l)=>{const t=D,s=K,n=G;return r(),d(C,null,[w(t,{headTt:e.$t("U本位合约历史")},null,8,["headTt"]),w(n,{active:a.value,"onUpdate:active":l[0]||(l[0]=e=>a.value=e),shrink:""},{default:h((()=>[w(s,{title:e.$t("当前委托"),key:"tab1"},{default:h((()=>[w(_e)])),_:1},8,["title"]),w(s,{title:e.$t("历史委托"),key:"tab2"},{default:h((()=>[w(Je)])),_:1},8,["title"]),w(s,{title:e.$t("成交历史"),key:"tab3"},{default:h((()=>[w(ra)])),_:1},8,["title"]),w(s,{title:e.$t("资金流水"),key:"tab3"},{default:h((()=>[w(Ta)])),_:1},8,["title"])])),_:1},8,["active"])],64)}}},[["__scopeId","data-v-b9e6ec2a"]]);export{Ra as default};