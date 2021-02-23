meetingApp.mulSelect = function(th) {
  var t = $(th),
    isSelect = t.hasClass('dw_select'),
    list = meetingApp.reservePart;

  if (isSelect) {
    t.removeClass('dw_select');
  } else {
    t.addClass('dw_select');
  }
  t = $(th);
  var tp = t.parent();
  var tpc = tp.children('.dw_time_part');
  var start = 0,
    len = 0,
    pre_index = -1;
  list = [];
  tpc.each(function(index) {
    var t2 = $(this);
    if (t2.hasClass('dw_select')) {
        if(len === 0){
          start = index;
        }
        len = len + 1;
    }else{
      if(len){

        var _start = tpc.eq(start).attr('start');
        //console.log('start + len', start + len)
        var _end = tpc.eq(start + len).attr('start');
        list.push([_start, _end]);
        len = 0; 
      }
    }
  });
  //console.log(list);
}