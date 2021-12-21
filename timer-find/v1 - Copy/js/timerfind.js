// JavaScript Document
$(document).ready(function (e) {
  function timerFindData() {
    var resultArr = [];
    var Objwidth = 0;
    var Objheight = 0;
    var staticsVal = [];
    outputValue(staticsVal, $("#timeBtn").val());
    $(".mainWaper").append(
      ' <div class="parentWaper">\
    <div id="mainWaraperOverLap">\
    <div id="progressBlock">\
      <div id="imgLoadBlock">\
      <img src="images/loader.svg" width="180" height="64" alt="" />\
      </div>\
    </div>\
    </div>\
    <div id="mainWaraperOverLapPlay">\
    <div id="PlayBlock">\
      <div id="countText">&nbsp;</div>\
      <div id="playImgLoad">\
      <img src="images/playIcon.png" alt="" />\
      </div>\
    </div>\
    </div>\
    <div class="mainContner rateImg" id="img_01"></div>\
    <div class="buton"></div>\
  </div>'
    );
    $(".rateImg").css({
      background: "url(" + imgrate + ") no-repeat",
      width: imageWidth,
      height: imageHeight,
    });
    for (var i = 0; i < widthArr.length; i++) {
      staticsVal[i] = "0";
      Objwidth = widthArr[i];
      Objheight = heightArr[i];
      var leftPos = leftArr[i];
      var topPos = topArr[i];
      $(".mainContner").append(
        "<div id='ab" +
          i +
          "' rel='" +
          i +
          "' class='hotSpot' style='width:" +
          Objwidth +
          "px; height:" +
          Objheight +
          "px;top:" +
          topPos +
          "px; left:" +
          leftPos +
          "px; position:absolute; margin-bottom:10px; background:#999; float:left; border:1px solid #FFF;opacity:0.0;filter: alpha(opacity=0);-khtml-opacity: 0.0;-moz-opacity: 0.0;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';'></div>"
      );
    }
    $(".buton").html(
      '<input type="button" id="dntLike" class="activeCl" value="' +
        dislikeStr +
        '"/> <input type="button" id="dntLike2" class="activeCl2" value="' +
        dislikeStr2 +
        '"/> <div class="clearAll"></div><div class="timerBlock"><input type="button" id="timeBtn" value="0"></div>'
    );
    $(".buton").css("display", "none");
    $("#mainWaraperOverLapPlay").css("display", "none");

    $(".hotSpot").click(function () {
      $("#dntLike").removeClass("deactiveCl");
      $("#dntLike").addClass("activeCl");
      if (nSingleSelection == 1) {
        resultArr = [];
        removeSpots();
        var i = $(this).attr("rel");
        staticsVal[i] = "1";
        $("#" + $(this).attr("id") + "").css({
          background: "url(" + selectColor + ") center no-repeat",
          opacity: "1",
        });
      } else {
        $("#" + $(this).attr("id") + "").css({
          background: "url(" + selectColor + ") center no-repeat",
          opacity: "1",
        });
        var i = $(this).attr("rel");
        if (staticsVal[i] == "0") staticsVal[i] = "1";
        else {
          $("#ab" + i + "").css({ background: "#FFF", opacity: "0.0" });
          staticsVal[i] = "0";
        }
      }
      stoptimer();
      var time = $("#timeBtn").val();

      outputValue(staticsVal, time);
    });

    $("#dntLike").click(function () {
      resultArr = [];
      $(this).removeClass("activeCl");
      $(this).addClass("deactiveCl");
      var ttime = $("#timeBtn").val();
      removeSpots();
      outputValue(noneValue, ttime);
    });
    function removeSpots() {
      for (var j = 0; j < widthArr.length; j++) {
        $("#ab" + j + "").css({ background: "#FFF", opacity: "0.0" });
        staticsVal[j] = 0;
      }
    }

    (function ($) {
      $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data("toggleclicked", 0);
        this.click(function () {
          var data = $(this).data();
          var tc = data.toggleclicked;
          $.proxy(funcs[tc], this)();
          data.toggleclicked = (tc + 1) % 2;
        });
        return this;
      };
    })(jQuery);

    $("#dntLike2").clickToggle(
      function () {
        $(function () {
          $("#img_01").imageLens({ imageSrc: imgLarge, lensSize: 250 });
        });
        $(this).removeClass("activeCl2");
        $(this).addClass("deactiveCl2");
      },
      function () {
        $(this).removeClass("deactiveCl2");
        $(this).addClass("activeCl2");
        $(function () {
          $("#as").remove();
        });
      }
    );
  }

  timerFindData();
});

