require(["js/config2.js"],function(){
	require(["zepto","loadFooter","iscroll"],function(){
		$(function(){
			mui.init()
			document.addEventListener("plusready",onPlusReady,false);	
			_click();
		})
		function onPlusReady(){
				var user =plus.storage.getItem("user");	
		}
		//点击事件
		function _click(){
			$(".myself").on("touchend","dl:last-child",function(){
				location = "set.html"
			})
		}
		
	})
})