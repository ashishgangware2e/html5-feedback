$(document).ready(function() {
    var output = "";
    var samePos = false;
    var carsPos = [];
    var checks = "";
    var prevPos = "";
    var randomIndx = [];
    var indexZ = 20;
    var carPosArr = [];
    var rangeVal = range.split("|");
    var aoutpt = [];
    var arrText = labelText.split("|");
    var precode_ = precode.split("|");
    var precodeArr = [];
    precode_.forEach(function(el, i) {
        precodeArr.push([i + 1]);
    })
    precode_ = precodeArr;

    function reloadFunction() {

        function Init(carPos, imgStr, precode_, trackText, scaleText) {
            carPosArr = carPos.split("|");
            aoutpt = carValue.split("|");
            var imagesArr = imgStr.split("|");
            var trackTextArr = trackText.split("|");
            var AarrscaleText = scaleText.split("|");

            $.each(carPosArr, function(index, arrValue) {
                carsPos[index] = arrValue.split(":");
                randomIndx.push(index + 1);
            });

            //locArr = carPosArr;
            outputValue(aoutpt, carPosArr.join("|"))
                //defaultCarLoc(carPosArr);
                // if(parseInt(randomValue)){
                // 	// shuffleArray(imagesArr,randomIndx);
                // }

            createRaceTrack(imagesArr, trackTextArr, AarrscaleText);
        }

        Init(carPos, imgStr, precode_, trackText, scaleText);

        function createRaceTrack(imagesArr, trackTextArr, AarrscaleText) {
            var _drgObj = "";
            var brandNames = [];
            var carTop = 0;
            $.each(imagesArr, function(i, v) {

                if (enableInput == 1) {
                   
                    _drgObj += "<div id=posi" + i + " class='dragThis' data-info='" + precode_[i] + "' style='left:" + 0 + "px; top:" + carTop + "%; z-index:" + indexZ + ";' title = " + arrText[i] + "><div class='showonDrp'>" + arrText[i] + "</div><div class='listDiv'><span>" + v + "</span></div></div><input class='labelText labletxt" + [i] + "' data-name=labletxt" + [i] + " value = " + arrText[i] + "  disabled>";
                    brandNames.push(arrText[i])
                    $("#brandNames").val(brandNames); //send all brand name value for output	
                } else {
                    if (i == 0) {

                       
                        _drgObj += "<div id=posi" + i + " class='dragThis' data-info='" + precode_[i] + "' style='left:" + 0 + "px; top:" + carTop + "%; z-index:" + indexZ + ";' title = " + arrText[i] + "><div class='showonDrp'>" + arrText[i] + "</div><div class='listDiv'><span>" + v + "</span></div></div><input class='labelText labletxt" + [i] + "' data-name=labletxt" + [i] + " value = " + arrText[i] + "  disabled>";
                        $("#brandNames").val(arrText[i]); //send intial brand name value for output
                    } else if (i == 1) {
                      
                        _drgObj += "<div id=posi" + i + " class='dragThis disabled' data-info='" + precode_[i] + "' style='left:" + 0 + "px; top:" + carTop + "%; z-index:" + indexZ + ";'><div class='showonDrp'>" + arrText[i] + "</div><div class='listDiv'><span>" + v + "</span></div></div><input class='labelText labletxt" + [i] + "' data-name=labletxt" + [i] + " control-drag=posi" + i + "  maxlength='20' />";
                    } else {
                       
                        _drgObj += "<div id=posi" + i + " class='dragThis disabled' data-info='" + precode_[i] + "' style='left:" + 0 + "px; top:" + carTop + "%; z-index:" + indexZ + ";'><div class='showonDrp'>" + arrText[i] + "</div><div class='listDiv'><span>" + v + "</span></div></div><input class='labelText labletxt" + [i] + "' data-name=labletxt" + [i] + " control-drag=posi" + i + "  maxlength='20' disabled/>";
                    }
                }


                indexZ = indexZ + 1;
                carTop += 11;
            });
            var IE81 = trackTextArr[0];
            var IE82 = trackTextArr[1];
            var tps = 90;
            if (navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
                IE81 = '<img id="theImg" src="http://e2eresearch.com/swteam/html5Tools/raceTrack/v7/images/start.png" />';
                IE82 = '<img id="theImg" src="http://e2eresearch.com/swteam/html5Tools/raceTrack/v7/images/finish.png" />';
                tps = 70;
            }

            $(".warpermain").html('<div class="scaltextMainBlock-2 clearfix"><div class="scaltextMainBlock-2-inner"><div class="scaletextLef">' + AarrscaleText[0] + '</div><div class="scaletextRigh">' + AarrscaleText[1] + '</div></div></div><div class="carTrack clearfix"><div id="imgBlock" class="drg-blk"></div><div class="dropBlock"><div class="racetextLeft rotate" style="top:' + tps + 'px">' + IE81 + '</div><div class="dropHere"><div class="tracksImg"></div></div> <div class="racetextRight rotate" style="top:' + tps + 'px">' + IE82 + '</div>  <div class="scaltextMainBlock clearfix"><div class="scaleLIne"></div></div></div></div>');
            $("#imgBlock").append(_drgObj);
            addDraggable();
            addDroppable();
        }
        // function shuffleArray(array,indexArr) {
        // for (var i = array.length - 1; i > 0; i--) {
        // 	var j = Math.floor(Math.random() * (i + 1));
        // 	var temp = array[i];
        // 	array[i] = array[j];
        // 	array[j] = temp;
        // 	var tem = indexArr[i];
        // 	indexArr[i] = indexArr[j];
        // 	indexArr[j] = tem;
        // }
        // return array;
        // }	
        function addDraggable() {
            $('.dragThis').draggable({
                containment: $('.carTrack'),
                revert: false,
                start: dragStart,
            });
            $('.dragThis.disabled').draggable("disable");
        }

        function dragStart(event, ui) {
            $(this).css("z-index", indexZ++);
            samePos = false;
            $(this).draggable({ revert: "invalid" });
            var idx = $(this).attr("data-info");
            checks = aoutpt[idx - 1];
            prevPos = carPosArr[idx - 1];
            disableTxtBlock(this);
        }

        function addDroppable() {
            $('.dropHere').droppable({
                accept: '.dragThis',
                tolerance: 'fit', //make drag item full cover drop zone
                drop: function(event, ui) {
   
                    $("#ttlDroped").val($(".dragged").length); //Number of dropped items
                  
                    var offset = $(ui.draggable).offset();
                   
                    var myvar = $('.dropHere').offset();
                    var dropx = myvar.left;
                    var dropxTop = myvar.top;
                    var xPos = offset.left - dropx;
                    var yPos = offset.top - dropxTop;
                    var dropwidth = $('.dropHere').width();
                    var min = rangeVal[0];
                    var max = rangeVal[1];
                    var dragW = $(".dragThis").width();
                    var output = Number(min) + Number(Math.round((max - min) / (dropwidth - dragW) * xPos));
                    if (output < 0) output = -1;
                    if (output > 100) output = 100;


                    //for .coordinateOFEach
                    dragWidht = $(".dragThis").width();
                    dragHeight = $(".dragThis").height();
                    dropWidht = $(".dropHere").width();
                    dropHeight = $(".dropHere").height();

                    var $newPosX = ui.offset.left - $(this).offset().left;
                    var $newPosY = ui.offset.top - $(this).offset().top;

                    var _topset = Math.ceil(($newPosX + (dragWidht / 2)) / (dropWidht / 100)); //this is the varibale you need
                    if (_topset > 100) { _topset = 100; }
                    if (_topset < 0) { _topset = 0; }
                    var _leftset = Math.ceil(100 - (($newPosY + (dragHeight / 2)) / dropHeight * 100)); //this is the varibale you need
                    if (_leftset > 100) { _leftset = 100; }
                    if (_leftset < 0) { _leftset = 0; }
                    // var pos = Math.floor(leftpos) + ":" + Math.floor(toppos);
                    var pos = _leftset + ":" + _topset;
                    // var currentid=ui.draggable.attr("id");
                    // carPos_[currentid-1]=_topset+":"+_leftset;
                    // sendOutput($(ui.draggable).attr("id"),output,carPos_);
                    //for .coordinateOFEach

                    if (output != '') { $(ui.draggable).draggable({ containment: ".dropHere" }); }

                    outputVal($(ui.draggable), output, pos);
                    valueCheck(output, $(ui.draggable));
                    //if(samePos){ 
                    //$(ui.draggable).draggable({revert: true});  
                    //outputVal($(ui.draggable),checks,prevPos);
                    //}

                    $(ui.draggable).find(".showonDrp").show(0);
                    $(ui.draggable).next().hide(0);

                }

            });
        }

        function valueCheck(pval, index) {
            var myvar = index.attr("data-info") - 1;
            for (var i = 0; i < aoutpt.length; i++) {
                if (parseInt(aoutpt[i]) !== -1) { /*&& aoutpt[i] !==0*/
                    if (parseInt(aoutpt[i]) === parseInt(pval) && parseInt(i) !== parseInt(myvar)) {
                        samePos = true;
                        break;
                    }
                }
            }
        }

        function outputVal(index, xpos, data) {
           
            var myvar = index.attr("data-info");
            aoutpt[myvar - 1] = xpos;
            carPosArr[myvar - 1] = data;
            outputValue(aoutpt, carPosArr.join("|"));
        }



        $("input.labelText").unbind("input").bind("input", function(e) {
            var brandArry = [];
            var inputTxt = $(this).val();
            var dragItemName = $(this).attr("control-drag");


            var getNxtInputBox = $(this).attr("data-name"); //labletxt1
            getNxtInputBox = getNxtInputBox.split("labletxt")[1]; //[][1]
            getNxtInputBox = parseInt(getNxtInputBox) //conver string to number
            var addDisableProp = getNxtInputBox; //For later use in else condition
            getNxtInputBox = getNxtInputBox + 1; //	get next data attribute
            getNxtInputBox = "labletxt" + getNxtInputBox; //get next input data attribute


            var pattern = new RegExp(/^(?=.*[a-z])|(?=.*[A-Z])|(?=.*\d).+$/);

            if (pattern.test(inputTxt)) {

                $("#" + dragItemName).removeClass("disabled").attr("title", inputTxt);
                $("#" + dragItemName).find(".showonDrp").text(inputTxt);
                $("#" + dragItemName).draggable("enable");
                $("#imgBlock .labelText:gt(" + addDisableProp + ")").not(".disableInputForever").first().prop("disabled", false);
            } else {

                /*Current block else cond */
                $("#" + dragItemName).addClass("disabled");
                $("#" + dragItemName).draggable("disable");
                $("." + getNxtInputBox).prop("disabled", true);

                /*In case other block besides current has been removed*/
                $("#imgBlock .labelText:gt(" + addDisableProp + ")").prop("disabled", true);
                $("#imgBlock .labelText:gt(" + addDisableProp + ")").not(".disableInputForever").val("");
                $("#imgBlock .dragThis:gt(" + addDisableProp + ")").not(".dragged").draggable("disable");
                $("#imgBlock .dragThis:gt(" + addDisableProp + ")").not(".dragged").addClass("disabled");

            }

            $(".disableInputForever").prop("disabled", true);

            $("input.labelText").each(function(i) {

                var inputTxt = $(this).val();

                var pos = $(this).attr("data-name").split("labletxt")[1];
                brandArry[pos] = inputTxt;

            });

            $("#brandNames").val(brandArry);

        });

        function disableTxtBlock(currentDragItem) {
            $(currentDragItem).addClass("dragged");
            $(currentDragItem).next().addClass("disableInputForever");
            $(currentDragItem).next().prop("disabled", true);

        }
    }

    reloadFunction();

    //after reload function so it doesn't gets overwritten
    if (RacetrackOption == 2) {
        var carPos_ = carPos.split("|");
        carPos_.forEach(function(e, i) {
            var left = e.split(":")[0];
            var top = e.split(":")[1];
            if (left != -1 && top != -1) {
                $("#posi" + i).css({ "left": left + "px", "top": top + "px" });
            }

        })
        outputValue(carValue.split("|").join(","), carPos);
        $(".dragThis").draggable("option", "disabled", true);

    }

    if (RacetrackOption == 3) {
        var carPos_ = carPos.split("|");
        carPos_.forEach(function(e, i) {

            var left = e.split(":")[0];
            var top = e.split(":")[1];
            if (left != -1 && top != -1) {
                $("#posi" + i).css({ "left": left + "px", "top": top + "px" });
            }

        })
       
        outputValue(carValue.split("|").join(","), carPos);
    }

    //after reload function so it doesn't gets overwritten


    // var width = $(window).width();
    $(window).bind('resize', function() {



        //tooltipShow();

        var outputValues = $("#resultstr1").val();

        //variables for left set
        var dropWidht_ = $(".dropHere").width();
        var dragWidth_ = $(".dragThis").width();
        var dropLeft_ = $(".dropHere").offset().left;

        //variabled for top set
        var dropHght_ = $(".dropHere").height();
        var dragHght_ = $(".dragThis").height();
        var dropTop_ = $(".dropHere").offset().top;

        if (outputValues.length != 0) {
            outputValues = outputValues.split("|");

            outputValues.forEach(function(element, i) {
                if ((element != "") && (element != "-1:-1")) {
                    var left = element.split(":")[1];
                    var top = element.split(":")[0];
                    //set left
                    var PosX = ((left * (dropWidht_ / 100)) - (dragWidth_ / 2));
                    var newPosX = PosX + dropLeft_;

                    //set top
                    var PosY = (((100 - top) * (dropHght_ / 100)) - (dragHght_ / 2));
                    var newPosY = PosY + dropTop_;

                    $("[data-info=" + [i + 1] + "]").offset({ left: newPosX, top: newPosY });
                    $("[data-info=" + [i + 1] + "]").find(".showonDrp").show(0);
                    $("[data-info=" + [i + 1] + "]").next().hide(0);
                }
            }, this);
        }


    });

    $(window).resize();

    function tooltipShow() {

        $('.dragThis').tooltip({
            content: function() {
                var tooltipRacetrack = $(this).attr("title");
                return tooltipRacetrack;
            }
        });
    }
    //tooltipShow();

    if(dragOrClick == "click"){

        var carValue_ = carValue.split("|");
        carValue_.forEach(function(e,i){
            if(e == -1){
                // $(".dragThis").addClass("clicktrans");
                $('[data-info='+[i+1]+']').addClass("clicktrans")
            }
        })
        
        $("#imgBlock").append("<div class='drag-overlay'></div>");
        var dragMaxZIndex = Number($(".clicktrans:last").css("z-index"));
        $(".drag-overlay").css("z-index",dragMaxZIndex+1);
        $('.dropBlock').append("<div class='drop-overlay'></div>");
     

        $(".dropHere").click(function(e){
            var dragWidht = $(".dragThis").width()/2;
            var dragHeight = $(".dragThis").height()/2;
            var dropLeft = $(".dropBlock").offset().left;
            var dropTop = $(".dropBlock").offset().top;
            var dropWid = $(".dropBlock").width();
            var dropHei = $(".dropBlock").height();
            var carLeft = $(".drg-blk").offset().left;
            var carTop = $(".drg-blk").offset().top;
            var animateLft = dropLeft-carLeft + e.offsetX - dragWidht;
            var animateTop = dropTop-carTop + e.offsetY - dragHeight;
            var setLeft = dropLeft-carLeft + e.offsetX - parseInt($(".clicktrans:first").css("left")) - dragWidht;
            var setTop = dropTop-carTop + e.offsetY - parseInt($(".clicktrans:first").css("top")) - dragHeight;
            var actualLeft = setLeft;
            var actualTop = setTop;
            var containmentHei = $('.dropHere').height();
            var maxTop = $('.dropHere').height() - $(".dragThis").height();
            //console.log(e.offsetX+dragWidht>dropWid);
            // console.log(dropWid);
            //console.log(e.offsetY+dragHeight>dropHei);
            // console.log(dropHei);
        //     console.log($(".clicktrans:first"));
        //     console.log(e.offsetY);
        //     console.log(dragHeight);
        //     console.log("#####");
        //    console.log(e.offsetY+dragHeight>containmentHei);
        //    console.log(actualTop<0);
        //    console.log(actualTop>maxTop);
            if($(".clicktrans:first").length == 0||RacetrackOption==2||$(".clicktrans:first").hasClass("disabled")||e.offsetX<dragWidht||e.offsetY<dragHeight||e.offsetX+dragWidht>dropWid||e.offsetY+dragHeight>containmentHei){
                //console.log("hello false");
                return false;
            }
            $(".drop-overlay").show(0);
            $(".clicktrans:first").css("visibility","hidden");
            $(".clicktrans:first").clone().css("visibility","visible").addClass("tempAnim").appendTo("#imgBlock").animate({"left":animateLft+"px","top":animateTop+"px"},clickAniSped,"linear",function(){
                $(".tempAnim").remove();
                $(".clicktrans:first").draggable().simulate("drag", {
                    dx:actualLeft,
                    dy:actualTop
                });
                $(".clicktrans:first").css("visibility","visible");
                $(".clicktrans:first").removeClass("clicktrans");
                $(".drop-overlay").hide();
            });
           
                
            
         })    
    }

 


});