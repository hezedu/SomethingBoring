var huan_left = $("#huan_left");
var huan_right = $("#huan_right");

huan_right.click(function() {
	var dw_index = $('#JS_HDmenu').children(".BB").index();
	var li_len = $('#JS_HDmenu').children("li").length;
	//alert(li_len);
	if (dw_index == li_len - 1)
		dw_index = -1;
	$('#JS_HDmenu').children("li").eq(dw_index + 1).mouseover();

});

huan_left.click(function() {
	var dw_index = $('#JS_HDmenu').children(".BB").index();

	$('#JS_HDmenu').children("li").eq(dw_index - 1).mouseover();
});