$(document).ready(function () {
  widget();
  
  function widget(){
    $(".video-container").append('<div class="panel videoPanel">\
    <div class="video-rating-panel">\
        <video playsinline preload="auto" id="ratingVideo"  src='+videoSource.split("|")[0]+'>\
  <source src='+videoSource.split("|")[0]+' type="video/mp4">\
  <source src='+videoSource.split("|")[1]+' type="video/webm">\
  <source src='+videoSource.split("|")[2]+' type="video/ogg">\
  <p>Your user agent does not support the HTML5 Video element.</p>\
  </video>\
        <div id="btnPlay" class="play"><div class="play-btn-inr"></div></div>\
    </div>\
    <div class="durationBlock">\
        <div class="remaingTimeBlock"><span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span></div>\
    </div>\
    <div class="ratingBlock" style="display:none;"></div>\
  </div>\
  <div class="panel labelPanel">\
    <div class="str-agree label-text"><div class="emo-label"><img src="images/Strongly_Agree.svg" alt="Very Interested"/></div></div>\
    <div class="agree  label-text"><div class="emo-label"><img src="images/Agree.svg" alt="Neutral"/></div></div>\
    <div class="neither_agree  label-text"><div class="emo-label"><img src="images/Neither_agree.svg" alt="not-interested"/></div></div>\
    <div class="disagree  label-text"><div class="emo-label"><img src="images/Disagree.svg" alt="not-interested"/></div></div>\
    <div class="strongly_Disagree  label-text"><div class="emo-label"><img src="images/Strongly_Disagree.svg" alt="not-interested"/></div></div>\
  </div>\
  <div class="panel sliderPanel">\
    <div id="pips-slider"></div>\
  </div>');
  $(".video-container").before('<div class="title-toll">'+widget_title+'</div> <div class="loader-overlay"><div class="loader">Loading...</div></div><div class="errormsg">'+errorMsg+'</div>')
  
    var ourArr = [];
    var prvValVideo;
    var currentValVideo; /*get current time of video*/
    var videos = document.querySelectorAll("video");
    var behavior = document.querySelector("#behavior");
    var currentId = 0;
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
      var playBtn = video.parentNode.querySelector(".play");
      var fullscreenButton = video.parentNode.querySelector(".fullscreen");
  
      if (playBtn) {
        playBtn.addEventListener("click", function () {
          $("#pips-slider").slider("enable");
          if (video.paused) {
            video.play();
            $(".play").hide();
            prvValVideo = 1;
          } else {
            video.pause();
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
      $("#EndData").val("1");
      $("#pips-slider").slider("disable");
  
      if (clickValue == 1) {
        $(".play").hide();
      } else {
        $(".play").show();
      }
      setTimeout(function () {
        if ($("#EndData").val() == 1 && $("#clickval").val() == 1) {
          $("#forwardbutton").show();
        } else {
          $(".errormsg").show();
        }
      }, 500);
    });
    $("#ratingVideo").on("play", function () {
      recordVal = [];
      $(".errormsg").hide();
      $(".ratingElement").removeAttr("style");
      $("#EndData").val("0");
      $("#clickval").val("0");
      clickValue = 0;
      currentId = defaultrate;
    });
  
    $(function () {
      var timeout;
      $(".errormsg").hide();
      $("#ratingVideo").on("playing pause", function (e) {
        var v = this;
        clearTimeout(timeout);
        minutesN = v.currentTime.toString().split(".")[0];
        performaction(minutesN, v.duration);
        if (e.type === "playing") {
          setTimeout(function () {
            timeout = setInterval(function () {
              minutes = v.currentTime.toString().split(".")[0];
              performaction(minutes, v.duration);
            }, 1000);
          }, 100);
        }
      });
  
      function performaction(currentTime, duration) {
        recordVal.push(currentTime + ":" + currentId);
        recoreddata(recordVal);
      }
    });
  
    $("#pips-slider")
      .slider({
        range: false,
        min: 1,
        max: 5,
        values: defaultrate,
        orientation: "vertical",
        step: 1,
        stop: function (event, ui) {
          $("#clickval").val("1");
          currentId = ui.value;
          clickValue = 1;
        },
        change: function (event, ui) {
          var lbloneval = $(".ui-slider-pip-selected .ui-slider-label").attr(
            "data-value"
          );
         
          if (lbloneval == 1) {
            $(".strongly_Disagree .emo-label").addClass("lbl-zom");
          } else {
            $(".strongly_Disagree .emo-label").removeClass("lbl-zom");
          }
          if (lbloneval == 2) {
            $(".disagree .emo-label").addClass("lbl-zom");
           } else {
            $(".disagree .emo-label").removeClass("lbl-zom");
          }
          if (lbloneval == 3) {
            $(".neither_agree .emo-label").addClass("lbl-zom");
          } else {
            $(".neither_agree .emo-label").removeClass("lbl-zom");
          }
          if (lbloneval == 4) {
            $(".agree .emo-label").addClass("lbl-zom");
            $(".neutral .emo-label").removeClass("lbl-zom");
          } else {
            $(".agree .emo-label").removeClass("lbl-zom");
          }
          if (lbloneval == 5) {
            $(".str-agree .emo-label").addClass("lbl-zom");
          } else {
            $(".str-agree .emo-label").removeClass("lbl-zom");
          }
        },
      })
      .slider("pips", {
        first: "label",
        last: "label",
        rest: "label",
        step: 1,
        labels: false,
        prefix: "",
        suffix: "",
      })
      .slider("float", {
        handle: true,
        pips: false,
        labels: false,
        prefix: "",
        suffix: "",
      });
    $("#pips-slider").slider("disable");
    $("#pips-slider").slider("value", defaultrate);
  
    function func() {
      var h = parseInt($("#ratingVideo").css("height"));
      $(".video-container .panel").css({ height: h + "px" });
      $(".str-agree").css({ top: 0 });
      $(".agree").css({ top: h / 4 - 10 });
      $(".neither_agree").css({ top: h / 2  - 10 });
      $(".disagree").css({ top: h / 2 + 100 });
      $(".strongly_Disagree").css({ top: h - 30 });
      //};
    }
    //func();
    $(window).resize(function () {
      func();
    });
    $(window).trigger("resize");
    $(".ui-slider-pip.ui-slider-pip-first").css("bottom", "1%");
    $(".ui-slider-pip.ui-slider-pip-last").css("bottom", "99%");
    $(".ui-slider-pip.ui-slider-pip-last .ui-slider-line").css("top", "30%");
    $(".ui-slider-pip.ui-slider-pip-first .ui-slider-line").css("top", "58%");
  
    var inter = setInterval(function () {
      if (document.readyState == "complete") {
        clearInterval(inter);
        $(".loader-overlay").remove();
        //func();
        $(".video-container").removeAttr("style");
        //	$(window).trigger("resize");
      }
    }, 100);
    var intera = setInterval(function () {
      var vid = document.getElementById("ratingVideo");
  
      if (vid.readyState == 3 || vid.readyState == 4) {
        //console.log("complete video")
        clearInterval(intera);
        func();
      }
    }, 100);
  }
});
