// JavaScript Document

$(document).ready(function() {


    statmentStrArr = statmentStr.split("|");
    StatmentCodeArr = StatmentCode.split("|");
	var topCountStrArr=topCountStr.split("|");
    zindex = StatmentCodeArr.length;
    var flagCount = 0;
    flagParaCount = 1;
    var outputarr = [];
    var backOutputarr = [];

    $(".toolWapper").html('<div class="target-row"><div class="setMiddle"><div class="blockElments margin_bottom" id="countdownList"> </div><div class="blockElments" id="statmentText"></div></div></div><div class="clearAll"></div><div class="target-row"><div class="toTarget"><div class="midset"><div class="clickableArea"><div class="bdr-clr"></div></div></div><div class="bottomRightNegative">' + legentText[1] + '</div><div class="BottomleftPosetive">' + legentText[0] + '</div></div><div class="target-overlay"></div></div>');

    $("#countdownList").html('<div class="countBox">'+topCountStrArr[0]+' ' + (1) + " "+topCountStrArr[1]+" " + StatmentCodeArr.length + '<div>');

    for (var i = 0; i < statmentStrArr.length; i++) {
        $("#statmentText").append('<div class="borderBox" data-index="' + i + '" id="movetext_' + StatmentCodeArr[i] + '" style="z-index:' + (zindex) + '"><div class="v-algn">' + statmentStrArr[i] + '</div></div>');
        zindex = zindex - 1
    }


	var ends = true;
    $('.clickableArea, .bdr-clr').bind('click', function (e) {

       
        if (e.target !== this)
            return;
        
            //console.log($(".borderBox").length)
			//console.log(ends);
        if (!$(".borderBox").length == 0 && ends==true) {

            $(".target-overlay").show(0);
            if(backpunch != true){
                ends=false;
            }
			//console.log(ends);
            //moving Positions
            var offset = $(this).offset();
            var offsetParent = $(this).parent().parent().parent().parent().offset();
            var offsetParentX = e.pageX - offsetParent.left;
            var offsetParentY = e.pageY - offsetParent.top;

            //Click Positions
            var offst = $(this).offset();
            var lftpos = e.pageX - parseInt(offst.left);

            var lftPrcnt = parseInt(findPercentage(lftpos, $(this).width()));

            var currentStatementdata = $(".borderBox:first").attr("id").split("_")[1];
            var cindeData = $(".borderBox:first").attr("data-index");
            var currentStatementText = $(".borderBox:first").text();

            var dropedArea = $(".clickableArea").width();
            var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (lftpos)));
            output = changeoutput(output); 
            var lftPrcntNew = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (lftpos - 9)));
            var backOutput = lftPrcntNew;
            //console.log(lftPrcntNew)

            /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            	$(".clickableArea").append('<div class="knob" data-index="'+flagCount+'" data-drag="'+currentStatementdata+'" title="'+currentStatementText+'" style="left:'+(lftPrcntNew)+'%; top:-7px"><div class="strRotate">'+currentStatementText+'</div></div>');
            }
            else{
            	$(".clickableArea").append('<div class="knob" data-index="'+flagCount+'" data-drag="'+currentStatementdata+'" title="'+currentStatementText+'" style="left:'+(lftPrcntNew)+'%; top:-7px"><div class="strRotate">'+currentStatementText+'</div></div>');
            }*/
            $(".clickableArea").append('<div class="knob" data-index="' + flagCount + '" data-drag="' + currentStatementdata + '" title="' + currentStatementText + '" style="left:' + (lftPrcntNew) + '%; top:-7px"><div class="strRotate">' + currentStatementText + '</div></div>');


            if(backpunch != true){
                if ($(window).width() < 768) {
                    $(".borderBox:first").animate({ left: offsetParentX - 400, top: offsetParentY - 10, opacity: 0 }, 500, function() { $(".borderBox:first").remove() });
                }
    
                $(".borderBox:first").animate({ left: offsetParentX - 650, top: offsetParentY - 10, opacity: 0 }, 500, function() { $(".borderBox:first").remove() });

            }else{    
                 $(".borderBox:first").remove();
            }

			
			
            flagCount += 1;
            flagParaCount = flagParaCount + 1;

            if (flagParaCount >= (statmentStrArr.length) + 1) {
                $("#countdownList").remove();
            }
            $("#countdownList").html('<div class="countBox">'+topCountStrArr[0]+' ' + flagParaCount + " "+topCountStrArr[1]+" " + statmentStrArr.length + '<div>');

          
            outputarr[cindeData] = output;
            backOutputarr[cindeData] = backOutput;
            outputValues(outputarr,backOutputarr);
            
			setTimeout(function(){
                ends=true;
                $(".target-overlay").hide(0);
			},500)
            e.preventDefault();
        }


        $(".knob").draggable({
            containment: ".toTarget",
            axis: 'x',
            drag: function(event, ui) {

                var curntIndex = $(this).attr("data-index")
                var dropedArea = $(".clickableArea").width();
                var lftpos = $(this).position().left;

                var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (lftpos + 9)));
               
                output = changeoutput(output);
               

                outputarr[curntIndex] = output;
                backOutputarr[curntIndex] = lftpos;
                outputValues(outputarr,backOutputarr);


            },
            stop: function(event, ui) {
                var l = (100 * parseFloat($(this).position().left / parseFloat($(this).parent().width()))) + "%";
                var t = (100 * parseFloat($(this).position().top / parseFloat($(this).parent().height()))) + "%";
                $(this).css("left", l);
                $(this).css("top", t);

                var curntIndex = $(this).attr("data-index")
                var dropedArea = $(".clickableArea").width();
                var lftpos = $(this).position().left;

                var output = Number(0) + Number(Math.round((100 - 0) / (dropedArea) * (lftpos + 9)));
               
                output = changeoutput(output);
               

                outputarr[curntIndex] = output;
                backOutputarr[curntIndex] = l.split("%")[0];
                outputValues(outputarr,backOutputarr);
            }
        });



    });


    function changeoutput(output) {
        if (output == 0) {
            output = 1;
        }
        return output;
    }



    function findPercentage(vals, outof) {
        return ((vals / outof) * 100);
    }


    function setHeight(){
        var curHght = 0;
        $(".borderBox").each(function(i,e){
            if(curHght < $(e).height()){
                curHght = $(e).height();
            }
 
        })
        $(".borderBox").height(curHght);
    }

    setHeight();

    $(window).resize(function(){
        setHeight();
    })

    if(backpunch == true){
        var outPutVal_ = outputVal.split("|");
        var backpunchVal_ = backpunchVal.split("|");

        outPutVal_.forEach(function(e,i){
            $('.clickableArea').click();
            $("[data-drag="+StatmentCodeArr[i]+"]").css("left",backpunchVal_[i]+"%");
            outputarr[i] = e;
            backOutputarr[i] = backpunchVal_[i];
            outputValues(outputarr,backOutputarr);
            
        })
    }

});

$(window).load(function(){
    $(window).resize();
})