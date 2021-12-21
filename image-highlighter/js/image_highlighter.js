$(window).load(function () {
  var wdth_ = wdth;
  var hght_ = hght;
  var phrase_ = phrase.split("|");
  var phraseLen_ = phrase_.length;

  $(".high-btn-container").append(
    '\
    <div class="img_outer_block">\
        <div class="image_block"><img /></div>\
    </div>'
  );

  $(".image_block")
    .css({ height: hght_, width: wdth_ })
    .find("img")
    .attr("src", imageSrc);

  for (var i = 0; i < phraseLen_; i++) {
    if (phrase_[i].indexOf(",") != -1) {
      var getArray = phrase_[i].split(",");
      var getArrayLen = getArray.length;
      for (var j = 0; j < getArrayLen; j++) {
        var singlePhrase = getArray[j].split(":");
        var phrase_x1 = singlePhrase[0];
        var phrase_y1 = singlePhrase[1];
        var phrase_x2 = singlePhrase[2];
        var phrase_y2 = singlePhrase[3];

        $(".image_block").append(
          "<div class='initial notDefined phrase_" +
            i +
            " phraseGrp_" +
            j +
            "' group='yes' groupId = " +
            i +
            "></div>"
        );
        $(".phrase_" + i + "" + ".phraseGrp_" + j).css({
          left: phrase_x1 + "px",
          top: phrase_y1 + "px",
          width: phrase_x2 + "px",
          height: phrase_y2 + "px",
        });
      }
    } else {
      var singlePhrase = phrase_[i].split(":");

      var phrase_x1 = singlePhrase[0];
      var phrase_y1 = singlePhrase[1];
      var phrase_x2 = singlePhrase[2];
      var phrase_y2 = singlePhrase[3];

      $(".image_block").append(
        "<div class='initial notDefined phrase_" + i + "'></div>"
      );

      $(".phrase_" + i).css({
        left: phrase_x1 + "px",
        top: phrase_y1 + "px",
        width: phrase_x2 + "px",
        height: phrase_y2 + "px",
      });
    }
  }

  $(".initial").hover(
    function () {
      var gid = $(this).attr("groupid");
      $(".initial[groupid='" + gid + "']")
        .not(".green")
        .not(".red")
        .addClass("hover");
    },
    function () {
      var gid = $(this).attr("groupid");
      $(".initial[groupid='" + gid + "']").removeClass("hover");
    }
  );

  $(".initial").click(function () {
    var element = $(this);
    var checkmark = false;
    checkmark = checkForGroup($(this));
    var groupAttr;

    if (checkmark) {
      groupAttr = $(this).attr("groupId");
      $("[groupId = " + groupAttr + "]").removeClass("hover");
      //  console.log(groupAttr);

      if (element.hasClass("noClick") || element.hasClass("notDefined")) {
        $("[groupId = " + groupAttr + "]").removeClass("noClick");
        $("[groupId = " + groupAttr + "]").removeClass("notDefined");
        $("[groupId = " + groupAttr + "]").addClass("green");
      } else if (element.hasClass("green")) {
        $("[groupId = " + groupAttr + "]").removeClass("green");
        $("[groupId = " + groupAttr + "]").addClass("red");
      } else if (element.hasClass("red")) {
        $("[groupId = " + groupAttr + "]").removeClass("red");
        $("[groupId = " + groupAttr + "]").addClass("noClick");
      }

      var gid = $(this).attr("groupid");
      if (!$(this).hasClass("red") && !$(this).hasClass("green")) {
        $(".initial[groupid='" + gid + "']")
          .not(".green")
          .not(".red")
          .addClass("hover");
      }
    } else {
      if (element.hasClass("noClick") || element.hasClass("notDefined")) {
        element.removeClass("noClick");
        element.removeClass("notDefined");
        element.addClass("green");
      } else if (element.hasClass("green")) {
        element.removeClass("green");
        element.addClass("red");
      } else if (element.hasClass("red")) {
        element.removeClass("red");
        element.addClass("noClick");
      }
    }

    getOutPut();
  });

  function checkForGroup(currentOption) {
    if (currentOption.attr("group")) {
      return true;
    }
  }

  function getOutPut() {
    var noCLickArr = [];
    var greenArr = [];
    var redArr = [];

    for (var k = 0; k < phraseLen_; k++) {
      if ($(".phrase_" + k).hasClass("noClick")) {
        noCLickArr.push(k + 1);
      } else if ($(".phrase_" + k).hasClass("green")) {
        greenArr.push(k + 1);
      } else if ($(".phrase_" + k).hasClass("red")) {
        redArr.push(k + 1);
      }
    }

    receiveOutPut(noCLickArr, greenArr, redArr);
  }
});
