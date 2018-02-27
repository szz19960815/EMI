require(["js/config"], function() {
	//当首页加载时加载头尾和和container
	require(["jquery", "zepto", "loadHeaderFooter"], function() {});
	require(["jquery","zepto","load_indexContainer"],function(){
	});
	//定义轮播图
	require(["jquery", "zepto", "swiper"], function() {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,
			pagination: '.swiper-pagination',
			loop: true
		});
	});
	//定义导航栏的横向滑动以及点击
	require(["jquery", "zepto", "iscroll"], function() {
		var muIScroll = new IScroll('.nav', {
			scrollbars: false,
			scrollX: true,
			scrollY: false,
			click: true
		})
	});
	require(["jquery", "zepto"], function() {
		//设置进入应用后的导航栏属性
		var _currentColor = $(".page_current span i").css("color");
		$(".page_current").css("color", _currentColor);
		$(".page_current").css("border-bottom-width", "0.2rem");
		$(".page_current").css("border-bottom-color", _currentColor);
		$(".page_current").css("border-bottom-style", "solid")
		//当点击导航时切换导航栏样式
		$(".pages").on("click", function() {
			var _color = $(this).children().children().css("color");
			var tar = $(this).parent().parent().children().children();
			tar.css("color", "#404040");
			tar.css("border", "none")
			//			tar.css("border-bottom","4px solid rgb(255,255,255)");
			$(this).css("color", _color);
			$(this).css("border-bottom-width", "0.2rem");
			$(this).css("border-bottom-color", _color);
			$(this).css("border-bottom-style", "solid");
			//			console.log($(this).parent().css("border-bottom"))
		});
		//当点击精选时先清空内容再加载应有的内容
		$(".page_one").on("click", function() {
			$(".C_title h3").html("2018年中国旅游创新目的地评选");
			$.ajax({
				type: "get",
				url: "html/index_container_culling.html",
				async: true,
				success: function(data) {
					$(".I_container").html(data);
				}
			});
		});
		//当点击百代榜单时先清空内容再加载应有的内容
		$(".page_two").on("click", function() {
			$(".C_title h3").html("永不落幕的博览会");
			$.ajax({
				type: "get",
				url: "html/index_container_list.html",
				async: true,
				success: function(data) {
					$(".I_container").html(data);
				}
			});
		});
		//当点击精选时先清空内容再加载应有的内容
		$(".page_three").on("click", function() {
			$(".C_title h3").html("经典人文路线推荐");
			$.ajax({
				type: "get",
				url: "html/index_container_travel.html",
				async: true,
				success: function(data) {
					$(".I_container").html(data);
				}
			});
		});
		//当点击精选时先清空内容再加载应有的内容
		$(".page_four").on("click", function() {
			$(".C_title h3").html("足不出户，上直播看遍世界艺术");
			$.ajax({
				type: "get",
				url: "html/index_container_country.html",
				async: true,
				success: function(data) {
					$(".I_container").html(data);
				}
			});
			
		});
		//当点击精选时先清空内容再加载应有的内容
		$(".page_five").on("click", function() {
			$(".C_title h3").html("世界「观」不同");
			$.ajax({
				type: "get",
				url: "html/index_container_city.html",
				async: true,
				success: function(data) {
					$(".I_container").html(data);
				}
			});
			
		});
	});
	
	//定义当首页滑动到一定高度时导航栏固定
//	require(["jquery","zepto"],function(){
//		document.addEventListener('scroll',function(){
//			console.log(1);
//			var scroll = document.body.scrollTop;
//			if(scroll > 10){
//				console.log(scroll);
//			}
//		})
//	})
});

//定义当首页滑动到一定高度时导航栏固定
(function(){
//	setInterval(function(){
//		console.log()
//	},2000)
	$("main").scroll(function(){
		var scrollTop = $("main").scrollTop();
		if(scrollTop > 240){
			
//			$("main .nav").animate({
//				"position": "fixed",
//				"top": "2.54rem",
//				"left": "0rem",
//				"z-index": "99"
//			},1000)
//			setTimeout(function(){
				$("main .nav").addClass("fixedNav");
//			},1000/60);
		}else{
//			setTimeout(function(){
				$("main .nav").removeClass("fixedNav");
//				$("main .nav").css({
//					"position": "relative",
//					"top": "0rem",
//					"left": "0rem",
//					"z-index": "99"
//				})
//			},1000/60);
		}
	})
}())



