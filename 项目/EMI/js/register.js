require(["js/config2.js"],function(){
	require(["zepto","loadFooter","iscroll"],function(){
		$(function(){
			mui.init();
			document.addEventListener("plusready",onPlusReady,false);
			var username,password;
			click();
			
		})
		function onPlusReady(){
			$("button").on("touchend",function(){
				username = $("#username").val(),
				password = $("#password").val();
				_register(username,password)
			})
		}
		//点击事件
		function click(){
			$("#back").on("touchend",function(){
				location = "../index.html"
			})	
			$(".main").on("touchend","span:nth-of-type(2)",function(){
				location = "login.html"
			})
			$("input").on("focus",function(){
				$(".main>p").css("display","none")
			})
		}
		//验证登录
		function _register(username,password){
			$.ajax({
				type:"post",
				url:"http://stuapi.ysd3g.com/api/login",
				async:true,
				dataType:"json",
				data:{un:username,pwd:password,token:"aa4ccde8-3b85-476d-b68b-7f78f72e74d1"},
				success:function(data){
					if(data.success==true){
						plus.storage.setItem("user",username);
						location = "myself.html"
					}else{
						$(".main>p").css("display","block")
					}
		//			if(data.charAt(0)=="{"){
		//				alert("登录成功")
		//				if(check){
		//					var data = new Object;
		//					data.userID = user.username;
		//					data.password = user.password;
		//					var str = JSON.stringify(data);
		//					localStorage.setItem("token",str)
		//				}
		//			}else{
		//				alert("亲 你的浏览器出现异常了 3031")
		//			}
				}
			});

		}
	})
})