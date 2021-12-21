$(document).ready(function(){
	main=new Main();
	
});

function Main(){
	main=this;
	main.declareVariable();
	main.toolbinding();
	main.addEvents();
};
Main.prototype.declareVariable = function(){
	main.statementTextArr=statementText.split("|");
	main.scaleTextArr=scaleText.split("|");
	main.scaleExpectationsArr=scaleExpectations.split("|");
	main.droplist=[];
	for(var i=0;i<main.statementTextArr.length;i++){
		$("#label"+(i+3)).html(main.statementTextArr[i]);
	}	
	for(var i=0;i<main.scaleExpectationsArr.length;i++){
		$("#label"+(i+1)).html(main.scaleExpectationsArr[i]);
	}
};

Main.prototype.toolbinding=function(){
	for(var i=0; i<main.statementTextArr.length; i++){
		main.droplist+='<li id="drop'+(i+1)+'" class="drag"><span>'+main.statementTextArr[i]+'</span></li>';
	}
	var allstring='<div class="headerText">Demo 1</div><div class="errorText">'+errorText+'</div><div class="left-flash-contaner"> \
			<ul class="draggble-element"> \
				'+main.droplist+' \
			</ul> \
		</div> \
		<div class="right-flash-contaner"> \
			<div class="droppablearea"> \
				<ul class="dropElement"></ul> \
				<div class="l-scaltext"><span>'+main.scaleTextArr[0]+'</span></div> \
				<div class="r-scaltext"><span>'+main.scaleTextArr[1]+'</span></div> \
				<div class="scaltext-line"> \
					<div class="arrowshape"></div> \
				</div> \
				<div class="meet-btn yellow" data-info="'+main.scaleExpectationsArr[0]+'"></div> \
				<div class="exceeds-btn green" data-info="'+main.scaleExpectationsArr[1]+'"></div> \
			</div> \
		</div> \
		<div class="footer-row"> \
			<div class="rightbtn-set"> \
				<div class="btnnext btn-outset btn-shadow">Next</div> \
			</div> \
		</div> \
	';
	//console.log(allstring);
	$(".flash-contaner").html(allstring);
}

