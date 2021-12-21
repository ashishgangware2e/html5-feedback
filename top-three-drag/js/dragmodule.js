$(window).load(function() {
var rankOrder = rankArr.split("|");
    function t(t, n, r) {
        for (var l = 1; l <= f.length; l++) m.push(l);
        r && i(f, m);
        for (var d = n.split("|"), o = "", s = 1; s <= f.length; s++) o += "<div id='draggable" + m[s - 1] + "' class='draggableOp'><div class='textCl'>" + f[s - 1] + "</div></div>";
        $(".draggableBlock").html(o), "" == !otherOption && $(".draggableBlock").append("<div id='draggable" + (f.length + 1) + "' class='draggableOp ui-draggable'><div class='textCl'>" + otherOption + "&nbsp;" + x + "</div></div>");
        $(".draggableOp").height(), f.length;
        for (s = 1; s <= d.length; s++) $(".targetMainBlock").html("<div id='dragdowntext'>" + hintDowntext + " &#9660;</div><div class='clearAll' id='setTopDynamic'></div><div id='ddsd'><div id='droppable1' class='targetDb'><div class='numtext'>"+rankOrder[0]+"</div></div><div id='droppable2' class='targetDb'><div class='numtext'>"+rankOrder[1]+"</div></div><div id='droppable3' class='targetDb'><div class='numtext'>"+rankOrder[2]+"</div></div></div></div>");
        e(), a();
        var c = $(".mainContainer").innerHeight() / 2 - 150;
        $("#setTopDynamic").css({
            height: c + "px"
        })
    }

    function e() {
        $(".draggableOp").draggable({
            containment: ".mainContainer",
            cursor: "pointer",
            greedy: !0,
            tolerance: "touch",
            scroll: !0,
            start: n,
            items: ".enabled",
            cancel: ".enabled",
            drag: function(t, e) {
                l($(this)), s()
            },
            revert: function(t) {
                var e = $(this),
                    a = e.data("hasBeenDropped");
                return !(t && ("droppable1" == t[0].id || "droppable2" == t[0].id || "droppable3" == t[0].id)) && (l(e), $(this).removeClass("activeClass"), !a || (e.animate({
                    top: 0,
                    left: 0
                }, 100), s(), !1))
            }
        })
    }

    function a() {
        $(".targetDb").droppable({
            activeClass: "ui-state-hover",
            hoverClass: "ui-state-active",
            accept: ".draggableOp",
            items: ".enabled",
            cancel: ".enabled",
            drop: function(t, e) {
                $(this).droppable("option", "accept", e.draggable), $(this).attr("datt-info", "true"), $(e.draggable).addClass("activeClass"), $(e.draggable).css("height", $(this).height()), $(e.draggable).data("hasBeenDropped", !0), e.draggable.position({
                    of: $(this),
                    my: "center",
                    at: "center"
                }), r(e.draggable, $(this)), s()
            },
            start: function(t, e) {
                $(this).css("z-index", u++)
            },
            out: function(t, e) {
                $(this).droppable("option", "accept", ".draggableOp")
            }
        })
    }

    function i(t, e) {
        for (var a = t.length - 1; a > 0; a--) {
            var i = Math.floor(Math.random() * (a + 1)),
                n = t[a];
            t[a] = t[i], t[i] = n;
            var r = e[a];
            e[a] = e[i], e[i] = r
        }
        return t
    }

    function n(t, e) {
        $(this).css("z-index", b++), $(this).draggable("instance").offset.click = {
            left: Math.floor(e.helper.width() / 2),
            top: Math.floor(e.helper.height() / 2)
        }
    }

    function r(t, e) {
        var a = t.attr("id").split("e")[1],
            i = e.attr("id").split("e")[1];
        1 == i ? g.push(a) : 2 == i ? p.push(a) : 3 == i && v.push(a), d(t, e)
    }

    function l(t) {
        for (var e = t.attr("id").split("e")[1], a = 0; a < g.length; a++) g[a] == e && g.splice(a, 1);
        for (var i = 0; i < p.length; i++) p[i] == e && p.splice(i, 1);
        for (var n = 0; n < v.length; n++) v[n] == e && v.splice(n, 1);
        o(t)
    }

    function d(t, e) {
        t.attr("id").split("e")[1], e.attr("id").split("e")[1];
        c()
    }

    function o(t) {
        c()
    }

    function s() {
        var t = g.length + p.length + v.length;
        f.length;
        $("#othertext").click(function() {
            $(this).focus()
        })
    }

    function c() {
        var t = "";
        t = g + "," + p + "," + v, outputValue(t)
    }
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var h = $(window).width(),
        g = [],
        p = [],
        v = [],
        u = 3,
        f = dragStr.split("|"),
        b = 25,
        m = [],
        x = "<input type=text id='othertext'>";
    "" == !noneOfthesetext ? $(".dntClass").html("<input type='checkbox' id='dntBtn' /><label for='dntBtn'><span class='ui'></span>" + noneOfthesetext + "</label>") : $(".dntClass").html(""), t(dragStr, "A|B|C", randomization), $(window).resize(function() {
        $("#dntBtn").prop("checked", !1), $(this).width() != h && (h = $(this).width(), t(dragStr, "A|B|C", randomization), g = [], p = [], v = [], s(), c())
    }), $("#othertext").click(function() {
        $(this).focus()
    }), $("#othertext").keyup(function(t) {
        $("#othertt").val($(this).val()), 32 !== t.which || this.value.length || t.preventDefault()
    }), $("#othertext").keydown(function(t) {
        $("#othertt").val($(this).val()), 32 !== t.which || this.value.length || t.preventDefault()
    }), $("#dntBtn").click(function() {
        $(this).prop("checked") ? (t(dragStr, "A|B|C", randomization), g = [], p = [], v = [], s(), c(), $("#othertext").attr("readonly", "true"), $(".draggableOp").draggable("disable"), $(".draggableOp").removeClass("active").addClass("inactive"), $("#dntOut").val(noneOfthese), $("#othertt").val("")) : ($("#othertext").removeAttr("readonly"), $("#othertext").click(function() {
            $(this).focus()
        }), $(".draggableOp").draggable("enable"), $(".draggableOp").removeClass("inactive").addClass("active"), $("#othertext").keyup(function() {
            $("#othertt").val($(this).val())
        }), $("#othertext").keydown(function() {
            $("#othertt").val($(this).val())
        }), $("#dntOut").val(""))
    })
}), $(document).ready(function() {}), $(window).scroll(function() {
    $("#ddsd"), $(window).scrollTop()
});
