$(document).ready(function () {
  const widgetData = { client_key: client_key };
  var keyNotValid =
    "Key Expired|Your key is not valid please put your valid key.";
  var popupText =
    " Could not run the widget as the subscribed limit has exceeded. You may need to <span>upgrade your subscription</span> to extend the limit.";
  var trialVersion = "Free Trial Version";

  $.ajax({
    url: baseURl + "/subscription/validate/",
    type: "POST",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(widgetData),
    success: function (response) {
      if (response.HasSuccess === true) {
        wedgitData();
        if (response.DataObject.is_widget_purchase == "False") {
          $(".hotspot").before(
            '<div class="trial-version">\
                <div class="trial-version-text"><span>E2E</span>Research Pvt. Ltd</div>\
              </div>'
          );
        }
      } else {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                       <div class="popup-iner"><div class="popup-header"><h5>Subscription expired</h5>\
                   </div>          \
                   <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                   <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                     <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                     <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                   </g>\
                 </svg> </div>\
                   <div class="popup-text"> ' +
            popupText +
            "\
                    </div> </div>\
                   </div>"
        );
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      if (errorThrown) {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                         <div class="popup-iner"><div class="popup-header"><h5>' +
            keyNotValid.split("|")[0] +
            '</h5>\
                     </div>          \
                     <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                     <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                       <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                       <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                     </g>\
                   </svg> </div>\
                     <div class="popup-text"> ' +
            keyNotValid.split("|")[1] +
            "\
                      </div> </div>\
                     </div>"
        );
      }
    },
  });

  function wedgitData() {
    $(".close").on("click", function (e) {
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
    var buttonText = buttonTextArr.split("|");
    var emoticonColors = emoticonColorsArr.split("|");

    var element = document.getElementById("backimage");
    var elem =
      '<div id="dragArea" class="toolcontainer"><img id="backimage" src="images/starwars7.jpg"/><div class="dialog"><div class="arrow"></div><div class="section1"><div class="text"> ' +
      emotionText +
      '</div>\
      <span class="likeBox likeBox1" data-like="1"></span><span class="likeBox likeBox2" data-like="2"></span><span class="likeBox likeBox3" data-like="3"></span><span class="likeBox likeBox4" data-like="4"></span><span class="likeBox likeBox5" data-like="5"></span></div><div class="section2"><div class="text">' +
      textareaText +
      '</div>\
      <textarea rows="3" cols="50" id="textarea"></textarea></div><div class="section3">\
      <input class="section3cancel" type="button" value=' +
      buttonText[0] +
      '>\
      <input class="section3save" type="button" value=' +
      buttonText[1] +
      "></div></div></div>";

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
      if (
        !$(".dialog").is(":visible") &&
        numberOfClick > $(".pinPoint").length
      ) {
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

      console.log(arr.length);

      if (arr.length == 1) {
        const hitData = {
          client_key: client_key,
          client_public_ip: "182.73.21.21",
        };
        $.ajax({
          url: baseURl + "/subscription/validate/hitcount/",
          type: "POST",
          dataType: "json",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(hitData),
          success: function (response) {
            // console.log(response);
          },
        });
      }
    }

    var img = new Image();
    img.src = backImage;
    img.onload = function () {
      $("#dragArea").css({ width: img.width + 2, height: img.height + 2 });
    };
    function hotspotCommentWidget() {
      $(".respondent-info").after(
        "<div class='myAlert-top respondent-info alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
          errorMessage +
          "</div>"
      );
    }
    hotspotCommentWidget();

    function svgAdded() {
      var minWidth = 0;
      var width = 265;
      if (svg.length > 5) {
        minWidth = $(".dialog").width() + $(".likeBox").width();
        $(".dialog").css({ "min-width": minWidth + "px" });
      } else {
        $(".dialog").css({ width: width + "px" });
      }
    }
    svgAdded();
  }
});
