$(document).ready(function () {
  /*use for login */

  $(".heading").before(
    ' <div class="login">\
<div class="login-conatiner">\
<div class="login-inr">\
<div class="profile-container">\
<div class="profile"></div>\
</div>\
<div class="login-form" autocomplete="on">\
<div id="errorMsg">User/Password are wrong</div>\
<input type="text" class="topform" placeholder="Username" id="userId"><br>\
<input type="password" class="bottomform" placeholder="Password" id="passwordId"><br>\
<input type="submit" class="login-btn" value="Submit">\
</div>\
</div>\
</div>\
</div>'
  );
  if (login) {
    const loginIdPass_ = loginIdPass.split("|");

    $(".contantBlock , .heading").hide();
    $(".login-btn").on("click", function () {
      var VuserId = $("#userId").val();
      var VpasswordId = $("#passwordId").val();

      if (VuserId == loginIdPass_[0] && VpasswordId == loginIdPass_[1]) {
        //window.location.href='analyzerTool.html';
        $(".login").hide();
        $(".contantBlock ,.heading").show();
        $("body").css("background", "#FFF");
      } else {
        $("#errorMsg").show();
      }
    });
  } else {
    $(".login").remove();
  }
  /*end*/
  const headingSlideText_ = headingSlideText.split("|");

  $(".contantBlock").append(
    '<div class="left-nav">\
<div class="blocking-area">\
<div class="innr-area"></div>\
<div class="right-line"></div>\
</div>		\
<div class="sliderBlock">' +
      headingSlideText_[1] +
      '<div class="opacityLow">' +
      headingSlideText_[2] +
      '</div><div id="slider"></div><div class="opacityHigh">' +
      headingSlideText_[3] +
      '</div></div>\
</div>\
<div class="right-container">\
<div class="emoticonsBlock"><ul></ul></div>\
<div class="dropContaner">\
<div id="droppable" class="droppableArea">\
<div class="innerdiv" id="chartcontainer"></div>\
<div class="arrow-right"></div>\
<div class="arrow-top"></div>\
<div class="time">Time</div>\
</div>\
</div>\
</div>'
  );

  $(".contantBlock").before(
    '<div class="heading">' + headingSlideText_[0] + "</div>"
  );

  var options_ = options.split("|");
  var emoImagArr = emoImag.split("|");
  var NavBlocTextArr = NavBlocText.split("|");
  var textLetterArr = textLetter.split("|");

  var gloablCounter = 0;

  var scolor = selectedColor.split("|");
  var borderColor_ = borderColor.split("|");
  var sChar = selectedChar.split("|");

  for (let i = 0; i < emoImagArr.length; i++) {
    $(".emoticonsBlock > ul").append(
      "<li><img src=" + emoImagArr[i] + " /></li>"
    );
  }
  for (let i = 0; i < NavBlocTextArr.length; i++) {
    $(".innr-area").append(
      '<div class="topNavBlocking" data-index=' +
        [i] +
        "><div class='removepoint c'>" +
        textLetterArr[i] +
        "</div><div class='navbar-text'>" +
        NavBlocTextArr[i] +
        "</div><div class='down-line'></div></div>"
    );
  }
  // $(".blocking-area").after('<div class="clearAll" style="height:5px;"></div>');
  // $(".heading").after('<div class="clearAll" style="height:5px;"></div>');

  var sliderChange = 100;
  $(".removepoint.c").each(function (a) {
    $(this).css("background-color", scolor[a]);
    $(this).css("border", "1px solid " + borderColor_[a] + "");
    $(this).css("color", borderColor_[a]);
  });

  (function () {
    options_.forEach(function (element, i) {
      $(".selectOptions").append(
        "<option value=" + [i + 1] + ">" + element + "</option>"
      );
    });
  })();
  $(".down-line:first").addClass("acClass");
  $(".navbar-text:first").addClass("text-active");
  $(".removepoint:first").addClass("hide-checkbox");
  $(".topNavBlocking").click(function () {
    var val = $(this).attr("data-index");
    $(".down-line").removeClass("acClass");
    $(".navbar-text").removeClass("text-active");
    $(this).find(".down-line").addClass("acClass");
    $(this).find(".navbar-text").addClass("text-active");

    $(".point1").remove();
    gloablCounter = 0;
    if (val == "0") {
      LoopForVariables(options_);
    } else {
      SingleElement(val);
    }
  });

  function LoopForVariables(loopElement) {
    loopElement.forEach(function (element, i) {
      var optionVar = "opt" + i;
      setPosition(optionVar, i);
    });
  }
  //$(".topNavBlocking[data-index='0']").trigger("click");
  LoopForVariables(options_);

  function SingleElement(loopElement) {
    loopElement = loopElement - 1;
    var optionVar = "opt" + loopElement;
    setPosition(optionVar, loopElement);
  }

  function setPosition(variableName, val) {
    var variableName = eval(variableName);
    var variableNameSplit = variableName.split("~");

    var dropWidht_ = $("#droppable").width();
    var dragWidth_ = 20;
    var dropLeft_ = $("#droppable").offset().left;

    //variabled for top set
    var dropHght_ = $("#droppable").height();
    var dragHght_ = 20;
    var dropTop_ = $("#droppable").offset().top;

    variableNameSplit.forEach(function (eachValuea, index) {
      if (!eachValuea.length == 0) {
        eachValue = eachValuea.split("|")[0];
        eachTitle = eachValuea.split("|")[1];
        var left = eachValue.split(":")[0];
        var top = eachValue.split(":")[1];
        //set left
        var PosX = left * (dropWidht_ / 100) - dragWidth_ / 2;
        var newPosX = PosX + dropLeft_;

        //set top
        var PosY = (102 - top) * (dropHght_ / 100) - dragHght_ / 2;
        var newPosY = PosY + dropTop_;
        var sliderVal = sliderChange / 100;
        $("#droppable").append(
          '<div class="opacityCss point1" style="color:' +
            borderColor_[val + 1] +
            "; border:1px solid " +
            borderColor_[val + 1] +
            "; z-index:1;opacity:" +
            sliderVal +
            ";background:" +
            scolor[val + 1] +
            ';"  id=' +
            gloablCounter +
            ' title="' +
            eachTitle +
            '">' +
            sChar[val] +
            "</div>"
        );
        $("#" + gloablCounter).offset({ left: newPosX, top: newPosY });
        gloablCounter++;
      }
    });

    $(".opacityCss").tooltip();
  }

  window.addEventListener("resize", function () {
    $(".selectOptions").trigger("change");
  });

  $("#slider").slider({
    value: sliderChange,
    min: 0,
    max: 100,
    range: "min",
    slide: function (event, ui) {
      sliderChange = ui.value;
      $(".opacityCss").css({ opacity: sliderChange / 100 });
    },
  });
});
