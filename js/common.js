var taobao_banner = {};
taobao_banner.addTransiton=function(obj){
	obj.style.transition ="all 0.5s";
	obj.style.webKitTransition = "all 0.5s";
	
};
taobao_banner.removeTransiton =function(obj){
	obj.style.transition ="";
	obj.style.webKitTransition="";
};
taobao_banner.setTransform =function(obj,distance,direction){
	if(direction){
		imgUl.style.transform = "translate"+direction+"("+distance+"px)";
		imgUl.style.webkitTransform = "translate"+direction+"("+distance+"px)";
	}
	else{
		imgUl.style.transform = "translateX("+distance+"px)";
		imgUl.style.webkitTransform ="translateX("+distance+"px)";
	}
}

taobao_banner.addTransitionEnd = function(obj,callback){
	obj.addEventListener('transitionEnd',callback);
	obj.addEventListener('webkitTransitionEnd',callback);
}
