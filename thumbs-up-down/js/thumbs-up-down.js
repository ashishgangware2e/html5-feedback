$(document).ready(function () {
  var titlesArr = titleStr.split("|");
  var thumImgArr = thumImgStr.split("|");
  var titleInfoArr = titleInfoStr.split("|");
  var largeImgStrArr = largeImgStr.split("|");

  var elementsthumb = "";

  $(".popup").append(
    '<div class="popup-container">\
  <div class="popup-inner">\
    <div class="popup-large-img">\
      <img src="images/large-img.png" />\
    </div>\
    <div class="btn-inner">\
      <div class="close-btn popup-close">close</div>\
    </div>\
  </div>\
</div>'
  );

  for (var i = 0; i < titlesArr.length; i++) {
    elementsthumb +=
      '<div class="thmbContner"> \
            <div class="thmbContner-inner" id="thumbID_' +
      i +
      '"> \
                <div class="thmbHeading"><div class="div-table"><div>' +
      titlesArr[i] +
      '</div></div></div> \
                <div class="brand-thumb"> \
                <img src="' +
      thumImgArr[i] +
      '" /> \
                <div class="rate-brand-img"> \
                    <div class="like-brand like-clr" data-index="thumbID_' +
      i +
      '"><img src="images/like-thumb.png"/></div> \
                    <div class="like-brand scale"><img src="images/scale-img.png" class="zoom"  data-src="' +
      largeImgStrArr[i] +
      '"/></div> \
                    <div class="like-brand dislike-clr" data-index="thumbID_' +
      i +
      '"><img src="images/dislike-thumb.png"/></div> \
                </div> \
                </div> \
                <div class="thumbInfo">' +
      titleInfoArr[i] +
      "</div> \
            </div> \
        </div> \
            ";
  }

  $("#bindDynamic").html(
    '<div class="row clearfix">' + elementsthumb + "</div>"
  );
  //console.log(elementsthumb);
  var current = $(this);
  $(".popup-close").click(function () {
    $(".popup-container").fadeOut();
  });
  $(".zoom").click(function () {
    var srcimg = $(this).attr("data-src");
    $(".popup-container img").attr("src", srcimg);
    $(".popup-container").fadeIn();
  });

  $(".like-clr").click(function () {
    var currentSelection = $(this).attr("data-index");
    $("#" + currentSelection).removeClass("dislike");
    $("#" + currentSelection).addClass("like");
    var arr = [];
    $(".thmbContner-inner").each(function () {
      if ($(this).hasClass("like")) {
        arr.push(1);
      } else if ($(this).hasClass("dislike")) {
        arr.push(2);
      } else {
        arr.push("");
      }
    });
    outputval(arr);
  });

  $(".dislike-clr").click(function () {
    var currentSelection1 = $(this).attr("data-index");
    $("#" + currentSelection1).removeClass("like");
    $("#" + currentSelection1).addClass("dislike");
    var arr = [];
    $(".thmbContner-inner").each(function () {
      if ($(this).hasClass("dislike")) {
        arr.push(2);
        //console.log(arr);
      } else if ($(this).hasClass("like")) {
        arr.push(1);
      } else {
        arr.push("");
      }
    });
    outputval(arr);
  });

  (function runOnetime() {
    var outputLength = titlesArr.length;
    var outputarr = [];
    outputarr.length = outputLength;
    outputval(outputarr);
  })();

  function heightCalc() {
    $(".thmbHeading,.thumbInfo").height("auto");
    var h = $(".thmbHeading").height();
    $(".thmbHeading").each(function () {
      var ch = $(this).height();
      //console.log(ch)
      if (ch > h) {
        h = ch;
      }
    });
    $(".thmbHeading").height(h);

    var bt = $(".thumbInfo").height();
    $(".thumbInfo").each(function () {
      var cbt = $(this).height();
      if (cbt > bt) {
        bt = cbt;
      }
    });
    $(".thumbInfo").height(bt);
  }
  heightCalc();

  $(window).resize(function () {
    heightCalc();
  });

  var loadImage = setInterval(function () {
    if (document.readyState == "complete") {
      clearInterval(loadImage);
      $(".loadingscreen").remove();
    }
  }, 100);
  $(".close-btn").click(function () {
    $(".close-btn").parent().parent().addClass("pp-effect");
  });

  $(".close-btn").click(function () {
    setTimeout(function () {
      $(".close-btn").parent().parent().removeClass("pp-effect");
    }, 900);
  });
});
