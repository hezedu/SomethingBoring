 //<!--JS前端排序->
 function dwyicomelte(a, o) {
   o = o || {};
   var a1 = $(a),
     mar = o.mar || 9,
     c1 = a1.children(),
     he = o.he || c1.first().innerHeight(),
     he = (o.bo) ? (he + o.bo) : he,
     c1en = c1.length,
     arr = [];
   //alert(he);
   c1.each(function() {
     var index = $(this).index(),
       i,
       paxu = $(this).attr('paxu') + 'index' + index;
     arr.push(paxu);
   });
   arr.sort(function(a, b) {
     a = a.split('index')[0];
     b = b.split('index')[0];
     return a < b ? 1 : -1
   });
   for (i = 0; i < c1en; i++) {
     var ind = arr[i].split('index')[1],
       top = (i - ind) * he + i * mar;
     c1.eq(ind).css('top', top);
   }
   i = o.lim || i;
   o.lim && a1.css({
     'height': he * i,
     'overflow': 'hidden'
   });
   i = i - 1;
   i > 0 && a1.css('padding-bottom', i * mar);
 }