$(function(){
	$('.jh_drop_png').click(function(){
		$(".jh_meau").css("-webkit-transform","translate(0, 0%)");
	})
	
	$('.jh_close').click(function(){
		$(".jh_meau").css("-webkit-transform","translate(0, -100%)");
	})
	
	
	
})


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