var timId;

function CounterTime() {
  timId = setInterval(starttimer, 1000);

  $("#playImgLoad").click(function () {
    $("#mainWaraperOverLapPlay").css("display", "none");
    $(".mainContner").css("display", "inline-block");
    $(".buton").css("display", "block");
    startTime();
    if (noneValue == "") {
      $("#dntLike").removeClass("activeCl");
      $("#dntLike").addClass("dntLikeN");
    }
  });
}
var millisec = 0;
var seconds = 0;
var timer;
function display() {
  if (millisec >= 9) {
    millisec = 0;
    seconds += 1;
  } else millisec += 1;
  var MS = Math.floor(Math.random() * 10);
  var str = seconds + "." + millisec + "" + MS;
  $("#timeBtn").val(str);
  timer = setTimeout("display()", 100);
}

function starttimer() {
  if (timer > 0) {
    return;
  }
  display();
}
function stoptimer() {
  clearTimeout(timer);
  timer = 0;
}
function startstoptimer() {
  if (timer > 0) {
    clearTimeout(timer);
    timer = 0;
  } else {
    display();
  }
}

function resettimer() {
  stoptimer();
  millisec = 0;
  seconds = 0;
}

function starttimer() {
  timeCount -= 1;
  $("#countText").html(timeCount);
  if (timeCount == -1) {
    clearInterval(timId);
    $("#countText").remove();
    $("#playImgLoad").css("display", "block");
  }
}

function startTime() {
  display(); //console.log("ms:",ms);

  var d = new Date();
  count_new += d.getMilliseconds();
  milliscnd = (count_new / 1000 / 60).toFixed(2);
  $("#timeBtn").val(milliscnd);
}

$.fn.preloadImages = function (oneCallback, allCallback) {
  oneCallback = oneCallback || $.noop();
  allCallback = allCallback || $.noop();
  var len = this.length;
  var finishedCount = 0;
  var succeedCount = 0;
  var completeLoading = function (src, isSucceed) {
    finishedCount++;
    if (isSucceed) {
      succeedCount++;
    }
    oneCallback(isSucceed, finishedCount, len, src);

    if (finishedCount == len) {
      allCallback(succeedCount, len);
    }
  };
  this.each(function () {
    var _this = this;
    var imgLoad = new Image();
    $(imgLoad)
      .load(function () {
        completeLoading(_this, true);
      })
      .error(function () {
        completeLoading(_this, false);
      })
      .attr({ src: _this });
  });
};

// load image
$(function () {
  var imgList = [""];
  var galleryHtml = "";
  $(imgList).preloadImages(
    function (isSucceed, finishedCount, len, src) {
      //console.log("isSucceed,",isSucceed);console.log("finishedCount,",finishedCount);console.log("len,",len);console.log("src,",src);
      var per = parseInt((finishedCount / len) * 100);
      //$('#num').text(finishedCount + ' / '+len);
      //$('#num').text(finishedCount+'%');
      //alert(finishedCount);
      //$('#progress').css({width:per+'%'});
      if (isSucceed) {
        //galleryHtml+='<li><a target="_blank" href="'+src+'"><img src="'+src+'" alt=""/></a></li>';
      }
    },
    function (succeedCount, len) {
      $("#mainWaraperOverLap").css("display", "none");
      $("#mainWaraperOverLapPlay").css({
        display: "inline-block",
        width: imageWidth,
        height: imageHeight,
      });
      CounterTime();
    }
  );
});
