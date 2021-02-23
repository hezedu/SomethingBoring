var const_init = function(t,i,o){
  switch(arguments.length){
    case 3:
    const_init.const_ite(t,i,o);
    break;
    case 2:
    const_init.const_ite([t],0,i);
    break;
  }
};
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

const_init.const_ite = function(t, i, o) {
  var ty = Object.prototype.toString.call(o);
  switch (ty) {
    case '[object Object]':
      const_init.setConst(t, i, {});
      for (var j in o) {
        const_init.const_ite(t[i], j, o[j]);
      }
      break;
    case '[object Array]':
      const_init.setConst(t, i, []);
      for (var j = 0, len = o.length; j < len; j++) {
        const_init.const_ite(t[i], j, o[j]);
      }
      break;
    default:
      const_init.setConst(t, i, o);
  }
}


var obj = {
  a:{
    b:'b'
  }
};
var t = {};

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

const_init._ite(obj);
obj.a.b = 'dd'

console.log(JSON.stringify(obj));