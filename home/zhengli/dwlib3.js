var dw = {
  lps: location.pathname.split("/"),
  on: "on",
  hover: "Jhover",
  //URL参数
  //URL变色 1.0
  urlcolor: function(a, b) //(a,index)
    {
      var b1 = b || 1,
        a1 = a.attr("href").split("/")[b1],
        c = dw.lps[b1];

      c == a1 && a.addClass(dw.on);
    },
  //经典导航 子 a ul 2.1
  nav: function(r, xiala) {
    a = $(r).children();
    var first = a.first().children("a"),
      index,
      p3 = $(r).offset().left,
      w3 = $(r).innerWidth();
    "" == dw.lps[1] && first.addClass(dw.on);
    a.each(function() {
      var a1 = $(this).children("ul"),
        a2 = $(this).children("a"),
        w1 = a1.innerWidth(),
        w2 = $(this).innerWidth(),
        a3 = a1.children().length,
        p2 = a2.offset().left;
      //定位
      if (w1 > w2) {
        var pp1 = w1 - w2;
        pp = pp1 * 0.5;
        a1.css('left', -pp);
        var p4 = p2 - pp;
        if (p4 < p3)
          a1.css('left', p3 - p2);
        else if (p4 + w1 > p3 + w3) {
          a1.css('left', -(pp - (p3 + w3 - (p4 + w1))));
        }
      }
      //URL变色
      dw.urlcolor(a2);
      var aid = a2.attr("id"),
        ahref = a2.attr("href").split("/")[1];
      (aid && dw.lps[1] == aid || "tinvest" == dw.lps[1] && 'invest' == ahref || 'debt' == dw.lps[1] && 'invest' == ahref) && a2.addClass(dw.on);
      //if (a3) {
      if (!xiala && a2.hasClass(dw.on)) {
        a3 && a1.show();
        index = $(this).index();
        index = $(a[index]).children("ul");
      }
      //鼠标
      $(this).mouseover(function() {
        index && index.hide();
        a3 && a1.show();
        a2.addClass(dw.hover);
      }).mouseout(function() {
        a3 && a1.hide();
        index && index.show();
        a2.removeClass(dw.hover);
      });
      //}else
      // !a3 && a2.css("background",'none');
      //a1.children().last().css({"border":"0"});
    });
  },
  //迷你导航	//父,子,子(show),子(子)1.0
  erji: function(a, b, c, d) {
    $(a).children(b).each(function() {
      var a1 = $(this).children(c),
        b2 = $(this).children(d),
        index = $(this).index();
      if (a1.html()) $(this).hover(function() {
        a1.show();
        index == 0 && $(this).css({
          'background-position': '0px -62px'
        });
        index == 1 && $(this).css({
          'background-position': '0px -124px'
        });
        b2.css({
          'color': '#cfcfcf'
        });
      }, function() {
        a1.hide();
        index == 0 && $(this).css({
          'background-position': '0px -31px'
        });
        index == 1 && $(this).css({
          'background-position': '0px -93px'
        });
        b2.css({
          'color': '#A7A7A7'
        });
      });
    });
  },
  //幻灯片4.1 大 小
  HuanDeng: function(a, e, o) {
    if (!$(a).length) return;
    o = o || {};
    var sd = o.sd || 5000,
      sy = o.style || '',
      num = o.num || false,
      nozhong = o.nozhong || 0,
      test = {
        "z-index": "2"
      };

    function m(c) {
      var e = sy || Math.ceil(10 * Math.random()),
        c = c || b - 1;
      0 > c && (c = n - 1);
      switch (e) {
        case 1:
          d();
          $(a).eq(c).css({
            "z-index": "2"
          });
          $(a).eq(b).css({
            "z-index": "3",
            left: f + "px"
          }).show().animate({
            left: "0px"
          });
          break;
        case 2:
          d();
          $(a).eq(c).css({
            "z-index": "2"
          });
          $(a).eq(b).css({
            "z-index": "3",
            right: f + "px"
          }).show().animate({
            right: "0px"
          });
          break;
        case 3:
          d();
          $(a).eq(c).css({
            "z-index": "2"
          });
          $(a).eq(b).css({
            "z-index": "3",
            bottom: g + "px"
          }).show().animate({
            bottom: "0px"
          });
          break;
        case 4:
          d();
          $(a).eq(b).css({
            "z-index": "3"
          }).hide().slideDown();
          $(a).eq(c).css({
            "z-index": "2"
          }).slideUp();
          break;
        case 5:
          d();
          $(a).eq(b).css({
            "z-index": "2"
          }).hide().slideDown();
          $(a).eq(c).css({
            "z-index": "3"
          }).show().slideUp();
          break;
        case 6:
          d();
          $(a).eq(b).css({
            "z-index": "3",
            bottom: g + "px"
          }).show().animate({
            bottom: "0px"
          });
          $(a).eq(c).css({
            "z-index": "2"
          }).animate({
            bottom: "-" + g + "px"
          });
          break;
        case 7:
          d();
          $(a).eq(b).css({
            "z-index": "3",
            top: g + "px"
          }).show().animate({
            top: "0px"
          });
          $(a).eq(c).css({
            "z-index": "2"
          }).animate({
            top: "-" + g + "px"
          });
          break;
        case 8:
          d();
          $(a).eq(b).css({
            "z-index": "3",
            right: f + "px"
          }).show().animate({
            right: "0px"
          });
          $(a).eq(c).css({
            "z-index": "2"
          }).animate({
            right: "-" + f + "px"
          });
          break;
        case 9:
          d();
          $(a).eq(b).css({
            "z-index": "3",
            left: f + "px"
          }).show().animate({
            left: "0px"
          });
          $(a).eq(c).css({
            "z-index": "2"
          }).animate({
            left: "-" + f + "px"
          });
          break;
        case 10:
          d(), $(a).hide().eq(b).css({
            "z-index": "3"
          }).fadeIn(1E3), $(a).eq(c).css({
            "z-index": "2"
          }).show()
      }
    };

    function d() {
      $(a).css({
        "z-index": "",
        position: "absolute",
        left: "",
        right: "",
        bottom: "",
        top: ""
      })
    };

    function k() {
      b++;
      b == n && (b = 0);
      m();
      h.eq(b).addClass(dw.on).siblings().removeClass(dw.on)
    };
    var b = 0,
      f = $(a).width(),
      g = $(a).height();
    $(a).each(function() {
      var sindex;
      if (num) {
        sindex = $(this).index() + 1;
        sindex = "<li>" + sindex + "</li>"
      } else sindex = "<li></li>";
      $(e).append(sindex)
    });
    var h = $("li", e);
    $(a).hide().first().show();
    h.first().addClass(dw.on);
    var i = setInterval(k, sd),
      n = h.length;
    h.mouseover(function() {
      clearInterval(i);
      $(this).addClass(dw.on).siblings().removeClass(dw.on);
      var a = b;
      b = $(this).index();
      m(a)
    }).mouseout(function() {
      i = setInterval(k, sd)
    });
    $(a).mouseover(function() {
      clearInterval(i)
    }).mouseout(function() {
      i = setInterval(k, sd)
    });
    if (!nozhong) {
      var j = $(e).parent().width();
      var j = (j - $(e).width()) / 2;
      $(e).css("left", j)
    }
  },
  //ENTER按键
  keys: function(a, b) {
    function keyUp(e) {
      var currKey = 0,
        e = e || event;
      currKey = e.keyCode || e.which || e.charCode;
      if (currKey == 13) {
        document.getElementById(b).click();
      }
    }
    document.getElementById(a).onkeydown = keyUp;
  },
  //mouseimage 1.0
  mouseimage: function(ca, cb, p) {
    var smbhs_MM = $(ca);
    smbhs_MM.each(function() {
      var t = $(this),
        t1 = p ? t.children().eq(0) : t,
        ap = t1.css('background-position');
      if (typeof(ap) === "undefined") //IE兼容
      {
        ap = t1.css('background-position-x');
        ap += " " + t1.css('background-position-y');
      }
      cb = cb || t1.innerHeight() + 1;
      var a = ap.split(" "),
        a1 = parseInt(a[1]) - cb,
        a1 = a1 + "px",
        b = a[0] + " " + a1,
        t;
      t.mouseenter(function() {
        t1.css('background-position', b);
      }).mouseleave(function() {
        t1.css('background-position', ap);
      });
    });
  },
  //滑动, 容器,href数组
  huadong: function(a, arr) {
    var a3 = $(a).children("ul"),
      a1 = a3.children('li'),
      a2 = $(a).children("div").children();
    a1.click(function() {
      $(this).addClass('on').siblings().removeClass('on');
      var index = $(this).index();
      a2.hide().eq(index).show();
      if (arr) {
        a4 = a3.children("a"), href = arr[index];
        a4.attr('href', href);
      }
    });
    a1.first().click();
  },
  //动画 差
  donghua: function(a) {
    a = $(a).children();
    a.each(function() {
      var a1 = $(this),
        a2 = a1.children().eq(0);
      a1.mouseenter(function() {
        a2.animate({
          top: '-5px'
        }, 300).animate({
          top: '0px'
        }, 50);
      }).mouseleave(function() {
        a2.animate({
          top: '0px'
        }, 100).stop();
      });
    });
  },
  //左滑动导航+右fixed 
  scrollNav: function(id) {
    var a = $(id),
      a1 = a.children(),
      as = a.offset().top,
      ds = $(document).scrollTop(),
      rightimg = $('#smbhs_mtbd'),
      bh = $(document).height() - $(window).height();
    $('html,body').scroll(function() {
      ds = $(document).scrollTop();
      if (ds > as) {
        rightimg.addClass('on');
        a.addClass('on');
      } else {
        rightimg.removeClass('on');
        a.removeClass('on');
      }
      if (ds > bh) {
        rightimg.css({
          'position': 'absolute',
          'top': bh
        });
      } else {
        rightimg.css({
          'position': '',
          'top': ''
        });
      }

    });
    a1.each(function() {
      var t = $(this),
        hreff = t.attr('hreff'),
        hreff = $(hreff),
        hreffT = hreff.offset().top - 90;
      $(window).scroll(function() {
        ds = $(document).scrollTop();
        if (ds >= hreffT - 10 && ds < hreffT + 100) {
          t.addClass('on').siblings().removeClass('on');
        }
      });
      t.click(function() {
        $('html,body').animate({
          scrollTop: hreffT
        });
      });
    });
  },
  //JS旋转 可用css3代替
  H5_xuanzhuan: function(a, o) {
    o = o || {};
    var n1 = o.jd || 0,
      rotINT1,
      jg = o.jg || 10,
      sd = o.sd || 5;
    clearInterval(rotINT1);
    rotINT1 = setInterval(setRotate1, jg);

    function setRotate1() {
      n1 = n1 + sd;
      a[0].style.transform = "rotate(" + n1 + "deg)"
      a[0].style.webkitTransform = "rotate(" + n1 + "deg)"
      a[0].style.OTransform = "rotate(" + n1 + "deg)"
      a[0].style.MozTransform = "rotate(" + n1 + "deg)";
      if (n1 == 180 || n1 == 360) {
        clearInterval(rotINT1)
          //if (n1==360){n1=0}
      }
    }
  },
  //向上翻滚切换
  dhsx: function() {
    var a = $('#smbhs_ico1').children();
    a.each(function() {
      var t = $(this),
        index = t.index(),
        sx = t.children('div').children(),
        show = t.children('span');
      t.mouseenter(function() {
        sx.eq(0).animate({
          top: '-100%'
        });
        sx.eq(1).animate({
          top: '0px'
        });
        show[0] && show.show();
      }).mouseleave(function() {
        sx.eq(0).stop().animate({
          top: '0px'
        });
        sx.eq(1).stop().animate({
          top: '100%'
        });
        show[0] && show.hide();
      });
      // var b=$(this).css ;
    });
  },
  //新 无特效 幻灯
  newhuandeng: function(a, b, c, d) {
    var smbhs_mtbd = $(a).children(),
      len = smbhs_mtbd.length,
      index = 0,
      si,
      menu = $(b),
      left = $(c),
      right = $(d),
      i = 0,
      str = '';
    smbhs_mtbd.eq(index).show();
    if (index == len)
      index = 0;
    //smbhs_mtbd.eq(index).show().siblings().hide();
    for (; i < len; i++) {
      str += '<li></li>';
    }
    menu.html(str);
    menu = menu.children();
    menu.eq(index).addClass('on');
    menu.click(function() {
      var t = $(this);
      t.addClass('on').siblings().removeClass('on');
      index = t.index();
      smbhs_mtbd.eq(index).show().siblings().hide();
    });
    left.click(function() {
      menu.eq(--index).click();
      //alert(index);
    });
    right.click(function() {
      index = index + 1;
      if (index == len)
        index = 0;
      menu.eq(index).click();
    });
  },
  //新 图片展示 左右滚动
  splitpx: function(a) {
    if (typeof a == 'string')
      return Number(a.split('px')[0]);
  },
  trueWH: function(a, b) {
    a = $(a);
    if (b) {
      var m1 = this.splitpx(a.css('margin-top')),
        m2 = this.splitpx(a.css('margin-bottom'));
      return a.outerHeight() + m1 + m2;
    } else {
      var m1 = this.splitpx(a.css('margin-left')),
        m2 = this.splitpx(a.css('margin-right'));
      return a.outerWidth() + m1 + m2;
    }
  },
  imageshow: function(a, gs, mp) {
    var a = $(a),
      ac = a.children(),
      left = ac.eq(0),
      mid = ac.eq(1),
      right = ac.eq(2),
      midc = mid.children(),
      len = midc.length,
      first = midc.eq(0),
      w = dw.trueWH(first),
      b = gs || mid.width() / w,
      i = 0;
    if (len > b) {
      right.addClass('on');
      right.click(function() {
        if (i + b < len) {
          i = i + 1;
          midc.animate({
            left: -w * i
          });
          !left.hasClass('on') && left.addClass('on');
        }
        i + b >= len && right.removeClass('on');
      });
      left.click(function() {
        if (i > 0) {
          i = i - 1;
          midc.animate({
            left: -w * i
          });
          !right.hasClass('on') && right.addClass('on');
        }
        i == 0 && left.removeClass('on');
      });
    }
  },
  paxu: function(a, o) {
    o = o || {};
    var a1 = $(a),
      mar = o.margin || 0,
      c1 = a1.children(),
      he = o.he || c1.first().innerHeight(),
      he = (o.bo) ? (he + o.bo) : he,
      c1en = c1.length,
      arr = [];
    c1.css('position', 'relative');
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
  },
  //左右上下自动滚动
  dw_chenggong: function(a, b) {
    var c_wrap = $(a); //定义滚动区域 
    var c_interval = 3000; //定义滚动间隙时间 
    var c_moving; //需要清除的动画 
    c_wrap.hover(function() {
      clearInterval(c_moving); //当鼠标在滚动区域中时,停止滚动 
    }, function() {
      c_moving = setInterval(function() {
          var c_field = c_wrap.children().first(),
            c_h; //此变量不可放置于函数起始处,li:first取值是变化的
          if (b) {
            c_h = c_field.innerWidth(); //取得每次滚动高度 
            c_field.animate({
              marginLeft: -c_h + 'px'
            }, 600, function() {
              c_field.css('marginLeft', 0).appendTo(c_wrap);
            })
          } else {
            c_h = c_field.innerHeight(); //取得每次滚动高度 
            c_field.animate({
              marginTop: -c_h + 'px'
            }, 600, function() {
              c_field.css('marginTop', 0).appendTo(c_wrap);
            });
          }
        }, c_interval) //滚动间隔时间取决于c_interval 
    }).trigger('mouseleave'); //函数载入时,模拟执行mouseleave,即自动滚动 
  },
  test: function() {
    alert('aa');
  }
};