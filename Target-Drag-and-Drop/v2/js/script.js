// JavaScript Document
$(document).ready(function(){

	var drgArr = drgAttr.split("|");
    var randomIndx=[];
	var cnt= 1;
    var opt = [];
	dragCheck = false;
	var mousedown={x:0,y:0};
	var bigImage1=bigImage.split("|");
	var precodeSplit = precode.split("|");
    var totalCount = drgArr.length;
    var timer = countdown;
	var widgetTitle_=widgetTitle.split("|");

	$(".row-of-icons").append('<div class="respondent-info">'+widgetTitle_[1]+'</div> <div class="leftdiv"></div><div class="maindiv"> <div class="rightdiv" id="targetdiv"> <div class="circleBoard"> <div class="circle1"> <div class="circle2"> <div class="circle3"> <div class="circle4"></div> </div> </div> </div> </div></div> </div>');
	$(".row-of-icons").before('<div class="title-toll">'+widgetTitle_[0]+'</div>');
	$(".row-of-icons").after('<div class="output-info"><b>Output</b>: '+widgetTitle_[2]+'</div>');
	
	var dropshowCode_ = dropshowCode.split("|");
	function checkURL(url) {
		return(url.match(/\.(jpeg|jpg|png)$/) != null);
	}		
	$.each(drgArr,function(index,arrValue){
		randomIndx.push(precodeSplit[index]);
	});    
	if(parseInt(randomValue)){
		shuffleArray(drgArr,randomIndx);
	}    
	countUpdate(cnt,totalCount);
	function shuffleArray(array,indexArr) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
			var tem = indexArr[i];
			indexArr[i] = indexArr[j];
			indexArr[j] = tem;
		}
	return array;
	}
	var cCount=1;
	var dropped = false;
	function dragItem(){
		$(".stmnt").draggable({
			revert: true,
			revertDuration:100,
			start:function(e,ui){
				dropped = false;
				dragCheck = true;
			},
			stop:function(e,ui){
				dragCheck = false;
				
			}
		});
		$("#targetdiv.rightdiv").droppable({
			drop:function(e,ui){
				debugger
				var posX = $(this).offset().left;
				var posY = $(this).offset().top;
				var buttonWidth = $(this).width();
				var buttonHeight =  $(this).height();
				if(buttonWidth >= buttonHeight) {
					buttonHeight = buttonWidth;
				} else {
					buttonWidth = buttonHeight; 
				}
				var x = e.pageX - posX - buttonWidth / 2;
				var y = e.pageY - posY - buttonHeight / 2;
				
				var offst = $(this).offset();       
				var lftpos = e.pageX-parseInt(offst.left);
				var toppos = e.pageY-parseInt(offst.top);
				
				var lftPrcnt = parseInt(findPercentage(lftpos,$(this).width()));
				var topPrcnt = parseInt(findPercentage(toppos,$(this).height()));
				var ranges = outputvals(lftPrcnt,topPrcnt);
				if(ranges>50){
					$(".dots").draggable({ revert: 'valid' });
				} else {				
					if($(ui.draggable[0]).hasClass("stmnt")){
							
						var nlft = e.pageX-$(".lableTxt").offset().left- 100;
						var ntop = e.pageY-$(".lableTxt").offset().top-50; 

						$("#"+ui.draggable.attr("id")).animate({left:nlft,top:ntop,opacity:0},100, function() {
							$(this).draggable("disable").hide();							
							$(".circleEle .cirEle"+cCount).addClass("active");	
							cCount++;
						});
						cnt = cnt+1;
						if(cnt>=totalCount){
							//$(".lableTxt").remove();
						}
						 $(".lableTxt").find("span").html(Item+' <span class="counter">'+(cnt)+'</span> '+of+' '+totalCount);
						var arrayIndexForDropOption = ui.draggable.attr("id").split("lbl")[1];
						arrayIndexForDropOption = parseInt(arrayIndexForDropOption) - 1;
						opt[arrayIndexForDropOption] = Math.round(ranges*2);						
						outputValues(opt);					
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							
						   $(this).append("<div class='dots' style='left:"+(lftPrcnt-1)+"%; top:"+(topPrcnt-1)+"%;'></div>");
						}else{
							console.log("lftPrcnt-1",lftPrcnt-1)
							console.log("topPrcnt-1",topPrcnt-1)
							$(this).append("<div class='dots' style='left:"+(lftPrcnt-1)+"%; top:"+(topPrcnt-1)+"%;'></div>");
						}
						dragDots();
					} else {		
						console.log("ser;")			
						opt[randomIndx[cnt-1]-1]=Math.round(ranges*2);
						outputValues(opt);	
						$(".dots").draggable({ revert: 'invalid' });
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							//$(ui.draggable[0]).css({'left':lftpos-(mousedown.x),'top':toppos-(mousedown.y)});
						}else{
							//console.log(ui.draggable)
							//$(ui.draggable[0]).css({'left':lftpos-(mousedown.x),'top':toppos-(mousedown.y)});
						}
					}
				}
			}
		});
	}
	function dragDots(){
		$(".dots").draggable({
			containment:"parent",
			revert: true,
			revertDuration:10
		}).mousedown(function(e){
		    // var _x = $(this).offset().left;
			// var _y = $(this).offset().top;
			// mousedown.x = e.pageX - _x;
			// mousedown.y = e.pageY - _y;
		});
	}
	dragItem();

	 function findPercentage(vals,outof){
		 return ((vals/outof)*100);     
	 }
	 function countUpdate(count,totalCount){
		 var zindx=50;
		 var dvs = "";
		 var circle = '';
		 for(var i=0;i<totalCount;i++){
			var text='';
			if(checkURL(drgArr[i])){
				
				text="<img src='"+drgArr[i]+"' style='position:relative;' data-path='"+bigImage1[i]+"'><div class='popupIcon' data-path='"+bigImage1[i]+"'></div>";
			} else {
			
				text="<span> "+drgArr[i]+"</span>";
			}
			var dropIndex = dropshowCode_[i];
			 dvs += '<div class="stmnt" id="lbl'+randomIndx[i]+'" show-drop-value='+dropIndex+' style="z-index:'+(zindx)+';position:absolute;">'+text+'</div>';
			 zindx= zindx-1;
			 circle = circle + '<div class="cirEle cirEle'+(i+1)+'"></div>';
		 }
		 
		 $(".leftdiv").html('<div class="lableTxt"><span>'+Item+' <span class="counter">'+(count)+'</span> '+of+' '+totalCount+'</span></div>'+dvs+"<div class='circleEle'>"+circle+"</div>");
		 centrediv();
	}
	$(".stmnt").eq(0).addClass("profile");
	function outputvals(bases,hypotns){
	  return (Math.sqrt(Math.pow(Math.abs(50-bases),2)+Math.pow(Math.abs(50-hypotns),2))); 
	}    
	function centrediv(){
		$(".txtSpan").html(Brandtxt).css("top",$(".rightdiv").css("height")+"px");
	}
	
	$(window).resize(function() { centrediv();});
	
	$(".stmnt .popupIcon").click(function() { 
		if(!dragCheck){
			if($(this).hasClass("profileIcon")){
				$(".wrapper.row-of-icons").append("<div class='imagePopup profilePopup'><div class='imgBox'>"+
				"<span class='cross'></span></div></div>");
				showPopup();
			
			} else {
				var path=$(this).attr("data-path");
				$(".wrapper.row-of-icons").append("<div class='imagePopup'><div class='imgBox'><img src='"+path+"'><span class='cross'></span></div></div>");
			}
		}
		$(".imagePopup .imgBox .cross").show(0);
		$(".imagePopup,.cross").click(function(){
			$(".imagePopup").remove();
		});
	});
});

