$(function() {



    function createDragNDrop(dragStatements, dragStatementsCode, dropStatements, dropStatementsCode, dropZoneColors) {
        var dragStatements_ = dragStatements.split("|");
        var dragStatementsCode_ = dragStatementsCode.split("|");
        var dropStatementsCode_ = dropStatementsCode.split("|")
        var dropStatements_ = dropStatements.split("|");
        var dropZoneColors_ = dropZoneColors.split("|");

        //    random for drag 

        var randomIndex1 = [];
        var newDragStatCode = [];
        var newDragStatements = [];
        dragStatementsCode_.forEach(function(el1, index1) {
            randomIndex1.push(index1);
        })


        shuffle(randomIndex1);
        //console.log("dragStatementsCode_"+dragStatementsCode_);
        // console.log("dragStatements_"+dragStatements_);
        //console.log("randomIndex1"+randomIndex1);

        randomIndex1.forEach(function(el2, index2) {
            newDragStatCode[index2] = dragStatementsCode_[el2];
            newDragStatements[index2] = dragStatements_[el2];
        })

        if (RandomDrag == true) {
            dragStatements_ = newDragStatements;
            dragStatementsCode_ = newDragStatCode;
        }


        //console.log("newDragStatCode"+newDragStatCode);
        // console.log("newDragStatements"+newDragStatements);
        //console.log("dragStatements_"+dragStatements_);
        // console.log("dragStatementsCode_"+dragStatementsCode_);
        //random for drag 

        //    random for drop 

        var randomIndex2 = [];
        var newDropStatementsCode = [];
        var newDropStatements = [];
        var newDropZoneColors = [];

        dropStatementsCode_.forEach(function(el3, index3) {
            randomIndex2.push(index3);
        })


        shuffle(randomIndex2);
        //console.log("randomIndex2"+randomIndex2);
        //console.log("dropStatementsCode_"+dropStatementsCode_);
        //console.log("dropStatements_"+dropStatements_);
        //console.log("dropZoneColors_"+dropZoneColors_);

        randomIndex2.forEach(function(el4, index4) {
                newDropStatementsCode[index4] = dropStatementsCode_[el4];
                newDropStatements[index4] = dropStatements_[el4];
                newDropZoneColors[index4] = dropZoneColors_[el4];
            })
            //    random for drop 
            //console.log("newDropStatementsCode"+newDropStatementsCode);
            //console.log("newDropStatements"+newDropStatements);
            //console.log("newDropZoneColors"+newDropZoneColors);

        if (RandomDrop == true) {
            dropStatementsCode_ = newDropStatementsCode;
            dropStatements_ = newDropStatements;
            dropZoneColors_ = newDropZoneColors;
        }


        this.createDragItem = function() {
            //Creating div structure
            var len = dragStatements_.length;
            $(".dnd--outer--container").append('<div class="left--container drag--outer--container"><ul class="clearfix"></ul></div>')
            for (var i = 0; i < len; i++) {
                $(".drag--outer--container ul").append('<li drag-inner-index=' + i + ' data-code="' + dragStatementsCode_[i] + '" class="drag--inner"><div drag-item-index=' + i + ' class="drag--item" data-code="' + dragStatementsCode_[i] + '"><img src=' + dragStatements_[i] + '></div></li>');
            }

            //Creating div draggable
            $(".drag--item").draggable({
                containment: "document",
                cursor: 'move',
                revert: 'invalid',
                revertDuration: 0,
                stop: function(event, ui) {
                    $(this).css("z-index", "1");
                    if ($(this).attr("item-dropped") == "false") {
                        getDragItemNumber = $(this).attr("drag-item-index");
                        $("[drag-inner-index=" + getDragItemNumber + "]").append($(this).css({ "top": "0px", "left": "0px" }));
                    }
                    createDragNDrop.prototype.output();

                },
                drag: function(event, ui) {
                    $(this).css("z-index", "2");
                }
            });
        }

        this.createDropZone = function() {
            //Creating div structure
            var len = dropStatements_.length;
            $(".dnd--outer--container").append('<div class="right--container drop--outer--container">');
            for (var i = 0; i < len; i++) {
                var color = dropZoneColors_[i];
                $(".right--container").append('<div class="drop--outer" drop-code="' + dropStatementsCode_[i] + '" drop-outer=' + i + '><div class="drop--header" style="background:#ff7660;border-color:#ff7660"><span>' + dropStatements_[i] + '</span><label class="c-icon"> <img src=' + color + '  /></labek></div><div class="drop--inner" style="border-color:#ff7660;"><div class="repple"></div></div></div>');
            }

            if (noneOFThese == true) {
                $(".right--container").append('<div class="drop--outer" drop-code="' + noneCode + '" drop-outer=' + i + '><div class="drop--header" style="background:#ff7660;border-color:#ff7660">' + noneStatemnt + '</div><div class="drop--inner" style="border-color:#ff7660;background-image:url(' + noneColor + ') ;">  <div class="repple"></div></div></div>');
            }

            //Creating div droppable
            $(".drop--inner").droppable({
                drop: function(event, ui) {
                    $(this).append(ui.draggable);
                    $(ui.draggable).css({ "top": "0px", "left": "0px" }).attr("item-dropped", true);
                    //  $(this).addClass("selected");
                },

                out: function(event, ui) {
                    $(ui.draggable).attr("item-dropped", false);
                    //  $(".drop--inner").removeClass("selected");
                }
            });
        }

    }

    createDragNDrop.prototype.output = function() {

        $(".drop--outer").each(function() {
            var dropOuter = $(this).attr("drop-outer");
            var dropCode = $(this).attr("drop-code");
            var outArr = [];
            //console.log(dropOuter);
            //$(".output"+eval(dropOuter)).val("");
            $(this).find(".drag--item").each(function() {
                //outArr.push(1+eval($(this).attr("drag-item-index")));
                //$(".output"+eval(dropOuter)).val(outArr);
                outArr.push($(this).attr("data-code"));
            })

            var reminaingLi = $(".left--container .drag--item").length;
            var allDrop = 0;
            if (reminaingLi == 0) {
                allDrop = 1;
            }
            frontOutput(dropCode, outArr, allDrop);
        });
        manageHeight();
    }


    var DND1 = new createDragNDrop(dragStatements, dragStatementsCode, dropStatements, dropStatementsCode, dropZoneColors);
    // var DND2  = new createDragNDrop(dragStatements,dragStatementsCode,dropStatements,dropStatementsCode,dropZoneColors);
    DND1.createDragItem();
    DND1.createDropZone();
    // $( ".drag--item" ).on( "dragstop", function( event, ui ) { DND1.output() });


    function manageHeight() {
        $(".drop--inner").height("auto");
        var nwHght = 0;
        $(".drop--inner").each(function() {
                if (nwHght < $(this).height()) {
                    nwHght = $(this).height();
                }

            })
            // console.log(nwHght);
        $(".drop--inner").height(nwHght)
    }


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

});