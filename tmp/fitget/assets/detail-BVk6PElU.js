import{_ as a,u as e,R as t,f as l,h as r,j as s,bx as i,c1 as c,o,c as n,b as u,C as v,m as d,a as m,n as p,F as C,B as h,P as b,T as g,G as y,l as f,by as w,w as x,x as k,t as D,q as S,ac as _,z as L,E as T,c2 as j,bt as R,bw as A,s as N,J as B,K as I}from"./index-ZSwLI674.js";/* empty css              *//* empty css              *//* empty css              */import{_ as P}from"./headItem-BRJ0w2uz.js";import{_ as F,s as U,a as K}from"./index-BZC-wtYj.js";import{T as E,_ as M,a as O}from"./index-JGvEVOuC.js";import{_ as W}from"./up_down_num-BLl0vEv2.js";import{A as $}from"./index-3U2bf2de.js";import{E as q}from"./emptyPage-DPXgX7yJ.js";import{i as z}from"./index-D1AY4T6J.js";import{C as H}from"./ContractService-2PATZHTl.js";import{T as V,a as G}from"./index-C0sISGSw.js";import"./index-CqDlCCNj.js";import"./use-id-BUjKeJ2W.js";import"./index-C14dSwvx.js";import"./use-tab-status-yiZOeCkD.js";import"./index-DXU4Ikqf.js";import"./index-BpQst5nk.js";const J={class:"tabsTop"},X={class:"cols col1"},Z={class:"cols"},Q={class:"cols"},Y={key:0,class:"numWrap"},aa=a({__name:"dealList",props:["currContract"],setup(a){const h=a,{t:b}=e(),g=t(),y=l(0),f=l(!1),w=()=>{f.value=!0},x=r((()=>h.currContract.pair)),k=r((()=>h.currContract)),D=r((()=>x.value?x.value.depths[y.value]:{})),S=r((()=>x.value?D.value.value:1)),_=l(0),L=l(0),T=l(0),j=r((()=>{const a=g.discBuyList;if(!a)return[];let{multiplier:e}=k.value,t=_.value,l=2==t?12:0==t?28:0;l=l>a.length?a.length:l;let r=0,s=0;const i=[];for(;r<l;r++){let t=a[r];t.show=t.amount*e,s+=t.show,t.total=s,i.push(t)}return T.value=s,i})),R=r((()=>{const a=g.discSellList;if(!a)return[];let{multiplier:e}=k.value,t=_.value,l=1==t?12:0==t?28:0;l=l>a.length?a.length:l;let r=0,s=0;const i=[];for(;r<l;r++){let t=a[r];t.show=t.amount*e,s+=1*t.amount,t.total=s,i.push(t)}return L.value=s,i}));return s((()=>{i.clearContractCurrAndSubscribeDisc(k.value.contractCode,S.value)})),c(((a,e,t)=>{y.value=0,i.clearContractCurrAndSubscribeDisc(k.value.contractCode,S.value),t()})),(a,e)=>{const t=F,l=$;return o(),n(C,null,[u("div",J,[u("div",X,v(d(b)("买")),1),u("div",Z,v(d(b)("卖")),1),u("div",Q,[u("div",{class:"select",onClick:w},v(D.value.label),1)])]),x.value?(o(),n("div",Y,[m(t,{defaulRowNum:1==_.value?0:28,list:j.value,maxTotal:T.value,maxCountDecimalDigit:x.value.maxCountDecimalDigit,priceLength:D.value.len,revert:"true"},null,8,["defaulRowNum","list","maxTotal","maxCountDecimalDigit","priceLength"]),m(t,{defaulRowNum:2==_.value?0:28,isRedBg:1,isRedFont:1,list:R.value,maxTotal:L.value,revertBack:"true",maxCountDecimalDigit:x.value.maxCountDecimalDigit,priceLength:D.value.len},null,8,["defaulRowNum","list","maxTotal","maxCountDecimalDigit","priceLength"])])):p("",!0),m(l,{show:f.value,"onUpdate:show":e[0]||(e[0]=a=>f.value=a),actions:x.value.depths,"cancel-text":d(b)("取消"),"close-on-click-action":"",onSelect:e[1]||(e[1]=(a,e)=>{y.value=e,i.clearContractCurrAndSubscribeDisc(k.value.contractCode,S.value)})},null,8,["show","actions","cancel-text"])],64)}}},[["__scopeId","data-v-40d444f5"]]),ea={key:0,class:"list"},ta={class:"th"},la={class:"leftCol"},ra={class:"midCol"},sa={class:"rightCol"},ia={class:"leftCol"},ca={class:"rightCol"},oa=a({__name:"newList",props:["currContract"],setup(a){const l=a,s=r((()=>l.currContract.pair)),i=r((()=>m.tradeNewestList)),{t:c}=e(),m=t();return(a,e)=>i.value.length>0?(o(),n("ul",ea,[u("li",ta,[u("div",la,v(d(c)("时间")),1),u("div",ra,v(d(c)("价格")),1),u("div",sa,v(d(c)("数量")),1)]),(o(!0),n(C,null,h(i.value,((a,e)=>(o(),n("li",{key:e},[u("div",ia,v(d(b)(a.dealTimestamp,"HH:mm:ss")),1),u("div",{class:y("midCol "+("B"===a.dealSide?"greenF":"redF"))},v(d(g)(a.dealPrice,s.value.maxPriceDecimalDigit)),3),u("div",ca,v(d(g)(a.dealAmount*l.currContract.multiplier,s.value.maxCountDecimalDigit)),1)])))),128))])):(o(),f(q,{key:1}))}},[["__scopeId","data-v-aee5de08"]]),na={__name:"depthChart",props:["currContract"],setup(a){const e=a,i=t(),c=l(null),u=l(null),v=r((()=>i.discBuyList)),d=r((()=>i.discSellList));function m(a){return 0===a.indexOf("-")?"":a}function p(a){return a?g(a,e.currContract.pair.maxCountDecimalDigit):a}return s((()=>{var a,e;a=z(c.value),e={animation:!1,tooltip:{trigger:"none",axisPointer:{type:"cross",show:!1,crossStyle:{width:.5},label:{formatter:a=>"x"===a.axisDimension?m(a.value):"y"===a.axisDimension?p(a.value):a.value}}},grid:{show:!1,borderColor:"#fff",backgroundColor:"var(--Misc-body-bg)",borderWidth:.5,left:0,top:0,right:0,bottom:5},xAxis:{type:"category",axisLine:{show:!1},axisLabel:{color:"#7080a3",showMaxLabel:!1,showMinLabel:!1,formatter:m},splitLine:{lineStyle:{color:["rgba(153,153,153,0.07)"]}}},yAxis:{show:!1,axisLine:{show:!1},axisTick:{lineStyle:{color:"#7080a3"}},axisLabel:{color:"#7080a3",formatter:p},splitLine:{lineStyle:{color:["rgba(153,153,153,0.07)"]}}},series:[{type:"line",symbol:"none",itemStyle:{normal:{color:"#5bd288"}},lineStyle:{normal:{color:"#5bd288",width:0}},areaStyle:{normal:{color:"var(--basic---)"}},data:[]},{type:"line",symbol:"none",lineStyle:{normal:{color:"#f97564",width:0}},itemStyle:{normal:{color:"#f97564"}},areaStyle:{normal:{color:"var(--van-danger-color)"}},data:[]}]},a.setOption(e),u.value=a,window.onresize=function(){a.resize()}})),w((()=>{u.value&&u.value.dispose()})),x((()=>v.value),(()=>{(()=>{if(!u.value)return;const a=v.value,t=d.value;let l=[],r=[],s=0,i=[];const c=t.length-a.length;if(a.forEach((a=>{s+=Number(a.amount),i.unshift(a.price),l.unshift([a.price,g(s*e.currContract.multiplier,e.currContract.pair.maxCountDecimalDigit)])})),c>0){let a,t=0;for(;t<c;t++)a="-"+t,i.unshift(a),l.unshift([a,g(s*e.currContract.multiplier,e.currContract.pair.maxCountDecimalDigit)])}if(s=0,t.forEach((a=>{s+=Number(a.amount),r.push([a.price,g(s*e.currContract.multiplier,e.currContract.pair.maxCountDecimalDigit)]),i.push(a.price)})),c<0){let a,t=0;for(;t>c;t--)a="-"+t,r.push([a,g(s*e.currContract.multiplier,e.currContract.pair.maxCountDecimalDigit)]),i.push(a)}u.value.setOption({xAxis:{data:i},series:[{data:l},{data:r}]})})()})),(a,e)=>(o(),n("div",{ref_key:"echarRef",ref:c,style:{width:"100%",height:"100%"}},null,512))}},ua={class:"topRow"},va={class:"tabs"},da=["onClick"],ma={class:"inner"},pa={class:"rightCol"},Ca=["onClick"],ha={class:"chart"},ba=a({__name:"chart",props:["currContract"],setup(a){const{t:t}=e(),s=l(1),c=l(1),m=[t("分时"),t("15m"),t("1h"),t("4h"),t("1d")],b=l(-1),g=l(t("更多")),w=[t("1m"),t("3m"),t("5m"),t("30m"),t("2h"),t("6h"),t("12h"),t("1w")],x=l(!1),k=()=>{x.value=!x.value},D=a,S=r((()=>{const a=D.currContract;if(!a)return;const e=Object.assign({},a.pair);return e.symbol=a.key,e.name=a.key,e})),_=()=>{i.unsubscribeContractCurrTradeRealLine()},L=(a,e)=>{i.clearContractCurrAndSubscribeTradeRealLine(a,e)},T=(a,e)=>{console.log("tradingView",a),i.getContractTradeLineAllData(a,e)},j=l(0),R=()=>{c.value=-1,j.value=1};return(e,l)=>(o(),n(C,null,[u("div",ua,[u("ul",va,[(o(),n(C,null,h(m,((a,e)=>u("li",{key:e,onClick:a=>{return t=e,s.value=t,c.value=t,void(j.value=0);var t},class:y(""+(c.value==e?"active":""))},[u("div",ma,v(a),1)],10,da))),64))]),u("div",pa,[u("div",null,[u("p",{class:y("seeMore "+(x.value?"active":"")),onClick:k},[u("span",{class:y(""+("更多"!=g.value?"w":""))},v(g.value),3),u("span",{class:y("arrow "+("更多"!=g.value?"w":""))},null,2)],2)]),u("div",{onClick:R},v(d(t)("深度图")),1)])]),u("ul",{class:y("tabs2 "+(x.value?"active":""))},[(o(),n(C,null,h(w,((a,e)=>u("li",{key:e,onClick:a=>{return t=e,c.value=-1,b.value=t,s.value=5+t,x.value=!1,void(g.value=w[t]);var t},class:y(""+(b.value==e?"active":""))},v(a),11,Ca))),64))],2),u("div",ha,[0==j.value?(o(),f(E,{key:0,containerId:"trading_view_contract",currPair:S.value,lineType:s.value,getTradeLineAllData:T,unsubscribeCurrTradeRealLine:_,clearCurrAndSubscribeTradeRealLine:L,onShowDepth:R},null,8,["currPair","lineType"])):p("",!0),1==j.value?(o(),f(na,{key:1,currContract:a.currContract},null,8,["currContract"])):p("",!0)])],64))}},[["__scopeId","data-v-40b3c0ae"]]),ga=a=>(B("data-v-5220c8dd"),a=a(),I(),a),ya=ga((()=>u("img",{class:"transIcon",src:K},null,-1))),fa=[ga((()=>u("img",{src:M},null,-1)))],wa=[ga((()=>u("img",{src:O},null,-1)))],xa={key:1,class:"mainWrap"},ka={class:"topBlock"},Da={class:"leftCol"},Sa={class:"row2"},_a={class:"row3"},La={class:"white"},Ta={class:"topList"},ja={class:"greyS"},Ra={class:"whiteRow"},Aa={class:"greyS"},Na={class:"whiteRow"},Ba={class:"greyS"},Ia={class:"whiteRow"},Pa={class:"greyS"},Fa={class:"whiteRow"},Ua={class:"chartWrap"},Ka={key:2,class:"btnWrap"},Ea=a({__name:"detail",setup(a){const h=["exchange.public.contract.ticker","exchange.public.contract.position",j],b=k(),x=D(),{t:B}=e(),I=t(),F=S(),K=l(b.params.symbol),E=l(!1),M=()=>{E.value=!0},O=()=>{E.value=!1},$=async()=>{F.isLogin()?(await H.addSelfContracts(K.value),N(B("加入自选"))):F.connect()},q=async()=>{await H.delSelfContracts({symbols:[K.value]}),N(B("移出自选"))};s((()=>{i.subscribes(h),i.subscribeContractFair(),i.clearAndStartContractNewest(K.value)})),w((()=>{i.unsubscribes(h),i.unSubscribeContractFair(),i.clearCurrContractNewest(),i.clearContractCurrAndSubscribeDisc()}));const z=r((()=>I.contractInfoMap[K.value])),J=r((()=>{const a=Object.create(null);return F.selfContracts.forEach((e=>{a[e.symbol]=!0})),a}));return c(((a,e,t)=>{K.value=a.params.symbol,i.clearAndStartContractNewest(K.value),t(),console.log("beforeRouteUpdate")})),(a,e)=>{const t=P,l=_("CoinToLegal"),r=G,s=V;return o(),n(C,null,[z.value?(o(),f(t,{key:0,headTt:`${z.value.keyCapital} ${d(B)("永续")}`,titleFunction:M},{icon:L((()=>[ya])),default:L((()=>[d(F).isLogin()&&J.value[z.value.contractCode]?(o(),n("div",{key:0,class:"headStar",onClick:q},fa)):(o(),n("div",{key:1,class:"headStar",onClick:$},wa))])),_:1},8,["headTt"])):p("",!0),z.value?(o(),n("div",xa,[u("div",ka,[u("div",Da,[m(W,{class:"bigF",pairKey:z.value.contractCode,value:z.value.ticker.last},null,8,["pairKey","value"]),u("p",Sa,[T(" ≈"),m(l,{class:"white",value:z.value.ticker.last,coin:z.value.quoteKey},null,8,["value","coin"]),u("span",{class:y(z.value.ticker.changeRange>0?"green":"red")},v(d(R)(z.value.ticker.changeRange)),3)]),u("div",_a,[u("span",null,v(d(B)("标记价格")),1),u("span",La,v(z.value.fairPriceLast),1)])]),u("ul",Ta,[u("li",null,[u("p",ja,v(d(B)("24h最高价")),1),u("p",Ra,v(z.value.ticker.high),1)]),u("li",null,[u("p",Aa,v(d(B)("24h成交量"))+" ("+v(z.value.baseKey.toUpperCase())+") ",1),u("p",Na,v(d(A)(d(g)(z.value.ticker.volume*z.value.multiplier,z.value.maxPriceDecimalDigit))),1)]),u("li",null,[u("p",Ba,v(d(B)("24h最低价")),1),u("p",Ia,v(z.value.ticker.low),1)]),u("li",null,[u("p",Pa,v(d(B)("24h成交额"))+" ("+v(z.value.quoteKey.toUpperCase())+") ",1),u("p",Fa,v(d(A)(z.value.ticker.rightVolume)),1)])])]),u("div",Ua,[m(ba,{currContract:z.value},null,8,["currContract"])]),m(s,{active:a.tabActive,"onUpdate:active":e[0]||(e[0]=e=>a.tabActive=e)},{default:L((()=>[m(r,{title:d(B)("委托订单"),key:"tab1"},{default:L((()=>[m(aa,{currContract:z.value},null,8,["currContract"])])),_:1},8,["title"]),m(r,{title:d(B)("最新成交"),key:"tab2"},{default:L((()=>[m(oa,{currContract:z.value},null,8,["currContract"])])),_:1},8,["title"])])),_:1},8,["active"])])):p("",!0),z.value?(o(),n("div",Ka,[u("p",{class:"btns greenBtn",onClick:e[1]||(e[1]=a=>d(x).push(`/contract/${z.value.contractCode}`))},v(d(B)("买入")),1),u("p",{class:"btns redBtn",onClick:e[2]||(e[2]=a=>d(x).push(`/contract/${z.value.contractCode}?entrustType=2`))},v(d(B)("卖出")),1)])):p("",!0),E.value?(o(),f(U,{key:3,tabNav:[d(B)("自选"),d(B)("永续")],topTt:d(B)("U本位合约"),onClose:O},null,8,["tabNav","topTt"])):p("",!0)],64)}}},[["__scopeId","data-v-5220c8dd"]]);export{Ea as default};