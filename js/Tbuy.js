
$(".nav_left ul li").on("click", function(){
	$(this).addClass('now').siblings().removeClass('now');
});


$(".rank .hot").on("click", function(){
	$(this).addClass('now').siblings().removeClass('now');
});








































function swipe_Tbuy(str){
	//需求分析：
	//1、可以滑动（touch，touchstart，touchmove，touchend，setTransform）
	//2、往上滑动如果超出一定距离，不能滑动（distance=100）
	//3、往下滑动如果超出一定距离，不能滑动
	//4、当滑动大于最大定位区间，定位回去
	//5、当滑动小于最小定位区间，定位回去	
	//0、获取事件源和相关元素
	var parentBox = document.querySelector(str);
	var childBox = parentBox.children[0];
	var h = parentBox.offsetWidth;
	var H = childBox.offsetWidth;
	/*console.log(childBox);*/
	console.log(H);
	//缓冲距离
	/*console.log(h);
	console.log(H);*/
	var distance = 100;
	//最大定位距离
	var maxPosition = 0;
	//最小定位距离
	var minPosition = h-H;
	//最大滑动距离
	var maxSwipe = maxPosition + distance;
	//最小滑动距离
	var minSwipe = minPosition - distance;
	//还需要记录滑动的相关变量
	var start = 0;
	var move = 0;
	var distancSwipe = 0;
	var isMove = false;
	var currSwipe = 0 
	//1、可以滑动
	childBox.addEventListener('touchstart',function(e){
		start = e.touches[0].pageX;
		/*alert(1111);*/
	});
	childBox.addEventListener('touchmove',function(e){
		move = e.touches[0].pageX;
		isMove = true;
		distancSwipe = move - start;
		//transform:translateY(100px);移动到100px的位置
		if(currSwipe+distancSwipe<maxSwipe&&currSwipe+distancSwipe>minSwipe){
			//2、往上滑动如果超出一定距离，不能滑动（distance=100）
			//3、往下滑动如果超出一定距离，不能滑动
			chinasofti.removeTransition(childBox);
			chinasofti.setTransform(childBox,currSwipe+distancSwipe,"X");
		}		
	})
	childBox.addEventListener('touchend',function(){
		if(isMove){
			//4、当滑动大于最大定位区间，定位回去
			//5、当滑动小于最小定位区间，定位回去
			
			if(currSwipe+distancSwipe>maxPosition){
				currSwipe = maxPosition
			}else if(currSwipe+distancSwipe<minPosition){
				currSwipe = minPosition
			}else{
				currSwipe = currSwipe+distancSwipe
			}
		}
		chinasofti.addTransition(childBox);
		chinasofti.setTransform(childBox,currSwipe,"X");
		start = 0;
		move = 0;
		distancSwipe = 0;
		isMove = false;
	})
	
	
}





var chinasofti = {};
chinasofti.addTransition = function(obj){
	obj.style.transition = "all 0.5s";
	obj.style.webkitTransition = "all 0.5";
};
chinasofti.removeTransition = function(obj){
	obj.style.transition = "";
	obj.style.webkitTransition = "";
}
chinasofti.setTransform = function(obj,distance,direction){
	if(direction){
		obj.style.transform = "translate"+direction+"("+distance+"px)";
		obj.style.webkitTransform = "translate"+direction+"("+distance+"px)";
	}else{
		obj.style.transform = "translateX("+distance+"px)";
		obj.style.webkitTransform = "translateX("+distance+"px)";
	}
}
chinasofti.addTransitionEnd = function(obj,callback){
	obj.addEventListener('transitionEnd',callback);
	obj.addEventListener('webkitTransitionEnd',callback);
}
chinasofti.tap = function(obj,callback){
	var start = 0;
	var distance = 0;
	var end = 0;
	var isMove = false;
	obj.addEventListener('touchstart',function(){
		start = new Date().getTime();
	})
	obj.addEventListener('touchmove',function(){
		isMove = true;
	})
	obj.addEventListener('touchend',function(){
		end = new Date().getTime();
		distance = end - start;
		if(distance<150&&!isMove){
			callback();			
		}
		start = 0;
		distance = 0;
		isMove = false;
		end = 0;
	})
}
