var outVal01 = [];
var outVal02 = [];
var outVal03 = [];
var outVal04 = [];
var compVal = [];
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
    var containerTextArr = containerText.split("|");
    $("#drag-bucket-sort").append(
      ' <div class="flex">\
  <div class="col-lef">\
    <div class="drop-section drop-1">\
      <header>\
        <div class="table-cell">\
          <h2>' +
        containerTextArr[0].split("~")[0] +
        "</h2>\
          <small>" +
        containerTextArr[0].split("~")[1] +
        '</small>\
        </div>\
      </header>\
      <div class="drop-body">\
        <ul id="Drop_1">\
          <span class="droptext">Drop Here</span>\
        </ul>\
      </div>\
    </div>\
    <div class="drop-section drop-2">\
      <header>\
        <div class="table-cell">\
          <h2>' +
        containerTextArr[1].split("~")[0] +
        "</h2>\
          <small>" +
        containerTextArr[1].split("~")[1] +
        '</small>\
        </div>\
      </header>\
      <div class="drop-body">\
        <ul id="Drop_2">\
          <span class="droptext">Drop Here</span>\
        </ul>\
      </div>\
    </div>\
  </div>\
  <div class="col-center">\
    <ul class="drag-list"></ul>\
  </div>\
   <div class="col-right">\
    <div class="drop-section drop-3">\
      <header>\
        <div class="table-cell">\
          <h2>' +
        containerTextArr[2].split("~")[0] +
        "</h2>\
          <small>" +
        containerTextArr[2].split("~")[1] +
        '</small></div></header><div class="drop-body"><ul id="Drop_3">\
          <span class="droptext">Drop Here</span>\
        </ul>\
      </div>\
    </div>\
    <div class="drop-section drop-4">\
      <header>\
        <div class="table-cell">\
          <h2>' +
        containerTextArr[3] +
        '</h2>\
        </div>\
      </header>\
      <div class="drop-body">\
        <ul id="Drop_4">\
          <span class="droptext">Drop Here</span>\
        </ul>\
      </div>\
    </div>\
  </div>  \
</div>'
    );

    var statmentArr = questions.split("|");
    var indxArr = createIndxArr(statmentArr.length);

    if (parseInt(randomization))
      var shuffledArray = shuffleArray(statmentArr, indxArr);

    for (i = 0; i < statmentArr.length; i++) {
      $(".drag-list").append(
        "<li id=" + indxArr[i] + ">" + statmentArr[i] + "</li>"
      );
    }

    $("ul li").draggable({
      revert: "invalid",
      start: function (e, ui) {
        $(this).addClass("active").css("position", "relative");
      },
      stop: function (e, ui) {
        $(this).removeClass("active");
        $(this).removeAttr("style").css("position", "relative");
        $(".drop-body ul").each(function () {
          // if (appendLength < 1) {

          //
          // }

          if (!$(this).find("li").length) {
            $(this).parent().parent().removeClass("drop-active");
            //$(".drop-section").removeClass("drop-active")
            $(this).removeClass("ui-state-highlight");

            $(this).append('<span class="droptext">Drop Here</span>');
          }
        });
      },
    });
    $(".drop-body ul").droppable({
      drop: function (event, ui) {
        $(this).addClass("ui-state-highlight");
        $(this).parent().parent().addClass("drop-active");
        //this.find('span').remove;
        $(this).find("span").remove();

        $("li.active").appendTo(this).removeAttr("class");

        var currentId = ui.draggable[0].id;
        var currentIdDrop = $(this).attr("id").split("_")[1];

        outVal01 = [];
        outVal02 = [];
        outVal03 = [];
        outVal04 = [];
        compVal = [];
        dataDrop();
      },
    });

    function shuffleArray(array, indxd) {
      var counter = array.length,
        temp,
        index,
        temp2;
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        //swap another array
        temp2 = indxd[counter];
        indxd[counter] = indxd[index];
        indxd[index] = temp2;
      }
    }

    function createIndxArr(cnt) {
      var arr = [];
      for (var i = 0; i < cnt; i++) {
        arr.push(i + 1);
      }
      return arr;
    }

    function dataDrop() {
      var competeleVel = 0;
      $(".drag-list li").each(function (index) {
        compVal[index] = $(this).attr("id");
      });

      $("#Drop_1 li").each(function (index) {
        outVal01[index] = $(this).attr("id");
      });

      $("#Drop_2 li").each(function (index) {
        outVal02[index] = $(this).attr("id");
      });

      $("#Drop_3 li").each(function (index) {
        outVal03[index] = $(this).attr("id");
      });

      $("#Drop_4 li").each(function (index) {
        outVal04[index] = $(this).attr("id");
      });

      if (compVal == "") {
        competeleVel = 1;
      }
      var finalval =
        outVal01 + "|" + outVal02 + "|" + outVal03 + "|" + outVal04;
      outputValue(finalval, competeleVel);
      if (finalval.length == containerTextArr.length) {
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
  }
});
