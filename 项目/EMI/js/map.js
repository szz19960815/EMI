$(function(){
	
	document.addEventListener("plusready",onPlusReady,false);
		function onPlusReady(){
			plus.geolocation.getCurrentPosition(function(p){
				
				//获取定位
				var jing = p.coords.longitude,
					wei = p.coords.latitude;
					
				//将定位输入高德地图
				var map = new AMap.Map('container', {
			        resizeEnable: true,
			        zoom:20,
			        center: [jing, wei]
			 });
			 	//标注
			 	marker = new AMap.Marker({
					position: [p.coords.longitude, p.coords.latitude],
					map: map
				});
				//搜索功能
				
				AMap.service('AMap.PlaceSearch',function(){//回调函数
				    //实例化PlaceSearch
				    var placeSearch= new AMap.PlaceSearch({
				    	pageSize: 5,
					    pageIndex: 1,
					    city: "成都市", //城市
					    map: map
//					    type:"餐饮服务"
				    });
				    //TODO: 使用placeSearch对象调用关键字搜索的功能；
				    $("#search").on("touchend",function(){
				    	var _search = $("input").val();
				    	placeSearch.searchNearBy(_search,[jing,wei],500,function(status, result) {
				    		if (status == "complete"){
				    			$("#go").css("display","block")
				    		}else{
				    			$("#more").css("display","block")
				    			$(".aaa").css("display","block")
				    		}
				    	});
				    })  
				    $("#more").on("touchend",function(){
				    	var _search = $("input").val();
				    	placeSearch.search(_search,function(status, result) {
				    		$(".aaa").css("display","none")
				    		$("#more").css("display","none")
				    		$("#go").css("display","block")
				    	});
				    })
				})
				//路线
				AMap.service('AMap.Driving',function(){//回调函数
				    //实例化Driving
				    var driving= new AMap.Driving({
				    		map : map
				    	});
				    //TODO: 使用driving对象调用驾车路径规划相关的功能
				    $("#go").on("touchend",function(){
				    	var _search = $("input").val();
				    	driving.search([[jing,wei],{keyword:_search}], function(status, result){
						    //TODO 解析返回结果，自己生成操作界面和地图展示界面
						    $("#go").css("display","none")
						}); 
					})    
				     
				})
			})
		}
		$(".map").on("touchend","span",function(){
			history.back(-1)
		})
		$("input").on("focus",function(){
			$(".aaa").css("display","none")
		})
})