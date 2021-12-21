// JavaScript Document


$(document).ready(function() {


    var statementArr = statementStr.split("|");
    var indxArr = createIndxArr(statementArr.length);

    if (parseInt(randomization))
        var shuffledArray = shuffleArray(statementArr, indxArr);



    var output = [];
    $(".mainwaper").html('<div class="rangetextBlock"><div class="leftBlock"><div class="improve_range"><span style="color:' + labelColor + '; font-size:' + labelFontSize + 'px;">Statements</span></div></div><div class="rightBlock"><div class="improve_range"><span style="color:' + labelColor + '; font-size:' + labelFontSize + 'px;">Dropable Area</span></div></div></div><div class ="draggablebox"><ul> </ul></div><div class="midarrowBlock"><span><img src="images/drag.png" alt=""></span></div><div class = "droppableBox"><ul> </ul></div><div class="clearAll"></div>');


    for (var i = 0; i < statementArr.length; i++) {
        $(".draggablebox > ul").append('<li id="' + indxArr[i] + '" class="dragList ui-draggable" data-info="1"><span style="color:' + statementColor + '; font-size:' + StatementFontSize + 'px;">' + statementArr[i] + '</span></li>');
        $(".droppableBox > ul").append('<li><div class="dropedBlock" id="' + (i + 1) + '" data-info="1"><div class="dropRightIndex"><span>' + (i + 1) + '</span></div></div></li>');
        output.push(" ");
    }

    var midHeight = $(".draggablebox").height();
    $(".midarrowBlock").css({ height: (midHeight - 32) + "px" });

    $('.dragList').draggable({
        containment: '#content',
        revert: 'invalid',
        snap: '.selector',
        snapMode: 'inner',
        snapTolerance: 30,
        stack: '.dragList',
        scroll: false,
        revert: function(event, ui) {
            $(this).addClass("selected");
            $(this).data("draggable").originalPosition = {
                top: 0,
                left: 0
            };
            return !event;
        }
    });
    $('.dropedBlock').data('outside', 1).droppable({ connectWith: '.points', cursor: 'pointer' }).droppable({
        accept: '.dragList',
        greedy: true,
        drop: function(event, ui) {
            $(this).droppable('option', 'accept', ui.draggable);
            var dragabbleId = ui.draggable[0].id;
            var droppableValue = $(this)[0].id;
            output[ui.draggable[0].id - 1] = droppableValue;
            outputValues();
            var drop_el = $(this).offset();
            var drag_el = ui.draggable.offset();
            var left_end = (drop_el.left + ($(this).width() / 2)) - (drag_el.left + (ui.draggable.width() / 2));
            var top_end = (drop_el.top + ($(this).height() / 2)) - (drag_el.top + (ui.draggable.height() / 2));
            ui.draggable.animate({
                top: '+=' + top_end,
                left: '+=' + (left_end - 12)
            });
        },
        out: function(event, ui) {
            $(this).droppable('option', 'accept', '.dragList');
            output[ui.draggable[0].id - 1] = 0;
            outputValues();
        }
    });

    function shuffleArray(array, indxd) {

        var counter = array.length,
            temp, index, temp2;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
            //swap another array
            temp2 = indxd[counter];
            indxd[counter] = indxd[index];
            indxd[index] = temp2;
        }
    }

    function createIndxArr(cnt) {
        var arr = [];
        for (var i = 0; i < cnt; i++) {
            arr.push(i + 1);
        }
        return arr;
    }

    function outputValues() {
        outputValue(output);
    }


});