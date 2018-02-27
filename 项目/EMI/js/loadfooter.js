define(["jquery"],function(){
	$("footer").load("../html/footer.html",function() {
		$(function(){
			mui.init();
			document.addEventListener("plusready",onPlusReady,false);
			var user;
			function onPlusReady(){
				user = plus.storage.getItem("user");
			}
			$("footer ul").find("li").eq(0).on("touchstart",function(){
				location = "../index.html"
			})
			$("footer").find("li").eq(1).on("touchstart",function(){
				location = "html/destination.html"
			})
			$("footer").find("li").eq(2).on("touchstart",function(){
				if (user != null){
					location = "myself.html"
				}else{
					location = "register.html"
				}
				
			})
		})
		
	})
	
})