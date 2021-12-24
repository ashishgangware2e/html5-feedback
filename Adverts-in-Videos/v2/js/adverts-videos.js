
$( document ).ready(function() {
  wedigets();
function wedigets(){
  $(".video-container-outer").append(' <div class="video-container">\
<div class="video-inner">\
  <video playsinline preload="auto" id="ratingVideo" class="op"  poster="" src='+sourceVideos.split("|")[0]+'>\<source src='+sourceVideos.split("|")[0]+' type="video/mp4" />\
    <source src='+sourceVideos.split("|")[1]+' type="video/webm" />\
    <source src='+sourceVideos.split("|")[2]+' type="video/ogg" />\
    <p>Your user agent does not support the HTML5 Video element.</p>\
  </video>\
  <div id="btnPlay" class="play">&nbsp;</div>\
</div>\
<div class="durationBlock">\
  <div class="remaingTimeBlock">\
    <span id="curtimetext">00:00</span> /\
    <span id="durtimetext">00:00</span>\
  </div>\
</div>\
<div id="custom-seekbar">\
  <span></span>\
</div>\
</div>');
$(".video-container-outer").before('<div class="timer-group">\
<svg xmlns="http://www.w3.org/2000/svg" width="135.013" height="135.01" viewBox="0 0 150.013 135.01">\
<g id="demo2" transform="translate(132.363 -70.1) rotate(90)">\
  <path id="circle_pc_bg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); " d="M79.651,66.078C81.4,30.861,110.038,6.807,141.662,7.89a60.017,60.017,0,0,1,3.577,119.731c-31.5,2.971-67.088-22.617-65.588-61.543" transform="translate(0 -5)" fill="none" stroke="#d9d9d9" stroke-width="16"/>\
  <path class="dn" id="circle_pc" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" d="M79.651,66.078C81.4,30.861,110.038,6.807,141.662,7.89a60.017,60.017,0,0,1,3.577,119.731c-31.5,2.971-67.088-22.617-65.588-61.543" transform="translate(0 -5)" fill="none" stroke="rgba(89, 186, 70, 1)" stroke-width="16"/>\
</g></svg>\
<div class="lazy"><span>0</span><span>:</span><span class="timer-sec">0</span></div>\
</div>')
$(".timer-group").before('<div class="tool-title">'+widgetTitle+'</div>');


var ourArr = [];
var prvValVideo;
var currentValVideo; /*get current time of video*/
var videos = document.querySelectorAll("video");
var behavior = document.querySelector("#behavior");
var currentId = defaultrate;
var recordVal = [];
var minutes;
var clickValue = 0; /*Check the if the rating block has been clicked*/

if (location.search === "?enabled=false") {
  behavior.innerHTML =
    "(module disabled everywhere via <code>?enabled=false</code>";
} else if (location.search === "?enabled=true") {
  enableVideos(true);
  behavior.innerHTML =
    "(module enabled everywhere (whether it’s necessary or not) via <code>?enabled=true</code>)";
} else {
  enableVideos();
}

function enableButtons(video) {
  var vid = document.getElementById("ratingVideo");

  var playBtn = video.parentNode.querySelector(".play");
  var fullscreenButton = video.parentNode.querySelector(".fullscreen");
  if (playBtn) {
    playBtn.addEventListener("click", function () {
      if (vid.paused) {
        vid.pause();
        vid.play();
        $(".play").hide();
        prvValVideo = 1;
        $(".emoticons0" + currentId).css("opacity", "0.4");
      } else {
        vid.pause();
      }
    });
  }
  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", function () {
      video.webkitEnterFullScreen();
    });
  }
}

window.addEventListener(
  "load",
  function () {
    var videoloadS = document.querySelector("#ratingVideo");
    function checkLoad() {
      if (videoloadS.readyState === 4) {
      } else {
        setTimeout(checkLoad, 100);
      }
    }

    checkLoad();
  },
  false
);

