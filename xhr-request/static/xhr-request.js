"use strict";
var XHR = window.XMLHttpRequest;

function request(params){
  const method = params.method || 'get';
  const url = params.url;
  // const async = true;
  const xhr = new XHR();
  if(params.onStart){

  }
  xhr.addEventListener('loadstart', (e) => {
    console.log('loadstart', e)
  });
  xhr.addEventListener('load', (e) => {
    console.log('load', e);
  });
  xhr.addEventListener('loadend', (e) => {
    console.log('loadend', e);
  });
  xhr.addEventListener('abort', (e) => {
    console.log('abort', e);
  })
  xhr.addEventListener('error', (e) => {
    console.log('error', e);
  })
  xhr.open(method, url, true);
  let data = params.data;
  // if(data){
  //   const dataType = params.dataType || 'text';
  //   if(dataType === 'text'){
  //     if(typeof data !== 'string'){
  //        data = JSON.stringify(data);
  //     }
  //   }
  // }
  xhr.send(data);


}