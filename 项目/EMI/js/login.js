require(["js/config2.js"],function(){
	require(["zepto","loadFooter","iscroll"],function(){
		$(function(){
			click();
			$("input").on("focus",function(){
				$(".main>i").css("display","none")
			})
		})
		//点击事件
		function click(){
//			$("#back").on("touchstart",function(){
//				
//			})	
			$("button").on("touchend",function(){
				var username = $("#username").val(),
					password = $("#password").val();
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if (reg.test(username) != true){
					$(".main>i").html("请输入正确格式").css("display","block")
				}else{
					registerData(username,password)
				}
				
			})
		}
		function registerData(username,password){
			$.ajax({
				type:"post",
				url:"http://stuapi.ysd3g.com/api/CreateUser",
				data:{loginName:username,pwd:password,token:"aa4ccde8-3b85-476d-b68b-7f78f72e74d1"},
				async:true,
				dataType:"json",
				success:function(data){
					if (data.success == true){
						location = "register.html"
					}else{
						$(".main>i").html("该用户已存在，请重新输入").css("display","block")
					}
				}
			});
		}
	})
})