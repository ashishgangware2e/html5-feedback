var chkReadyState = setInterval(function () {
  if (document.readyState == "complete") {
    clearInterval(chkReadyState);
    var scaleOptionsArr = scaleOptions.split("|");
    var carouselTextArr = carouselText.split("|");

    $(".mitl-carousel").append(
      '<div class="questionarea MCAROUSEL_Custom">\
    <div class="answersection">\
      <fieldset style="visibility: visible" id="fieldset_gQB7b">\
        <legend class="confirmit-hidden"></legend>\
        <table class="confirmit-grid">\
          <thead id="carousel-header">\
            <tr></tr>\
          </thead>\
          <tbody id="t-data"></tbody>\
        </table>\
      </fieldset>\
    </div>\
  </div>'
    );

    for (var i = 0; i < scaleOptionsArr.length; i++) {
      $("#carousel-header tr").append(
        '<th id="gQB7b_header' +
          i +
          '" class="scale">' +
          scaleOptionsArr[i] +
          "</th>"
      );
    }

    for (var i = 0; i < carouselTextArr.length; i++) {
      $("#t-data").append(
        ' <tr id="yui_3_14_1_1_1578558809680_' +
          i +
          '">\
        <th class="gridlabel">' +
          carouselTextArr[i] +
          "</th>\
     </tr>"
      );
    }

    // create JSon
    var carouselObj = {
      optnArry: [],
      slide: [],
    };

    //console.log($(".MCAROUSEL_Custom fieldset tbody tr").length);
    $(".MCAROUSEL_Custom fieldset thead tr th").map(function () {
      //   console.log($(this).text());
      if ($(this).text() != "") carouselObj.optnArry.push($(this).html());
    });

    function getAllData() {
      $(".MCAROUSEL_Custom fieldset tbody tr").map(function () {
        // console.log($(this).prop("id"));
        if ($(this).prop("id") != "") {
          // console.log("indisde");
          var slideDetails = {};
          slideDetails.text = $(this).find("th").html();
          slideDetails.optionsId = $(this)
            .find("td")
            .map(function () {
              return $(this).prop("id");
            });
          slideDetails.optionsSel = $(this)
            .find("input")
            .map(function () {
              return $(this).prop("checked");
            });
          carouselObj.slide.push(slideDetails);
        }
      });
    }
    getAllData();

    // create JSon
    var newInter = setInterval(function () {
      if (carouselObj.slide.length == 0) {
        getAllData();
      } else {
        clearInterval(newInter);
        insertion();
      }
    }, 300);

    function insertion() {
      $(
        '<div class="carousel-container"> \
            <div class="carousel_nav"> \
            <div class="carousel"> \
            </div> \
            <div class="back-btn" id="back" show-attr="0"></div> \
            <div class="next-btn" id="next" show-attr="0"></div> \
        </div> \
        <div class="optns-div"> \
        </div> \
    </div>'
      ).insertAfter(".MCAROUSEL_Custom .answersection");

      carouselObj["slide"].forEach(function (e, i) {
        $(".carousel").append(
          "" +
            (e.text.split("/")[0] == "images"
              ? '<img src='+ e.text +' class="caro-text" id=caro-' + i + '>'
              : '<div class="caro-text" id=caro-' + i + ">" + e.text + "</div>")
        );
      });

      carouselObj["optnArry"].forEach(function (e, i) {
        $(".optns-div").append(
          "<div class='new-btn' data-index=" +
            i +
            "><div class='tbl'><div class='tbl-cell'>" +
            e +
            "</div></div></div>"
        );
      });

      function getCheckUncheck(index) {
        $(".new-btn").each(function (i, e) {
          var ifChcked = carouselObj.slide[index].optionsSel[i];
          if (ifChcked == false) {
            $(this)
              .attr("click-id", carouselObj.slide[index].optionsId[i])
              .attr("check", "false");
          } else {
            $(this)
              .attr("click-id", carouselObj.slide[index].optionsId[i])
              .attr("check", "true");
          }
        });
      }
      getCheckUncheck(0);

      function showcarotext(index) {
        $(".caro-text").hide();
        $("#caro-" + index).show();
      }

      showcarotext(0);

      $(".new-btn").click(function () {
        var getClId = $(this).attr("click-id");
        var isCheck = $(this).attr("check");

        var slideIndx = $("#next").attr("show-attr"); //This will give me index of slide array in object;
        var btnIndx = $(this).attr("data-index"); //This will give me index of ""optionsSel"" array indie slide array in object;
        $("#" + getClId).trigger("click");
        // console.log(btnIndx);
        if (isCheck == "false") {
          $(this).attr("check", "true");
          carouselObj.slide[slideIndx].optionsSel[btnIndx] = true;
        } else {
          $(this).attr("check", "false");
          carouselObj.slide[slideIndx].optionsSel[btnIndx] = false;
        }
      });

      //For next back
      var carouselLen = carouselObj["slide"].length;

      function Nxtbtn(getCurIndex) {
        var getCurIndex = getCurIndex;
        var nextIndex = getCurIndex + 1;
        if (nextIndex < carouselLen) {
          $("#next").removeClass("disabled-nav");
          showcarotext(nextIndex);
          $("#next,#back").attr("show-attr", nextIndex);
          getCheckUncheck(nextIndex);
          // console.log(nextIndex);
        } else {
          $("#next").addClass("disabled-nav");
        }
      }
      $("#next").click(function () {
        Nxtbtn(Number($(this).attr("show-attr")));
      });

      function Bckbtn(getCurIndex) {
        var getCurIndex = getCurIndex;
        var backIndex = getCurIndex - 1;
        if (backIndex >= 0) {
          $("#back").removeClass("disabled-nav");
          showcarotext(backIndex);
          // console.log(backIndex);
          $("#next,#back").attr("show-attr", backIndex);
          getCheckUncheck(backIndex);
        } else {
          $("#back").addClass("disabled-nav");
        }
      }

      $("#back").click(function () {
        Bckbtn(Number($(this).attr("show-attr")));
      });

      // This will work the first time as well as we are not handling error msg

      // $("#forwardbutton").click(function() {
      for (var i = 0; i < carouselObj.slide.length; i++) {
        //console.log(JSON.stringify(carouselObj.slide[i].optionsSel).indexOf("true"))
        if (
          JSON.stringify(carouselObj.slide[i].optionsSel).indexOf("true") == -1
        ) {
          // console.log("breaked called");
          if (i != 0) {
            // i != 0 because no next button when first index is not answered
            var nonSelectedEl = i;
            showcarotext(nonSelectedEl);
            Nxtbtn(nonSelectedEl - 1);
          }

          break;
        }
      }

      //})
    }
  }
}, 0);
