var box=document.querySelector('.banner');
var imgUl=box.children[0];
var douUl=box.children[1];
var imgLis=imgUl.children;
var dotLis=douUl.children;
var width=box.offsetWidth;
var num = 1;
/*自动轮播*/

clearInterval(box.timer);
box.timer=setInterval(function(){
	num++;
	taobao_banner.addTransiton(imgUl);
	taobao_banner.setTransform(imgUl,-width*num);
},2000);

taobao_banner.addTransitionEnd(imgUl,function(){
		if(num>imgLis.length-2){
			num = 1;			
		}
		else if(num==0){
			num = imgLis.length-2;
		}			
		taobao_banner.removeTransiton(imgUl);
		taobao_banner.setTransform(imgUl,-width*num);
		light();
});

/*小圆点开始*/
function light(){
		for(var i=0;i<dotLis.length;i++){
			dotLis[i].className = ""
		};
		dotLis[num-1].className = "now";
}

var startX = 0;
var moveX = 0;
var isMove = false;
var distance =0;
imgUl.addEventListener('touchstart',function(e){
	clearInterval(box.timer);
	startX =e.touches[0].clientX;
})
imgUl.addEventListener('touchmove',function(e){
	moveX =e.touches[0].clientX;
	isMove = true;
	distance = moveX - startX;
	taobao_banner.removeTransiton(imgUl);
	taobao_banner.setTransform(imgUl,-num*width+distance);
})
imgUl.addEventListener('touchend',function(e){
	if(isMove){
		if(Math.abs(distance)>width/3){
			if(distance>0){
				num--;
			}else if(distance<0){
				num++;
			}
				taobao_banner.addTransiton(imgUl);
				taobao_banner.setTransform(imgUl,-width*num);
			}else{
				taobao_banner.addTransiton(imgUl);
				taobao_banner.setTransform(imgUl,-width*num);
			}
	}
	
	startX=0;
	moveX=0;
	clearInterval(box.timer);
	box.timer=setInterval(function(){
	num++;
	taobao_banner.addTransiton(imgUl);
	taobao_banner.setTransform(imgUl,-width*num);
	},2000);
})



$(function(){
	var fasterheight=$(".headline_newslist_wrap").height();
	var slider=$(".headline_newslist_wrap");
	var liarr=slider.children();
	console.log(liarr);
	var num=0;
	$(".qiang").css({"top":0});
	$(".re").css({"top":-fasterheight});
	$(".bao").css({"top":-fasterheight});
	slider.timer=setInterval(autoplay,2000);
	function autoplay(){
		liarr.eq(num).animate({"top":-fasterheight})
		num = ++num>liarr.length-1?0:num;
		liarr.eq(num).css("top",fasterheight);
		liarr.eq(num).animate({"top":0})
	}
})

var travel=[
{"img_path":"images/fiybig/list1.webp","small_title":"西双版纳 | 跟团游","title":"飞猪专线 云南旅游 昆明大理丽江西双版纳8天跟团游 含四程机票","price":"1520","sell":"889人购买"},
{"img_path":"images/fiybig/list2.webp","small_title":"中央格兰德森特拉 | 自由行","title":"阳光假期 马尔代夫旅游中央格兰德 一价全包 蜜月自由行旅游代理","price":"669","sell":"1525人购买"},
{"img_path":"images/fiybig/list3.webp","small_title":"重庆 | 跟团游","title":"宜昌-重庆长江三峡旅游游轮5天4晚跟团旅游宜昌到重庆豪华游轮船","price":"1230","sell":"11人购买"},
{"img_path":"images/fiybig/list4.webp","small_title":"尼亚玛岛 | 自由行","title":"飞猪专线陕西西安旅游4天3晚半自助游兵马俑一日游华山一日游T","price":"4100","sell":"1000人购买"},
{"img_path":"images/fiybig/list5.webp","small_title":"三亚 | 跟团游","title":"【豪华全包+送出海】全国-马尔代夫旅游 5星可可尼岛自由行 蜜月","price":"5200","sell":"0.63万人购买"},
{"img_path":"images/fiybig/list6.webp","small_title":"西安 | 跟团游","title":"游侠 香港旅游4天3晚 港澳游自由行迪士尼海洋公园四星酒店 纯玩","price":"4520","sell":"1.06万人购买"},
{"img_path":"images/fiybig/list7.webp","small_title":"曼德芙 | 自由行","title":"飞猪专线桂林旅游纯玩4天3晚跟团游漓江四星船五星酒店奢华四日游","price":"950","sell":"889人购买"},
{"img_path":"images/fiybig/list8.webp","small_title":"香港 | 自由行","title":"【中青旅】全国直飞毛里求斯奥瑞格水疗度假村五星自由行度假旅游","price":"1500","sell":"11人购买"},
{"img_path":"images/fiybig/list9.webp","small_title":"桂林 | 跟团游","title":"飞猪专线 云南丽江泸沽湖l旅游商务车湖景房纯玩两日游二日游纯玩","price":"450","sell":"1525人购买"},
{"img_path":"images/fiybig/list10.webp","small_title":"毛里求斯 | 自由行","title":"【中青旅】全国出发马尔代夫五星吉哈德岛一价全包自由行度假旅游","price":"900","sell":"11人购买"},

]

var dataJ ={flybig:travel};
var html=template("travel",dataJ);
$('.like_list_items ul').html(html);



/*var go_up=document.querySelector('.go_up');*/

$(window).scroll(function(){
	console.log();
	if($(this).scrollTop()>300){
		$('.go_up').css({opacity:1});
	}
})


$('.go_up').click(function(){
	$(window).scrollTop(0);
})
