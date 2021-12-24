// JavaScript Document
$(document).ready(function(){

	$(".row-of-icons").append('<div class="left-main-container"> <div class="leftdiv"></div></div>\
	<div class="emo-background">\
		<div class="maindiv">\
			<div class="rightdiv" id="targetdiv"><span class="txtSpan"></span></div>\
			<div class="drag-option">'+dargText+'</div>\
		</div>\
	</div>');

	var drgArr = drgAttr.split("|");
	var dragAttrTxt_ = dragAttrTxt.split("|");
	var dragAttrImg_ = dragAttrImg.split("|");
    var randomIndx=[];
	var cnt= 0;
    var opt = [];
	dragCheck = false;
	var mousedown={x:0,y:0};
	var bigImage1=[];
    var totalCount = drgArr.length;
	var clickBlock = true;
	var precodeSplit = precode.split("|");
	var backImage_ = backImage;
	var animateTimer_ = animateTimer;

	var backpunchInPlay = false; //till the time backpuch is workking function backpunchValues() will not be called


	if(backImage_ != ""){
		$(".heart-image").css({"background-image":"url("+backImage_+")","background-repeat":"no-repeat"});
	}
	

   // var timer = countdown;
	function checkURL(url) {
		return(url.match(/\.(jpeg|jpg|png)$/) != null);
	}		
	$.each(drgArr,function(index,arrValue){
		randomIndx.push(precodeSplit[index]);
	});    

	//for randomization but code is not complete now for backpunch image popup

	// if(parseInt(randomValue)){
	// 	shuffleArray(drgArr,randomIndx);
	// }
	
	//for randomization but code is not complete now for backpunch image popup

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

	
	$('.rightdiv').bind('click', function(e) {

		if ($(e.target).hasClass("dots")||$(e.target).hasClass("item-name"))
			return;
        $(".ripple").remove();

		var elName;
	
	  if(clickBlock){
			
		  if (!$(e.target).hasClass("txtSpan") && !$(e.target).hasClass("rightdiv") && $(e.target).attr("src")=="")
			return;
			$(".ripple").remove();

			clickBlock = false;
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
			
			 var nlft = e.pageX-$(".lableTxt").offset().left- 100;
			 var ntop = e.pageY-$(".lableTxt").offset().top-50; 
			 elName = $("#lbl"+randomIndx[cnt]).find("span").text();
			 $("#lbl"+randomIndx[cnt]).animate({left:nlft,top:ntop,opacity:0},500, function() {
				$(this).hide();
				clickBlock = true;
			});
			$("[data-text-id=lbl"+randomIndx[cnt]+"]").remove();


			cnt = cnt+1;
			if(cnt>=totalCount){
				$(".lableTxt").remove();
				$(".rightdiv").off("click"); 
			}
				
			 $(".lableTxt").find("span").html(Item+' '+(cnt+1)+' '+of+' '+totalCount);
			
			var offst = $(this).offset();       
			var lftpos = e.pageX-parseInt(offst.left);
			var toppos = e.pageY-parseInt(offst.top);

			var lftPrcnt = parseInt(findPercentage(lftpos,$(this).width()));
			var topPrcnt = parseInt(findPercentage(toppos,$(this).height()));
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			   $(this).append("<div class='dots' data-precode="+randomIndx[cnt-1]+" style='left:"+(lftPrcnt-2)+"%; top:"+(topPrcnt-2)+"%;'>&nbsp;<div class='item-cont'><div class='item-name tooltip'>"+dragAttrTxt_[cnt-1]+"</div></div></div>");
			}else{
				$(this).append("<div class='dots' data-precode="+randomIndx[cnt-1]+" style='left:"+(lftPrcnt-2)+"%; top:"+(topPrcnt-2)+"%;'>&nbsp;<div class='item-cont'><div class='item-name tooltip '>"+dragAttrTxt_[cnt-1]+"</div></div></div>");
			}
			var ranges = outputvals(lftPrcnt,topPrcnt);
			if(ranges>50) ranges = 50;
			opt[randomIndx[cnt-1]-1]=Math.round(ranges*2);
			outputValues(opt);
			if (backpunchInPlay == false) {
                backpunchValues();
            }
		}

		

		function dragDots(){
			if(dragAftrDrp == 1){
				$(".item-cont").hide(0);
				$(".dots").animate({opacity:0}, animateTimer_);
			}
			if(dragAftrDrp == 2){
				$(".item-cont").hide(0);
			}
			if(dragAftrDrp == 3){
			}
	
		}//dragDots();
		
	});



	 function findPercentage(vals,outof){
		 return ((vals/outof)*100);     
	 }
	 function countUpdate(count,totalCount){
		 var zindx=50;
		 var statmentValue=40;
		 var opacity=1;
		 var dvs = "";
		 var imgArr = "";
		 for(var i=0;i<totalCount;i++){
			var text='';
			if(checkURL(drgArr[i])){
				text="<img src='"+drgArr[i]+"' width='100%' height='100%' style='position:relative;' data-path='"+bigImage1[i]+"'><div class='popupIcon' data-path='"+bigImage1[i]+"'></div>";
			} else {
				
				text="<div class='v-align'><span> "+drgArr[i]+"</span><div class='text-info'>"+dragAttrTxt_[i]+"</div></div>";
			}

			if(dragAttrImg !=""){
				imgArr += '<div class="img-wrapper" style="z-index:'+(zindx)+'" data-text-id="lbl'+randomIndx[i]+'"><img   class="main-img" src="'+dragAttrImg_[i]+'" /><img class="zoom-item" src="https://e2eresearch.com/swteam/html5Tools/Astronaut-E/Brand-Target/images/zoomIcon.png" /></div>';
			
				dvs += '<div class="stmnt" data-img='+dragAttrImg_[i]+' id="lbl'+randomIndx[i]+'" style="z-index:'+(zindx)+';top:'+30+'px;>'+text+'</div>';
				zindx= zindx-1;
			}else{
				imgArr += '';
				dvs += '<div class="stmnt" id="lbl'+randomIndx[i]+'" style="z-index:'+(zindx)+';top:'+(statmentValue+1)+'px;opacity:'+opacity+'">'+text+'</div>';
				zindx= zindx-1;
				statmentValue=statmentValue+4;
				opacity=opacity-.1;
			}

			
		 }
		 $(".leftdiv").html('<div class="lableTxt"><span>'+Item+' '+(count+1)+' '+of+' '+totalCount+'</span></div>'+dvs+'<div class="img-arr">'+imgArr+'</div>');
		 centrediv();
	}
	function outputvals(bases,hypotns){
	  return (Math.sqrt(Math.pow(Math.abs(50-bases),2)+Math.pow(Math.abs(50-hypotns),2))); 
	}    
	function centrediv(){
		$(".txtSpan").html(Brandtxt).css("top",$(".rightdiv").css("height")+"px");
	}
	
	
	$(window).resize(function() { centrediv(); });

	function backpunchValues() {
        var styleArr = [];
        $(".dots").each(function(index, e) {
			var getPreCode = $(e).attr("data-precode");
            var getLeft = $(e).attr("style").split(";")[0].split(":")[1];
			var getTop = $(e).attr("style").split(";")[1].split(":")[1];
            styleArr[getPreCode - 1] = getLeft + ":" + getTop;
        })
        outBackpunch(styleArr)

	}
	  
	$(".stmnt .popupIcon").click(function() { 
		if(!dragCheck){
			var path=$(this).attr("data-path");
			$(".wrapper.row-of-icons").append("<div class='imagePopup'><div class='imgBox'><img src='"+path+"'><span class='cross'></span></div></div>")
		}
		$(".imagePopup .imgBox .cross").show(0);
		$(".imagePopup,.cross").click(function(){
			$(".imagePopup").remove();
		});
	}); 

	$(".wrapper").append('<div id="cus-myModal" class="cus-modal"><div class="cst-model"><span class="close">&times;</span><img class="modal-content" ></div></div>');

	$(".zoom-item").click(function(){
		var imgSrc = $(this).parent().find(".main-img").attr("src");
		$(".modal-content").attr("src",imgSrc);
		$(".cus-modal").show(0);
	})

	$(".close").click(function(){
		$(".cus-modal").hide(0);
	})
	
	if (backpunch == true) {
        $("body").css("opacity", 0);
		backpunchInPlay = true;
		var positions_ = positions.split(",");
		outputsvalue.split(",").forEach(function(el, index) {
            clickBlock = true;
            $(".rightdiv").click();
		})
		
        outputsvalue.split(",").forEach(function(el, index) {
		    var leftPos = positions_[index].split(":")[0];
			var topPos = positions_[index].split(":")[1];
			// clickBlock = true;
            // $(".rightdiv").click();
			$(".dots[data-precode=" + [index + 1] + "]").css({ "left": leftPos, "top": topPos })
        })
		backpunchInPlay = false;
		setTimeout(function(){$("body").css("opacity", 1);},1000)
        // $("#outputs").val(outputsvalue);
        outputValues(outputsvalue)
            // $(".positions").val(positions);
        outBackpunch(positions)

        outputsvalue.split(",").forEach(function(el, index) {
            opt[index] = el;
        })

    }
	
});

