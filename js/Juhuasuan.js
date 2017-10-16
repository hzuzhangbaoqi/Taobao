$(function(){
	$('.jh_drop_png').click(function(){
		$(".jh_meau").css("-webkit-transform","translate(0, 0%)");
	})
	
	$('.jh_close').click(function(){
		$(".jh_meau").css("-webkit-transform","translate(0, -100%)");
	})
	
	
	
})

/*document.addEventListener(
	"touchmove",
	function(e) {
		e.preventDefault();
	}
);*/

/*var as=document.querySelectorAll('.jh_navcut a');
var spans=document.querySelectorAll('.jh_navcut span');*/
/*console.log(span);*/

/*$('.jh_navcut a').each(function(index.obj){
	/*console.log()
})*/
$('.jh_navcut a').click(function(){
	/*$('.jh_navcut').find('spab').css("transform","scale(0)");*/
	$('.jh_navcut span').each(function(index,obj){
		$(this).css("transform","scale(0)");
	})
	var num=$(this).index();
	$('.jh_navcut').find('span').eq(num).css("transform","scale(1)");

})




var box=document.querySelector('.jh_banner');
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



var jhs=[
{"img_path":"images/JuHuaSuan/list1.webp","merit":"追加送安装 ","title":"【送红包】盯盯拍mini3行车记录仪","new_img":"images/JuHuaSuan/titlenav.webp","tag_price":"¥1,999.00","base_price":"559","sale":"1136"},
{"img_path":"images/JuHuaSuan/list2.webp","merit":"买一送一付款198 ","title":"买一送一送围巾到手价198元羽绒服","new_img":"images/JuHuaSuan/titlenav1.webp","tag_price":"¥688.00","base_price":"112","sale":"1120"},
{"img_path":"images/JuHuaSuan/list3.webp","merit":"第2套5折 ","title":"【第2件5折】屈臣氏骨胶原手霜","new_img":"images/JuHuaSuan/titlenav2.webp","tag_price":"¥39.80","base_price":"26","sale":"52"},
{"img_path":"images/JuHuaSuan/list4.webp","merit":"第二件1/2价 ","title":"【第二件1/2价】猫人保暖内衣","new_img":"images/JuHuaSuan/titlenav.webp","tag_price":"¥399.00","base_price":"368","sale":"22"},
{"img_path":"images/JuHuaSuan/list5.webp","merit":"领20元券后189 ","title":"【限量抢20元劵 低至189元】","new_img":"images/JuHuaSuan/titlenav1.webp","tag_price":"¥699.00","base_price":"388","sale":"554"},
{"img_path":"images/JuHuaSuan/list6.webp","merit":"前2.5w拍2件23.9 ","title":"第2件0.1元，王小二黄心猕猴桃","new_img":"images/JuHuaSuan/titlenav2.webp","tag_price":"¥56.70","base_price":"40","sale":"447"},
{"img_path":"images/JuHuaSuan/list7.webp","merit":"买一送一付款198 ","title":"心相印心柔3层160g27粒","new_img":"images/JuHuaSuan/titlenav.webp","tag_price":"¥1,999.00","base_price":"1699","sale":"69630"},
{"img_path":"images/JuHuaSuan/list8.webp","merit":"第2套5折 ","title":"芬腾新款秋衣秋裤纯色薄款打底衫","new_img":"images/JuHuaSuan/titlenav1.webp","tag_price":"¥688.00","base_price":"588","sale":"521"},
{"img_path":"images/JuHuaSuan/list9.webp","merit":"第二件1/2价 ","title":"i5 7500/GTX1050Ti 游戏主机","new_img":"images/JuHuaSuan/titlenav2.webp","tag_price":"¥39.80","base_price":"38","sale":"2259"},
{"img_path":"images/JuHuaSuan/list10.webp","merit":"领20元券后189 ","title":"苏泊尔全自动破壁料理机养生带加热","new_img":"images/JuHuaSuan/titlenav1.webp","tag_price":"¥399.00","base_price":"320","sale":"1234"},

]


var dataJ ={jhs:jhs};
var html=template("jhs",dataJ);
$('.jh_list_items').html(html);



$(window).scroll(function(){
	if($(this).scrollTop()>300){
		/*alert(1);*/
		$('.go_up').css({opacity:1});
		
	}
})
$('.go_up').click(function(){
	$(window).scrollTop(0);
})
