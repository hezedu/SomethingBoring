
$('#test').jade_out({
tpl_url:'/tpl.jade',
data_url:'/test'
}, function(data) {
    setInterval(function() {
      data.name = '时间：' + Date.now()
    }, 500);
  });

cookie.set('hello','world')
var hello = cookie.get('hello');
console.log(hello);
cookie.remove('hello');



setTimeout(function(){
var hello = cookie.get('hello');
console.log(hello);

})



  /*    $(window).load(function() {
        //- var scr = document.createElement("script");
        //- scr.src = '/jadeout/tpl.jade';
        //- document.body.appendChild(scr)
        $.ajax({
          url: '/jade_out/tpl.jade',
          dataType: 'script',
          //- beforeSend:function(xhr){
          //- console.log(xhr);
          //- xhr.setRequestHeader('Cache-Control','max-age='+(1000 * 60 * 60 * 24 * 365));
          //- },
          cache: true,
          success: function() {
            //console.log(jadeout.index['/tpl.jade'].toString())
            // console.log(JSON.stringify(jadeout.index))
          }
        })
      })

      //console.log(sessionStorage)


          window.onunload = function(e,s) {
            console.log("e");
            console.log(e);
            sessionStorage.clear();
            
            for(var i in e){
              sessionStorage[i] = e[i].toString()
            }
            
            console.log("s");
            console.log(s);
            var index = jadeout.index;
            for (var i in index) {
              //sessionStorage['jadeout:' + i] = index[i].toString();
            }
            //sessionStorage.jadeout_index = jade
          }
          document.onkeydown = function() //屏蔽键盘F5  
            {
              if (window.event.keyCode == 116) {
                window.event.keyCode = 0;
                event.cancelBubble = true;
                return false;
              }
            }
            //console.log(sessionStorage)
      window.onbeforeunload = function(e) {

                  sessionStorage.clear();
            var e = window.event
            for(var i in e){
              sessionStorage[i] = e[i].toString()
            }
        var n = window.event.screenX - window.screenLeft;
        var b = n > document.documentElement.scrollWidth - 20;
        if (b && window.event.clientY < 0 || window.event.altKey) {
          //alert("这是一个关闭操作而非刷新");
          sessionStorage.tmp = "这是一个关闭操作而非刷新"

          window.event.returnValue = ""; //此处放你想要操作的代码 
        } else {

          sessionStorage.tmp = "这是一个刷新操作而非关闭"
          //alert("这是一个刷新操作而非关闭");
        }

        
      }*/