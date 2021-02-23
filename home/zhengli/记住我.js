(function() {
  var uname = $('#uname'),
    upass = $('#upass'),
    jizhuwo2 = $('#jizhuwo2'),
    denglu_btn = $('#denglu_btn');
  uname.focus(function() {
    $(this).css({
      "background-position": "0px -24px"
    });
  }).blur(function() {
    !$(this).val() && $(this).css({
      "background-position": "0px -57px"
    });
  });
  upass.focus(function() {
    $(this).css({
      "background-position": "-231px -24px"
    });
  }).blur(function() {
    !$(this).val() && $(this).css({
      "background-position": "-231px -57px"
    });
  });

  function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
      ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
  }

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  }


  if (getCookie("jizhuwo")) {
    uname.val(getCookie("jizhuwo"));
    uname.val() && uname.css({
      "background-position": "0px -24px"
    });
    jizhuwo2.addClass('on');
  }

  jizhuwo2.click(function() {
    var t = $(this);
    if (!t.hasClass('on')) {
      t.addClass('on');
    } else {
      t.removeClass('on');
      setCookie('jizhuwo', '', -3605);
    }
  });
  denglu_btn.click(function() {
    if (jizhuwo2.hasClass('on')) {
      var a = uname.val();
      a && setCookie('jizhuwo', a, 365);
    }
  });
})()