require(["../config.js"],function(){
	require(["zepto","loadHeaderFooter","iscroll"],function(){
		var myscroll;
		$(function(){
			beijing();
			_scroll();
			_click();
			loadRefash()
		})
		//加载背景
		function beijing(){
			$.ajax({
				type : "get",
				url : "../mock/destination.json",
				dataType : "json",
				success : function(redata){
					var data = redata.data;
					$.each(data,function(i,d){
						var html = $("<div></div>"),
							Img = $("<img src='../"+d.imgSrc+"'/>"),
							p1 = $("<p style='font-weight:600'>"+d.title+"</p>"),
							p2 = $("<p>"+d.pinyin+"</p>"),
							inp = $("<input type='hidden' value='"+ i +"'/>");
						html.append(Img);
						html.append(p1);
						html.append(p2);
						html.append(inp);
						$("#D-body .box").eq(0).append(html);
						myscroll.refresh();
					});
					
				}
			})
		}
		//设置滚动
		function _scroll(){
			myscroll = new IScroll(".main",{
				mouseWheel : true,
				tap : true	
			})
		}
		//点击事件
		function _click(){
			$("#D-body .box").on("touchend","span",function(){
				location = "map.html"
			});
			$("#D-body .box").on("tap","div",function(){
				var _path = $(this).find("input").val();
				location = "detail.html?_ID="+_path;
			})
		}
		//加载刷新
		function loadRefash(){
			$(".main").on("touchend",".box",function(){
				if (myscroll.y > 50){
					$("#D-body .box").eq(0).html("")
					beijing()
				}
				if (myscroll.y < myscroll.maxScrollY - 50){
					beijing()
				}
			})
		}
	})
})
