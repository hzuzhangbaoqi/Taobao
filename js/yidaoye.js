var box=document.querySelector('.banner');
var imgUl=box.children[0];
var imgLis=imgUl.children;
var width=box.offsetWidth;
var num = 0;
/*自动轮播*/

/*clearInterval(box.timer);
box.timer=setInterval(function(){
	num++;
	taobao_banner.addTransiton(imgUl);
	taobao_banner.setTransform(imgUl,-width*num);
},2000);

taobao_banner.addTransitionEnd(imgUl,function(){
		if(num==imgLis.length-1){
			clearInterval(box.timer);		
		}
});*/


var startX = 0;
var moveX = 0;
var isMove = false;
var distance =0;
var flag=false;
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
		/*if(num==0){
			taobao_banner.addTransiton(imgUl);
			taobao_banner.setTransform(imgUl,0);
		}*/
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
	
	if(num==imgLis.length-1){
		window.location.href="http://www.baidu.com"
	}

})




