// JavaScript Document
var randomIndx=[];
var outputarr=[];
var flag=0;
var randomStaticVal;
var leftmins=8;
var topCmins=9;
var svgWidth;
var svgheight;
var TBwidth;
var svgheightDIVD;
var endFlag;
var zindex;
var removeArr=[];
var flsrmv;


$(document).ready(function() {
//flag=0;
	
statmentStr=statmentStr.split("|");
	
$(".toolWapper").html('<div class="fromTarget"><div class="setMiddle"><div class="blockElments margin_bottom" id="countdownList"> </div><div class="blockElments" id="statmentText"></div></div></div><div class="clearAll"></div><div class="toTarget"><div class="clickableArea"></div><div class="bottomRightNegative">'+legentText[1]+'</div><div class="BottomleftPosetive">'+legentText[0]+'</div></div>');

flagParaCount=1;

endFlag=statmentStr.length;
zindex=statmentStr.length;
	
var ncountD;	

var leftPosition;
var topPosition;

//var leftPositionOut;
//var topPositionOut;


svgWidth=$(".clickableArea").width();
svgheight=$(".clickableArea").height();
TBwidth=$("#statmentText").width();
svgheightDIVD=(svgheight-20)/2;

		
$.each(statmentStr,function(index,arrValue){
		randomIndx.push(index+1);
});
	
if(parseInt(randomValue)){
	shuffleArray(statmentStr,randomIndx);
}    
 
    
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
	
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
	

	allcalculation(randomIndx, flag, endFlag);
	
	function allcalculation(randomIndxPara, flagPara, endFlagPara){
		
	outputValues(outputarr);
	$("#statmentText").html(" ");
	
	$("#countdownList").html('<div class="countBox">Item '+(flagPara+1) +" of "+ statmentStr.length+'<div>');
	
	for(var i=0	; i<statmentStr.length; i++){
		$("#statmentText").append('<div class="borderBox" data-move="'+randomIndxPara[i]+'"; id="movetext'+randomIndxPara[i]+'" style="z-index:'+(zindex)+'">'+statmentStr[i]+'</div>');
		$(".clickableArea").append('<div class="knob" data-info="'+randomIndxPara[i]+'" id="spot'+randomIndxPara[i]+'">');
		zindex=zindex-1
	}
	
	$(".knob").click(function(){
		var currentRemoveId=$(this).attr("id").split("t")[1];
		var currentdataInfo= $(this).attr("data-info");
		if(currentRemoveId==flsrmv){
		endFlagPara=endFlagPara+1;
		flagParaCount=flagParaCount-1;
		$(this).hide();
		$("#countdownList").show().html('<div class="countBox">Item '+flagParaCount +" of "+ statmentStr.length+'<div>');
		$("#movetext"+currentRemoveId).animate({left:0,top:"45px",opacity:1},1, function() {$(this).show()})
		flagPara=flagPara-1;
		randomStaticVal=currentRemoveId;
		outputarr[randomStaticVal-1]="";
		outputValues(outputarr);
		//removeArr.splice(String.valueOf(randomIndxPara[flagPara]),1);
		removeArr.remove(currentdataInfo);
		}
		else{
			//alert("else")
		}
		
	});
		
	$(".knob").hide();
		
	$("#dicsCount").html(randomIndxPara[flagPara]);
	
	
		
	//$(".clickableArea").click(function(e){
	$('.clickableArea').bind('click', function (e) {	

		if (e.target !== this)
			return;
				
		if(!endFlagPara == 0){
			
		// Setup
		  var posX = $(this).offset().left,
			  posY = $(this).offset().top,
			  buttonWidth = $(this).width(),
			  buttonHeight =  $(this).height();
		  
		  // Add the element
		  $(this).prepend("<span class='ripple'></span>");
		
		  
		 // Make it round!
		  if(buttonWidth >= buttonHeight) {
			buttonHeight = buttonWidth;
		  } else {
			buttonWidth = buttonHeight; 
		  }
		  
		  // Get the center of the element
		  var x = e.pageX - posX - buttonWidth / 2;
		  var y = e.pageY - posY - buttonHeight / 2;
		  
		 
		  // Add the ripples CSS and start the animation
		  $(".ripple").css({
			width: buttonWidth,
			height: buttonHeight,
			top: y + 'px',
			left: x + 'px'
		  }).addClass("rippleEffect");			
			
			
			
			endFlagPara=endFlagPara-1;
			var offset = $(this).offset();
			var offsetParent = $(this).parent().parent().parent().offset();
			var offsetParentX = e.pageX - offsetParent.left;
			var offsetParentY = e.pageY - offsetParent.top;
			

			var leftClickPointOut=e.pageX - offset.left;
			var topClickPointOut=e.pageY - offset.top;

			
			var offst = $(this).offset();       
			var lftpos = e.pageX-parseInt(offst.left);
			var toppos = e.pageY-parseInt(offst.top);
			
			var lftPrcnt = parseInt(findPercentage(lftpos,$(this).width()));
			var topPrcnt = parseInt(findPercentage(toppos,$(this).height()));

				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

					$("#spot"+randomIndxPara[flagPara]).show().attr("title",statmentStr[flagPara]).css({left:(lftPrcnt-1.4)+"%",top:10});
					}
					else{
					
					$("#spot"+randomIndxPara[flagPara]).show().attr("title",statmentStr[flagPara]).css({left:(lftPrcnt-1.4)+"%",top:10});
					}

			$('.knob').tipsy({gravity: 's'});
			
			
			var rangesdata = Math.abs(lftPrcnt).toFixed(0);
			randomStaticVal=randomIndxPara[flagPara];

			outputarr[randomStaticVal-1]=rangesdata;
			outputValues(outputarr);
			
			$(".ripple").remove();
			
			flagParaCount=flagParaCount+1;
			
			if(flagParaCount>=(statmentStr.length)+1){
				$("#countdownList").hide();
				}
			$("#countdownList").html('<div class="countBox">Item '+flagParaCount +" of "+ statmentStr.length+'<div>');
			if ($(window).width() < 768) {
				$("#movetext"+randomIndxPara[flagPara]).animate({left:offsetParentX-400,top:offsetParentY-10,opacity:0},500, function() {$(this).hide()});
				}
						
			$("#movetext"+randomIndxPara[flagPara]).animate({left:offsetParentX-650,top:offsetParentY-10,opacity:0},500, function() {$(this).hide()});
			
			
			removeArr.push(randomIndxPara[flagPara]);

			flsrmv=randomIndxPara[flagPara]
			console.log(flsrmv);
			flagPara=flagPara+1;
			
			e.preventDefault();
		}
		
		
		
		});
}
	
function findPercentage(vals,outof){
     return ((vals/outof)*100);     
 }
	

Array.prototype.remove = function(value) {
       this.splice(this.indexOf(value), 1);
       return true;
};
	
});





