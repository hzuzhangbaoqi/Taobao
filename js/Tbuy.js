
$(".nav_left ul li").on("click", function(){
	$(this).addClass('now').siblings().removeClass('now');
});


$(".rank .hot").on("click", function(){
	$(this).addClass('now').siblings().removeClass('now');
});
/*alert(41);
*/
var Tbuy=[
{"img_path":"images/Tbuy/list1.webp","title":"居爱衣服收纳箱两件套棉麻储物有盖塑料布艺整理箱大号被子收纳袋","now_price":"￥14.90","sell_num":"￥47.80","ispost":"包邮","after_price":"9.9","action_btn":"抢35元券","tj":"62","time":"22"},
{"img_path":"images/Tbuy/list2.webp","title":"新疆棉花被子冬被全棉被芯棉絮床垫棉胎垫被学生宿舍单人双人被褥","now_price":"￥118.00","sell_num":"￥47.80","ispost":"不包邮","after_price":"68.88","action_btn":"抢50元券","tj":"55","time":"11"},
{"img_path":"images/Tbuy/list3.webp","title":"北极绒儿童保暖内衣套装童装黄金甲加绒加厚秋衣裤睡衣冬男童女童","now_price":"￥47.80","sell_num":"￥47.80","ispost":"包邮","after_price":"9.8","action_btn":"抢10元券","tj":"66","time":"55"},
{"img_path":"images/Tbuy/list4.webp","title":"送机或菌 佰生优10菌种家用酸奶菌粉 双歧杆菌益生菌乳酸菌发酵剂","now_price":"￥188.00","sell_num":"月销1.19万件","ispost":"包邮","after_price":"19.9","action_btn":"抢2元券","tj":"55","time":"12"},
{"img_path":"images/Tbuy/list5.webp","title":"泊泉雅小黑裙身体乳保湿滋润补水香体浴后持久淡香全身润肤正品女","now_price":"￥47.80","sell_num":"月销1.19万件","ispost":"不包邮","after_price":"10","action_btn":"抢6元券","tj":"108","time":"259"},
{"img_path":"images/Tbuy/list6.webp","title":"男士卫衣秋季2017新款韩版潮流加绒加厚学生套头圆领男生长袖外套","now_price":"￥141.90","sell_num":"月销707件","ispost":"包邮","after_price":"9.8","action_btn":"抢50元券","tj":"88","time":"66"},
{"img_path":"images/Tbuy/list7.webp","title":"居爱衣服收纳箱两件套棉麻储物有盖塑料布艺整理箱大号被子收纳袋","now_price":"￥118.00","sell_num":"￥47.80","ispost":"包邮","after_price":"29.8","action_btn":"抢50元券","tj":"66","time":"11"},
{"img_path":"images/Tbuy/list8.webp","title":"新疆棉花被子冬被全棉被芯棉絮床垫棉胎垫被学生宿舍单人双人被褥","now_price":"￥47.80","sell_num":"￥63.80","ispost":"包邮","after_price":"9.8","action_btn":"抢10元券","tj":"55","time":"55"},
{"img_path":"images/Tbuy/list9.webp","title":"北极绒儿童保暖内衣套装童装黄金甲加绒加厚秋衣裤睡衣冬男童女童","now_price":"￥188.00","sell_num":"￥47.80","ispost":"包邮","after_price":"39.8","action_btn":"抢2元券","tj":"66","time":"12"},
{"img_path":"images/Tbuy/list10.webp","title":"送机或菌 佰生优10菌种家用酸奶菌粉 双歧杆菌益生菌乳酸菌发酵剂","now_price":"￥47.80","sell_num":"￥647.80","ispost":"包邮","after_price":"59.6","action_btn":"抢6元券","tj":"55","time":"969"},

]

var dataTmall ={Tbuy:Tbuy};

var html=template("Tbuy_shop",dataTmall);
console.log(1);
$('.waterfall_column').html(html);




































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
