var sas = {}

sas.type = Object.prototype.toString;

sas.ARR = '[object Array]';
sas.FN = '[object Function]';
sas.OBJ = '[object Object]';
sas.copy = function(t) {
  var c = [];
  sas._copy([t], 0, c);
  return c[0];
}

sas._copy = function(t, i, c) {
  switch (sas.type.call(t[i])) {
    case sas.OBJ: //obj
      c[i] = {};
      for (var j in t[i]) {
        sas._copy(t[i], j, c[i]);
      }
      break;
    case sas.ARR: //arr
      c[i] = [], len = t[i].length;
      for (var j = 0; j < len; j++) {
        sas._copy(t[i], j, c[i]);
      }
      break;
    default:
      c[i] = t[i];
  }
}


function const_init(obj) {
  Object.defineProperty(obj, '__SET__', { //绑定
    configurable: false,
    enumerable: false,
    get: function() {
      return const_init.set
    },
    set: function setter(val) {
      throw new Error('confErr:property "__SET__" can\'t modify!');
    }
  });
}

const_init.setConst = function(t, k, v) { //设置成属性不可更改-删除 
  Object.defineProperty(t, k, {
    configurable: false,
    enumerable: true,
    get: function() {
      return v
    },
    set: function setter(val) {
      throw new Error('glo-const Err:property "' + k + '" can\'t modify!');
    }
  });
}

const_init.set = function(k, v) { //__SET__方法 暴露
  if (v) {
    return const_init.setConst(this, k, v);
  }
  var obj = sas.copy(k);
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    throw new Error('glo-const Err: __SET__  one param must be  a Object!');
    return;
  }
  for (var i in obj) {
    const_init.setConst(this, i, obj[i]);
    const_init._ite(this[i]);
  }
}

const_init._ite = function(t) { //递归 调用 setConst
    var ty = Object.prototype.toString.call(t);
    switch (ty) {
      case '[object Object]':
        for (var i in t) {
          const_init.setConst(t, i, t[i]);
          const_init._ite(t[i]);
        }
        break;
      case '[object Array]':
        for (var i = 0, len = t.length; i < len; i++) {
          const_init.setConst(t, i, t[i]);
          const_init._ite(t[i]);
        }
        break;
      default:
    }
  }
  //const_init(exports)
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = const_init;
}