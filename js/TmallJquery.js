$(function(){
	/*$(window).on(scroll,function(){
		var Height=$(window).scrollTop();
		console.log(Height);
	})*/
	$(window).scroll(function(){
		var Height=$(window).scrollTop();
		if(Height>0){
			$('#header').css({"position":"fixed","zIndex":"99999","top":0,"left":0});
			var headerHight = $('#header').height();
			/*console.log(headerHight);*/
			$('nav#Tmall_nav').css({"paddingTop":headerHight+"px"});
		
		}else{
			$('#header').css({"position":"","zIndex":"","top":0,"left":0});
			$('nav#Tmall_nav').css({"paddingTop":headerHight+"px"});
			$('nav#Tmall_nav').css({"paddingTop":""});
		}
		
	})
})
