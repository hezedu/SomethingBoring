function ie_version(){
  var IE_index=navigator.userAgent.indexOf('MSIE');
  if(IE_index!==-1){
    IE_index=navigator.userAgent.substr(IE_index+5);
    return Number(IE_index.split(';')[0]);
  }
  return IE_index;
}