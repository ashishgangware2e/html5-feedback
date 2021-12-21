$(document).ready(function () {
  var lddr = $(".lldr-cl");
  var snke = $(".snk-cl");
  $("#punchData1").hide();

  lddr.click(function () {
    if (!$(this).hasClass("active")) {
      $(".cl-option").removeClass("active");
      lddr.addClass("active");
      $(".rate-blk").removeClass("active");
      $("#ladderTool").show();
      $("#snakeTool").hide();
      $("#punchData1").hide();
      $("#punchData").show();
    }
  });

  snke.click(function () {
    if (!$(this).hasClass("active")) {
      $(".cl-option").removeClass("active");
      snke.addClass("active");
      $(".rate-blk").removeClass("active");
      $("#snakeTool").show();
      $("#ladderTool").hide();
      $("#punchData").hide();
      $("#punchData1").show();
    }
  });
  function snake() {
    $(".btns").click(function () {
      var svgElems = $("#path path");
      var btnElems = $(".btns");
      var virusElems = $(".virus");
      var order = Number($(this).attr("order"));
      var clickedElem = svgElems[order - 1];

      if ($(clickedElem).hasClass("filled")) {
        for (let index = order; index < svgElems.length; index++) {
          var svgElem = svgElems[index];
          var btnElem = btnElems[index];
          var virusElem = virusElems;
          $(svgElem).removeClass("filled");
          $(btnElem).removeClass("active0");
          $(virusElem).removeClass("virus" + index + "");
        }
      } else {
        for (let index = 0; index <= order - 1; index++) {
          var svgElem = svgElems[index];
          var btnElem = btnElems[index];
          var virusElem = virusElems;
          $(svgElem).addClass("filled ");
          $(btnElem).addClass("active0 ");
          $(virusElem).addClass("virus" + index + "");
        }
      }

      $("#punchData1").val(order);
    });
  }
  function ladder() {
    $(".btnsLaddr").click(function () {
      var svgElems = $("#Lines path");
      var btnElems = $(".btnsLaddr");
      var manElems = $(".man-svg");
      var order = Number($(this).attr("order"));
      var clickedElem = svgElems[order - 1];

      if ($(clickedElem).hasClass("filledLadder")) {
        for (let index = order; index < svgElems.length; index++) {
          var svgElem = svgElems[index];
          var btnElem = btnElems[index];
          var manElem = manElems;
          $(svgElem).removeClass("filledLadder");
          $(btnElem).removeClass("active1");
          $(manElem).removeClass("man-svg" + index + "");
        }
      } else {
        for (let index = 0; index <= order - 1; index++) {
          var svgElem = svgElems[index];
          var btnElem = btnElems[index];
          var manElem = manElems;
          $(svgElem).addClass("filledLadder");
          $(btnElem).addClass("active1 ");
          $(manElem).addClass("man-svg" + index + "");
        }
      }

      $("#punchData").val(order);
    });
  }
  snake();
  ladder();
});
