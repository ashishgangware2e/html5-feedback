$(document).ready(function () {
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
        [i] +"><div class='removepoint c'>" +textLetterArr[i] +"</div><div class='navbar-text'>" + NavBlocTextArr[i] +"</div><div class='down-line'></div></div>"
    );
  }
  $(".blocking-area").after('<div class="clearAll" style="height:5px;"></div>');
  $(".heading").after('<div class="clearAll" style="height:5px;"></div>');

  var sliderChange = 95;
  $(".removepoint.c").each(function (a) {
    $(this).css("background-color", scolor[a]);
    $(this).css("border", "1px solid "+borderColor_[a]+"" );
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
        var PosY = (100 - top) * (dropHght_ / 100) - dragHght_ / 2;
        var newPosY = PosY + dropTop_;
        var sliderVal = sliderChange / 100;
        $("#droppable").append(
          '<div class="opacityCss point1" style="color:'+borderColor_[val+1]+'; border:1px solid '+borderColor_[val+1]+'; z-index:1;opacity:' + sliderVal +";background:" +  scolor[val+1] +';"  id=' + gloablCounter + ' title="' + eachTitle +'">' +
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
