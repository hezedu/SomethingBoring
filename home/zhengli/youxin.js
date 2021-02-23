  $(function() {
    var an = $('#yue_anniu'),
      text = $('#yue_text'),
      tiao = $('#yue_tiao'),
      b1 = 0,
      f = tiao.offset().left + 10,
      input = $('#smbhs_denglu_inp'),
      inputv = input.val();

    input.focus(function() {
      $(this).val('');
    }).blur(function() {
      if (!$(this).val())
        $(this).val(inputv);
    });

    an.mouseenter(function() {
      b1 = 1;
      an.mousedown(function() {
        $(document).mousemove(function(e) {
          if (b1 === 1) {
            var left = e.pageX - f;
            if (left < 0)
              left = 0;
            if (left > 120)
              left = 120;
            an.css('left', left);
            tiao.css('width', left);
            text.text(Math.floor(left / 10));
          }
        });
      });
    }).mouseleave(function() {
      b1 = 0;
    });
  });

  dw.HuanDeng("#JS_huanDeng_2 div", "#JS_HDmenu_2", {
    style: 10
  });
  (function() {
    var huan_left = $("#huan_left"),
      huan_right = $("#huan_right"),
      memu = $('#JS_HDmenu_2');
    huan_right.click(function() {
      var dw_index = memu.children(".on").index();
      var li_len = memu.children("li").length;
      //alert(li_len);
      if (dw_index == li_len - 1)
        dw_index = -1;
      memu.children("li").eq(dw_index + 1).mouseover();

    });
    huan_left.click(function() {
      var dw_index = memu.children(".on").index();

      memu.children("li").eq(dw_index - 1).mouseover();
    });
  })();
  //新下拉
  $(function() {
    var input = $('#smbhs_denglu_inp'),
      inputv = input.val(),
      next = input.next(),
      next2 = next.next(),
      next2c = next2.children(),
      kag = 0;
    input.focus(function() {
      if (kag != 1)
        $(this).val('');
    }).blur(function() {
      if (!$(this).val())
        $(this).val(inputv);
    });

    next.click(function() {
      $(this).toggleClass('on');
      next2.toggle();
    });
    next2c.click(function() {
      input.val($(this).text());
      kag = 1;
      next.click();
    });

  });
  // ajax 模版一次调用,
  $(function() {
    dw.huadong('#dw_keysss');

    (function(a) {
      var a3 = $(a).children("ul"),
        a1 = a3.children('li'),
        a2 = $(a).children("div").children();
      a1.click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index(),
          a2index = a2.eq(index),
          v1 = a2index.attr('value');
        a2.hide();

        if (v1) {
          a2index.load('/index/mdd', {
            list: v1
          }).show().removeAttr('value');
        } else {
          a2index.show();
        }
      });
      a1.eq(0).click();
    })('#smbhs_leibiao');

  });