// JavaScript Document
var randomIndx = [];
var outputarr = [];
var outputarr1 = [];
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
var flsrmv;

$(document).ready(function () {
  var _ItemOf = ItemOf.split("|"); //Work on class countBox

  statmentStr = statmentStr.split("|");
  $(".toolWapper").html(
    '<div class="fromTarget"><div class="setMiddle"><div class="blockElments margin_bottom" id="countdownList"></div><div class="blockElments" id="statmentText"></div></div></div><div class="toTarget"><div class="leftArrowLine"> </div><div class="bottomArrowLine"> </div><div class="clickableArea"><table class="xy-custom-grid"><tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr><tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr><tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr><tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr><tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td></tr></table></div><div class="leftTopPosetive">' +
      legentText[0] +
      '</div><div class="leftBottomNegative">' +
      legentText[1] +
      '</div><div class="bottomRightNegative">' +
      legentText[3] +
      '</div><div class="BottomleftPosetive">' +
      legentText[2] +
      '</div><div class="click-overlay"></div></div>'
  );

  flagParaCount = 1;

  endFlag = statmentStr.length;
  zindex = statmentStr.length;

  var leftPosition;
  var topPosition;

  var leftPositionOut;
  var topPositionOut;

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
  allcalculation(randomIndx, flag, endFlag);

  function allcalculation(randomIndxPara, flagPara, endFlagPara) {
    outputValues(outputarr, outputarr1);
    $("#statmentText").html(" ");

    $("#countdownList").html(
      '<div class="themeBox"></div><div class="countBox">' +
        _ItemOf[0] +
        " " +
        (flagPara + 1) +
        " " +
        _ItemOf[1] +
        " " +
        statmentStr.length +
        "<div>"
    );
    var svg =
      '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 217 45" style="enable-background:new 0 0 217 45;" xml:space="preserve"><style type="text/css">.st0{fill:#FFF}.st1{fill:#0080DC}.st2{fill:#DEDEDE}</style><g> <g id="Rectangle_3_3_"> <g> <rect x="14" y="1" class="st0" width="202" height="43"/> </g> <g> <path class="st1" d="M15,2h200v41H15V2 M13,0v45h204V0L13,0L13,0z"/> </g> </g> <g id="Rectangle_3_copy_3_"> <g> <polygon class="st2" points="14,43.6 1,39.3 1,5.7 14,1.4 			"/> </g> <g> <path class="st1" d="M13,2.8v39.5L2,38.6V6.5L13,2.8 M15,0L0,5l0,35l15,5V0L15,0z"/> </g> </g> </g> </svg>';

    for (var i = 0; i < statmentStr.length; i++) {
      $("#statmentText").append(
        '<div class="borderBox" id="movetext' +
          randomIndxPara[i] +
          '" style="z-index:' +
          zindex +
          '">' +
          svg +
          '<span class="stsTxt">' +
          statmentStr[i] +
          "</span></div>"
      );
      zindex = zindex - 1;
    }

    // $('.clickableArea').on('click', '.knob', function() {
    // 	alert("hii");
    // 	var currentRemoveId=$(this).attr("id").split("t")[1];
    // 	var currentdataInfo= $(this).attr("data-info");
    // 	if(currentRemoveId==flsrmv){
    // 	flagParaCount=flagParaCount-1;
    // 	$(this).hide();
    // 	$("#countdownList").show().html('<div class="themeBox"></div><div class="countBox">Item '+flagParaCount +" of "+ statmentStr.length+'<div>');
    // 	$("#movetext"+currentRemoveId).removeAttr("style").animate({"z-index":endFlagPara+1,opacity:1},1, function() {$(this).show()})
    // 	endFlagPara=endFlagPara+1;
    // 	flagPara=flagPara-1;
    // 	randomStaticVal=currentRemoveId;

    // 	outputarr[randomStaticVal-1]="";
    // 	outputarr1[randomStaticVal-1]="";
    // 	outputValues(outputarr, outputarr1);

    // 	}
    // 	$(".themeBox").html(theme+" : "+themeText);
    // });

    $("#statmentText .borderBox").hide(0);
    $("#statmentText .borderBox").eq(0).show(0);

    $("#dicsCount").html(randomIndxPara[flagPara]);

    $(".clickableArea")
      .unbind("click")
      .bind("click", function (e) {
        if ($(e.target).hasClass("knob")) return;

        if (!endFlagPara == 0) {
          $(".click-overlay").show();
          // Setup
          var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

          // Add the element
          $(this).prepend("<span class='ripple'></span>");

          // Make it round!
          if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
          } else {
            buttonWidth = buttonHeight;
          }

          // Get the center of the element
          var x = e.pageX - posX - buttonWidth / 2;
          var y = e.pageY - posY - buttonHeight / 2;

          // Add the ripples CSS and start the animation
          $(".ripple")
            .css({
              width: buttonWidth,
              height: buttonHeight,
              top: y + "px",
              left: x + "px",
            })
            .addClass("rippleEffect");

          var _left = 0;
          if (
            /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(
              navigator.userAgent
            )
          ) {
            _left = 80;
          }
          //hide
          endFlagPara = endFlagPara - 1;
          var offset = $(this).offset();
          var offsetParent = $(this).parent().parent().offset();
          // console.log("element::"+$(this).parent().parent().prop("class"));
          // console.log("e.pageX::"+e.pageX);
          // console.log("offsetParent.left::"+offsetParent.left);
          var offsetParentX = e.pageX - offsetParent.left;
          //console.log("offsetParentX::"+offsetParentX);
          var offsetParentY = e.pageY - offsetParent.top;
          var boxWidth = $(".borderBox").width() / 2;
          var boxHeight = $(".borderBox").height() / 2;
          //console.log("boxWidth::"+boxWidth);

          var leftClickPointOut = e.pageX - offset.left;

          var topClickPointOut = e.pageY - offset.top;

          leftPositionOut = (
            100 -
            ((svgWidth - leftClickPointOut) * 100) / svgWidth
          ).toFixed(0);
          topPositionOut = (
            100 -
            ((svgheight - topClickPointOut) * 100) / svgheight
          ).toFixed(0);

          var offst = $(this).offset();
          var lftpos = e.pageX - parseInt(offst.left);
          var toppos = e.pageY - parseInt(offst.top);

          var lftPrcnt = parseFloat(findPercentage(lftpos, $(this).width()));
          var topPrcnt = parseFloat(findPercentage(toppos, $(this).height()));

          if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          ) {
            $(".clickableArea").append(
              '<div class="knob" data-info="' +
                randomIndxPara[flagPara] +
                '" id="spot' +
                randomIndxPara[flagPara] +
                '" title="' +
                statmentStr[flagPara] +
                '" style="left:' +
                (lftPrcnt - 3.1) +
                "%; top:" +
                (topPrcnt - 2.5) +
                '%">'
            );
          } else {
            $(".clickableArea").append(
              '<div class="knob" data-info="' +
                randomIndxPara[flagPara] +
                '" id="spot' +
                randomIndxPara[flagPara] +
                '" title="' +
                statmentStr[flagPara] +
                '" style="left:' +
                (lftPrcnt - 1) +
                "%; top:" +
                (topPrcnt - 1) +
                '%">'
            );
          }
          $(".knob").tipsy({ gravity: "s", html: true });
          var rangesdata1 = Math.abs(leftPositionOut);
          var rangesdata2 = Math.abs(100 - topPositionOut);
          randomStaticVal = randomIndxPara[flagPara];

          outputarr[randomStaticVal - 1] = rangesdata1;
          outputarr1[randomStaticVal - 1] = rangesdata2;

          outputValues(outputarr, outputarr1);

          // show
          $("#movetext" + randomIndxPara[flagPara + 1]).show(0);

          $(".ripple").remove();
          flagParaCount = flagParaCount + 1;
          if (flagParaCount >= statmentStr.length + 1) {
            $("#countdownList").hide();
          }
          $("#countdownList").html(
            '<div class="themeBox"></div><div class="countBox">' +
              _ItemOf[0] +
              " " +
              flagParaCount +
              " " +
              _ItemOf[1] +
              " " +
              statmentStr.length +
              "<div>"
          );
          if (screen.width < 768) {
            $("#movetext" + randomIndxPara[flagPara]).animate(
              {
                left: offsetParentX - boxWidth + 80,
                top: offsetParentY - boxHeight,
                opacity: 0,
              },
              400,
              function () {
                $(this).hide();
              }
            );
            // $("#movetext"+randomIndxPara[flagPara]).animate({left:(offsetParentX-300+_left),top:offsetParentY-10,opacity:0},400, function() {$(this).hide();});
            setTimeout(function () {
              $(".click-overlay").hide();
            }, 400);
          } else {
            $("#movetext" + randomIndxPara[flagPara]).animate(
              {
                left: offsetParentX - boxWidth,
                top: offsetParentY - boxHeight,
                opacity: 0,
              },
              400,
              function () {
                $(this).hide();
              }
            );
            // $("#movetext"+randomIndxPara[flagPara]).animate({left:(offsetParentX-500+_left),top:offsetParentY-10,opacity:0},400, function() {$(this).hide()});
            setTimeout(function () {
              $(".click-overlay").hide();
            }, 400);
          }

          flsrmv = randomIndxPara[flagPara];
          flagPara = flagPara + 1;
          e.preventDefault();
        }
        $(".themeBox").html(theme + " : " + themeText);

        $(".knob")
          .unbind("click")
          .bind("click", function (e) {
            e.preventDefault();
            var currentRemoveId = $(this).attr("id").split("t")[1];

            var currentdataInfo = $(this).attr("data-info");
            if (currentRemoveId == flsrmv) {
              flagParaCount = flagParaCount - 1;
              $(this).remove();
              $("#countdownList")
                .show()
                .html(
                  '<div class="themeBox"></div><div class="countBox">' +
                    _ItemOf[0] +
                    " " +
                    flagParaCount +
                    " " +
                    _ItemOf[1] +
                    " " +
                    statmentStr.length +
                    "<div>"
                );
              $("#movetext" + currentRemoveId)
                .removeAttr("style")
                .animate(
                  { "z-index": endFlagPara + 1, opacity: 1 },
                  1,
                  function () {
                    $(this).show();
                  }
                );
              endFlagPara = endFlagPara + 1;
              flagPara = flagPara - 1;
              randomStaticVal = currentRemoveId;

              outputarr[randomStaticVal - 1] = "";
              outputarr1[randomStaticVal - 1] = "";
              outputValues(outputarr, outputarr1);
              $(".tipsy").remove();
            }
            $(".themeBox").html(theme + " : " + themeText);
            setTimeout(function () {
              $(".click-overlay").hide();
            }, 400);
          });
      });
  }

  function findPercentage(vals, outof) {
    return (vals / outof) * 100;
  }
  $(".themeBox").html(theme + " : " + themeText);
});
