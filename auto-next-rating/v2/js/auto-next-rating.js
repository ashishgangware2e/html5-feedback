$(document).ready(function () {
  var imgAttr = imgstr.split("|");
  var textAttr = textstr.split("|");
  var rateAttr = ratestr.split("|");
  var diffBgColor = listbgColor.split("|");
  var indexAttr = [];
  var outputStr = [];
  var infoTitile_=infoTitile.split("|");

  for (var r = 0; r < imgAttr.length; r++) {
    indexAttr[r] = r + 1;
    outputStr[r] = "";
  }

  $(".mainDiv").before('    <div class="title-toll">'+infoTitile_[0]+'</div><div class="respondent-info">'+infoTitile_[1]+'</div>');
  $(".mainDiv").after(' <div class="output-info"><b>Output</b>: '+infoTitile_[2]+'</div>');

  //alert(outputStr.length)
  $(".mainDiv").css({ width: MainWidth + "px", height: MainHeight + "px" });

  $(".mainDiv").html(
    '<div class="Ratinglist"><ul class="clearfix"></ul></div><div class="clearAll"></div><div class="imagesBlock clearfix"><span></span></div><div class="clearAll"></div><div class="textStatment" style="background:' +
      statmentBgColor +
      '"></div>'
  );

  if (showText == "0") {
    $(".textStatment").css("display", "none");
    $(".imagesBlock").css("bottom", "10px");
  }

  if (showImage == "0") {
    $(".imagesBlock").css("display", "none");
  }

  var arrayShuff = new Array();
  for (var i = 0; i < imgAttr.length; i++) {
    arrayShuff.push(i);
  }
  fisherYates(arrayShuff);
  function fisherYates(myArray) {
    var i = myArray.length,
      j,
      tempi,
      tempj;
    if (randomizationStr == "0") return false;
    if (i === 0) return false;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      tempi = myArray[i];
      tempj = myArray[j];
      myArray[i] = tempj;
      myArray[j] = tempi;
    }
  }
  var temp_skladby = new Array();
  for (i = 0; i < arrayShuff.length; i++) {
    temp_skladby.push(imgAttr[arrayShuff[i]]);
  }
  imgAttr = new Array();
  imgAttr = temp_skladby.slice(0);
  temp_skladby = new Array();
  for (i = 0; i < arrayShuff.length; i++) {
    temp_skladby.push(textAttr[arrayShuff[i]]);
  }
  textAttr = new Array();
  textAttr = temp_skladby.slice(0);
  temp_skladby = new Array();
  for (i = 0; i < arrayShuff.length; i++) {
    temp_skladby.push(indexAttr[arrayShuff[i]]);
  }
  indexAttr = new Array();
  indexAttr = temp_skladby.slice(0);

  for (var i = 0; i < rateAttr.length; i++) {
    var p = i + 1;
    $(".Ratinglist > ul").append(
      '<li  class="clickClass clickClassDesi push-down" id="' +
        p +
        '"><span style="width:' +
        listWidth +
        "px; height:" +
        listHeight +
        "px;  background:" +
        diffBgColor[i] +
        "; font-size:" +
        listFontSize +
        'px;">' +
        rateAttr[i] +
        "</span></li>"
    );
  }

  var showTranslation = (function () {
    var current = 0;
    var len = imgAttr.length;
    return function () {
      var direction = 1;
      if (current >= len) {
        $(".imagesBlock > span").remove();
        $(".Ratinglist > ul > li").removeClass("clickClass");
        $(".Ratinglist > ul > li").removeClass("push-down");
      }
      var sss = indexAttr[current];

      $(".imagesBlock > span").html(
        "<img class='sk" +
          indexAttr[current] +
          "' id='" +
          indexAttr[current] +
          "' src='images/" +
          imgAttr[current] +
          "' height='" +
          ViewImgSize +
          "px'>"
      );
      $(".sk" + indexAttr[current]).click(function () {
        // alert($(this).attr("src"));
      });
      //var getOutVal = indexAttr[current];
      //outputValue(getOutVal)
      current += direction;
      //alert(current);
    };
  })();

  var showTranslationText = (function () {
    var current = 0;
    var lenT = textAttr.length;
    return function () {
      var direction = 1;
      if (current >= lenT) {
        // $(".textStatment").remove();
        // //$(".Ratinglist > ul > li").removeClass('clickClass');
        // //$(".Ratinglist > ul > li").removeClass('push-down');
        $(".textStatment").text("Finish");
      } else {
        $(".textStatment").html(
          "<span class='a' style='color:" +
            statmentTextColor +
            "; font-size:" +
            statmentTextsize +
            "px;' id='" +
            indexAttr[current] +
            "'>" +
            textAttr[current] +
            "</span>"
        );
      }
      current += direction;
    };
  })();

  showTranslation();
  showTranslationText();

  //$(".imagesBlock > span").html("<img src='images/"+imgAttr[0]+"'>");
  $(".clickClassDesi").click(function (e) {
    var leftsetAnimation = MainWidth / 2;
    var topetAnimation = MainHeight - 100;
    var offset = $(this).parent().offset();
    var leftStr = e.clientX - offset.left - leftsetAnimation;
    var rightStr = e.clientY - offset.top;
    //alert(offset.left);
    var target = $("img").attr("id");
    var hitvalue = $(this).attr("id");

    output(target, hitvalue);
    $(".imagesBlock > span > img").animate(
      {
        left: leftStr,
        top: -topetAnimation,
        opacity: "0",
      },
      animationTime,
      function () {
        $(".imagesBlock > span > img").remove();
        $(".imagesBlock > span").html(showTranslation());
      }
    );

    $(".textStatment > span").animate(
      {
        left: leftStr,
        top: -topetAnimation,
        opacity: "0",
      },
      animationTime,
      function () {
        $(".textStatment > span").remove();
        $(".textStatment > span").html(showTranslationText());
      }
    );
  });

  function output(val1, val2) {
    outputStr[val1 - 1] = val2;
    outputValue(outputStr);
  }
  $(".push-down").click(function () {
    $(".push-down").removeClass("active");
    $(this).addClass("active");
  });
});
