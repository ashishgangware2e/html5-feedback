var ourArr=[];
var prvValVideo;
var currentValVideo; /*get current time of video*/
var videos = document.querySelectorAll('video');
var behavior = document.querySelector('#behavior');
var currentId=defaultrate;
var recordVal=[];
var minutes;
var clickValue = 0; /*Check the if the rating block has been clicked*/


if (optionshow==true){
	var rateOption='<div class="ratingElement opacity01 emoticons01 op ratingIcon" data-info="e1"><div class="emo-1 emo"></div></div> \
	<div class="ratingElement opacity02 emoticons02 op ratingIcon" data-info="e2"><div class="emo-2 emo"></div></div> \
	<div class="ratingElement opacity03 emoticons03 op ratingIcon" data-info="e3"><div class="emo-3 emo"></div></div> \
	<div class="ratingElement opacity04 emoticons04 op ratingIcon" data-info="e4"><div class="emo-4 emo"></div></div> \
	<div class="ratingElement opacity05 emoticons05 op ratingIcon" data-info="e5"><div class="emo-5 emo"></div></div> \
	<div class="ratingElement opacity06 emoticons06 op ratingIcon" data-info="e6"><div class="emo-6 emo"></div></div> \
	<div class="ratingElement opacity07 emoticons07 op ratingIcon" data-info="e7"><div class="emo-7 emo"></div></div>';
}else{
	var rateOption='<div class="ratingElement emoticons01 op opacity01 ratingIcon" data-info="e1"><div class="emo-1 emo"></div></div> \
<div class="ratingIcon" data-info="e2"></div> \
<div class="ratingIcon" data-info="e3"></div> \
<div class="ratingElement emoticons04 op opacity04 ratingIcon" data-info="e4"><div class="emo-4 emo"></div></div> \
<div class="ratingIcon" data-info="e5"></div> \
<div class="ratingIcon" data-info="e6"></div> \
<div class="ratingElement emoticons07 op opacity07 ratingIcon" data-info="e7"><div class="emo-7 emo"></div></div>'; 
}
if (location.search === '?enabled=false') {
	behavior.innerHTML = '(module disabled everywhere via <code>?enabled=false</code>';
} else if (location.search === '?enabled=true') {
	enableVideos(true);
	behavior.innerHTML = '(module enabled everywhere (whether it’s necessary or not) via <code>?enabled=true</code>)';
} else {
	enableVideos();
}

function enableButtons(video) {
	var vid=document.getElementById("ratingVideo");
	  
	var playBtn = video.parentNode.querySelector('.play');
	var fullscreenButton = video.parentNode.querySelector('.fullscreen');
	if (playBtn) {
		playBtn.addEventListener('click', function () {			
			if (vid.paused) {
				
				vid.pause();
				vid.play();
				$(".play").hide();
				prvValVideo=1;
				$('.emoticons0'+currentId).css('opacity','0.4');
				
			} else {
				vid.pause();
				
			}
		});
	}
	if (fullscreenButton) {
		fullscreenButton.addEventListener('click', function () {
			video.webkitEnterFullScreen();
		});
	}
}

window.addEventListener('load', function() {
    var videoloadS = document.querySelector('#ratingVideo');
    function checkLoad() {
        if (videoloadS.readyState === 4) {
            
        } else {
            setTimeout(checkLoad, 100);
        }
    }

    checkLoad();
}, false);


function intializePlayer(){
	// Set object references
	video = document.getElementById("ratingVideo");
	playbtn = document.getElementById("playpausebtn");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	video.addEventListener("timeupdate",seektimeupdate,true);
}
window.onload = intializePlayer;
function seektimeupdate(){
	var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}

// debug events
function debugEvents(video) {
	[
		'loadstart',
		'progress',
		'suspend',
		'abort',
		'error',
		'emptied',
		'stalled',
		'loadedmetadata',
		'loadeddata',
		'canplay',
		'canplaythrough',
		'playing', // fake event
		'waiting',
		'seeking',
		'seeked',
		'ended',
	// 'durationchange',
		'timeupdate',
		'play', // fake event
		'pause', // fake event
	// 'ratechange',
	// 'resize',
	// 'volumechange',
		'webkitbeginfullscreen',
		'webkitendfullscreen',
	].forEach(function (event) {
		video.addEventListener(event, function () {
		});
	});
}

function enableVideos(everywhere) {
	for (var i = 0; i < videos.length; i++) {
		window.makeVideoPlayableInline(videos[i], !videos[i].hasAttribute('muted'), !everywhere);
		enableButtons(videos[i]);
		debugEvents(videos[i]);
	}
}

	$(".ratingBlock").html(rateOption);
	
	$('#ratingVideo').on('ended',function(){
		$("#EndData").val("1");
		/*To show hide play button at the end of video*/
		$("#ratingVideo , .ratingElement ").addClass("op");
		if(clickValue == 1)
			{
				$(".play").hide();	
			}
		else
			{
				$(".play").show();
			}
		/*To show hide play button at the end of video*/
		
		setTimeout(function(){ 
			if($("#EndData").val()==1 && $("#clickval").val()==1){
				$("#forwardbutton").show();
			}
			else{
				$(".errormsg").show();
			}
		}, 500);
		if(ourArr==""){
			$(".play").show();
			ourArr=[];
		}		
    });
	$('#ratingVideo').on('play',function(){
		ourArr=[];
		recordVal=[];
		ratingVideo();
		$("#ratingVideo, .ratingElement ").removeClass("op");
		$(".errormsg").hide();
		$(".ratingElement").removeAttr("style");
		$("#EndData").val("0");
		$("#clickval").val("0");
		clickValue = 0;
		currentId=defaultrate;
		$('.emoticons0'+currentId).addClass("active");

		
	

    });
function ratingVideo(){	
	$(".ratingElement").unbind('click').bind('click', function(evt) {
		clickValue = 1;
			$("#clickval").val("1");
		$(".ratingElement").removeAttr("style");
		currentId=$(this).attr("data-info").split("e")[1];
		var ratingVideo = $('#ratingVideo');
		  
			currentValVideo = (ratingVideo.get(0).currentTime).toFixed(0);
			
			if(prvValVideo !== currentValVideo){
				$(".ratingElement").removeClass("active");
				$('.opacity0'+currentId).addClass("active");
				
				prvValVideo=currentValVideo;
				ourArr.push(currentValVideo+":"+currentId);
			}
		}); 
}

$(function() {
  var timeout
  $(".errormsg").hide();
  $("#ratingVideo").on("playing pause", function(e) {
	  var v = this
      clearTimeout(timeout)
	  minutesN = v.currentTime.toString().split('.')[0];

      performaction(minutesN, v.duration)
      if (e.type === "playing") {
		setTimeout(function(){ 
			timeout = setInterval(function() {
				minutes = v.currentTime.toString().split('.')[0];
				performaction(minutes, v.duration)
			}, 1000);
		}, 100);	
	  }

  });
  
  function performaction(currentTime, duration) {
	recordVal.push(currentTime+":"+currentId);
	recoreddata(recordVal)
	
	var vid = document.getElementById("ratingVideo");
	vid.ontimeupdate = function(){
	var percentage = ( vid.currentTime / vid.duration ) * 100;
	$("#custom-seekbar span").css("width", percentage+"%");
	};


  }
  
});