export function noop(){}

export function genPageTransiton(raw = {}){
  const direction = raw.direction;
  const result = {
    enterClass: '',
    enterActiveClass: '',
    leaveActiveClass: '',
    leaveToClass: ''
  };
  _setIfDef(result, 'duration', raw);
  _setIfDef(result, 'mode', raw);
  _setIfDef(result, 'direction', raw);
  _setIfObject(result, 'activeStyle', raw);
  _setIfObject(result, 'actionStyle', raw);

  if(direction === 'enter'){
    result.enterClass = raw.actionClass;
    result.enterActiveClass = raw.activeClass;
    
  } else if(direction === 'leave'){
    result.leaveToClass = raw.actionClass;
    result.leaveActiveClass = raw.activeClass;
  }
  
  return result;
}




function _setIfDef(distObj, key, srcObj){
  const v = srcObj[key];
  if(v === undefined){
    return;
  }
  distObj[key] = v;
}

function _setIfObject(distObj, key, srcObj){
  const v = srcObj[key];
  if(v && typeof v === 'object' && !Array.isArray(v)){
    distObj[key] = v;
  }
}

export function genTrueMap(arr){
  const map = Object.create(null);
  let i = 0;
  const len = arr.length;
  for(; i < len; i++){
    map[arr[i]] = true;
  }
}