function intializePlayer() {
  // Set object references
  video = document.getElementById("ratingVideo");
  playbtn = document.getElementById("playpausebtn");
  curtimetext = document.getElementById("curtimetext");
  durtimetext = document.getElementById("durtimetext");
  video.addEventListener("timeupdate", seektimeupdate, true);
}
window.onload = intializePlayer;
function seektimeupdate() {
  var curmins = Math.floor(video.currentTime / 60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration / 60);
  var dursecs = Math.floor(video.duration - durmins * 60);
  if (cursecs < 10) {
    cursecs = "0" + cursecs;
  }
  if (dursecs < 10) {
    dursecs = "0" + dursecs;
  }
  if (curmins < 10) {
    curmins = "0" + curmins;
  }
  if (durmins < 10) {
    durmins = "0" + durmins;
  }
  curtimetext.innerHTML = curmins + ":" + cursecs;
  durtimetext.innerHTML = durmins + ":" + dursecs;
}


// debug events
function debugEvents(video) {
  [
    "loadstart",
    "progress",
    "suspend",
    "abort",
    "error",
    "emptied",
    "stalled",
    "loadedmetadata",
    "loadeddata",
    "canplay",
    "canplaythrough",
    "playing", // fake event
    "waiting",
    "seeking",
    "seeked",
    "ended",
    // 'durationchange',
    "timeupdate",
    "play", // fake event
    "pause", // fake event
    // 'ratechange',
    // 'resize',
    // 'volumechange',
    "webkitbeginfullscreen",
    "webkitendfullscreen",
  ].forEach(function (event) {
    video.addEventListener(event, function () {});
  });
}

function enableVideos(everywhere) {
  for (var i = 0; i < videos.length; i++) {
    window.makeVideoPlayableInline(
      videos[i],
      !videos[i].hasAttribute("muted"),
      !everywhere
    );
    enableButtons(videos[i]);
    debugEvents(videos[i]);
  }
}




$("#ratingVideo").on("ended", function () {
  // debugger;
  $("#EndData").val("1");
  //$(".hand span").removeAttr("style");
  /*To show hide play button at the end of video*/
  if (clickValue == 1) {
    $(".play").hide();
  } else {
    $(".play").show();
  }
  /*To show hide play button at the end of video*/

  // setTimeout(function () {
  //   if ($("#EndData").val() == 1 && $("#clickval").val() == 1) {
  //     $("#forwardbutton").show();
  //   } else {
  //     $(".errormsg").show();
  //   }
  // }, 500);
  if (ourArr == "") {
    $(".play").show();
    ourArr = [];
  }
});
$("#ratingVideo").on("play", function () {
  ourArr = [];
  recordVal = [];
  $("#EndData").val("0");
  $("#clickval").val("0");
  clickValue = 0;
  currentId = defaultrate;
});

  
  var minutesData;
  var timeout;
  $(".errormsg").hide();
  $("#ratingVideo").on("playing pause", function (e) {
    var v = this;
    clearTimeout(timeout);
    minutesN = v.currentTime.toString().split(".")[0];

    performaction(minutesN, v.duration);
    if (e.type === "playing") {
      // debugger;
      $(".hand:first-child > span").css("animation-name", "spin1");

      $(".hand:last-child > span").css("animation-name", "spin2");

      setTimeout(function () {
        timeout = setInterval(function () {
          minutes = v.currentTime.toString().split(".")[0];
          var minutesData = minutes;
          // console.log("minutes", minutes);
          performaction(minutes, v.duration);
        }, 1000);
      }, 100);
    }

  });

  function performaction(currentTime, duration) {
    recordVal.push(currentTime + ":" + currentId);
    recoreddata(recordVal);
 

    setCircleTo(currentTime,'pc');

    function setCircleTo(percent,circleId){
      if(percent > 0){
          $('#circle_'+circleId).show();
      }
      var path = $('#circle_'+circleId).get(0);
      var pathLen = path.getTotalLength();
      var adjustedLen = percent * pathLen / 15;
      path.setAttribute('stroke-dasharray', adjustedLen+' '+pathLen);
    }


    $(".hand span").css({ "animation-duration": "" + currentTime + "s" });
    $(".timer-sec").text(currentTime);
    var vid = document.getElementById("ratingVideo");
    vid.ontimeupdate = function () {
      var percentage = (vid.currentTime / vid.duration) * 100;
      $("#custom-seekbar span").css("width", percentage + "%");
    };
  }
  
}

});