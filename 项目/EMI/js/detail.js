require(["../js/config.js"],function(){
	require(["zepto","loadFooter","iscroll"],function(){
		var myscroll,count=0;
		$(function(){
			var _id = getID("_ID");
			getData(_id);
			_scroll(".bot",true,false);
//			_scroll(".box",false,true);
			getBanner(".banner1",0);
			getBanner(".banner2",1);
			getBanner(".banner3",2);
			getBanner(".banner4",3);
			getBanner(".banner5",4);
			datas("._s1",1);
			datas("._s2",1);
			datas("._s3",1);
			datas("._s4",1);
			datas("._s5",1);
			datas("._s6",1);
			_scroll(".w1",true,false);
			_scroll(".w2",true,false);
			_scroll(".w3",true,false);
			_scroll(".w4",true,false);
			_scroll(".w5",true,false);
			_scroll(".w6",true,false);
			click();
			
			var mscroll = new IScroll(".box",{
				mouseWheel : true,
				tap : true,
				
			})
			$(".box").on("touchmove",function(){
				var op = -mscroll.y/150;
				if (op >= 1){
					op=1;
					$(".top").css({
						color : "dodgerblue"
					})
					$(".top .m").css({"border":"0","background":"#cecccc","color":"#757474"})
				}else{
					$(".top").css({
						color : "white"
					})
					$(".top .m").css({"border":"1px solid white","background":"none","color":"white"})
				}
				$(".top").css({
					background : "rgba(255,255,255,"+op+")"
				})
			})
		})
		function getID(_ID){
			var req = new RegExp("(^|&)"+_ID+"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(req);
			if (r != null){
				return decodeURI(r[2])
			}
			return null;
		}
		function getData(_id){
			$.ajax({
				type : "get",
				url : "../mock/destination.json",
				dataType : "json",
				success : function(redata){
					var data = redata.data
					$(".D-header").css("background","url(../"+ data[_id].imgSrc +") no-repeat")
					var p1 = $("<p style='font-weight:400'>"+data[_id].title+"</p>"),
						p2 = $("<p>"+data[_id].pinyin+"</p>"),
						p3 = $("<p>晴 9℃</p>"),
						p4 = $("<p id='know'>全面了解"+data[_id].title+"</p>");
					$(".D-header .mid").append(p1).append(p2).append(p3).append(p4)
					$("#know").on("touchend",function(){
						window.location.href = "http://m.bdtrip.com.cn/bd_cms_mobile/bd_mobile_jquery/views/details/cityDetail.html?cityId=53&origin=1&s=8ffc6d9f&p=3"
					})
				}
			});
		}
		function _scroll(biao,_x,_y){
			myscroll = new IScroll(biao,{
				mouseWheel : true,
				tap : true,
				scrollX : _x,
				scrollY : _y
			})
		}
		function getBanner(_div,i){
			$.ajax({
				type : "get",
				url : "../mock/destination.json",
				dataType : "json",
				success : function(redata){
					var data1 = redata.banner;
					var p1 = $("<p>"+data1[i].title+"</p>"),
						_img = $("<img src='../"+data1[i].banner+"'/>"),
						p2 = $("<p>了解更多</p>");
					$(_div).append(p1).append(p2).append(_img)
				}
			});
		}
		function datas(_div,id){
			$.ajax({
				type : "get",
				url : "../mock/culling.json",
				dataType : "json",
				success : function(redata){
					var data1 = redata[id].data;
					data1 = data1.slice(0,5)
					$.each(data1, function(index,value){
						var dl = $("<dl></dl>"),
						dt = $("<dt><img src='../"+value.show_img+"'/></dt>"),
						dd = $("<dd>"+value.cue+"</dd>");
						$(dl).append(dt).append(dd)
						$(_div).append(dl)
					});
				}
			});
		}
		function click(){
			$(".main2").on("touchend","i",function(){
				location = "map.html"
			});
			$(".top span:last-child").on("touchend","i",function(){
				location = "map.html"
			});
			$(".top span:first-child").on("touchend",function(){
				location = "destination.html";
			});
			$(".main1").on("touchend","span",function(){
				if (count%2 == 0){
					$.ajax({
						type : "get",
						url : "../mock/destination.json",
						dataType : "json",
						success : function(redata){
							var data1 = redata.banner;
							for (var i in data1){
								var p1 = $("<p>"+data1[i].title+"</p>");
								$(".main1").append(p1)	
							}
							
						}
					});	
				}else{
					$(".main1").html("<p>2017撸虾季，成都最全小龙虾地图热辣出炉！</p><p>除了小酒馆，成都还有这些音乐圣地</p><span>展开</span>")
				}
				count++;
			})
			
		}
	})
})