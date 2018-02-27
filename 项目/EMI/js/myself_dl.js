require(["../js/config2.js"],function(){
	require(["zepto","loadFooter","iscroll"],function(){
		$(function(){
			mui.init()
			var user;
			document.addEventListener("plusready",onPlusReady,false);
			_click();
		})
		function onPlusReady(){
			user =plus.storage.getItem("user");
			$(".S_main li").eq(1).children("span").html(user);
			_click();
		}
		function _click(){
			$(".S_main button").on("touchend",function(){
				plus.storage.clear("user");
				location = "../index.html"
			})	
			$(".S_head img").on("touchstart",function(){
				history.back(-1);
			})
			$(".S_main li").on("touchend",function(){
				$(".S_main p").animate({"opacity":1},200,function(){
					setTimeout(function(){
						$(".S_main p").animate({"opacity":0},500)
					},1000)
					
				})
			})
			
		}
	})
})