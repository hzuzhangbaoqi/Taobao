
swipe(".box_wrapper");

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
	/*light();*/
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


	