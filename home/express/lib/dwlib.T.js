var dwT={
	
		Dateformat: function (date, fmt) {
		date = new Date(date);
		fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
		var o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'H+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds(),
			'q+': Math.floor((date.getMonth() + 3) / 3),
			'S': date.getMilliseconds()
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
		return fmt;
	},
	ellipsis:function(str,limit){
		if(!str || typeof str !='string') return '';
		limit=limit|| 20;
		var len=str.length;
		if(len>limit){
			str=str.substr(0,limit)+'...';	
		}
		return str;
	},
	showWeek :function(time){
		var day = new Date(time),
			now = new Date(),
			weekName = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			name;
		day.day = day.getDay() || 7;
		now.day = now.getDay() || 7;
		name = weekName[day.day];
		if (day.getTime() <= (new Date(now.getYear() + 1900, now.getMonth(), now.getDate() + 1).getTime())) { //开始时间早于或等于今天晚上零点，且结束时间晚于今天（后台sql已过滤）的显示今日，
			return '今日';
		} else if (day.getDate() - now.getDate() < 7) {
			if (day.day - now.day >= 0) {
				return '本' + name;
			} else {
				return '下' + name;
			}
		} else if (day.getDate() - now.getDate() < (15 - now.day)) {
			return '下' + name;
		}
		return day.getMonth() + 1 + '.' + day.getDate();
	}
};


module.exports=dwT;