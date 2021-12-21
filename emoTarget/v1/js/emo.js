!(function (t) {
  if (((t.support.touch = "ontouchend" in document), t.support.touch)) {
    var o,
      e = t.ui.mouse.prototype,
      n = e._mouseInit;
    (e._touchStart = function (t) {
      !o &&
        this._mouseCapture(t.originalEvent.changedTouches[0]) &&
        ((o = !0),
        (this._touchMoved = !1),
        u(t, "mouseover"),
        u(t, "mousemove"),
        u(t, "mousedown"));
    }),
      (e._touchMove = function (t) {
        o && ((this._touchMoved = !0), u(t, "mousemove"));
      }),
      (e._touchEnd = function (t) {
        o &&
          (u(t, "mouseup"),
          u(t, "mouseout"),
          this._touchMoved || u(t, "click"),
          (o = !1));
      }),
      (e._mouseInit = function () {
        this.element
          .bind("touchstart", t.proxy(this, "_touchStart"))
          .bind("touchmove", t.proxy(this, "_touchMove"))
          .bind("touchend", t.proxy(this, "_touchEnd")),
          n.call(this);
      });
  }
  function u(t, o) {
    if (!(t.originalEvent.touches.length > 1)) {
      t.preventDefault();
      var e = t.originalEvent.changedTouches[0],
        n = document.createEvent("MouseEvents");
      n.initMouseEvent(
        o,
        !0,
        !0,
        window,
        1,
        e.screenX,
        e.screenY,
        e.clientX,
        e.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        t.target.dispatchEvent(n);
    }
  }
})(jQuery);
var Brandtxt = "Emo one",
  drgAttr =
    "Statement 2|Statement 1|Statement 3|Statement 4|Statement 5|Statement 6|Statement 7|Statement 8|Statement 9|Statement 10",
  precode = "2|1|3|4|5|6|7|8|9|10",
  randomValue = 0,
  Item = "Item1",
  of = "of";
function outputValues(t) {
  $("#outputs").val(t);
}
$(document).ready(function () {
  var t = drgAttr.split("|"),
    a = [],
    e = 0,
    i = [];
  dragCheck = !1;
  var s = [],
    p = t.length,
    n = precode.split("|");
  function o(t, a) {
    return (t / a) * 100;
  }
  function r() {
    $(".txtSpan")
      .html(Brandtxt)
      .css("top", $(".rightdiv").css("height") + "px");
  }
  $.each(t, function (t, e) {
    a.push(n[t]);
  }),
    parseInt(randomValue) &&
      (function (t, a) {
        for (var e = t.length - 1; e > 0; e--) {
          var i = Math.floor(Math.random() * (e + 1)),
            s = t[e];
          (t[e] = t[i]), (t[i] = s);
          var p = a[e];
          (a[e] = a[i]), (a[i] = p);
        }
      })(t, a),
    (function (e, i) {
      for (var p = 50, n = "", o = 0; o < i; o++) {
        var l = "";
        (d = t[o]),
          (l =
            null != d.match(/\.(jpeg|jpg|png)$/)
              ? "<img src='" +
                t[o] +
                "' width='100%' height='100%' style='position:relative;' data-path='" +
                s[o] +
                "'><div class='popupIcon' data-path='" +
                s[o] +
                "'></div>"
              : "<span> " + t[o] + "</span>"),
          (n +=
            '<div class="stmnt" id="lbl' +
            a[o] +
            '" style="z-index:' +
            p +
            ';">' +
            l +
            "</div>"),
          (p -= 1);
      }
      var d;
      $(".leftdiv").html(
        '<div class="lableTxt"><span>' +
          Item +
          " " +
          (e + 1) +
          " " +
          of +
          " " +
          i +
          "</span></div>" +
          n
      ),
        r();
    })(e, p),
    $(".rightdiv").bind("click", function (t) {
      if (!$(t.target).hasClass("dots")) {
        $(".ripple").remove();
        var s = $(this).offset().left,
          n = $(this).offset().top,
          r = $(this).width(),
          l = $(this).height();
        $(this).prepend("<span class='ripple'></span>"),
          r >= l ? (l = r) : (r = l);
        var d = t.pageX - s - r / 2,
          h = t.pageY - n - l / 2;
        $(".ripple")
          .css({ width: r, height: l, top: h + "px", left: d + "px" })
          .addClass("rippleEffect");
        var c = t.pageX - $(".lableTxt").offset().left - 100,
          f = t.pageY - $(".lableTxt").offset().top - 50;
        $("#lbl" + a[e]).animate(
          { left: c, top: f, opacity: 0 },
          500,
          function () {
            $(this).hide();
          }
        ),
          (e += 1) >= p &&
            ($(".lableTxt").remove(), $(".rightdiv").off("click")),
          $(".lableTxt")
            .find("span")
            .html("Item " + (e + 1) + " of " + p);
        var v = $(this).offset(),
          m = t.pageX - parseInt(v.left),
          g = t.pageY - parseInt(v.top),
          u = parseInt(o(m, $(this).width())),
          b = parseInt(o(g, $(this).height()));
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? $(this).append(
              "<div class='dots' style='left:" +
                (u - 3.5) +
                "%; top:" +
                (b - 3.5) +
                "%;'>&nbsp;</div>"
            )
          : $(this).append(
              "<div class='dots' style='left:" +
                (u - 2) +
                "%; top:" +
                (b - 2) +
                "%;'>&nbsp;</div>"
            );
        var x,
          w,
          I =
            ((x = u),
            (w = b),
            Math.sqrt(
              Math.pow(Math.abs(50 - x), 2) + Math.pow(Math.abs(50 - w), 2)
            ));
        I > 50 && (I = 50),
          (i[a[e - 1] - 1] = Math.round(2 * I)),
          outputValues(i);
      }
    }),
    $(window).resize(function () {
      r();
    }),
    $(".stmnt .popupIcon").click(function () {
      if (!dragCheck) {
        var t = $(this).attr("data-path");
        $(".wrapper.row-of-icons").append(
          "<div class='imagePopup'><div class='imgBox'><img src='" +
            t +
            "'><span class='cross'></span></div></div>"
        );
      }
      $(".imagePopup .imgBox .cross").show(0),
        $(".imagePopup,.cross").click(function () {
          $(".imagePopup").remove();
        });
    });
});
