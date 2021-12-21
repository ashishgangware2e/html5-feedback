// JavaScript Document
$(window).load(function () {
  var rangeVal = range.split(",");
  var imagesArr = imgStr.split("|");
  var minmax = minmaxstr.split("|");
  var imagesArrNone = imgStr.split("|");
  var dragWH = dragWidthHeight.split("|");
  var initArr = [];
  var dragColorArr = dragColor.split("|");

  function init() {
    $(".title-toll").html('<p class="title-info">' + toptext + "</p>");
    $(".warpermain").html(
      '<div id="imgBlock"></div><div class="headingTop"><div class="headingOrg">' +
        headingOrg +
        '</div><div class="headingGra">' +
        headingGra +
        '</div></div><div class="dropHint"></div><div class="dropHintText">Brands to be droped on scale</div><div class="clearAll"></div><div class="droggAbleBlock"><div class="dropHere"><div class="dropFix"></div><div class="midShape"><div class="LeftShape"></div><div class="scaleLine"></div><div class="RightShape"></div></div></div></div><div class="ScalBlock">\
       \
        <div class="scalingLabel"></div> <div class="agree-block"><div class="agree">' +
        agreeText.split("|")[0] +
        '</div><div class="disagree">' +
        agreeText.split("|")[1] +
        "</div></div></div>"
    );
    setsVal();
  }
  init();

  function setsVal() {
    var totalWidt = $(".warpermain").width() - dragWH[0];
    $(".LeftShape,.RightShape").css("width", dragWH[0] / 2 + "px");
    $(".dropHere").css({ width: $(".warpermain").width() + "px" });
    $(".scaleLine").css({
      width: $(".warpermain").width() - dragWH[0] + "px",
      left: dragWH[0] / 2 + "px",
    });
    $(".scalingLabel").css({
      width: $(".warpermain").width() - dragWH[0] + 10 + "px",
    });
    var divOflevel = 0;
    //var divCalVal=0;
    for (var h = 0; h < rangeVal[1]; h++) {
      //divOflevel*h;
      $(".scalingLabel").append(
        '<span style="left:' +
          (divOflevel * h + 2) +
          'px"><e>|</e><i>' +
          (h + 1) +
          "</i></span>"
      );
      divOflevel = totalWidt / parseInt(rangeVal[1] - 1) + 0.5;
      //divOflevel*h;
    }

    var dropDiv = "";
    for (var i = 1; i <= 10; i++) {
      dropDiv +=
        '<div class="fixdiv" style="width:10%; text-align:center; height:10px; background:' +
        randomHsl() +
        '; float:left; margin-top:20px;">' +
        i +
        "</div>";
      initArr[i - 1] = i;
    }
    //$(".scalingLabel").append(dropDiv);

    function randomHsl() {
      return "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
    }

    function shuffleArray(d, m) {
      if (parseInt(randomizationVal)) {
        for (var c = d.length - 1; c > 0; c--) {
          var b = Math.floor(Math.random() * (c + 1));
          var a = d[c];
          var am = m[c];
          d[c] = d[b];
          m[c] = m[b];
          d[b] = a;
          m[b] = am;
        }
      }
      return { imArr: d, indxArr: m };
    }

    var dummyObj = shuffleArray(imagesArr, initArr);

    $(".lefttext").html(minmax[0]);
    $(".midtext").html(minmax[1]);
    $(".righttext").html(minmax[2]);

    var dragWHTop = 170 + parseInt(dragWH[1]);

    if (dragWH[0] == undefined || dragWH[0] == "") dragWH[0] = 60;
    if (dragWH[1] == undefined || dragWH[1] == "") dragWH[1] = 70;
    for (var i = 1; i <= dummyObj.imArr.length; i++) {
      var myArray = [];
      myArray[i - 1] = "";

      if (
        dummyObj.imArr[i - 1]
          .split("/")
          [dummyObj.imArr[i - 1].split("/").length - 1].split(".")[1] ==
          "jpg" ||
        dummyObj.imArr[i - 1]
          .split("/")
          [dummyObj.imArr[i - 1].split("/").length - 1].split(".")[1] ==
          "png" ||
        dummyObj.imArr[i - 1]
          .split("/")
          [dummyObj.imArr[i - 1].split("/").length - 1].split(".")[1] ==
          "jpeg" ||
        dummyObj.imArr[i - 1]
          .split("/")
          [dummyObj.imArr[i - 1].split("/").length - 1].split(".")[1] == "gif"
      )
        img_attr = "<img src='" + dummyObj.imArr[i - 1] + "'/>";
      else
        img_attr =
          "<span style='font-size:" +
          fnSize +
          "px; color:" +
          fnColor +
          ";'>" +
          dummyObj.imArr[i - 1] +
          "</span>";
      $("#imgBlock").append(
        "<div id=posi" +
          i +
          " class='dragThis' data-info='" +
          dummyObj.indxArr[i - 1] +
          "' style='top:" +
          dragWHTop +
          "px'><div class='tooltipval'>44</div><div class='listDiv' style='background:" +
          dragColorArr[dummyObj.indxArr[i - 1] - 1] +
          ";width:" +
          dragWH[0] +
          "px; height:" +
          dragWH[1] +
          "px;'>" +
          img_attr +
          "</div></div>"
      );
      dragWHTop = dragWHTop + (parseInt(dragWH[1]) + 3);
    }

    $(".dragThis").mousedown(function () {
      $(this).css("height", "auto");
      $(this).css("z-index", "11111");
    });
    $(".dragThis").mouseup(function () {
      $(this).css("z-index", "20");
    });
    $(".dragThis").draggable({
      containment: $(".dropFix"),
      snap: ".fixdiv",
      snapMode: "inner",
      snapTolerance: 10,
      stack: ".dragThis",
      scroll: false,

      drag: function () {
        var fixHeight = "396";
        var offset = $(this).offset();
        var myvar = $(".dropHere").offset();
        var dropx = myvar.left;
        var dropxTop = myvar.top;
        var xPos = Math.round(offset.left - dropx);
        var yPos = offset.top - dropxTop;
        var dropwidth = $(".ScalBlock").width();
        var heVal = fixHeight + yPos;
        var min = rangeVal[0];
        var max = rangeVal[1];
        var dragImg = $(this).attr("data-info");
        $(this)
          .animate({ height: fixHeight - yPos + 3 }, 0)
          .find(".listDiv")
          .addClass("borderShadow");

        //var output = Number(min) + Number(Math.round((max-min)/(dropwidth-dragWH[0])*xPos));
        var output =
          Number(min) + Number(((max - min) / (dropwidth - dragWH[0])) * xPos);

        //console.log(output.toFixed(2));
        //myArray[dragImg-1] = dragImg+":"+output;
        myArray[dragImg - 1] = output.toFixed(1);
        var outputStr = myArray.toString();
        if (showrateValue == "1") {
          $(this).find(".tooltipval").css("display", "block").html(output);
        }

        outputValue(outputStr);
        //$('#posB').val(myArray.toString());
        for (var i = 1; i <= imagesArr.length; i++) {
          $(".imgText").show();
        }
      },
      stop: function () {
        var fixHeight = "396";
        var offset = $(this).offset();
        var myvar = $(".dropHere").offset();
        var dropxTop = myvar.top;
        var yPos = offset.top - dropxTop;
        if (yPos < 100) {
          $(this).animate({ top: "199px", height: fixHeight - 100 + 3 }, 400);
        }
        if (yPos > 105) {
          $(this).animate({ height: fixHeight - yPos + 3 }, 0);
        }
      },
      revert: "invalid",
    });

    $(".dropHere").droppable({
      accept: ".dragThis",
      over: function () {},
    });
  }

  $(window).resize(function () {
    $(".warpermain").html("");
    init();
  });
});
