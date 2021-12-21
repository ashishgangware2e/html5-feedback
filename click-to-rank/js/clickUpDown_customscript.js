$(window).load(function() {
    var outputval = [];
    var fixstatementsArr = fixstatements.split("|");
    var fixstatementsCodeArr = fixstatementsCode.split("|");
    var movstatementsArr = movstatements.split("|");
    var movstatementsCodeArr = movstatementsCode.split("|");

    var leftstatement = "";
    var btnMid = "";
    var rightstatement = "";
    for (var i = 0; i < movstatementsArr.length; i++) {
        leftstatement += '<div class="item" id="' + movstatementsCodeArr[i] + '"><div class="v-align">' + movstatementsArr[i] + '</div></div>';
        btnMid += '<div class="item"><div class="arrowbtn arrowup" data-link="' + (i + 1) + '" data-val="up"></div><div class="arrowbtn arrowdown" data-link="' + (i + 1) + '" data-val="down"></div></div>';
    }

    for (var j = 0; j < fixstatementsArr.length; j++) {
        rightstatement += '<div class="item" id="' + fixstatementsCodeArr[j] + '"><div class="v-align">' + fixstatementsArr[j] + '</div></div>';
    }

    $(".toolWarper").html('<div class="collection sortingdata">' + leftstatement + '</div><div class="sortingbtn">' + btnMid + '</div><div class="rightstatement">' + rightstatement + '</div>');

    function moveUp(item) {
        var prev = item.prev();
        if (prev.length == 0) return;
        prev.css('z-index', 999).css('position', 'relative').animate({
            top: item.height()
        }, 250);
        item.css('z-index', 1000).css('position', 'relative').animate({
            top: '-' + prev.height()
        }, 300, function() {
            prev.css('z-index', '').css('top', '').css('position', '');
            item.css('z-index', '').css('top', '').css('position', '');
            item.insertBefore(prev);
            ratingValue();
        });

    }

    function moveDown(item) {
        var next = item.next();
        if (next.length == 0) return;
        next.css('z-index', 999).css('position', 'relative').animate({
            top: '-' + item.height()
        }, 250);
        item.css('z-index', 1000).css('position', 'relative').animate({
            top: next.height()
        }, 300, function() {
            next.css('z-index', '').css('top', '').css('position', '');
            item.css('z-index', '').css('top', '').css('position', '');
            item.insertAfter(next);
            ratingValue();
        });


    }
    var startIndex, changeIndex, uiHeight;
    $(".sortingdata").sortable({
        items: ".item",
        axis: "y",
        containment: ".sortingdata",
        update: function(event, ui) {
            ratingValue();
        }
    });

    $('.arrowbtn').click(function() {
        var btn = $(this);
        var val = $(this).attr("data-val");
        var cirrentdatalink = $(this).attr("data-link");
        if (val == 'up') {
            moveUp($('.sortingdata .item').eq(cirrentdatalink - 1));
        } else {
            moveDown($('.sortingdata .item').eq(cirrentdatalink - 1));
        }
    });


    function ratingValue() {
        $(".sortingdata .item").each(function(index, val) {
            val = $(this).attr("id");
            rndval = movstatementsCodeArr[index];
            outputval[rndval - 1] = val;
        });
        sortdata(outputval)
    }
    ratingValue();

});