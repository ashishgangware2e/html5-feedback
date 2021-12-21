$(window).load(function () {
  var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charArr = s.split("");
  var zoom = 0,
    zoom1 = 0;
  var blockOrder = [];
  var isChrome = !!window.chrome && !!window.chrome.webstore;
  var isFirefox = typeof InstallTrigger !== "undefined";
  var scrollTop = "";
  var reSizeArr = [];
  scrollTop = $(window).scrollTop();

  if (isChrome || isFirefox) {
    $("#droppable").css({ height: "399px" });
  }

  var outputArry = [];
  var dragStatementArr = dragStatement.split("|");
  var precodeArr = precode.split("|");
  var dropWidht = $("#droppable").width();
  var dropHeight = $("#droppable").height();
  var newStatementStr = dragStatementArr;
  var statmenArray = [];
  var w = "";
  var h = "";

  $(".dragContaner").append(
    '<div class="editpopupblock"><input type="text" maxlength="30" id="editvalue" name="edit"><div class="editbtn_ok">OK</div><div class="editbtn_cencel">CANCEL</div></div>'
  );

  var topArray = [];
  var heightArray = [];
  for (var i = 0; i < dragStatementArr.length; i++) {
    $(".dragContaner ul").append(
      '<li><div id="draggable' +
        precodeArr[i] +
        '" scroll-issue="1" class="draggablelist pset"><span class="item">' +
        dragStatementArr[i] +
        '<div class="colPic"></div></span></div><div id="draggablee" scroll-issue="1" class="draggablelist1 pset"><span class="item">' +
        dragStatementArr[i] +
        '<div class="colPic"></div></span></div></li>'
    );
  }
  setHeightWidthOfList();

  for (var j = 0; j <= dragStatementArr.length; j++) {
    statmenArray[j - 1] = $("#draggable" + j + " > span").text();
    $("#statementData").val(statmenArray);
  }
  var dragWidht = $(".pset").width();
  var dragHeight = $(".pset").height();
  var adeddItems = precodeArr.length;
  var dragTop = $(".pset").position().top;
  $(
    '<li class="addbefore"><div class="popupblock"><input type="text" maxlength="30" id="addvalue"><div class="btn_ok">OK</div><div class="btn_cencel">CANCEL</div></div><div class="selfAdd"><div class="plasicon"></div><div class="s-add-txt">Add your own</div></div></li>'
  ).appendTo(".dragContaner ul");

  // click to add popup
  $(".selfAdd").click(function () {
    $(".editpopupblock").slideUp();
    $(".popupblock").slideToggle();
    $("#addvalue").val("").focus();
  });

  // click to cancel popup
  $(".btn_cencel").click(function () {
    $(".popupblock").slideToggle();
    $(".popupblock input").removeClass("highlight");
  });

  // click to ok popup
  $(".btn_ok").click(function () {
    var txt = $("#addvalue").val();
    var pattern = new RegExp(/^\s+$/);
    if (pattern.test(txt) || !checkValidate(txt)) {
      $("#addvalue").focus().addClass("highlight");
    } else {
      $("#addvalue").removeClass("highlight");
      var addedValue = $("#addvalue").val();
      adeddItems += 1;
      $(".popupblock").slideToggle();
      $(
        '<li><div id="draggable' +
          adeddItems +
          '" class="draggablelist pset"><span class="item item-edit">' +
          addedValue +
          '<div class="colPic1"></div></span></div><div id="draggablee" class="draggablelist1 pset"><span class="item item-edit">' +
          addedValue +
          '<div class="colPic1"></div></span></div></li>'
      ).insertBefore(".addbefore");
      var w = $(".draggablelist").width();
      var h = $(".draggablelist").height();
      $(".dragContaner ul li:not(.addbefore)").css({ width: w, height: h });
      toolbinding();
      var currentDragStatTxt = $("#statementData").val();
      $("#statementData").val(currentDragStatTxt + "," + addedValue);
    }
    hideAddBtn();
    editText();
  });

  function editText() {
    var currentEle = "";
    $(".colPic1")
      .unbind("click")
      .bind("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var is_iPad = navigator.userAgent.match(/iPad|Android/i) != null;
        $(".popupblock").slideUp();
        //console.log("called",is_iPad);
        currentEle = $(this).parents(".draggablelist").attr("id");
        var pos = $("#" + currentEle).offset();
        var p = $(".toolContaner").offset();
        pos.left = pos.left - p.left;
        var txt = $("#" + currentEle + " span.item").text();
        if ($(".editpopupblock").is(":visible")) {
          $(".editpopupblock").slideUp(function () {
            if (is_iPad) {
              $(".editpopupblock").css({
                bottom: 32,
                // width: $(".draggablelist").width() - 20,
              });
              if (
                currentEle == "draggable7" ||
                currentEle == "draggable8" ||
                currentEle == "draggable9"
              ) {
                $(".editpopupblock").css("bottom", 76);
              }
            }
            $(".editpopupblock").css({
              left: pos.left,
              // width: $(".draggablelist").width() - 20,
            });
            $(".editpopupblock").slideToggle();
            $("#editvalue").val(txt).focus();
          });
        } else {
          if (is_iPad) {
            $(".editpopupblock").css({
              bottom: 32,
              // width: $(".draggablelist").width() - 20,
            });
            if (
              currentEle == "draggable7" ||
              currentEle == "draggable8" ||
              currentEle == "draggable9"
            ) {
              $(".editpopupblock").css("bottom", 76);
            }
          }
          $(".editpopupblock").css({
            left: pos.left,
            // width: $(".draggablelist").width() - 20,
          });
          $(".editpopupblock").slideToggle();
          $("#editvalue").val(txt).focus();
        }
      });

    $(".editbtn_ok")
      .unbind("click")
      .bind("click", function () {
        var val = $("#editvalue").val();
        var pattern = new RegExp(/^\s+$/);
        if (!pattern.test(val) && checkValidate(val)) {
          $("#editvalue").removeClass("highlight");
          $(".editpopupblock").slideToggle();
          $("#" + currentEle + " span.item").html(
            val + "<div class='colPic1'></div>"
          );

          var t = "";
          $(".draggablelist .item").each(function () {
            t = t + $(this).text() + ",";
          });
          t = t.substring(0, t.length - 1);
          $("#statementData").val(t);
          editText();
        } else {
          $("#editvalue").focus().addClass("highlight");
        }
      });
    $(".editbtn_cencel")
      .unbind("click")
      .bind("click", function () {
        $(".editpopupblock").slideToggle();
      });
  }

  var dropArea = false;
  function toolbinding() {
    var click = {};
    $("li .draggablelist")
      .draggable({
        containment: $(".toolContaner"),
        revert: function (dropped) {
          // console.log("revert called");
          // $(this).attr("scroll-issue",1);
          var dropped = dropped && dropped[0].id == "droppable";
          if (!dropped) {
            $(this).data("draggable").originalPosition = {
              top: dragTop,
              // left: 0,
            };
            $(this).appendTo($(this).data("originalParent"));
            $(this).removeClass("absoluteclass");
            $(this).removeAttr("style").removeClass("active");
            $(this).find(".colPic1").show(0);

            if ($(this).find("textarea").length > 0) {
              var getId = $(this)
                .find("textarea")
                .attr("id")
                .split("textbox")[1];
              userComment[getId - 1] = "";
              $("#usercomment").val(userComment.join("|"));
              if ($(".absoluteclass").length == 0) {
                $("#usercomment").val("");
              }

              $(this).find("p").hide(0);
            }
          }
          return !dropped;
        },
        drag: function (e, ui) {
          if ($(this).attr("scroll-issue") == 1) {
            ui.position.top = ui.position.top - scrollTop;
          }

          $(".draggablelist").removeClass("active");
          $("textarea").blur();
          $(this).addClass("active");

          $(".speech").addClass("small");
          $(".speech")
            .unbind("click touchstart")
            .bind("click touchstart", speechEvent);

          var rObjClientRect = document.querySelector("#droppable");
          var rClientRect = rObjClientRect.getBoundingClientRect();

          rX = Math.round(e.clientX - rClientRect.left);
          rY = Math.round(e.clientY - rClientRect.top);

          if (
            rX > 0 &&
            rX < rClientRect.width &&
            rY > 10 &&
            rY < rClientRect.height
          ) {
            dropArea = true;
          } else {
            dropArea = false;
            var currentids = $(this).attr("id").split("draggable")[1];

            outputArry[currentids - 1] = "";
            outputdata(outputArry);
            updateHighChart();
          }
        },
        start: function (event, ui) {
          $(this).addClass("absoluteclass");
          setTimeout(function () {
            $(this).css("position", "absolute");
          }, 500);
          click.x = event.clientX;
          click.y = event.clientY;
        },
        stop: function (event, ui) {
          if ($(".absoluteclass").length == 0) {
            $("[name='xyOutputValues']").val("");
          }
        },
        cancel: ".speech",
      })
      .each(function () {
        $(this).data("originalParent", $(this).parent());
        $(this).removeAttr("style");
      });

    $("#droppable").droppable({
      drop: function (event, ui) {
        console.log(ui);
        //console.log("dropped called");
        ui.draggable.attr("scroll-issue", "2");

        if (dropArea) {
          dragWidht = $(".pset").width();
          dragHeight = $(".pset").height();
          dropWidht = $("#droppable").width();
          dropHeight = $("#droppable").height();

          $(this).append(ui.draggable);
          var $newPosX = ui.offset.left - $(this).offset().left;
          var $newPosY = ui.offset.top - $(this).offset().top;
          $(ui.draggable).find(".colPic1").hide(0);
          var _topset = Math.ceil(
            ($newPosX + dragWidht / 2) / (dropWidht / 100)
          ); //this is the varibale you need
          if (_topset > 100) {
            _topset = 100;
          }
          if (_topset < 0) {
            _topset = 0;
          }
          var _leftset = Math.ceil(
            100 - (($newPosY + dragHeight / 2) / dropHeight) * 100
          ); //this is the varibale you need
          if (_leftset > 100) {
            _leftset = 100;
          }
          if (_leftset < 0) {
            _leftset = 0;
          }
          var currentid = ui.draggable.attr("id").split("draggable")[1];
          outputArry[currentid - 1] = _topset + ":" + _leftset;
          outputdata(outputArry);
          // $(ui.draggable[0]).css(
          //   "top",
          //   $newPosY + $(".dragContaner").height(),
          //   "left",
          //   $newPosX + $(".dragContaner").width()
          // );
          updateHighChart();
          var posi = "";
          if (_leftset < 50) {
            if (_topset < 50) {
              posi = "righttop";
            } else {
              posi = "lefttop";
            }
          } else {
            if (_topset < 50) {
              posi = "rightbottom";
            } else {
              posi = "leftbottom";
            }
          }
          if ($("#draggable" + currentid + " > p").length > 0) {
            $("#draggable" + currentid)
              .find("p")
              .attr("data-posi", posi);
            if (
              $("#draggable" + currentid)
                .find("p")
                .is(":visible")
            ) {
              $("#draggable" + currentid)
                .find("p")
                .show(0)
                .addClass("small");
            } else {
              $("#draggable" + currentid)
                .find("p")
                .show(0)
                .removeClass("small");
            }
          } else {
            var c = $(".speech").length + 1;
            $("#draggable" + currentid).append(
              '<p class="speech" data-posi="' +
                posi +
                '" id="speechbubble' +
                c +
                '" block-order=' +
                c +
                '><span class="span">x</span><span class="span1">Next Step</span><textarea rows="3" cols="25" style="position: absolute;top: 9px;left:55px;width:190px;overflow: hidden;outline:0px;" id=textbox' +
                currentid +
                "></textarea><span>...</span>"
            );

            blockOrder.push(c);
            $(".span1").click(function () {
              //   $("#droppable")
              //     .find(".pset p")
              //     // .attr("block-order", "12")
              //     .next()
              //     .css({ display: "block" });
              //   console.log("hello");

              // if ($("attr[block-order=1]" == 1)) {
              //   $("#droppable").find(".pset p").addClass("small").focus();
              // }
              $("span.span1")
                .unbind("click touchstart")
                .bind("click touchstart", function (e) {
                  e.stopPropagation();
                  $(".speech").addClass("small");
                  $("textarea").blur();
                });
              // if (blockOrder == c) {
              //   $("span.span1")
              //     // .unbind("click touchstart")
              //     .bind("click touchstart", function (e) {
              //       e.stopPropagation();
              //       $(".speech").removeClass("small");
              //       // $("textarea").blur();
              //     });
              // }

              // for (i = 0; i < blockOrder.length; i++) {
              //   $("#droppable")
              //     .find(".pset p")
              //     .attr("block-order", i + 1)
              //     .bind("click touchstart", function (e) {
              //       e.stopPropagation();
              //       $(".speech").removeClass("small");
              //     });
              // }

              const portalIndex = blockOrder.indexOf(c);
              if (portalIndex >= 0 && portalIndex < blockOrder.length - 1) {
                $("[block-order=" + portalIndex + "]")
                  .find(".pset p")
                  .attr("block-order", i + 1)
                  .bind("click touchstart", function (e) {
                    e.stopPropagation();
                    $(".speech").removeClass("small");
                  });
                // .find(".pset p")
                // .attr("block-order", i + 1)
                // .bind("click touchstart", function (e) {
                //   e.stopPropagation();
                //   $(".speech").removeClass("small");
                // });
              }
            });
            // var ram = index(blockOrder);
            // console.log(ram);

            $(".speech")
              .unbind("click touchstart")
              .bind("click touchstart", speechEvent);
            $(".speech:not(.small)").find("textarea").focus();
          }
          $("textarea")
            .unbind("click touchstart")
            .bind("click touchstart", function () {
              $(this).focus();
            });
          getUserComments();
          //active
        } else {
          $(ui.draggable).data("draggable").originalPosition = {
            top: dragTop,
            left: 0,
          };
          $(ui.draggable).appendTo($(ui.draggable).data("originalParent"));
          $(ui.draggable).removeClass("absoluteclass");
          $(ui.draggable).removeAttr("style");
          $(ui.draggable).find(".colPic1").show(0);

          if ($(ui.draggable).find("textarea").length > 0) {
            var getId = $(ui.draggable)
              .find("textarea")
              .attr("id")
              .split("textbox")[1];
            userComment[getId - 1] = "";
            $("#usercomment").val(userComment.join("|"));
            $(ui.draggable).find("p").hide(0);
          }
        }
        $(".draggablelist").removeClass("active");
        $(ui.draggable).addClass("active");
        $("span.span")
          .unbind("click touchstart")
          .bind("click touchstart", function (e) {
            e.stopPropagation();
            $(".speech").addClass("small");
            $("textarea").blur();
          });
        matchMedia();
      },
      over: function (event, ui) {},
      out: function (event, ui) {
        ui.draggable.attr("scroll-issue", 1);
        if (dropArea) {
          if ($(this).find("textarea").length > 0) {
            var getId = $(this).find("textarea").attr("id").split("textbox")[1];
            userComment[getId - 1] = "";
            $("#usercomment").val(userComment.join("|"));
            $(ui.draggable[0]).find("p").hide(0);
          }
        } else {
        }
      },
    });
  }
  toolbinding();
  function checkValidate(str) {
    if (str.length == 0) {
      return false;
    } else {
      var c = str.charAt(0);
      console.log(c);
      if (charArr.indexOf(c) >= 0) {
        return true;
      } else {
        //console.log("inside this");
        return true;
      }
    }
  }
  $("#forwardbutton").click(function () {
    $(".errorText").show(0);
    var count = 0;
    $(".draggablelist .speech:visible textarea").each(function (index, elem) {
      var txt = $(this).val();
      var pattern = new RegExp(/^\s+$/);
      if (pattern.test(txt) || !checkValidate(txt)) {
        count++;
      }
    });
    checkForError(count);
  });
  // HIGH CHART SCRIPT
  var highchart = Highcharts.chart("chartcontainer", {
    chart: {
      type: "spline",
      margin: [0, 0, 0, 0],
      events: {
        click: function (e) {
          var x = Math.round(e.xAxis[0].value),
            y = Math.round(e.yAxis[0].value),
            series = this.series[0];
          series.addPoint([x, y]);
        },
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: { enabled: false },
    credits: {
      enabled: false,
    },
    xAxis: {
      labels: { enabled: false },
      min: 0,
      max: 100,
    },
    yAxis: {
      labels: { enabled: false },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      title: {
        text: "",
      },
      min: 0,
      max: 100,
    },
    exporting: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        color: "#808080",
        point: {
          events: {
            click: function () {
              if (this.series.data.length > 1) {
                this.remove();
              }
            },
          },
        },
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    series: [
      {
        data: [[0, 50]],
        // dashStyle: "longdash",
        type: "spline",
        marker: {
          enabled: false,
        },
      },
    ],
  });
  $("svg").click(function () {
    return false;
  });
  // END HIGH CHART SCRIPT

  function updateHighChart() {
    var str = $("[name='xyOutputValues']").val();
    if (str.replace(/,/g, "") != "") {
      var a = [],
        b = [];
      var arr = str.split(",");
      var k = 0;
      // if (arr.length > 3) debugger;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
          var ar = arr[i].split(":");
          a[k] = parseInt(ar[0]);
          b[k++] = parseInt(ar[1]);
        }
      }
      // for (var i = 0; i < a.length; i++) {
      //   for (var j = i; j < a.length - 1; j++) {
      //     if (a[i] > a[j + 1]) {
      //       var k = a[i];
      //       a[i] = a[j + 1];
      //       a[j + 1] = k;

      //       k = b[i];
      //       b[i] = b[j + 1];
      //       b[j + 1] = k;
      //     }
      //   }
      // }
      var str = a[0] + ":" + b[0];
      for (var i = 1; i < a.length; i++) {
        str = str + "," + a[i] + ":" + b[i];
      }
      var xyCoordinates = str;
      //remove extra commas
      xyCoordinates = xyCoordinates.replace(/^[,]+/, "");
      xyCoordinates = xyCoordinates.replace(/[,]+/g, ",");
      //var xyCoordinates = "37:50,80:73";
      xyCoordinatesSplit = xyCoordinates.split(",").join("],[");
      //remove : from values
      xyCoordinatesSplit = xyCoordinatesSplit.replace(/:/g, ",");
      var newArray = "[[0,50],[" + xyCoordinatesSplit + "]]";
      var myObj = JSON.parse(newArray);

      highchart.series[0].setData(myObj);
      console.log(JSON.stringify(myObj));
    } else {
      highchart.series[0].setData([[0, 50]]);
    }
  }
  var userComment = [];
  function getUserComments() {
    $(".speech textarea").bind("keyup", function () {
      var getId = $(this).attr("id").split("textbox")[1];
      userComment[getId - 1] = $(this).val();
      $("#usercomment").val(userComment.join("|"));
    });
  }

  var speechEvent = function (event) {
    event.preventDefault();
    event.stopPropagation();

    var lessthan420 = matchMedia();
    if (lessthan420 == true) {
      //alert("inside this");
      if ($(this).hasClass("small")) {
        //("firsdt if");
        $(".speech").addClass("small");
        $(".draggablelist").removeClass("active");
        var id = this.id;
        setTimeout(function () {
          $("#" + id).removeClass("small");
          $(".speech:not(.small)").find("textarea").focus();
          $(".speech:not(.small)").parent(".draggablelist").addClass("active");
        }, 10);
      } else {
        $(this).addClass("small");
      }
    } else {
      if ($(this).hasClass("small")) {
        //alert("inside  again");
        //("firsdt if");
        $(".speech").addClass("small");
        $(".draggablelist").removeClass("active");
        var id = this.id;
        setTimeout(function () {
          $("#" + id).removeClass("small");
          $(".speech:not(.small)").find("textarea").focus();
          $(".speech:not(.small)").parent(".draggablelist").addClass("active");
        }, 10);
      } else {
        //$(".speech").addClass("small");
      }
    }
  };
  function hideAddBtn() {
    if ($(".dragContaner ul li").length == 13) {
      $(".addbefore").css("display", "none");
    }
  }

  window.addEventListener("resize", function () {
    //console.log("resixed");
    setHeightWidthOfList();
    matchMedia();
    var outputValues = $("#data").val();

    //variables for left set

    var dropWidht_ = $("#droppable").width();
    var dragWidth_ = $(".pset").width();
    var dropLeft_ = $("#droppable").offset().left;

    //variabled for top set
    var dropHght_ = $("#droppable").height();
    var dragHght_ = $(".pset").height();
    var dropTop_ = $("#droppable").offset().top;

    if (outputValues.length != 0) {
      outputValues = outputValues.split(",");
      outputValues.forEach(function (element, i) {
        if (element != "") {
          //console.log(element);
          //console.log(i);
          var left = element.split(":")[0];
          var top = element.split(":")[1];
          //set left
          var PosX = left * (dropWidht_ / 100) - dragWidth_ / 2;
          var newPosX = PosX + dropLeft_;

          //set top
          var PosY = (100 - top) * (dropHght_ / 100) - dragHght_ / 2;
          var newPosY = PosY + dropTop_;
          //console.log($("#draggable"+[i+1]));
          //console.log(newPosX);
          //console.log(newPosY);
          $("#draggable" + [i + 1]).offset({ left: newPosX, top: newPosY });
        }
      }, this);

      // $(".dropContaner .draggablelist").each(function(element,i){
      // 	var id=this.id;
      // 	console.log(element);
      // 	console.log(id);

      // 	var $newPosX = $("#"+id).offset.left - $("#droppable").offset().left;
      // 	var $newPosY = $("#"+id).offset.top - $("#droppable").offset().top;

      // 	var _topset=Math.ceil(($newPosX+(dragWidth_/2))/(dropWidht_/100)); //this is the varibale you need
      // 	if(_topset > 100){_topset = 100;}
      // 	if(_topset < 0){_topset = 0;}
      // 	var _leftset=Math.ceil(100-(($newPosY+(dragHeight/2))/dropHght_*100)); //this is the varibale you need
      // 	if(_leftset > 100){_leftset = 100;}
      // 	if(_leftset < 0){_leftset = 0;}
      // 	var currentid=ui.draggable.attr("id").split("draggable")[1];
      // 	outputArry[currentid-1]=_topset+":"+_leftset;

      // });
    }

    // var is_iPad = navigator.userAgent.match(/iPad|Android/i) != null;
    // if(!is_iPad){
    // 	location.reload(true);
    // }
  });
  window.addEventListener("orientationchange", function () {
    // console.log("orientation");

    // switch(window.orientation) {
    //   case -90 || 90:
    // 		location.reload(true);
    //     break;
    //   default:
    // 		location.reload(true);
    //     break;
    // }
    $(".speech").addClass("small");
  });

  window.addEventListener(
    "scroll",
    function () {
      scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
    },
    false
  );

  function setHeightWidthOfList() {
    w = $(".draggablelist").width();
    h = $(".draggablelist").height();
    // $(".dragContaner ul li").not(".addbefore").css({ width: w, height: h });
  }

  function matchMedia() {
    if (window.matchMedia("(max-width: 420px)").matches) {
      $(".span").hide();
      return true;
      /* The viewport is less than, or equal to, 700 pixels wide */
    }
  }
  matchMedia();
});
