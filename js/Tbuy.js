$(document).ready(function(){
		$(window).on("resize",function(){
			initProduct();			
		}).trigger("resize");
		
		
		
		
		
		function initProduct(){
			var $parent = $('nav#Tbuy_nav .nav_left');
			var $ul = $parent.find('ul');
			var $lis = $ul.find('li');
			var sum = 0;
			$lis.each(function(index,item){
				sum+=$(item).innerWidth();
			})
				$ul.width(sum);
		}
		
		
		
		
})
