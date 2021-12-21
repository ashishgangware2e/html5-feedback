$(document).ready(function () {
  const widgetData = { client_key: client_key };
  var keyNotValid =
    "Key Expired|Your key is not valid please put your valid key.";
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
        if (response.DataObject.plan_type == "free_hit_trial_version") {
          $(".count-contaner").before(
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
    var checkimg = new Image(),
      resultArr = [];
    $(checkimg).one("load", function () {
      (WidthStr = this.width),
        (HeightStr = this.height),
        $(".mainContainer").html(
          '<div class="imgBlock" style="overflow:hidden; background:url(' +
            imagesUrl +
            ") no-repeat; width:" +
            WidthStr +
            "px; height:" +
            HeightStr +
            'px"></div><div class="clearAll"></div><input type="button" id="dntLike" class="activeCl" value="' +
            likeDislikeStr +
            '">'
        );
      var count = 0;
      function addspot(evt, offset) {
        var nCross = "",
          leftMinPos = evt.pageX - offset.left - 10,
          RightMinPos = evt.pageY - offset.top - 9,
          relativeX = evt.pageX - offset.left,
          relativeY = evt.pageY - offset.top;
        $(".imgBlock").append(
          "<div class='point" +
            nColor +
            "' style='left:" +
            leftMinPos +
            "px; top:" +
            RightMinPos +
            "px'></div>"
        ),
          resultArr.push(Math.round(relativeX) + ":" + Math.round(relativeY)),
          outputValue(resultArr);

        if ($("#result").val().length == 7) {
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
      $(".imgBlock").click(function (evt) {
        $("#dntLike").removeClass("deactiveCl"),
          $("#dntLike").addClass("activeCl");
        var offset = $(this).offset();
        count < nClick && (addspot(evt, offset), count++);
      }),
        $("#dntLike").click(function () {
          (count = 0),
            (resultArr = []),
            $(this).removeClass("activeCl"),
            $(this).addClass("deactiveCl"),
            outputValue(nCross),
            $(".point" + nColor).remove("div");
        });
    }),
      (checkimg.src = imagesUrl);
  }
});
