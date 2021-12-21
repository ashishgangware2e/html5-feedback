$(document).ready(function(){
	
	$("#htmlComp").append('<span class="tipForUK" id="tipForUK">SCOTLAND</span><div id="nonofUK" onClick="noneBtnForUk();" class="noneoftheseForUK" data-info="'+noneoftheseForUk+'">'+noneofTextForUk+'</div>');
	
	
	
var is_ie8 = (navigator.userAgent.indexOf('MSIE 8') >= 0) ? 1 : 0;
var is_ie7 = (navigator.userAgent.indexOf('MSIE 7') >= 0) ? 1 : 0;

if(is_ie8 || is_ie7){
	$("#htmlComp").html("<h2 class='msg'>Your Browser does not support. Please upgrade your browser..</h2>");
	//$("#htmlComp").css("display","none");
	}
	else{
	//$("#flashComp").css("display","none");
	//$("#htmlComp").css("display","block");
	}
	
$(function(){

if (btnNoneofDisplay=="show"){
		$("#nonofUK").css("display","block");
}
else{
$("#nonofUK").css("display","none");
}

	addEvent("sc1");
	addEvent("sc2");
	addEvent("sc3");
	addEvent("sc4")
	addEvent("sc5");
	addEvent("sc6");
	addEvent("sc7");
	addEvent("sc8");
	addEvent("sc9");
	addEvent("sc10");
	addEvent("sc11");
});

$(function(){
	$(".tipForUK").css({"box-shadow":"1px 2px 4px "+map_config["default"]["namesShadowColor"],"-moz-box-shadow":"2px 3px 6px "+map_config["default"]["namesShadowColor"],"-webkit-box-shadow":"2px 3px 6px "+map_config["default"]["namesShadowColor"]});
	////console.log("reset>> "+$("#shadow").find("path").eq(0).attr("fill"));
	if($("#shadow").find("path").eq(0).attr("fill")!="undefined")
	{
		var a=map_config["default"]["shadowOpacity"];
		var a=parseInt(a);
		if(a>=100)
		{a=1}
		else
		{
		if(a<=0)
		{a=0}
		else
		{a=a/100}
		}
		$("#shadow").find("path").attr({fill:map_config["default"]["shadowcolor"]}).css({"fill-opacity":a});
	}
});

			function addEvent(e){
				var c=$("#"+e);
				var d=$("#"+e+",#"+map_config[e]["namesId"]);
				var b=$("#map").height();
				
				c.attr({fill:map_config[e]["upcolor"],stroke:map_config["default"]["bordercolor"]});
				d.attr({cursor:"default"});
				
				if(map_config[e]["enable"]==true){
					d.attr({cursor:"pointer"});
				
				d.hover(function(){
					
						$("#tipForUK").show().html(map_config[e]["name"]);
						c.css({fill:map_config[e]["overcolor"]})},function(){//console.log(d," <Aa ",c);
							$("#tipForUK").hide();
							$("#"+e).css({fill:map_config[e]["upcolor"]})
							}
					);
				d.mousedown(function(){
									removeEvent();
									$("#"+e).css({fill:map_config[e]["downcolor"]});
									
									});
				d.mouseup(function(){
									$("#"+e).css({fill:map_config[e]["overcolor"]});
									if(map_config[e]["target"]=="_blank"){
										//window.open(map_config[e]["url"])
									}		
									else
									{
										//window.location.href=map_config[e]["url"]
									}
								});
				
				d.mousemove(function(i){
					var g=i.pageX-20,j=i.pageY+(-38);
					var h=$("#tipForUK").outerWidth(),f=$("#tipForUK").outerHeight(),g=(g+h>$(document).scrollLeft()+$(window).width())?g-h-(20*2):g;
					j=(j+f>$(document).scrollTop()+$(window).height())?$(document).scrollTop()+$(window).height()-f-10:j;$("#tipForUK").css({left:g,top:j})
					})
			}
			
			
			function removeEvent(){
				//$(".mk3").removeAttr("style");
				$(".mk3").removeAttr("style");
				

			}
	};
	


var map_config={"default":{bordercolor:"#9CA8B6",shadowcolor:"#000000",shadowOpacity:"50",namesShadowColor:"#666666"},
sc1:{namesId:"North East",name:"NORTH EAST",url:"#",downcolor:"#0a71d5", enable:true},
sc2:{namesId:"North West",name:"NORTH WEST",url:"#",downcolor:"#df5621",enable:true},
sc3:{namesId:"Scotland",name:"SCOTLAND",url:"#",downcolor:"#e8b81c",enable:true},
sc4:{namesId:"Yorkshire and The Humberside",name:"Yorkshire and The Humberside",url:"#",downcolor:"#3d36a0",enable:true},
sc5:{namesId:"East Midlands",name:"EAST MIDLANDS",url:"#",downcolor:"#22a69e",enable:true},
sc6:{namesId:"West Midlands",name:"WEST MIDLANDS",url:"#",downcolor:"#ef7b11",enable:true},
sc7:{namesId:"East of England",name:"EAST OF ENGLAND",url:"#",downcolor:"#6c1ea6",enable:true},
sc8:{namesId:"London",name:"LONDON",url:"#",downcolor:"#41ff46",enable:true},
sc9:{namesId:"South East",name:"SOUTH EAST",url:"#",downcolor:"#f2cc44",enable:true},
sc10:{namesId:"South West",name:"SOUTH WEST",url:"#",downcolor:"#e53557",enable:true},
sc11:{namesId:"Wales",name:"WALES",url:"#",downcolor:"#a6f210",enable:true},
};

$("#regions g path").on("click", function() {
	$(".noneoftheseForUk").removeAttr("style");
	OutputValuesForUk($(this).attr("data-info"));
	// OutputValues($(this).attr("id").split("c")[1]);
});

$(".noneoftheseForUk").click(function() {
$("path").removeAttr("style");
$(this).css({"background":"#acd95e"})
//$("#getMapVal").val($(this).attr("data-info"))
OutputValuesForUk($(this).attr("data-info"));
});

});
function noneBtnForUk(){
	$("path").removeAttr("style");
	$(this).css({"background":"#acd95e"});
	//$("#getMapVal").val($(this).attr("data-info"))
	OutputValuesForUk(noneoftheseForUk);
}