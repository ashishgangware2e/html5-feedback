$(document).ready(function(t) {
    function e() {
        for (var t = 0; t < arrX1.length; t++) n.push(0)
    }

    function i() {
        for (var t = 0; t < arrX1.length; t++) $("#ab" + t).css({
            background: "#FFF",
            opacity: "0.0"
        }), e()
    }

    function e() {
        for (var t = 0; t < arrX1.length; t++) n[t] = 0
    }
    var a = [],
        r = 0,
        o = 0,
        n = [];
    output(n), $(".rateImg").css("background", "url(" + imgrate + ") no-repeat");
    for (var s = 0; s < arrX1.length; s++) {
        //r = arrX2[s] - arrX1[s], o = arrY2[s] - arrY1[s];
        var c = arrX1[s],
            l = arrY1[s],r=arrX2[s],o=arrY2[s];
        $(".mainContner").css({
            width: _width + "px",
            height: _height + "px"
        }).append("<div id='ab" + s + "' rel='" + s + "' class='hotSpot' style='left:" + c + "px; top:" + l + "px; width:" + r + "px; height:" + o + "px; position:absolute; background:#999; border:1px solid #FFF;opacity:0.0;filter: alpha(opacity=0);-khtml-opacity: 0.0;-moz-opacity: 0.0;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';'></div>"), n[s] = 0
    }
    $(".hotSpot").click(function() {
            if ($("#dntLike").removeClass("deactiveCl"), $("#dntLike").addClass("activeCl"), 1 == nSingleSelection) {
                a = [], i();
                t = $(this).attr("rel");
                n[t] = "1", $("#" + $(this).attr("id")).css({
                    background: "url(" + selectColor + ") center no-repeat",
                    opacity: "1"
                }), output(n)
            } else {
                $("#" + $(this).attr("id")).css({
                    background: "url(" + selectColor + ") center no-repeat",
                    opacity: "1"
                });
                var t = $(this).attr("rel");
                "0" == n[t] ? n[t] = "1" : ($("#ab" + t).css({
                    background: "#FFF",
                    opacity: "0.0"
                }), n[t] = "0")
            }
            output(n)
        }), $(".buton").html('<input type="button" id="dntLike" class="activeCl" value="' + dislikeStr + '"/><input type="button" id="dntLike2" class="activeCl2" value="' + dislikeStr2 + '"/>'), "false" == magnifier_display && $("#dntLike2").css("display", "none"), $("#dntLike").click(function() {
            a = [], e(), $(this).removeClass("activeCl"), $(this).addClass("deactiveCl"), i(), output(noneValue)
        }),
        function(t) {
            t.fn.clickToggle = function(e, i) {
                var a = [e, i];
                return this.data("toggleclicked", 0), this.click(function() {
                    var e = t(this).data(),
                        i = e.toggleclicked;
                    t.proxy(a[i], this)(), e.toggleclicked = (i + 1) % 2
                }), this
            }
        }(jQuery), $("#dntLike2").clickToggle(function() {
            $(function() {
                $("#img_01").imageLens({
                    imageSrc: imgLarge,
                    lensSize: 250
                })
            }), $(this).removeClass("activeCl2"), $(this).addClass("deactiveCl2")
        }, function() {
            $(this).removeClass("deactiveCl2"), $(this).addClass("activeCl2"), $(function() {
                $("#as").remove()
            })
        }), "0" == NON && ($("#dntLike").removeClass("activeCl"), $("#dntLike").addClass("dntLikeN"))
});
