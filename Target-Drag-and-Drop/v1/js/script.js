// JavaScript Document
$(document).ready(function () {
  widgetData();

  function widgetData(){
    var countdown = 20;
  var Item = "Item";
  var of = "of";
  var start = "Start";
  var countdownText = "Countdown";
  var dropshowCode = "A|B|C|S";
  var bigImage = "";
  var drgArr = drgAttr.split("|");
  var randomIndx = [];
  var cnt = 0;
  var opt = [];
  dragCheck = false;
  var mousedown = { x: 0, y: 0 };
  var bigImage1 = bigImage.split("|");
  var precodeSplit = precode.split("|");
  var totalCount = drgArr.length;
  var timer = countdown;
  var widgetTitleArr = widgetTitle.split("|");
  var dropshowCode_ = dropshowCode.split("|");
  function checkURL(url) {
    return url.match(/\.(jpeg|jpg|png)$/) != null;
  }
  $.each(drgArr, function (index, arrValue) {
    randomIndx.push(precodeSplit[index]);
    // console.log(	$(".dots").text(arrValue))
  });
  if (parseInt(randomValue)) {
    shuffleArray(drgArr, randomIndx);
  }
  $(".row-of-icons").append('<div class="leftdiv"></div><div class="maindiv"> </div>');

  $(".wrapper").before(
    ' <div class="title-toll">\
	' +
      widgetTitleArr[0] +
      '\
  </div>\
  <div class="respondent-info">' +
      widgetTitleArr[1] +
      "</div>"
  );

  $(".wrapper").after(
    '  <div class="output-info"><b>Output</b>: ' + widgetTitleArr[2] + "</div>"
  );
  $(".maindiv").append(
    ' <div class="rightdiv" id="targetdiv"><div class="circleBoard"><div class="circle1"><div class="circle2"><div class="circle3"><div class="circle4"><div class="txtSpan"></div></div></div></div></div></div></div>'
  );

  countUpdate(cnt, totalCount);
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
  var cCount = 1;
  var dropped = false;
  var textDataArr = [];
  function dragItem() {
    $(".stmnt").draggable({
      revert: true,
      revertDuration: 100,
      start: function (e, ui) {
        // console.log($(this).width()-200)
       $(this).addClass("dots-arrow");
       //var arrowWidth=$(this).width()-200;
       //$(this).css({"width":arrowWidth})
        var textDta = $(this).text();
        textDataArr.push(textDta);
        if (textDta.length > 0) {
         $(this).text("");
        }
        else{
           $(this).text(textDataArr.at(-1));
        }
        dropped = false;
        dragCheck = true;
      },
      stop: function (e, ui) {
        dragCheck = false;
        $(this).removeClass("dots-arrow");
        $(this).text(textDataArr.at(-1));
      },
    });
    $("#targetdiv.rightdiv").droppable({
      drop: function (e, ui) {
        var posX = $(this).offset().left;
        var posY = $(this).offset().top;
        var buttonWidth = $(this).width();
        var buttonHeight = $(this).height();
        if (buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight;
        }
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        var offst = $(this).offset();
        var lftpos = e.pageX - parseInt(offst.left);
        var toppos = e.pageY - parseInt(offst.top);

        var lftPrcnt = parseInt(findPercentage(lftpos, $(this).width()));
        var topPrcnt = parseInt(findPercentage(toppos, $(this).height()));
        var ranges = outputvals(lftPrcnt, topPrcnt);
        //console.log("lftPrcnt",lftPrcnt,"topPrcnt",topPrcnt)
        if (ranges > 50) {
          //	debugger
          $(".dots").draggable({ revert: "valid" });
        } else {
       
          //	debugger
          if ($(ui.draggable[0]).hasClass("stmnt")) {
            var nlft = e.pageX - $(".lableTxt").offset().left - 100;
            var ntop = e.pageY - $(".lableTxt").offset().top - 50;
            // console.log($(this))
            $("#" + ui.draggable.attr("id")).animate(
              { left: nlft, top: ntop, opacity: 0 },
              100,
              function () {
                $(this).draggable("disable").hide();
                $(".circleEle .cirEle" + cCount).addClass("active");
                cCount++;
              }
            );
            cnt = cnt + 1;
            if (cnt >= totalCount) {
              //$(".lableTxt").remove();
            }
            $(".lableTxt")
              .find("span")
              .html(
                Item +
                  ' <span class="counter">' +
                  cnt +
                  "</span> " +
                  of +
                  " " +
                  totalCount
              );
            var arrayIndexForDropOption = ui.draggable
              .attr("id")
              .split("lbl")[1];
            arrayIndexForDropOption = parseInt(arrayIndexForDropOption) - 1;
            opt[arrayIndexForDropOption] = Math.round(ranges * 2);

            outputValues(opt);
            if (
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
            ) {
              $(this).append(
                "<div class='dots' style='left:" +
                  (lftPrcnt - 1) +
                  "%; top:" +
                  (topPrcnt - 1) +
                  "%;'></div>"
              );
            } else {

              $(this).append(
                "<div class='dots curent-hover' style='left:" +
                  (lftPrcnt - 1) +
                  "%; top:" +
                  (topPrcnt - 0) +
                  "%;'><div class='hover-effact'>" +
                  textDataArr.at(-1) +
                  "</div></div>"
              );
            }

            //  $(".curent-hover").hide();
            dragDots();
          } else {
            opt[randomIndx[cnt - 1] - 1] = Math.round(ranges * 2);
            outputValues(opt);
            $(".dots").draggable({ revert: "invalid" });
            if (
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
            ) {
              $(ui.draggable[0]).css({
                left: lftpos - mousedown.x,
                top: toppos - mousedown.y,
              });
            } else {
              $(ui.draggable[0]).css({
                left: lftpos - mousedown.x,
                top: toppos - mousedown.y,
              });
            }
          }
        }
      },
    });
  }
  function dragDots() {
    $(".dots")
      .draggable({
        containment: "parent",
        revert: true,
        revertDuration: 10,
      })
      .mousedown(function (e) {
        var _x = $(this).offset().left;
        var _y = $(this).offset().top;
        mousedown.x = e.pageX - _x;
        mousedown.y = e.pageY - _y;
      });
  }
  dragItem();

  function findPercentage(vals, outof) {
    return (vals / outof) * 100;
  }
  function countUpdate(count, totalCount) {
    var zindx = 50;
    var dvs = "";
    var circle = "";
    for (var i = 0; i < totalCount; i++) {
      var text = "";
      if (checkURL(drgArr[i])) {
        text =
          "<img src='" +
          drgArr[i] +
          "' style='position:relative;' data-path='" +
          bigImage1[i] +
          "'><div class='popupIcon' data-path='" +
          bigImage1[i] +
          "'></div>";
      } else {
        text = drgArr[i];
      }
      var dropIndex = dropshowCode_[i];
      dvs +=
        '<div class="stmnt" id="lbl' +
        randomIndx[i] +
        '" show-drop-value=' +
        dropIndex +
        ' style="z-index:' +
        zindx +
        ';position:absolute;">' +
        text +
        "</div>";
      zindx = zindx - 1;
      circle = circle + '<div class="cirEle cirEle' + (i + 1) + '"></div>';
    }

    // $(".leftdiv").html('<div class="lableTxt"><span>'+Item+' <span class="counter">'+(count)+'</span> '+of+' '+totalCount+'</span></div>'+dvs+"<div class='circleEle'>"+circle+"</div>");
    $(".leftdiv").html(
      '<div class="lableTxt"><span>' +
        Item +
        ' <span class="counter">' +
        count +
        "</span> " +
        of +
        " " +
        totalCount +
        "</span></div>" +
        dvs +
        ""
    );
    centrediv();
  }
  $(".stmnt").eq(0).addClass("profile");
  function outputvals(bases, hypotns) {
    return Math.sqrt(
      Math.pow(Math.abs(50 - bases), 2) + Math.pow(Math.abs(50 - hypotns), 2)
    );
  }
  function centrediv() {
    $(".txtSpan")
      .html(Brandtxt)
      .css("top", $(".rightdiv").css("height") + "px");
  }

  $(window).resize(function () {
    centrediv();
  });

  $(".stmnt .popupIcon").click(function () {
    if (!dragCheck) {
      if ($(this).hasClass("profileIcon")) {
        $(".wrapper.row-of-icons").append(
          "<div class='imagePopup profilePopup'><div class='imgBox'>" +
            "<span class='cross'></span></div></div>"
        );
        showPopup();
      } else {
        var path = $(this).attr("data-path");
        $(".wrapper.row-of-icons").append(
          "<div class='imagePopup'><div class='imgBox'><img src='" +
            path +
            "'><span class='cross'></span></div></div>"
        );
      }
    }
    $(".imagePopup .imgBox .cross").show(0);
    $(".imagePopup,.cross").click(function () {
      $(".imagePopup").remove();
    });
  });
  }

});

