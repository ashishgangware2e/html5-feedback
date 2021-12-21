$(document).ready(function () {
  var statementArr = statementStr.split("|");
  var barColorArr = sliderbarColor.split("|");
  var sliderTextcolor_ = sliderTextcolor.split("|");
  var sliderbarArr = sliderbarValue.split("|");
  var scaleTextArr = scaleText.split("|");
  var labelArr = label.split("|");
  var indexI = 0;
  var topPos = 0;
  var heightpos = 0;

  var slideStr = "";
  var strdummy = "";
  var outputvalues = [];
  $(".slider-container").append('<div class="slider-warper">\
  <div class="sliderbar-wrapper"></div>\
  <div class="lableBlock">\
  </div>\
</div>')

  for (i = 0; i < labelArr.length; i++) {
    strdummy = $(".lableBlock").append(
      "<label><span>" + labelArr[i] + "</span></label>"
    );
  }
  $(".lableBlock").after(
    '<div class="lableBlocktext"> <div class="leftText">' +
      scaleTextArr[0] +
      '</div> <div class="rightText">' +
      scaleTextArr[1] +
      "</div></div>"
  );

  for (var i = 0; i < statementArr.length; i++) {
    topPos -= 65;
    heightpos += 65;
    slideStr +=
      '<div id="sliderbar_' + (i + 1) + '" class="bind-slider"></div>';
  }

  $(".slider-warper .sliderbar-wrapper").html(slideStr).after(strdummy);
  var intialVal = 15;

  $(function () {
    $(".bind-slider").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 100,
      value: 50,
      create: function () {
        topPos += 55;
        heightpos += -55;
        $(this)
          .find(".ui-slider-handle")
          .append(
            "<div class='statmentText statmentArea" +
              [indexI] + "' style='top:" + [topPos] +"px'><span class='tooltip' style=' background-color:" + barColorArr[indexI] +";'></span><span class='text' style='color:"+sliderTextcolor_[indexI]+"'>" +statementArr[indexI] +
              "</span></div><span class='thd downBar" +
              [indexI] +
              "' style='top:" +
              [topPos + 24] +
              "px; height:" +
              [heightpos] +
              "px; background-color:" +
              barColorArr[indexI] +
              "'></span>"
          );
        console.log(statementArr[indexI++] + "1");
        $(this)
          .find(".ui-slider-range")
          .css("background", barColorArr[indexI - 1],"color",sliderTextcolor_[indexI])
          .addClass("cstm-range" + [indexI] + "");

        $(".bind-slider")
          .find(".cstm-range" + [indexI] + "")
          .css({ top: +intialVal + "px" });

        $(this)
          .find(".statmentText")
          .css("background", barColorArr[indexI - 1],"color",sliderTextcolor_[indexI])
      },

      slide: function (event, ui) {
        var currentId = $(this).attr("id").split("_")[1];
        var prevId = "",
          nextId = "";

        var prevId = $($(this).prev()).slider("value");

        if (!$(this).next().hasClass("clearAll")) {
          var nextId = $($(this).next()).slider("value");
        }

        if (ui.value >= prevId || ui.value <= nextId) {
          return false;
        }

        outputvalues[currentId - 1] = ui.value;
        outputValue(outputvalues);
      },
    });

    for (var j = 0; j < sliderbarArr.length; j++) {
      $("#sliderbar_" + (j + 1)).slider("value", sliderbarArr[j]);
    }
  });
});

// JavaScript Document

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!(function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
        d = document.createEvent("MouseEvents");
      d.initMouseEvent(
        b,
        !0,
        !0,
        window,
        1,
        c.screenX,
        c.screenY,
        c.clientX,
        c.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        a.target.dispatchEvent(d);
    }
  }
  if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
    var e,
      b = a.ui.mouse.prototype,
      c = b._mouseInit,
      d = b._mouseDestroy;
    (b._touchStart = function (a) {
      var b = this;
      !e &&
        b._mouseCapture(a.originalEvent.changedTouches[0]) &&
        ((e = !0),
        (b._touchMoved = !1),
        f(a, "mouseover"),
        f(a, "mousemove"),
        f(a, "mousedown"));
    }),
      (b._touchMove = function (a) {
        e && ((this._touchMoved = !0), f(a, "mousemove"));
      }),
      (b._touchEnd = function (a) {
        e &&
          (f(a, "mouseup"),
          f(a, "mouseout"),
          this._touchMoved || f(a, "click"),
          (e = !1));
      }),
      (b._mouseInit = function () {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          c.call(b);
      }),
      (b._mouseDestroy = function () {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          d.call(b);
      });
  }
})(jQuery);
