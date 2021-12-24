var ourArr=[];
var prvValVideo;
var currentValVideo;
var videos = document.querySelectorAll('video');
var behavior = document.querySelector('#behavior');
var currentId=defaultrate;
var recordVal=[];
var minutes;
/*var rateOption="<div class='ratingElement "+smileIcon1+" ratingIcon' data-info='e1'></div><div class='ratingIcon "+clkclass+" "+smileIcon2+"' data-info='e2'></div><div class='ratingIcon "+clkclass+" "+smileIcon3+"' data-info='e3'></div><div class='ratingElement "+smileIcon4+" ratingIcon' data-info='e4'></div><div class='ratingIcon "+clkclass+" "+smileIcon5+"' data-info='e5'></div><div class='ratingIcon "+clkclass+" "+smileIcon6+"' data-info='e6'></div><div class='ratingElement "+smileIcon7+" ratingIcon' data-info='e7'></div><div style='clear: both; height:30px;'></div><div class='scalerat'><span class='e-red ratingElement' data-info='e1'>1</span></div><div class='scalerat'><span class='ratingElement e-org' data-info='e2'>2</span></div><div class='scalerat'><span class='e-orgL ratingElement' data-info='e3'>3</span></div><div class='scalerat'><span class='e-yellow ratingElement' data-info='e4'>4</span></div><div class='scalerat'><span class='e-greenL ratingElement' data-info='e5'>5</span></div><div class='scalerat'><span class='e-green ratingElement' data-info='e6'>6</span></div><div class='scalerat'><span class='e-greenLast ratingElement' data-info='e7'>7</span></div>";*/

if (optionshow==true){
	var rateOption='<div class="ratingElement opacity01 emoticons01 ratingIcon" data-info="e1"></div> \
	<div class="ratingElement opacity02 emoticons02 ratingIcon" data-info="e2"></div> \
	<div class="ratingElement opacity03 emoticons03 ratingIcon" data-info="e3"></div> \
	<div class="ratingElement opacity04 emoticons04 ratingIcon" data-info="e4"></div> \
	<div class="ratingElement opacity05 emoticons05 ratingIcon" data-info="e5"></div> \
	<div class="ratingElement opacity06 emoticons06 ratingIcon" data-info="e6"></div> \
	<div class="ratingElement opacity07 emoticons07 ratingIcon" data-info="e7"></div> \
	<div style="clear: both; height:30px;"></div> \
	<div class="scalerat"><span class="ratingElement opacity01 e-red " data-info="e1">1</span></div> \
	<div class="scalerat"><span class="ratingElement opacity02 e-orgL" data-info="e2">2</span></div> \
	<div class="scalerat"><span class="ratingElement opacity03 e-org " data-info="e3">3</span></div> \
	<div class="scalerat"><span class="ratingElement opacity04 e-yellow" data-info="e4">4</span></div> \
	<div class="scalerat"><span class="ratingElement opacity05 e-greenL" data-info="e5">5</span></div> \
	<div class="scalerat"><span class="ratingElement opacity06 e-green" data-info="e6">6</span></div> \
	<div class="scalerat"><span class="ratingElement opacity07 e-greenLast" data-info="e7">7</span></div>';
}else{
	var rateOption='<div class="ratingElement emoticons01 opacity01 ratingIcon" data-info="e1"></div> \
<div class="ratingIcon" data-info="e2"></div> \
<div class="ratingIcon" data-info="e3"></div> \
<div class="ratingElement emoticons04 opacity04 ratingIcon" data-info="e4"></div> \
<div class="ratingIcon" data-info="e5"></div> \
<div class="ratingIcon " data-info="e6"></div> \
<div class="ratingElement emoticons07 opacity07 ratingIcon" data-info="e7"></div> \
<div style="clear: both; height:30px;"></div> \
<div class="scalerat"><span class="ratingElement opacity01 e-red" data-info="e1">1</span></div> \
<div class="scalerat"><span class="ratingElement opacity02 e-org" data-info="e2">2</span></div> \
<div class="scalerat"><span class="ratingElement opacity03 e-org" data-info="e3">3</span></div> \
<div class="scalerat"><span class="ratingElement opacity04 e-yellow" data-info="e4">4</span></div> \
<div class="scalerat"><span class="ratingElement opacity05 e-greenL" data-info="e5">5</span></div> \
<div class="scalerat"><span class="ratingElement opacity06 e-green" data-info="e6">6</span></div> \
<div class="scalerat"><span class="ratingElement opacity07 e-greenLast" data-info="e7">7</span></div>'; 
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
	var playBtn = video.parentNode.querySelector('.play');
	var fullscreenButton = video.parentNode.querySelector('.fullscreen');

	if (playBtn) {
		playBtn.addEventListener('click', function () {			
			if (video.paused) {
				video.play();
				$(".play").hide();
				prvValVideo=1;
				$('.emoticons0'+currentId).css('opacity','0.4');
			} else {
				alert("called pause");
				video.pause();
			}
		});
		
		/*$("#ratingVideo").click(function(){
			
			if (video.paused) {
				
				$(".play").hide();
				prvValVideo=1;
				$('.emoticons0'+currentId).css('opacity','0.4');
			} else {
				video.pause();
			}
			
			
		});*/
	}

	if (fullscreenButton) {
		fullscreenButton.addEventListener('click', function () {
			video.webkitEnterFullScreen();
		});
	}
	
	
}


/*function myFunction() {
    setInterval(function(){ document.getElementById("ratingVideo").addEventListener('playing', function(){
		console.log("hii");
    $("#btnPlay").hide();
  }); }, 100);
}myFunction();*/


window.addEventListener('load', function() {
    var videoloadS = document.querySelector('#ratingVideo');
    //var preloader = document.querySelector('.preloader');

    function checkLoad() {
        if (videoloadS.readyState === 4) {
            //preloader.parentNode.removeChild(preloader);
			//$(".play").show();
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
			//console.info('@', event.);
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
		$(".ratingBlock").html("");
		if(ourArr==""){
			$(".play").show();
			ourArr=[];
			//recoreddata(ourArr)
		}		
    });
	$('#ratingVideo').on('play',function(){
		ourArr=[];
		//recoreddata(ourArr)
		ratingVideo();

    });
function ratingVideo(){
	
	$(".ratingElement").bind('click', function(evt) {
		$(".ratingElement").removeAttr("style")
		currentId=$(this).attr("data-info").split("e")[1];
		
		var ratingVideo = $('#ratingVideo');
		  
			currentValVideo = (ratingVideo.get(0).currentTime).toFixed(0);
			if(prvValVideo!==currentValVideo){
				$('.opacity0'+currentId).css("opacity","0.4")
				prvValVideo=currentValVideo;
				
				ourArr.push(currentValVideo+":"+currentId);
				//recoreddata(ourArr);
			}
		else{
			
			
			}
		
		}); 
}


/*$(document).ready(function(){
  $("#ratingVideo").on("timeupdate", function(event){
	  minutes = this.currentTime.toString().split('.')[0];
      onTrackedVideoFrame(minutes, this.duration);
    });


function onTrackedVideoFrame(currentTime, duration){
	console.log(minutes);
	//var strCrTime=currentTime;
		recordVal.push(currentTime+":"+currentId);
		recoreddata(recordVal)

	}

});*/



$(function() {
  var timeout
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
  })
  
  function performaction(currentTime, duration) {
    //console.log(currentTime)
	recordVal.push(currentTime+":"+currentId);
	recoreddata(recordVal)
  }
  
})

	

