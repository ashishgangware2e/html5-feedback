// JavaScript Document

$(document).ready(function() {


    statmentStrArr = statmentStr.split("|");
    StatmentCodeArr = StatmentCode.split("|");
    var topCountStrArr = topCountStr.split("|");
    zindex = StatmentCodeArr.length;
    var flagCount = 0;
    flagParaCount = 1;
    var outputarr = [];
    var backOutputarr = [];

    $(".toolWapper").html('<div class="target-row stmt-row clearfix"><div class="setMiddle"><div class="blockElments margin_bottom" id="countdownList"> </div><div class="blockElments" id="statmentText"></div></div></div><div class="target-row drp-zone clearfix"><div class="bottomRightNegative">' + legentText[1] + '</div><div class="toTarget y-axis"><div class="midset clearfix"><div class="clickableArea"><div class="bdr-clr"></div></div></div></div><div class="clearAll"></div><div class="BottomleftPosetive">' + legentText[0] + '</div></div>');

    $("#countdownList").html('<div class="countBox">' + topCountStrArr[0] + ' ' + (1) + " " + topCountStrArr[1] + " " + StatmentCodeArr.length + '<div>');

    for (var i = 0; i < statmentStrArr.length; i++) {
        $("#statmentText").append('<div class="borderBox" data-index="' + i + '" id="movetext_' + StatmentCodeArr[i] + '" style="z-index:' + (zindex) + '">' + statmentStrArr[i] + '</div>');
        zindex = zindex - 1
    }


    var ends = true;
    $('.clickableArea, .bdr-clr').bind('click', function(e) {


        if (e.target !== this)
            return;


        if (!$(".borderBox").length == 0 && ends == true) {

            if (backpunch != true) {
                ends = false;
            }

            //moving Positions
            // var offset = $(this).offset();// clickable area
            // var offsetParent = $(this).parent().parent().parent().parent().offset();//toolwrapper
            var offsetParent = $(".borderBox:first").offset(); //toolwrapper
            var offsetParentWidth = $(".borderBox:first").width() / 2; //toolwrapper
            var offsetParentX = e.pageX - (offsetParent.left + offsetParentWidth);
            var offsetParentY = e.pageY - offsetParent.top;

            //Click Positions
            var offst = $(this).offset();
            // var lftpos = e.pageX - parseInt(offst.left);
            var toppos = e.pageY - parseInt(offst.top);

            // var lftPrcnt = parseInt(findPercentage(lftpos, $(this).width()));
            // var topPrcnt = parseInt(findPercentage(toppos, $(this).height()));

            var currentStatementdata = $(".borderBox:first").attr("id").split("_")[1];
            var cindeData = $(".borderBox:first").attr("data-index");
            var currentStatementText = $(".borderBox:first").text();

            var dropedArea = $(".clickableArea").height();
            var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (toppos)));
            output = changeoutput(output);
            var topPrcntNew = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (toppos - 9)));
            var backOutput = topPrcntNew;

            $(".clickableArea").append('<div class="knob" data-index="' + flagCount + '" data-drag="' + currentStatementdata + '" title="' + currentStatementText + '" style="left:-12px;top:' + topPrcntNew + '%"><div class="strRotate"> <span class="current_text">' + currentStatementText + '</span></div></div>');


            if (backpunch != true) {
                // if ($(window).width() < 768) {
                //     $(".borderBox:first").animate({ left: offsetParentX, top: offsetParentY, opacity: 0 }, 500, function() { $(".borderBox:first").remove() });
                // }

                $(".borderBox:first").animate({ left: offsetParentX, top: offsetParentY, opacity: 0 }, 500, function() { $(".borderBox:first").remove() });

            } else {
                $(".borderBox:first").remove();
            }



            flagCount += 1;
            flagParaCount = flagParaCount + 1;

            if (flagParaCount >= (statmentStrArr.length) + 1) {
                $("#countdownList").remove();
            }
            $("#countdownList").html('<div class="countBox">' + topCountStrArr[0] + ' ' + flagParaCount + " " + topCountStrArr[1] + " " + statmentStrArr.length + '<div>');


            outputarr[cindeData] = 100 - output;
            backOutputarr[cindeData] = backOutput.toFixed(2);
            outputValues(outputarr, backOutputarr);

            setTimeout(function() {
                ends = true
            }, 500)
            e.preventDefault();
        }


        $(".knob").draggable({
            containment: ".toTarget",
            axis: 'y',
            drag: function(event, ui) {

                var curntIndex = $(this).attr("data-index")
                var dropedArea = $(".clickableArea").height();
                var toppos = $(this).position().top;

                var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (toppos + 9)));

                output = changeoutput(output);


                outputarr[curntIndex] = 100 - output;
                backOutputarr[curntIndex] = toppos.toFixed(2);
                outputValues(outputarr, backOutputarr);


            },
            stop: function(event, ui) {
                var l = (100 * parseFloat($(this).position().left / parseFloat($(this).parent().width()))) + "%";
                var t = (100 * parseFloat($(this).position().top / parseFloat($(this).parent().height()))) + "%";
                $(this).css("left", l);
                $(this).css("top", t);

                var curntIndex = $(this).attr("data-index")
                var dropedArea = $(".clickableArea").height();
                var toppos = $(this).position().top;

                var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (toppos + 9)));

                output = changeoutput(output);


                outputarr[curntIndex] = 100 - output;
                backOutputarr[curntIndex] = Number(t.split("%")[0]).toFixed(2);
                outputValues(outputarr, backOutputarr);
            }
        });



    });


    function changeoutput(output) {
        if (output == 100) {
            output = 99;
        }
        return output;
    }



    function findPercentage(vals, outof) {
        return ((vals / outof) * 100);
    }


    if (backpunch == true) {
        var outPutVal_ = outputVal.split("|");
        var backpunchVal_ = backpunchVal.split("|");

        outPutVal_.forEach(function(e, i) {
            $('.clickableArea').click();
            $("[data-drag=" + StatmentCodeArr[i] + "]").css("top", backpunchVal_[i] + "%");
            outputarr[i] = e;
            backOutputarr[i] = backpunchVal_[i];
            outputValues(outputarr, backOutputarr);

        })
    }

    function height(){
        $(".borderBox").height('auto');
        var h = 0;
        $(".borderBox").each(function(){
            var ch = $(this).height();
            if(h<ch){
                h = ch;
            }
        })

        $(".borderBox").height(h);

    }

    height();

    $(window).resize(function(){height()})

});