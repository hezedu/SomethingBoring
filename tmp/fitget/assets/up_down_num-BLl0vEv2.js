import{h as a,f as s,w as e,o as u,c as n,F as o,E as i,C as t,m as r,a0 as l,n as p,G as v}from"./index-ZSwLI674.js";const m={__name:"up_down_num",props:["value","pairKey","isShowIcon"],setup(m){const _=m,c=a((()=>_.value));_.pairKey;const d=s(0);return e((()=>_.value),((a,s)=>{if(0===s)return void(d.value=0);const e=a-s;d.value=e<0?1:e>0?2:0}),{immediate:!0}),e((()=>_.pairKey),(()=>{d.value=0}),{immediate:!0}),(a,s)=>(u(),n("span",{class:v("d_un_douwn_status_"+d.value)},[c.value?(u(),n(o,{key:0},[i(t(r(l)(c.value)),1)],64)):(u(),n(o,{key:1},[i("--")],64)),m.isShowIcon?(u(),n(o,{key:2},[],64)):p("",!0)],2))}};export{m as _};