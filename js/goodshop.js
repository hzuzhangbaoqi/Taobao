$(function(){
	var jxuan=[
{"img_path":"images/goodshop/list1.webp","title":"日本canmake防晒隔离霜","summany":"Mermaid 美人鱼防晒啫喱底霜，SPF50防晒指数、富含丰富美容液，防晒的同时还能护肤，啫喱状的质地，涂上肌肤后会溶成水状。非常好推，触感非常轻薄，不厚重，水润清爽、一支就能充当乳液、美容液，防晒霜、也可以做妆前打底，控油保湿，容易上妆。","num":"236"},
{"img_path":"images/goodshop/list2.webp","title":"Givenchy 撞色图案圆领T恤","summany":"前幅充满创意的撞色图案在白色衣身映衬下更为亮眼，简约又美观。","num":"120"},
{"img_path":"images/goodshop/list3.webp","title":"俏CIAO 印花灯笼袖上衣","summany":"宽松的灯笼袖设计非常浪漫，呈现出甜美无比的感觉。","num":"147"},
{"img_path":"images/goodshop/list4.webp","title":"Garmin自行车智能显示器","summany":"通过蓝牙与手机APP智能连接，快速感应到手机上短信和电话通知","num":"68"},
{"img_path":"images/goodshop/list5.webp","title":"Monton短袖骑行服","summany":"后侧具有三个立体口袋的设计，可以放置补给物品，方便补充能量。","num":"2254"},
{"img_path":"images/goodshop/list6.webp","title":"手工雕刻花纹青瓷盖碗","summany":"手工出模，手工雕刻而成，青釉光滑细腻，白中泛绿，极为素雅。","num":"1129"},
{"img_path":"images/goodshop/list7.webp","title":"顿巴纵队户外防晒遮阳帽","summany":"结合流行的迷彩元素，佩戴彰显你与众不同的个性。","num":"952"},
{"img_path":"images/goodshop/list8.webp","title":"台湾妈妈喂孕妇连衣裙","summany":"端庄深灰色调，后背蕾丝拼接，小露一把性感的妩媚风情","num":"150"},
{"img_path":"images/goodshop/list9.webp","title":"奥尔高 鱼嘴凉鞋","summany":"鱼嘴设计时尚前卫，高跟尽显婉约气质，亮片嵌入其间，光彩照人。","num":"67"},
{"img_path":"images/goodshop/list10.webp","title":"CANIDAE 犬主粮","summany":"爱宠一族都很熟悉的CANIDAE卡比是来自美国的经典品牌，主要是做各类宠物食品为主。 发现家里的金毛最近不爱吃饭了，就给它换了这款狗粮吃的可欢腾了，里面有多种天然新鲜肉类组合多元化配方，虽然是高蛋白但是属于低脂肪的非常容易消化，每个品种的狗狗肠胃完全能Hold住，我觉得我家的金毛不仅食欲变好了，整个毛色有变的有光泽了好像还长个了。","num":"36"},

]

		var dataJ ={JC:jxuan};
		var html=template("jingxuan",dataJ);
		$('.list_content ul').html(html);
})