Main.prototype.addEvents = function(){

	var counter = 1;	
	var dropWidth=$(".dropElement").width();
	var hText = headerText.split("|");
	$(".headerText").html(hText[0]);
	var slider = [];
	var dropValue = [];
	
	$(".drag").draggable({
		revert: true,
		revertDuration: 100
	});
	$(".dropElement").droppable({
		drop:function(event,ui){
			$( ui.draggable[0] ).draggable( 'option',  'revert', true );
			var dText = $(ui.draggable).html();
			var drag = $(ui.draggable).attr("id");
			var $newPosX = ui.offset.left - $(this).offset().left;
			var $newPosY = ui.offset.top - $(this).offset().top;

			var dropW = $(this).width();
			var dropH = $(this).height();
				
			var dW = $("#"+drag).width();
			var dL = $("#"+drag).position().left;			
			var v = Math.round((dW/2+dL)/(dropW/100));
			if(dropValue.indexOf(v)<0){
				if($(ui.draggable).hasClass("drag")){
					$(ui.draggable).remove();
					var l = $(".dropped").length+1;
					$(".dropElement").append("<li id='"+drag+"' class='dropped' style='top:"+$newPosY+"px;left:"+$newPosX+"px'>"+dText+"</li><span class='"+drag+"line line'></span>");
					setdraggable("#"+drag);
					drawLine(dropW,dropH,drag,drag+'line');
				} else {
					$(ui.draggable).remove();
					$("."+drag+"line").remove();
					$(".dropElement").append("<li id='"+drag+"' class='dropped' style='top:"+$newPosY+"px;left:"+$newPosX+"px'>"+dText+"</li><span class='"+drag+"line line'></span>");
					setdraggable("#"+drag);
					drawLine(dropW,dropH,drag,drag+'line');
				}
			}
		}
	});


	function setdraggable(id){
		$(id).draggable({
			revert: true,
			revertDuration: 1,
			start:function(event,ui){
				var id = $(this).attr("id");
				//$("."+id+"line").hide(0);
				
			},
			drag:function(event,ui){
				var dropW = $(".dropElement").width();
				var dropH = $(".dropElement").height();
				var drag = this.id;
				var line = drag+'line';
				var dW = $("#"+drag).width();
				var dH = $("#"+drag).height();
				var dT = $("#"+drag).position().top;
				var dL = $("#"+drag).position().left;
				
				var h = (dropH - (dH+dT));
				var p = parseInt($("#"+drag).css("padding-left"));
				$("."+line).css({top:dT+dH,left:dW/2+dL+p,height:h});
			},
			stop:function(event,ui){
				//$(".line").show(0);
				
				var dropW = $(".dropElement").width();
				var dropH = $(".dropElement").height();
				var drag = this.id;
				var line = drag+'line';
				var dW = $("#"+drag).width();
				var dH = $("#"+drag).height();
				var dT = $("#"+drag).position().top;
				var dL = $("#"+drag).position().left;
				
				var p = parseInt($("#"+drag).css("padding-left"));
				var h = (dropH - (dH+dT));
				$("."+line).css({top:dT+dH,left:dW/2+dL+p,height:h});				
			}				
		});
	}

	function drawLine(dropW,dropH,drag,line){

		var dW = $("#"+drag).width();
		var dH = $("#"+drag).height();
		var dT = $("#"+drag).position().top;
		var dL = $("#"+drag).position().left;
		
		var p = parseInt($("#"+drag).css("padding-left"));
		var h = (dropH - (dH+dT));
		var lineLeft = dW/2+dL+p;
		var lineTop = dT+dH;
		$("."+line).css({top:lineTop,left:lineLeft,height:h});
		var v = Math.round(lineLeft/(dropW/100));
		var index = drag.replace(/[a-z]/g,'');
		
		
		dropValue[index-1] = v;
		
/* 		var arr1=[],arr2=[],arr3=[];
		dropValue.map(function(val,i){
			if(val<=slider[0]){
				arr1.push((i+1)+":"+val);
			}
		});		
		dropValue.map(function(val,i){
			if(val>slider[0] && val<=slider[1]){
				arr2.push((i+1)+":"+val);
			}
		});
		dropValue.map(function(val,i){
			if(val>slider[1]){
				arr3.push((i+1)+":"+val);
			}
		}); */outputallVal
		
		//outputVal1(arr1+"|"+arr2+"|"+arr3);
		outputVal1(dropValue);
		outputallVal(0);
		if($(".draggble-element li").length == 0){
			$(".btnnext").html("Finish");
			outputallVal(1);
		}
	}
	
	var draggedMeet = false;
	var draggedExceeds = false;
	var mLeft =  dropWidth/100;
	$(".meet-btn").css("left",mLeft*meetBtn).attr("data-index",0);
	slider[0] = meetBtn;
	outputVal2(slider);
	slide1value(slider[0]);
	$(".exceeds-btn").css("left",mLeft*exceedsBtn).attr("data-index",1);
	$(function(){
		var _Left=0;
		$('.meet-btn, .exceeds-btn').draggable({ 
			axis: "x", 
			containment: $(".droppablearea"),
			stop:function(event,ui){
				//var exLeft =  $(".exceeds-btn").position().left;
				var exLeft =  parseInt($(".exceeds-btn").css("left"));
				 exLeft =  Math.round(exLeft/(dropWidth/100));
				 
				//var meetLeft = $(".meet-btn").position().left;
				var meetLeft = parseInt($(".meet-btn").css("left"));
				meetLeft = Math.round(meetLeft/(dropWidth/100));
				//console.log("exLeft::"+exLeft+"meetLeft::"+meetLeft);
				//console.log(exLeft - meetLeft);
				 if($(this).hasClass("exceeds-btn") && ((exLeft - meetLeft) <= minDifference)){				
				 	$(".exceeds-btn").css("left",_Left);
				 }
				if($(this).hasClass("meet-btn") && ((exLeft-meetLeft)/mLeft)<=5){				
					//$(".meet-btn").css("left",_Left);
				}
				var i = $(this).attr("data-index");
				var l = parseInt($(this).css("left"));	
				slider[i] = Math.round(l/(dropWidth/100));
				if(slider[0] > meetBtnMax){
					putMeBack();
				}
				slide1value(slider[0]);
				slide2value(slider[1])
				outputVal2(slider);
			},
			start:function(event,ui){
				
				_Left = $(this).position().left;
			},
			drag:function(event,ui){
				
				if($(this).hasClass("exceeds-btn")){
					draggedExceeds = true;
				}
				if($(this).hasClass("meet-btn")){
					draggedMeet = true;
				}
			},
			
			
		});
	});

	function putMeBack(){
				$(".meet-btn").css("left",mLeft*meetBtnMax).attr("data-index",0);
				slider[0] = meetBtnMax;
			}

	getSteps(1);

	$(".btnnext").unbind("click").bind("click",function(){
		
		$(".errorText").hide(0);
		if(counter===1 && draggedMeet){
			getSteps(2);
			counter++;
			$(".headerText").html(hText[1]);
			$(".exceeds-btn").show(0);
			$('.meet-btn').draggable("disable");
			slider[1] = exceedsBtn;
			outputVal2(slider);
			slide2value(slider[1]);
	
		}else if(counter===2 && draggedExceeds){
			getSteps(3);
			counter++;
			$(".headerText").html(hText[2]);
			$(".draggble-element").show(0);
			$(".meet-btn,.exceeds-btn").removeClass("yellow green");
			$('.meet-btn, .exceeds-btn').draggable("disable");
		} else if(counter===3){
			/*console.log("counter 3");*/
			if($(".draggble-element li").length==0){
				$("#forwardbutton").trigger("click");
				$(".errorText").hide(0);
			} else {
				$(".errorText").html(errorText).hide(0);
			}
		} else {

			if(!draggedExceeds){
				$(".errorText").html(errorExceedsExpectations).hide(0);
			}
			
			if(!draggedMeet){
				$(".errorText").html(errorMeetsExpectations).hide(0);
			}			
			
		}
	});

};