/*Poup data if pass image */
// function showPopup() {
//   // var elem =
//   //   "<p style='text-align:left;page-break-inside:auto;page-break-after:auto;page-break-before:avoid;line-height:100%;margin-top:0pt;margin-bottom:0pt;'></p><div><table cellspacing='0' style='border-collapse: collapse; '><tr style='height: 534.5333px'><td style='vertical-align:top;border-top-style:solid;border-top-color:#4eaaed;border-top-width:6pt;border-left-style:solid;border-left-color:#4eaaed;border-left-width:6pt;border-right-style:solid;border-right-color:#4eaaed;border-right-width:6pt;border-bottom-style:solid;border-bottom-color:#4eaaed;border-bottom-width:6pt;padding-left:14.1732283pt;padding-right:14.1732283pt;padding-top:7.086614pt;padding-bottom:7.086614pt;width:298.8px;'><p class='Normal--Web-' style='margin-top:0pt;margin-bottom:0pt;'><span style='color:#595959;font-family:Segoe Script;font-size:14pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>YOUR PERFECT QLAIRA® PATIENT PROFILE DESCRIPTION</span></p><br/><br/><ul type='disc' style='margin:0pt; padding-left:0pt'><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_1')^-years old </span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_2')^</span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_3')^</span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_4')^</span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_5')^</span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_6')^</span></li><br/><li class='List-Paragraph' style='-sf-number-width:10.86914pt;margin-left:28.86914pt;padding-left:7.13085938pt;text-indent:0pt;font-family:Arial;'><span style='color:#404040;font-family:Segoe Script;font-size:12pt;text-transform:none;font-weight:bold;font-style:normal;font-variant:normal;'>^f('PatientDetails_7')^</span></li><br/></ul></td></tr></table>";
//   $(".profilePopup .imgBox").append(elem);
//   $(".profilePopup .imgBox").addClass("profiletable");
// }
