// JavaScript Document
var randomIndx = [];
var outputarr = [];
var flag = 0;
var randomStaticVal;
var leftmins = 8;
var topCmins = 9;
var svgWidth;
var svgheight;
var TBwidth;
var svgheightDIVD;
var endFlag;
var zindex;
var removeArr = [];
var flsrmv;
var svg =
  '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 217 45" style="enable-background:new 0 0 217 45;" xml:space="preserve"><style type="text/css">.st0{fill:#FFFFFF;}.st1{fill:#0080DC;}	.st2{fill:#DEDEDE;}</style><g><g id="Rectangle_3_3_"><g><rect x="1" y="1" class="st0" width="202" height="43"/></g><g><path class="st1" d="M202,2v41H2V2H202M204,0H0v45h204V0L204,0z"/></g></g><g id="Rectangle_3_copy_3_"><g><polygon class="st2" points="203,1.4 216,5.7 216,39.3 203,43.6"/></g><g><path class="st1" d="M204,2.8l11,3.7v32.1l-11,3.7V2.8 M202,0v45l15-5V5L202,0L202,0z"/></g></g></g></svg>';

var slider =
  '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 572 12" style="enable-background:new 0 0 572 12;" xml:space="preserve"><style type="text/css">.st01{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}</style><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="6" x2="572" y2="6"><stop  offset="0" style="stop-color:#82CC02"/>	<stop  offset="0.5" style="stop-color:#0F84D1"/><stop  offset="1" style="stop-color:#82CC02"/></linearGradient><polygon class="st01" points="570,0 570,5 2,5 2,0 0,0 0,5 0,7 0,12 2,12 2,7 570,7 570,12 572,12 572,7 572,5 572,0 "/></svg>';

