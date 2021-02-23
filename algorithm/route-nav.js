//auth dw
//根据react路由生成导航

export function routeFormat(route, rpath = ''){
  rpath = rpath === '/' ? '' : rpath;
  Array.isArray(route) ? _routeForArr(route, rpath) : _routeForObj(route, rpath)
  return route;
}

export function createNav(route, fn){
  const arr = routeToArr(route);
  return arr.map(fn);
}

//特性 redirectTo $child[0], url
function _routeForObj(v, rpath){
  if(v.redirectTo){
    v.link = _routeRedirectTo(v, rpath);
  }else{
    v.link = linkFormat(rpath, v.path);
  }
  v.rpath = rpath;

  rpath = v.link || rpath;
  if(v.indexRoute){
    v.indexRoute.link = rpath;
  }
  if (v.childRoutes) {
    _routeForArr(v.childRoutes, rpath);
  }
}

function _routeForArr(arr, rpath){
  arr.forEach((v) => _routeForObj(v, rpath))
}

function linkFormat(rpath, path){
  if(path){
    if(path[0] === '/'){
      return path;
    }else{
      return rpath + '/' + path;
    }
  }else{
    return path;
  }
}

export function routeToArr(route = {}){
  let arr = [];
  const index = route.indexRoute || route.getIndexRoute;
  if(index && typeof index.link === 'string'){
    index.isIndex = true;
    arr[0] = index;
  }
  if(route.childRoutes){
    route.childRoutes.forEach(function(v){
      if(typeof v.link === 'string'){
        arr.push(v);
      }
    })
  }
  return arr
}


function _indexOnEnter(nextState, replace){
  return replace(this._indexRedirect);
}

function _getClildIndex(_link){
  _link = _link.replace('$child[', '');
  _link = _link.replace(']', '');
  return  Number(_link);
}

function _routeRedirectTo(v, rpath){
  let _link = v.redirectTo;
  if(_link.indexOf('$child[') === 0){
    if(v.childRoutes){
      _link = _getClildIndex(_link);
      _link = v.childRoutes[_link];
      if(_link){
        _link = linkFormat(rpath, _link.path)
      }
    }
  }else{
    _link = linkFormat(rpath, v.redirectTo);
  }
  v.indexRoute = {
    onEnter:_indexOnEnter,
    _indexRedirect:_link
  }
  return _link;
}
