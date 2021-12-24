$(document).ready(function () {
  function widgetData() {
    statmentStrArr = statmentStr.split("|");
    StatmentCodeArr = StatmentCode.split("|");
    var topCountStrArr = topCountStr.split("|");
    zindex = StatmentCodeArr.length;
    border_top = StatmentCodeArr.length;
    border_left = StatmentCodeArr.length;
    var flagCount = 0;
    flagParaCount = 1;
    var outputarr = [];
    var backOutputarr = [];
    $(".toolWapper").html(
      '<div class="target-row stmt-row clearfix"><div class="setMiddle"><div class="blockElments" id="statmentText"></div></div></div><div class="blockElments margin_bottom" id="countdownList"> </div><div class="target-row drp-zone clearfix"><div class="bottomRightNegative">' +
        legentText[1] +
        '</div><div class="toTarget y-axis"><div class="midset clearfix"><div class="clickableArea"><div class="bdr-clr"></div><div class="noClickSpace"></div></div></div></div><div class="clearAll"></div><div class="BottomleftPosetive">' +
        legentText[0] +
        "</div></div>"
    );

    $("#countdownList").html(
      '<div class="countBox">' +
        topCountStrArr[0] +
        ' <span class="count-number">' +
        0 +
        "</span></div>"
    );
    // var IndexData = StatmentCodeArr[0];

    for (var i = 0; i < statmentStrArr.length; i++) {
      $("#statmentText").append(
        '<div class="borderBox" data-index="' +
          i +
          '" sequenceno="' +
          StatmentCodeArr[i] +
          '" id="movetext_' +
          StatmentCodeArr[i] +
          '" style="z-index:' +
          zindex +
          "; top: " +
          border_top +
          "px; left:" +
          border_left +
          'px " >' +
          statmentStrArr[StatmentCodeArr[i] - 1] +
          "</div>"
      );
      zindex = zindex - 1;
      border_top = border_top - 5;
      border_left = border_left + 5;
    }

    var ends = true;
    var firstclick = true;
    $(".clickableArea, .bdr-clr").bind("click", function (e) {
      if (e.target !== this) return;
      if (!$(".borderBox").length == 0 && ends == true) {
        if (backpunch != true) {
          ends = false;
        }

        //moving Positions
        var offsetParent = $(".borderBox:first").offset(); //toolwrapper
        var offsetParentWidth = $(".borderBox:first").width() / 2; //toolwrapper
        var offsetParentX = e.pageX - (offsetParent.left + offsetParentWidth);
        var offsetParentY = e.pageY - offsetParent.top;

        //Click Positions
        var offst = $(this).offset();
        var toppos = e.pageY - parseInt(offst.top);

        var currentStatementdata = $(".borderBox:first")
          .attr("id")
          .split("_")[1];
        var cindeData = $(".borderBox:first").attr("data-index");
        var IndexData = $(".borderBox:first").attr("sequenceno");
        var currentStatementText = $(".borderBox:first").text();

        var dropedArea = $(".clickableArea").height();
        var output =
          Number(0) +
          Number(Math.round(((100 - 0) / dropedArea) * (toppos - 5)));
        output = changeoutput(output);
        var topPrcntNew =
          Number(0) +
          Number(Math.round(((100 - 0) / dropedArea) * (toppos - 5)));
        var backOutput = topPrcntNew;
        var topval = 0;
        if (output <= 15) {
          topval = output - 5;
        } else if (output > 85) {
          topval = output - 13;
        } else {
          topval = output - 8;
        }
        // console.log("output", output);
        // console.log("topval", topval);

        $(".clickableArea").append(
          '<div class="knob" data-index="' +
            flagCount +
            '" data-drag="' +
            currentStatementdata +
            '" title="' +
            currentStatementText +
            '" style="left:-12px; top:' +
            topval +
            '%"><div class="strRotate"> <span class="current_text" id="id' +
            cindeData +
            '">' +
            currentStatementText +
            "</span></div></div>"
        );

        if (backpunch != true) {
          $(".borderBox:first").animate(
            { left: 0, top: offsetParentY, opacity: 0 },
            500,
            function () {
              $(".borderBox:first").remove();
            }
          );
        } else {
          $(".borderBox:first").remove();
        }

        flagCount += 1;
        flagParaCount = flagParaCount + 1;

        if (flagParaCount >= statmentStrArr.length + 1) {
          $("#countdownList").remove();
        }
        $("#countdownList").html(
          '<div class="countBox">' +
            topCountStrArr[0] +
            ' <span class="count-number">' +
            (flagParaCount - 1) +
            "</span><div>"
        );
        if (firstclick) {
          outputarr = ["", "", "", "", ""];
          outputValues(outputarr, outputarr);
          firstclick = false;
        }

        outputarr[IndexData - 1] = 100 - output;
        backOutputarr[IndexData - 1] = backOutput.toFixed(2);
        outputValues(outputarr, backOutputarr);

        setTimeout(function () {
          ends = true;
        }, 500);
        e.preventDefault();
      }

      var boxWidth = $(".bdr-clr").width();
      $(".strRotate").css({ width: boxWidth - 46 + "px" });

      $(".knob").draggable({
        containment: ".toTarget",
        axis: "y",
        drag: function (event, ui) {
          var curntIndex = $(this).attr("data-index");
          var dropedArea = $(".clickableArea").height();
          var toppos = $(this).position().top;

          var output =
            Number(0) +
            Number(Math.round(((100 - 0) / dropedArea) * (toppos + 15)));

          output = changeoutput(output);

          if (output >= 100) {
            output = 99;
          }

          outputarr[curntIndex] = 100 - output;
          backOutputarr[curntIndex] = toppos.toFixed(2);
          // console.log("output", output);
          // console.log("top", toppos);

          // if (100 - output <= 5) {
          //   outputarr[$(this).attr("data-index")] = 1;
          // } else if (100 - output <= 5) {
          //   outputarr[$(this).attr("data-index")] = 1;
          // }

          outputValues(outputarr, backOutputarr);
        },
        stop: function (event, ui) {
          //   /  debugger
          var l =
            100 *
              parseFloat(
                $(this).position().left / parseFloat($(this).parent().width())
              ) +
            "%";
          // var t =
          //   100 *
          //     parseFloat(
          //       $(this).position().top / parseFloat($(this).parent().height())
          //     ) +
          //   "%";
          var t = 0 + "%";
          if (100 - output <= 10) {
            t = 1 + "%";
          } else if (output >= 100) {
            t = 98;
          } else {
            t = 100 - output + "%";
          }

          $(this).css("left", l);
          $(this).css("top", t);

          var curntIndex = $(this).attr("data-index");
          var dropedArea = $(".clickableArea").height();
          var toppos = $(this).position().top;

          var output =
            Number(0) +
            Number(Math.round(((100 - 0) / dropedArea) * (toppos + 15)));

          output = changeoutput(output);

          outputarr[$(this).attr("data-index")] = 100 - output;
          backOutputarr[$(this).attr("data-index")] = Number(output).toFixed(2);

          if (100 - output <= 5) {
            outputarr[$(this).attr("data-index")] = 1;
            backOutputarr[$(this).attr("data-index")] = 99;
          }
          outputValues(outputarr, backOutputarr);
        },
      });
    });

    function changeoutput(output) {
      if (output >= 100) {
        output = 100;
      } else if (output <= 0) {
        output = 0;
      }
      return output;
    }

    function findPercentage(vals, outof) {
      return (vals / outof) * 100;
    }

    if (backpunch == true) {
      var outPutVal_ = outputVal.split("|");
      var backpunchVal_ = backpunchVal.split("|");
      outputarr = ["", "", "", "", ""];
      backOutputarr = ["", "", "", "", ""];
      outputValues(outputarr, backOutputarr);

      outPutVal_.forEach(function (e, i) {
        $(".clickableArea").click();
        $("[data-drag=" + StatmentCodeArr[i] + "]").css(
          "top",
          backpunchVal_[StatmentCodeArr[i] - 1] + "%"
        );

        outputarr[StatmentCodeArr[i] - 1] = e;
        backOutputarr[StatmentCodeArr[i] - 1] = backpunchVal_[i];

        outputValues(outputarr, backOutputarr);
      });
    }

    $(window).resize(function () {
      height();
    });
  }
  widgetData();
});

$(window).load(function () {
  function height() {
    $(".borderBox").height("auto");
    var h = 0;
    $(".borderBox").each(function () {
      var ch = $(this).height();
      if (h < ch) {
        h = ch;
      }
    });

    $(".borderBox").height(h);
  }

  height();
});