$(document).ready(function () {
  statmentStr = statmentStr.split("|");
  $(".toolWapper").html(
    '<div class="fromTarget"><div class="setMiddle"><div class="blockElments margin_bottom" id="countdownList"> </div><div class="blockElments" id="statmentText"></div></div></div><div class="clearAll"></div><div class="toTarget">' +
      slider +
      '<div class="clickableArea"></div><div class="bottomRightNegative">' +
      legentText[1] +
      '</div><div class="BottomleftPosetive">' +
      legentText[0] +
      "</div></div>"
  );

  $(".loadingscreen").append(
    '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> <div></div> <div></div></div>'
  );

  flagParaCount = 0;
  endFlag = statmentStr.length;
  zindex = statmentStr.length;

  svgWidth = $(".clickableArea").width();
  svgheight = $(".clickableArea").height();
  TBwidth = $("#statmentText").width();
  svgheightDIVD = (svgheight - 20) / 2;

  $.each(statmentStr, function (index, arrValue) {
    randomIndx.push(index + 1);
  });
  if (parseInt(randomValue)) {
    shuffleArray(statmentStr, randomIndx);
  }
  function shuffleArray(array, indexArr) {
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
  Array.prototype.remove = function () {
    var what,
      a = arguments,
      L = a.length,
      ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  allcalculation(randomIndx, flag, endFlag);
  function allcalculation(randomIndxPara, flagPara, endFlagPara) {
    outputValues(outputarr);
    $("#statmentText").html(" ");

    $("#countdownList").html(
      '<div class="countBox">Item <span class="dcounter">' +
        flagPara +
        "</span> of " +
        statmentStr.length +
        "<div>"
    );
    for (var i = 0; i < statmentStr.length; i++) {
      $("#statmentText").append(
        '<div class="borderBox" data-move="' +
          randomIndxPara[i] +
          '"; id="movetext' +
          randomIndxPara[i] +
          '" style="z-index:' +
          zindex +
          '">' +
          svg +
          '<span class="textValue">' +
          statmentStr[i] +
          "</span></div>"
      );
      $(".clickableArea").append(
        '<div class="knob" data-info="' +
          randomIndxPara[i] +
          '" id="spot' +
          randomIndxPara[i] +
          '">'
      );
      zindex = zindex - 1;
    }

    $(".knob").click(function () {
      var currentRemoveId = $(this).attr("id").split("t")[1];
      var currentdataInfo = $(this).attr("data-info");
      if (currentRemoveId == flsrmv) {
        endFlagPara = endFlagPara + 1;
        flagParaCount = flagParaCount - 1;
        $(this).hide();
        $("#countdownList")
          .show()
          .html(
            '<div class="countBox">Item <span class="dcounter">' +
              flagParaCount +
              "</span> of " +
              statmentStr.length +
              "<div>"
          );
        $("#movetext" + currentRemoveId).animate(
          { left: 0, top: "45px", opacity: 1 },
          1,
          function () {
            $(this).show();
          }
        );
        flagPara = flagPara - 1;
        randomStaticVal = currentRemoveId;
        outputarr[randomStaticVal - 1] = "";
        outputValues(outputarr);
        removeArr.remove(currentdataInfo);
      }
    });
    $(".knob").hide();
    $("#dicsCount").html(randomIndxPara[flagPara]);
    $(".clickableArea").bind("click", function (e) {
      if (e.target !== this) return;

      if (!endFlagPara == 0) {
        var posX = $(this).offset().left,
          posY = $(this).offset().top,
          buttonWidth = $(this).width(),
          buttonHeight = $(this).height();
        $(this).prepend("<span class='ripple'></span>");
        // Make it round!
        if (buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight;
        }
        // Get the center of the element
        var x = e.pageX - posX - $(".knob").width() / 2;
        var y = e.pageY - posY - $(".knob").width() / 2;
        // Add the ripples CSS and start the animation
        $(".ripple")
          .css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + "px",
            left: x + "px",
          })
          .addClass("rippleEffect");

        endFlagPara = endFlagPara - 1;
        var offsetParent = $(this).parent().parent().parent().offset();
        var offsetParentX = e.pageX - offsetParent.left;
        var offsetParentY = e.pageY - offsetParent.top;

        var offst = $(this).offset();
        var lftpos = e.pageX - parseInt(offst.left);
        var toppos = e.pageY - parseInt(offst.top);

        var lftPrcnt = parseInt(findPercentage(lftpos, $(this).width()));
        var topPrcnt = parseInt(findPercentage(toppos, $(this).height()));
        var _left = lftpos - $(".knob").width() / 2;
        _left = 0 > _left ? 2 : _left;
        _left =
          _left > $(this).width() - 30
            ? $(this).width() -
              $("#spot" + randomIndxPara[flagPara]).width() -
              6
            : _left;
        //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#spot" + randomIndxPara[flagPara])
          .show()
          .attr("title", statmentStr[flagPara])
          .css({ left: _left + "px" });
        $(".knob").tipsy({ gravity: "s" });
        var rangesdata = Math.abs(lftPrcnt).toFixed(0);
        randomStaticVal = randomIndxPara[flagPara];

        outputarr[randomStaticVal - 1] = rangesdata;
        outputValues(outputarr);
        $(".ripple").remove();
        flagParaCount = flagParaCount + 1;

        if (flagParaCount >= statmentStr.length + 1) {
          //$("#countdownList").hide();
        }
        $("#countdownList").html(
          '<div class="countBox">Item <span class="dcounter">' +
            flagParaCount +
            "</span> of " +
            statmentStr.length +
            "<div>"
        );
        var spot =
          $("#spot" + randomIndxPara[flagPara]).offset().left -
          $("#movetext" + randomIndxPara[flagPara]).offset().left;
        var _w1 = $("#movetext" + randomIndxPara[flagPara]).width() / 2;
        var _w2 = $("#spot" + randomIndxPara[flagPara]).width() / 2;
        var leftAni = spot - _w1 + _w2;
        $("#movetext" + randomIndxPara[flagPara])
          .addClass("zoom")
          .animate(
            {
              left: leftAni,
              top: offsetParentY - 10,
              opacity: 0,
              transform: "scale(0)",
            },
            500,
            function () {
              $(this).hide();
            }
          );
        removeArr.push(randomIndxPara[flagPara]);
        flsrmv = randomIndxPara[flagPara];
        flagPara = flagPara + 1;
        e.preventDefault();
      }
    });
  }
  function findPercentage(vals, outof) {
    return (vals / outof) * 100;
  }
  Array.prototype.remove = function (value) {
    this.splice(this.indexOf(value), 1);
    return true;
  };

  var inter = setInterval(function () {
    if (document.readyState == "complete") {
      clearInterval(inter);
      $(".loadingscreen").hide(0);
    }
  }, 10);
});
