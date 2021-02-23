$.fn.c_find_one = function(s) {
  var one;
  var _ite = function(th) {
    if (one) {
      return;
    }
    var tc = th.children(),
      tcs = tc.filter(s),
      tc0 = tcs.eq(0);
    if (!tc0[0]) {
      tc.each(function() {
        var t = $(this);
        _ite(t);
      })
    } else {
      one = tc0;
    }
  }
  _ite(this);
  return one;
}

$.fn.findOne = function(s) {
  var one,bool = -1;
  var _ite = function(th) {
    if (one) {
      return;
    }
    var _bool = s(th);
    if (!_bool) {
      var tc = th.children();
      tc.each(function() {
        _ite($(this));
      })
    } else {
      one = th;
      bool = _bool;
    }
  }
  _ite(this);

  return {
    status :bool,
    result:one
  }
}

var _test = $('#test');


function _f(th){
  console.log(th[0].tagName)

  if(th.attr('k')){
    return 1;
  }
  if(th[0].tagName==='V'){

    return 2;
  }
  return 0;
}

var a = _test.findOne(_f);

console.log(a.status)
console.log(a.result.html())


var _json;



function test($obj, s) {
  var k = $obj.attr('k'),
    v = $obj.attr('v') || 2;
  if (k) {
    s[k]
  }

}