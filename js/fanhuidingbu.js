window.onload = function() {
	var obtn = document.getElementById('btn');
	var timer = null;
	var isTop = true;
	//获取页面的可视窗口高度
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

	//滚动条滚动时触发
	window.onscroll = function() {
		//在滚动的时候增加判断
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		//当距离顶部100px时，出现返回顶部按钮
		//或者当页面的可视窗口高度clientHeight小于滚动条的高度时，出现返回顶部按钮
		if(osTop >= 100) {
			obtn.style.display = 'block';
		} else {
			obtn.style.display = 'none';
		}

		if(!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	};

	btn.onclick = function() {
		//设置定时器
		timer = setInterval(function() {
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			//减小的速度
			var isSpeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;

			isTop = true;
			//判断，然后清除定时器
			if(osTop == 0) {
				clearInterval(timer);
			}
		}, 30);
	};
}