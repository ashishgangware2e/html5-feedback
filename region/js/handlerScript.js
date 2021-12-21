// JavaScript Document
var is_ie8 = (navigator.userAgent.indexOf('MSIE 8') >= 0) ? 1 : 0;
var is_ie7 = (navigator.userAgent.indexOf('MSIE 7') >= 0) ? 1 : 0;
var is_ie6 = (navigator.userAgent.indexOf('MSIE 6') >= 0) ? 1 : 0;

$(document).ready(function(){
	
	$(".IremapContainer").append('<span class="tipForIre" id="tipForIre"></span><div class="noneoftheseForIre" id="nonofIre" onClick="noneBtnForIre();" data-info="'+noneoftheseForIre+'">'+noneofTextForIre+'</div>');
	
	if(is_ie8 || is_ie7 || is_ie6){
		$(".IremapContainer").html("<div class='msgblock'><h2 class='msg'>Your Browser does not support. Please upgrade your browser..</h2></div>");
		$("#nonofIre").css("display", "none");
	}
	else{
	}

	if (btnNoneofDisplay=="show"){
		$("#nonofIre").css("display","block");
	}
	else{
		$("#nonofIre").css("display","none");
	}
	
	
	addEvent("irmap1");
	addEvent("irmap2");
	addEvent("irmap3");
	addEvent("irmap4")
	addEvent("irmap5");
	addEvent("irmap6");
	addEvent("irmap7");
	addEvent("irmap8");
	addEvent("irmap9");
	addEvent("irmap10");
	addEvent("irmap11");
	addEvent("irmap12");
	addEvent("irmap13");
	addEvent("irmap14");
	addEvent("irmap15");
	addEvent("irmap16");
	addEvent("irmap17");
	addEvent("irmap18");
	addEvent("irmap19");
	addEvent("irmap20");
	addEvent("irmap21");
	addEvent("irmap22");
	addEvent("irmap23");
	addEvent("irmap24");
	addEvent("irmap25");
	addEvent("irmap26");
	
	
	$(".tipForIre").css({"box-shadow":"1px 2px 4px "+map_config["default"]["namesShadowColor"],"-moz-box-shadow":"2px 3px 6px "+map_config["default"]["namesShadowColor"],"-webkit-box-shadow":"2px 3px 6px "+map_config["default"]["namesShadowColor"]});
	
	if($("#shadow").find("path").eq(0).attr("fill")!="undefined")
	{
		var a=map_config["default"]["shadowOpacity"];var a=parseInt(a);
		if(a>=100){a=1}
		else{
			if(a<=0){a=0}
			else{a=a/100}}$("#shadow").find("path").attr({fill:map_config["default"]["shadowcolor"]}).css({"fill-opacity":a})}});
			
			function addEvent(e,a){
				var c=$("#"+e);
				var d=$("#"+e+",#"+map_config[e]["namesId"]);var b=$("#map").height();
				c.attr({fill:map_config[e]["upcolor"],stroke:map_config["default"]["bordercolor"]});
				d.attr({cursor:"default"});
				if(map_config[e]["enable"]==true){d.attr({cursor:"pointer"});
				d.hover(function(){$("#tipForIre").show().html(map_config[e]["name"]);
				c.css({fill:map_config[e]["overcolor"]})},function(){$("#tipForIre").hide();
				$("#"+e).css({fill:map_config[e]["upcolor"]})});
				//d.mousedown(function(){$("#"+e).css({fill:map_config[e]["downcolor"]})});
				d.mouseup(function(){$("#"+e).css({fill:map_config[e]["overcolor"]});
				$("#"+e).css({fill:map_config[e]["downcolor"]})
				//alert($("#"+e).removeAttr("style"));
				if(map_config[e]["target"]=="_blank"){}else{}});
				//if(map_config[e]["target"]=="_blank"){window.open(map_config[e]["url"])}else{window.location.href=map_config[e]["url"]}});
				d.mousemove(function(i){
					var g=i.pageX-40,j=i.pageY+(-40);
					var h=$("#tipForIre").outerWidth(),f=$("#tipForIre").outerHeight(),g=(g+h>$(document).scrollLeft()+$(window).width())?g-h-(20*2):g;
					j=(j+f>$(document).scrollTop()+$(window).height())?$(document).scrollTop()+$(window).height()-f-10:j;$("#tipForIre").css({left:g,top:j})})}
		};
				
		var map_config={"default":{shadowcolor:"#000000",shadowOpacity:"50",namesShadowColor:"#666666"},
						irmap1:{namesId:"Donegal",name:"Donegal",url:"#",downcolor:"#0b70d0",enable:true},
						irmap2:{namesId:"Leitrim",name:"Leitrim",url:"#",downcolor:"#0b70d0",enable:true},
						irmap3:{namesId:"Sligo",name:"Sligo",url:"#",downcolor:"#0b70d0",enable:true},
						irmap4:{namesId:"Cavan",name:"Cavan",url:"#",downcolor:"#0b70d0",enable:true},
						irmap5:{namesId:"Monaghan",name:"Monaghan",url:"#",downcolor:"#0b70d0",enable:true},
						irmap6:{namesId:"Louth",name:"Louth",url:"#",downcolor:"#0b70d0",enable:true},
						irmap7:{namesId:"Mayo",name:"Mayo",url:"#",downcolor:"#0b70d0",enable:true},
						irmap8:{namesId:"Galway",name:"Galway",url:"#",downcolor:"#0b70d0",enable:true},
						irmap9:{namesId:"Roscommon",name:"Roscommon",url:"#",downcolor:"#0b70d0",enable:true},
						irmap10:{namesId:"Longford",name:"Longford",url:"#",downcolor:"#0b70d0",enable:true},
						irmap11:{namesId:"Westmeath",name:"Westmeath",url:"#",downcolor:"#0b70d0",enable:true},
						irmap12:{namesId:"Offaly",name:"Offaly",url:"#",downcolor:"#0b70d0",enable:true},
						irmap13:{namesId:"Laois",name:"Laois",url:"#",downcolor:"#0b70d0",enable:true},
						irmap14:{namesId:"Dublin",name:"Dublin",url:"#",downcolor:"#0b70d0",enable:true},
						irmap15:{namesId:"Meath",name:"Meath",url:"#",downcolor:"#0b70d0",enable:true},
						irmap16:{namesId:"Kildare",name:"Kildare",url:"#",downcolor:"#0b70d0",enable:true},
						irmap17:{namesId:"Wicklow",name:"Wicklow",url:"#",downcolor:"#0b70d0",enable:true},
						irmap18:{namesId:"Clare",name:"Clare",url:"#",downcolor:"#0b70d0",enable:true},
						irmap19:{namesId:"Limerick",name:"Limerick",url:"#",downcolor:"#0b70d0",enable:true},
						irmap20:{namesId:"Tipperary",name:"Tipperary",url:"#",downcolor:"#0b70d0",enable:true},
						irmap21:{namesId:"Garlow",name:"Garlow",url:"#",downcolor:"#0b70d0",enable:true},
						irmap22:{namesId:"Kilkenny",name:"Kilkenny",url:"#",downcolor:"#0b70d0",enable:true},
						irmap23:{namesId:"Wexford",name:"Wexford",url:"#",downcolor:"#0b70d0",enable:true},
						irmap24:{namesId:"Waterford",name:"Waterford",url:"#",downcolor:"#0b70d0",enable:true},
						irmap25:{namesId:"Kerry",name:"Kerry",url:"#",downcolor:"#0b70d0",enable:true},
						irmap26:{namesId:"Cork",name:"Cork",url:"#irmap26",downcolor:"#0b70d0",enable:true},
		};

	// $(".noneoftheseForIre").on("click", function() {
	// 	OutputValuesForIre($(this).attr("data-info"));	
	// 	$("path").removeAttr("style");
	// 	$(".noneoftheseForIre").removeAttr("style");
	// 	$(this).css("fill","#0b70d0");
	// });
var valueArr=[];
	$("#regionIre path").on("click", function() {
		$(".noneoftheseForIre").removeAttr("style");
		var valueStr=$(this).attr("data-info");
		valueArr.push(valueStr);
		valueStr = valueArr.join(",");
		OutputValuesForIre(valueStr);
		
		//OutputValues($(this).attr("id").split("c")[1]);
	});
	function noneBtnForIre(){
		$("path").removeAttr("style");
		$(this).css({"background":"#0b70d0"});
		// $("#getMapValForIre").val($(this).attr("data-info"));
		OutputValuesForIre(noneoftheseForIre);
	}

					
					
					
					
					