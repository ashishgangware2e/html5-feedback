// JavaScript Document

$(window).load(function() {
    var _statementRateArr = _statementRate.split("|");
    var _imageArr = _imageStr.split("|");
    var _colorArr =_colorStr.split("|");

    for (var i = 0; i < _statementRateArr.length; i++) {
        $(".singleClickBlock").append("<div class='wrap-selection'><div class='iconBlockArea conSet0" + [i + 1] + "'> <div class='setArea' data-role='" + [i + 1] + "'><img src='"+_imageArr[i]+"'/></div></div><div class='rating-text state_" + i + "' style='color:"+_colorArr[i]+"''>" + _statementRateArr[i] + "</div></div>");
    }

    jQuery(function($) {
        $('.setArea').click(function(evt) {
            evt.stopPropagation();
            $('.overlayActive').not(this).removeClass('overlayActive');
            $(this).toggleClass('overlayActive');
            $(".iconBlockArea").removeClass('slideup');
            if ($(this).hasClass("overlayActive")) {
                $(this).parent().addClass("slideup")
                var ot = $(this).attr("data-role");
                $("#resval").val(ot);
            } else {
                $(this).addClass("overlayActive");
                $(".iconBlockArea").removeClass('slideup');
            }
        });

    });
    function imgAdded()
    { 
      var minWidth = 0;
      var width = 750;
      if(_imageArr.length > 5)
      {
      minWidth =  $(".singleClickBlock").width() + $(".wrap-selection").width() + $(".wrap-selection").width();
        $(".singleClickBlock").css({"min-width":minWidth+"px"}) + $(".wrap-selection").width("calc(100% / 10)");
        $(".iconBlockArea").css({width:"60px", height:"60px"})
        $("img").css({width:"100%"})
      }
      else
      {
        $(".singleClickBlock").css({"width":width+"px"});
      }
    }
    imgAdded();
});