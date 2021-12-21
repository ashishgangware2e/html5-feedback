$(document).ready(function() {
	//var infoarr = ["1%","15.85%","30.55%","50.45%","60.15%","75.15%","86.15%"];
	var outputArray = [];
	var dragAttr = dragAttrclr.split("|");
	var globaldefault,timer,t;
	function init(dragAttrclr,defaultpos,totalTime){
		globaldefault = defaultpos;		
		
		var dibs ="";
		for(var i=0;i<dragAttr.length;i++){
			if(i<dragAttr.length-1){
			//dibs += '<li id="'+(i+1)+'" class="rateBtn"  style="background:#'+dragAttr[i]+';"></li>';
			}else{
			//dibs += '<li id="'+(i+1)+'" class="rateBtn mrRight"  style="background:#'+dragAttr[i]+';"></li>';
			}
		}
		var couontdown = '<div class="clockdiv"><span class="days" style="display:none;">00</span><span class="hours" style="display:none;">00</span><span id="min" class="minutes">00</span>:<span class="seconds" id="sec">00</span></div>'; 
		var timeblock = '<div class="TimeBlock" id="startBtn"><span>'+strt+'</span></div><div class="TimeBlock" id="stopBtn"><span>'+stp+'</span></div>';
		var labeltxt = '<div class="ratetextLeft">Not at all motivating</div><div class="ratetextRight">Extremely motivating</div>';
		var ratscle = '<div class="rateScal">&nbsp;</div>';
		var popup = '<div class="toolContaner timer-section">'+timeblock+'</div><div class="toolContaner clock-timer">'+couontdown+'</div><div class="popuplayer" id="popuplayer"><div class="popup"><p class="ppuptxt">'+popuptxt+'</p><div class="mainbbtn"><div class="confirm_btn" id="kbtn">OK</div><div class="confirm_btn" id="okbtn">Yes</div><div class="confirm_btn pading" id="cnlbtn">No</div></div></div></div>';
		var str = popup+'<div class="masklayer" id="masklayer"></div><div class="toolContaner rating-section" ><div class="ratetextLeft">'+optionText.split("|")[0]+'</div><div class="ratetextRight">'+optionText.split("|")[1]+'</div><div class="RatingSlider"></div></div>';
		$(".mainWaper").html(str);
		setboxShadow();
		//$(".rateScal").animate({"margin-left":infoarr[defaultpos-1]});
		$("#startBtn").show();
		$("#stopBtn,#popuplayer,#forwardbutton,#kbtn").hide();
		$(".popuplayer").css("height",$(".mainWaper").css("height"));
	}
	init(dragAttrclr,defaultpos,totalTime);
	
	function setboxShadow(){
		$("li").removeClass("boxshdow");
		$("li:nth-child("+globaldefault+")").addClass("boxshdow");
	}
	
   /* $("li").click(function(){
		var currentId = $(this).attr("id");
		$(".rateScal").animate({"margin-left":infoarr[currentId-1]});
		globaldefault = currentId;
		setboxShadow();
		outputValues(outputArray.toString(),globaldefault);
	})*/
	$("#startBtn").click(function(){
		$("#startBtn,#masklayer").hide();
		$("#stopBtn").show();
		if($("#min").text()>=totalTime){
			clearInterval(timer);
			$("#stopBtn").css("opacity","0.0");
			$(".popup").hide();
			$("#forwardbutton,#popuplayer,#masklayer").show();
		}
		Clock.start();
	})
	$("#okbtn").click(function(){
		$(".ppuptxt").html(finishmsg);
		$(".popup p").css("margin-bottom","20px");
		$("#okbtn,.clockdiv,#cnlbtn").hide();
		$("#forwardbutton,#kbtn").show();
		$("#stopBtn").css("opacity","0.0");
		clearInterval(timer);
	});
	$("#cnlbtn").click(function(){
		Clock.resume();
		$("#popuplayer,#masklayer").hide();
	});
	$("#stopBtn").click(function(){
		popupshow();
		Clock.pause();
	});
	$("#kbtn").click(function(){
		$(".popup").hide();
		
		//$("#popuplayer,#masklayer").show();
	});
	function popupshow(){
		$("#popuplayer,#masklayer").show();
	}
	
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	  };
	}
	
	function initializeClock(id, endtime) { 
	  function updateClock() {
		t = getTimeRemaining(endtime);
		$('.days').html(t.days);
		$('.hours').html(('0' + t.hours).slice(-2));
		$('.minutes').html(('0' + t.minutes).slice(-2));
		$('.seconds').html(('0' + t.seconds).slice(-2)); 
		if (t.total <= 0) {
		  clearInterval(timeinterval);
		}
	  }
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}
	
	
	var Clock = {
			  totalSeconds: 0,
			  start: function () {
				var self = this;
				
				function pad(val) { return val > 9 ? val : "0" + val; }
				this.interval = setInterval(function () {
	            outputArray.push(parseInt(self.totalSeconds)+":"+globaldefault);
			    outputValues(outputArray.toString(),globaldefault);
				self.totalSeconds += 1;
				  
				  $("#min").text(pad(Math.floor(self.totalSeconds / 60 % 60)));
				  $("#sec").text(pad(parseInt(self.totalSeconds % 60)));
				  if($("#min").text()>=totalTime){
					    Clock.pause();
						$("#stopBtn").css("opacity","0.0");
				   		$(".ppuptxt").html(finishmsg);
						$(".popup p").css("margin-bottom","20px");
						$(".popup,#kbtn").show();
						$("#okbtn,#cnlbtn,.clockdiv").hide();
						$("#forwardbutton,#popuplayer,#masklayer").show();
				  }
				}, 1000);
			  },
	
	  pause: function () {
			clearInterval(this.interval);
			delete this.interval;
	  },
	
	  resume: function () {
		if (!this.interval) this.start();
	  }
	};




/*-------------- updated -------------*/
$(function() {
 $(".RatingSlider")
    .slider({ 
        min: 1, 
        max: 7, 
        value:defaultpos, 
        step:1,
		animate:true,
		change: function( event, ui ) {
                //$( "#outputVal" ).val( ui.value );
				globaldefault = ui.value;
            }
    })
    .slider("pips", {
        rest: "label"
    });


	$(".ui-slider-pip-1 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-2 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-3 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-4 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-5 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-6 .ui-slider-label").css("background","").html(" ");
	$(".ui-slider-pip-7 .ui-slider-label").css("background","").html(" ");
	
	

//$( "#outputVal" ).val( $('.RatingSlider').slider('value') );

});


		
});

