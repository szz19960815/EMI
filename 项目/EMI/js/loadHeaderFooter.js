define(["jquery"],function(){
	$("header").load("html/header.html",function() {
	})
	$("footer").load("html/footer.html",function() {
		$(function(){
//			mui.init();
//			document.addEventListener("plusready",onPlusReady,false);
//			var user;
//			function onPlusReady(){
//				user = plus.storage.getItem("user");
//			}
			$("footer").find("li").eq(1).on("touchstart",function(){
				location = "html/destination.html"
			})
			$("footer").find("li").eq(2).on("touchstart",function(){
				if (user != null){
					location = "html/myself.html"
				}else{
					location = "html/register.html"
				}
				
			})
		})
	})
	
})