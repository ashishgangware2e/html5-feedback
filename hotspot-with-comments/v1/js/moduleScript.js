$(document).ready(function () {
  
  $(".close").on("click", function (e) {
    console.log("error")
    e.stopPropagation();
    e.preventDefault();
    $(".myAlert-top").hide(0);
  });

  
  var position = { x: 0, y: 0 };
  var dX = 0,
    dY = 0;
  var likeImage = chooseLike.split("|");

  var smileType = [
    "Strong agree",
    "Agree",
    "Average",
    "Disagree",
    "Strong disagree",
  ];
  var buttonText =buttonTextArr.split("|");
  var emoticonColors=emoticonColorsArr.split("|");

  var element = document.getElementById("backimage");
  var elem =
    '<div id="dragArea" class="toolcontainer"><img id="backimage" src="images/starwars7.jpg"/><div class="dialog"><div class="arrow"></div><div class="section1"><div class="text"> '+emotionText+'</div>\
    <span class="likeBox likeBox1" data-like="1"></span><span class="likeBox likeBox2" data-like="2"></span><span class="likeBox likeBox3" data-like="3"></span><span class="likeBox likeBox4" data-like="4"></span><span class="likeBox likeBox5" data-like="5"></span></div><div class="section2"><div class="text">'+textareaText+'</div>\
    <textarea rows="3" cols="50" id="textarea"></textarea></div><div class="section3">\
    <input class="section3cancel" type="button" value='+buttonText[0]+'>\
    <input class="section3save" type="button" value='+buttonText[1]+'></div></div></div>';

  $(".toolwarper").html(elem);
  $(".likeBox1")
    .append(svg[parseInt(likeImage[0]) - 1])
    .attr("data-like", likeImage[0]);
  $(".likeBox2")
    .append(svg[parseInt(likeImage[1]) - 1])
    .attr("data-like", likeImage[1]);
  $(".likeBox3")
    .append(svg[parseInt(likeImage[2]) - 1])
    .attr("data-like", likeImage[2]);
  $(".likeBox4")
    .append(svg[parseInt(likeImage[3]) - 1])
    .attr("data-like", likeImage[3]);
  $(".likeBox5")
    .append(svg[parseInt(likeImage[4]) - 1])
    .attr("data-like", likeImage[4]);
  var This = "";
  $("#backimage").attr("src", backImage);
  $("#backimage").bind("click", function (evt) {
    if (!$(".dialog").is(":visible") && numberOfClick > $(".pinPoint").length) {
      dX = evt.pageX - $("#backimage").offset().left;
      dY = evt.pageY - $("#backimage").offset().top;
      position.x = dX;
      position.y = dY;
      if ($(evt.target).attr("id") == "backimage") {
        $(".dialog").show(0);
        popupPosition(dX, dY);
        $(".section3cancel").val(buttonText[0]).removeAttr("data-remove");
        $(".likeBox").removeClass("active");
        $(".likeBox svg path").removeAttr("style");
        $("#textarea").val("");
        This = "";
        buttonfunctionality();
      }
    } else if (numberOfClick == $(".pinPoint").length) {
      myAlertTop();
    }
  });

  function myAlertTop() {
    $(".myAlert-top").show();
    setTimeout(function () {
      $(".myAlert-top").hide();
    }, 5000);
  }

  function pinpointEvent() {
    $(".pinPoint")
      .unbind("click")
      .bind("click", function (evt) {
        $(".dialog").show(0);
        This = $(evt.target);
        dX = parseInt($(evt.target).attr("data-left"));
        dY = parseInt($(evt.target).attr("data-top"));

        popupPosition(dX, dY);
        var l = $(evt.target).attr("data-like");
        var v = $(evt.target).attr("data-text");
        $(".section3cancel").val("Remove").attr("data-remove", "remove");
        $(".likeBox").removeClass("active");
        $(".likeBox[data-like='" + l + "']")
          .addClass("active")
          .trigger("click");
        $("#textarea").val(v);
        buttonfunctionality();
      });
  }
  function buttonfunctionality() {
    $(".section3save")
      .unbind("click")
      .bind("click", function () {
        if (
          $(".likeBox.active").length == 1 &&
          $("#textarea").val().trim() != ""
        ) {
          $(".dialog").hide(0);
          var l = $(".likeBox.active").attr("data-like");
          var v = $("#textarea").val();
          if (This == "") {
            $("#dragArea").append(
              "<div class='pinPoint " +
                l +
                "' style='left:" +
                (position.x - 15) +
                "px;top:" +
                (position.y - 15) +
                "px' data-left='" +
                position.x +
                "' data-top='" +
                position.y +
                "' data-like='" +
                l +
                "' data-text='" +
                v +
                "'></div>"
            );
          } else {
            This.attr("class", "pinPoint " + l);
            This.attr("data-like", l);
            This.attr("data-text", v);
          }
          pinpointEvent();
          findResult();
        }
      });
    $(".section3cancel")
      .unbind("click")
      .bind("click", function () {
        $(".dialog").hide(0);
        if (this.value == "Remove") {
          This.remove();
          findResult();
        }
      });
    $(".section1 .likeBox")
      .unbind("click")
      .bind("click", function () {
        $(".likeBox").removeClass("active");
        $(".likeBox svg path").removeAttr("style");
        $(this).addClass("active");
        $(".likeBox.active svg path").css("display", "block");
      });

    // textarea and smiley validation
    $(".section3save").click(function () {
      if ($("#textarea").val() === "") {
        $("#textarea").addClass("errorBdr");
      }

      if (!$(".likeBox").hasClass("active")) {
        $(".likeBox").parent(".section1").addClass("errorBg");
      }
    });

    $("#textarea").keypress(function () {
      $("#textarea").removeClass("errorBdr");
    });

    $(".likeBox").click(function () {
      if ($(this).hasClass("active")) {
        $(".section1").removeClass("errorBg");
      }
    });
    // $(".likeBox").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(".likeBox").find("#Ellipse_7").css({"fill":emoticonColors[0]})
    //   }
    //   else{
    //     $(".likeBox").find("#Ellipse_7").css({"fill":emoticonColors[0]})
    //   }
    // });
    // $(".likeBox2").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(".likeBox").find("#Ellipse_8").css({"fill":emoticonColors[1]})
    //   }
    // });
    // $(".likeBox likebox3").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(".likeBox").find("#Ellipse_9").css({"fill":emoticonColors[2]})
    //   }
    // });
    // $(".likeBox likebox4").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(".likeBox").find("#Ellipse_10").css({"fill":emoticonColors[3]})
    //   }
    // });
    // $(".likeBox likebox5").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(".likeBox").find("#Ellipse_11").css({"fill":emoticonColors[4]})
    //   }
    // });

    $(".section3cancel").click(function () {
      //console.log("bb");
      //$("#textarea").css("border","0px solid #f00");
    });
  }

  function popupPosition(x, y) {
    var dw = parseInt($(".dialog").css("width")) / 2;
    var dh = parseInt($(".dialog").css("height"));

    var cW = parseInt($("#backimage").css("width"));
    var cH = parseInt($("#backimage").css("height"));
    var _top = y + 10;
    var _left = x - dw;
    _left = _left < 0 ? 0 : _left;
    if (x + dw > cW) {
      _left = _left - (x + dw - cW);
    }
    $(".arrow").attr("class", "arrow top");
    var arw = 0;
    if (y + dh > cH) {
      _top = _top - (dh + 30);
      $(".arrow").attr("class", "arrow bottom");
      arw = -10;
    } else {
      _top = _top + 5;
      arw = 10;
    }

    $(".dialog").css({ top: _top, left: _left });

    $(".arrow").css("left", x - _left + arw);
  }

  function findResult() {
    var arr = [];
    $(".pinPoint").each(function (index) {
      arr[index] =
        $(this).attr("data-left") +
        ":" +
        $(this).attr("data-top") +
        ":" +
        $(this).attr("data-like") +
        ":" +
        $(this).attr("data-text");
    });
    outputValue(arr);
  }

  var img = new Image();
  img.src = backImage;
  img.onload = function () {
    $("#dragArea").css({ width: img.width + 2, height: img.height + 2 });
  };
  function hotspotCommentWidget() {
    
    $(".respondent-info").after(
      "<div class='myAlert-top respondent-info alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"+errorMessage+"</div>"
    );
  
  }
  hotspotCommentWidget();
  
  function svgAdded()
  { 
    var minWidth = 0;
    var width = 265;
    if(svg.length > 5)
    {
    minWidth =  $(".dialog").width() + $(".likeBox").width();
      $(".dialog").css({"min-width":minWidth+"px"});
    }
    else
    {
      $(".dialog").css({"width":width+"px"});
    }
  }
  svgAdded();
});


