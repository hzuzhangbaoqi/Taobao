$(function(){
	var headerHight = $('#header').height();
	$('.box_wrapper').css({"paddingTop":(headerHight+10)+"px"});
	
	

	
	
	var TmallJson=[
{"small_img_path":"images/Tmall/list1small.webp.jpg","big_img_path":"images/Tmall/Tlist1.webp","title":"SUPOR/苏泊尔 DG40YC806-26电炖锅炖盅煮粥煲汤紫砂锅陶瓷全自动","price":"￥199","remark_type":"[2443人认为]","remark_text":"#很实用 #规格合适 #款式好看"},
{"small_img_path":"0","big_img_path":"images/Tmall/Tlist2.webp","title":"【新品上市】雅诗兰黛眼霜 小棕瓶密集修护眼精华 保湿淡化细纹","rightone":"官方直售","righttwo":"过敏无忧","price":"￥590","remark_type":"[用户评价]","remark_text":"#味道好闻 #保湿滋润 #吸收效果不错"},
{"small_img_path":"images/Tmall/list1small.webp.jpg","big_img_path":"images/Tmall/Tlist3.webp","title":"威露士有氧洗除菌洗衣液超值加量套装","price":"￥119","remark_type":"[用户评价]","remark_text":"#气味不错 #去污强劲 #外观不错"},
{"small_img_path":"0","big_img_path":"images/Tmall/Tlist4.webp","title":"进口冰鲜三文鱼刺身中段 三文鱼刺身新鲜三文鱼生鱼片送芥末酱油","rightone":"坏单包退","price":"￥79.99","remark_type":"[53人认为]","remark_text":"我是刷单的，老公很喜欢"},
{"small_img_path":"images/Tmall/list1small.webp.jpg","big_img_path":"images/Tmall/Tlist5.webp","title":"Haier/海尔 BC/BD-102HT/家用小冰柜 冷柜/大冷冻/冷藏冷冻省电","price":"￥899","remark_type":"[海尔小冷冻柜，满足小...]","remark_text":"推荐该商品，点击查看"},
{"small_img_path":"0","big_img_path":"images/Tmall/Tlist6.webp","title":"香港发货 瑞士天梭手表力洛克男表T006.407.16.033.00皮带机械表","rightone":"天猫国际","righttwo":"热销中","price":"￥2930","remark_type":"[538人认为]","remark_text":"手表戴起来很舒服"},
{"small_img_path":"images/Tmall/list1small.webp.jpg","big_img_path":"images/Tmall/Tlist7.webp","title":"苏泊尔电锅韩式多功能家用电火锅电热锅电炒锅电煮锅不粘锅火锅锅","rightone":"只换不修","price":"￥169","remark_type":"[租房党必备，厨房便携...]","remark_text":"推荐该商品，点击查看"},
{"small_img_path":"images/Tmall/list1small.webp.jpg","big_img_path":"images/Tmall/Tlist8.webp","title":"波奇网法国皇家猫粮K36怀孕哺乳期母猫粮2kg猫咪幼猫粮全国包邮","price":"￥123","remark_type":"[用户评价]","remark_text":"#猫咪很喜欢 #没有异味 #满意猫粮"},

]
	
		var dataTmall ={Tmall:TmallJson};
		var html=template("Tmall_shopItems",dataTmall);
		$('.container-multiColumn-line').html(html);
	
})


$('.cls_x').click(function(){
	$('.mask').slideUp(1000);
	$('.mask img').hide(1000);
	$('.mask_wrap').slideUp(1000);
})
