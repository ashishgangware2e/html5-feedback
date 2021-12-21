$(document).ready(function () {
    var headings_ = headings.split("|");
    var attributesColumn = attributes.split("~");
    var StopLastCard = "";
    var TotlcardLen = precode.split("|").length;
    var precode_ = precode.split("|");
    var removeOrder = [];
    var containerOrder = [];
    var containerSwiped = [];
    var counter = 1;
    var selectedEl = "";

    $(".swiper").append('<div class="Qdiv_container">\
    <div class="qdiv"></div>\
</div>\
<div class="poker-contaner">\
    <div class="poker-container-inner">\
        <div class="left_card"></div>\
       <div class="poker-col touchsurface" data-col="1"></div>\
       <div class="right_card"></div>\
    </div>\
  <div class="reload-block-inner">\
       <div class="swiper-btn">\
        <div class="swipe-left"> </div>\
        <div class="swipe-right"> </div></div>\
        <div class="reload-block">\
            <span>Undo</span>\
        </div>\
        <div class="reload-block-cover"></div>\
    </div>\
</div>\
</div>')


    $("body").append("<div class='cloned-div' style='display:none;'></div>");
    $(".qdiv").html(questionArr.split("|")[0]);
    //create Div
    headings_.forEach(function (element, index) {
      var attrValues = attributesColumn[index].split("&&");
      var rowline = "";
      attrValues.forEach(function (el, index) {
        var elLeft = el.split("|")[0];
        var elRght = el.split("|")[1];
        rowline =
          rowline +
          '<div class="rowline"><div class="left-attr">' +
          elLeft +
          '</div><div class="right-attr">' +
          elRght +
          "</div></div>";
        });
  
      $(".cloned-div").append('\
        <div class="inner-block-outer"  card-num = ' + precode_[index] + ' data-precode=' + precode_[index] + '>\
        <div class="inner-block">    \
                <div class="headline">' + headings_[index] + '</div>\
                ' + rowline + '\
            </div>\
        </div>\
        ');
    });

  //   $(".swipe-left").append('  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 34 60">\
  //   <g id="down_outline_icon" transform="translate(0 60) rotate(-90)">\
  //     <path id="Path_11757" data-name="Path 11757" d="M53.352,31H6.648L30,4.534Z" fill="#fff"/>\
  //     <path id="Path_11758" data-name="Path 11758" d="M30,9.069,13.3,28H46.7L30,9.069M30,0,60,34H0Z" fill="#ee1f1d"/>\
  //   </g>\
  // </svg>')

  //   $(".swipe-right").append(' <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 34 60">\
  //   <g id="up_outline_icon" transform="translate(34) rotate(90)">\
  //   <path id="Path_11755" data-name="Path 11755" d="M53.352,31H6.648L30,4.534Z" fill="#fff"/>\
  //   <path id="Path_11756" data-name="Path 11756" d="M30,9.069,13.3,28H46.7L30,9.069M30,0,60,34H0Z" fill="#92d050"/>\
  //   </g>\
  // </svg>');
  
  
    var clonedDiv = $("[card-num = " + precode_[0] + "]").clone();
    $("[data-col = " + 1 + "]").append(clonedDiv);
    $(".poker-contaner").append("<div class='remove-touch-div'></div>");
  

    $(".touchsurface").each(function (index, el) {
      swipedetect(el, function (swipedir) {
        if(swipeAll == true){
          if (StopLastCard == TotlcardLen - 1 && swipedir != 'selectEL' && swipedir != 'revertBack' && swipedir != 'FromDocument_revertBack' && swipedir.indexOf('moveFunction') == -1) {
            //return false
    
                setTimeout(function() {
                    //$(".poker-container-inner").hide(0); 
                    $(".poker-container-inner").addClass("hidecard");
                }, 500)
            }
        }
        else{
          if (StopLastCard == TotlcardLen - 1 ) {
            return false
          }
        }
        if (swipedir == "up" || swipedir == "FromDocument_up") {
          downHandler(selectedEl, "up");
          $(".left_card").append('<div class="card_image"></div>');
        }
  
        if (swipedir == "down" || swipedir == "FromDocument_down") {
          downHandler(selectedEl, "down");
        }
  
        if (swipedir.indexOf("moveFunction") != -1) {
          moveElement(selectedEl, swipedir.split("_")[1]);
        }
  
        if (swipedir == "revertBack" || swipedir == "FromDocument_revertBack") {
          revertElement(selectedEl);
        }
  
        if (swipedir == "selectEL") {
          selectedEl = el; //element on which drop is saved
        }
      });
    });
  
    $(".touchsurface").each(function (index, el) {
      mouseDetect(el, function (swipedir) {
        if(swipeAll == true){
            if (StopLastCard == TotlcardLen - 1 && swipedir != 'selectEL' && swipedir != 'revertBack' && swipedir != 'FromDocument_revertBack' && swipedir.indexOf('moveFunction') == -1) {
    
            setTimeout(function() {
                $(".poker-container-inner").addClass("hidecard");
            }, 500)
            }
        }
        else{
          if (StopLastCard == TotlcardLen - 1 ) {
            return false
          }
        }

        if (swipedir == "up" || swipedir == "FromDocument_up") {
          downHandler(selectedEl, "up");
          
        }
  
        if (swipedir == "down" || swipedir == "FromDocument_down") {
          downHandler(selectedEl, "down");
          
        }
  
        if (swipedir.indexOf("moveFunction") != -1) {
          moveElement(selectedEl, swipedir.split("_")[1]);
        }
  
        if (swipedir == "revertBack" || swipedir == "FromDocument_revertBack") {
          revertElement(selectedEl);
        }
  
        if (swipedir == "selectEL") {
          selectedEl = el; //element on which drop is saved
        }
      });
    });

  
    function moveElement(el, moveHeight) {
      var slctConter = el;
      //var movedHeight = moveHeight;
      $(slctConter).find(".inner-block-outer").css("left", moveHeight + "px");
      
    }
  
    function revertElement(el) {
      var slctConter = el;
      $(slctConter).find(".inner-block-outer").animate({ left: "0px" }, 100, "linear");
    }
  
    function downHandler(el, swipeDir) {
      //function when down is swiped or mouse event
      showreloadBlock();
      var slctConter = el;
      containerOrder.push(slctConter);
      var attri = $(slctConter).find(".inner-block-outer").attr("card-num");
        if (swipeDir == "up") {
            $(".swipe-left").addClass("filled-up");
            setTimeout(function()  {$(".swipe-left").removeClass("filled-up");}, 500);
            containerSwiped.push("up");
            $(slctConter).find(".inner-block-outer").addClass("rel").animate({ left: "-500px" }, 500, "linear", getNextCard);
        }
        else{
            containerSwiped.push("down");
            $(".swipe-right").addClass("filled-down");
            setTimeout(function()  {$(".swipe-right").removeClass("filled-down");}, 500);
            $(slctConter).find(".inner-block-outer").addClass("rel").animate({ left: "500px" }, 500, "linear", getNextCard);
        }
  
        function getNextCard() {
            $(slctConter).find(".inner-block-outer").remove();
            removeOrder.push(attri);
            if (precode_[counter] != undefined) {
                var clonedDiv = $("[card-num=" + precode_[counter] + "]").clone();
                $(slctConter).append(clonedDiv);
                $(slctConter).find(clonedDiv).addClass("tansform");
                setTimeout(function () {
                    $(".tansform").addClass("tansformComplete");
                }, 100);
                setTimeout(function () {
                    $(".tansform").removeClass("tansform tansformComplete");
                    hidereloadBlock();
                }, 500);
                counter++;
            } else {
                counter++;
                $(slctConter).hide(0);
                hidereloadBlock();
            }
            getOutput();
        }
    }
   
    selectedEl = $(".poker-col.touchsurface")[0];


    $(".swipe-left").click(function () {
      $(".swipe-left").addClass("filled-up");
      setTimeout(function()  {
        $(".swipe-left").removeClass("filled-up");
      }, 500);
        if(swipeAll == true){
            if (StopLastCard == TotlcardLen - 1) {
                setTimeout(function() {
                    $(".poker-container-inner").addClass("hidecard");
                }, 500)
            }
        }
      else{
        if (StopLastCard == TotlcardLen - 1 ) {
           return false
        }
      }

      downHandler(selectedEl, "up");
    });
  
    $(".swipe-right").click(function () {
      $(".swipe-right").addClass("filled-down");
      setTimeout(function()  {
        $(".swipe-right").removeClass("filled-down");
      }, 500);
     
      if(swipeAll == true){
            if (StopLastCard == TotlcardLen - 1 ) {
                setTimeout(function() {
                    //$(".poker-container-inner").hide(0); 
                    $(".poker-container-inner").addClass("hidecard");
                }, 500)
            }
        }else{
            if (StopLastCard == TotlcardLen - 1 ) {
                return false
            }
        }
     
      downHandler(selectedEl, "down");
    });
  
    $(".reload-block").click(function () {
      if (removeOrder == "") {
        return false;

      } else {
        setTimeout(function () {
          //$(".poker-container-inner").show(0);
        //   $(".swipe-left").show(0);
        //   $(".swipe-right").show(0);
          $(".poker-container-inner").removeClass("hidecard");
        }, 500);
        $(".reload-block")
          .removeClass("reload-block")
          .addClass("reload-block-again");
        // if(precode_[counter] != undefined){}
        showreloadBlock();
        var lastAttr = removeOrder[removeOrder.length - 1];
        var lastContainer = containerOrder[containerOrder.length - 1];
        var containerSwipe = containerSwiped[containerSwiped.length - 1];
        var clonedDiv = $("[card-num=" + lastAttr + "]").clone();
        counter--;
  
        $(lastContainer).show(0);
        removeOrder.pop();
        setTimeout(function () {
          $(lastContainer).find(".inner-block-outer").addClass("revertTransform");
        }, 100);
        setTimeout(function () {
          $(lastContainer)
            .find(".inner-block-outer")
            .addClass("revertTransformComplete");
        }, 500);
  
        if (containerSwipe == "up") {
               setTimeout(function () {
            $(lastContainer).empty();
            $(lastContainer)
              .append(clonedDiv)
              .find(".inner-block-outer")
              .css("left", "-500px");
          }, 1000);
          setTimeout(function () {
            showCard();
          }, 1100);
        } else {
          setTimeout(function () {
            $(lastContainer).empty();
            $(lastContainer)
              .append(clonedDiv)
              .find(".inner-block-outer")
              .css("left", "500px");
          }, 1000);
          setTimeout(function () {
            showCard();
          }, 1100);
        }
  
        function showCard() {
          $(lastContainer)
            .find(".inner-block-outer")
            .animate({ left: "0px" }, 500, "linear", popAll);
        }
  
        function popAll() {
          // removeOrder.pop();
          containerOrder.pop();
          containerSwiped.pop();
          getOutput();
          hidereloadBlock();
          $(".reload-block-again")
            .removeClass("reload-block-again")
            .addClass("reload-block");
        }
      }
    });
  
    function getOutput() {
      var outputArr = [];
      var positionArr = removeOrder;
      var precodeLen = precode_.length;
      for (var j = 0; j < precode_.length; j++) {
        var decreseBy1 = positionArr[j] - 1;
        if (decreseBy1 != NaN) {
          outputArr[decreseBy1] = precodeLen;
          precodeLen--;
        }
      }
      var outputArrTen = outputArr.filter(Boolean);
      StopLastCard = outputArrTen.length;
      if (StopLastCard == precode_.length - 1) {
        for (var i = 0; i < precode_.length; i++) {
          var indexNumber = precode_[i] - 1;
          if (outputArr[indexNumber] == undefined) {
            outputArr[indexNumber] = "1";
          }
        }
      }
      var contrseqArr = [];
      containerOrder.forEach(function (el) {
        contrseqArr.push($(el).attr("data-col"));
      });
  
      var pokerBallArr = [];
      $(".poker-col").each(function () {
        pokerBallArr.push(
          $(this).find(".inner-block-outer").attr("data-precode")
        );
      });
      output(
        outputArr,
        contrseqArr,
        containerSwiped,
        pokerBallArr,
        removeOrder,
        StopLastCard
      );
      cardmove(containerSwiped);
      hideNavigatior();
   
    }
  
    function hidereloadBlock() {
      $(".reload-block-cover").hide(0);
      $(".remove-touch-div").hide(0);
    }
  
    function showreloadBlock() {
      $(".reload-block-cover").show(0);
      $(".remove-touch-div").show(0);
    }
  
    if (backbutton == true || backbutton == "true") {
      output(outputArr,contrOrdrArr,contSwipeOrdr,currentLook,removeOrdr,seqCounter);
      cardmove(contSwipeOrdr, removeOrdr);
      removeOrder = removeOrdr.split(",");
      containerSwiped = contSwipeOrdr.split(",");
      counter = parseInt(seqCounter) + 1;
      StopLastCard = seqCounter;
      if (StopLastCard == TotlcardLen) {
        //$(".poker-container-inner").hide(0);
        $(".poker-container-inner").addClass("hidecard");
      }
      //create container order
      var contrOrdr = [];
      contrOrdrArr.split(",").forEach(function (el) {
        var element;
        if (el == 1) {
          element = $("[data-col = 1]");
        } else if (el == 2) {
          element = $("[data-col = 2]");
        } else if (el == 3) {
          element = $("[data-col = 3]");
        }
        contrOrdr.push(element);
        
      });
  
      containerOrder = contrOrdr;
      // create the same look
      $("[data-col]").empty().hide(0);
      
      var currentLookArr = currentLook.split(",");
      currentLookArr.forEach(function (el, index) {
        if (el != "") {
          $("[data-col=" + [index + 1] + "]").show(0);
          var clonedDiv = $("[data-precode = " + el + "]").clone();
          $("[data-col=" + [index + 1] + "]").append(clonedDiv);
        }
      });
      hideNavigatior();
    }
  
    function cardmove(containerSwiped, removeOrder) {
      var numbersArray = new Array(containerSwiped);
      var numbersString = numbersArray.join(",");
      var content = "";
      if (backbutton == true || backbutton == "true") {
         content = numbersString.split(",");
      } else {
        content = containerSwiped;
      }
      $(".left_card").empty();
      $(".right_card").empty();
       content.forEach(function (element, index) {
          if (element == "up") {
          $(".left_card").append('<div class="card_image" ></div>');
        } else if(element == "down") {
          $(".right_card").append('<div class="card_image" ></div>');
        }
      });
    }

    function hideNavigatior(){
        if(swipeAll==false){
            if(counter == TotlcardLen){
                $(".swipe-left").hide();
               $(".swipe-right").hide();
            }else{
                $(".swipe-left").show();
                $(".swipe-right").show();
            }
        }else{
            if(counter > TotlcardLen){
                $(".swipe-left").hide();
               $(".swipe-right").hide();
            }else{
                $(".swipe-left").show();
                $(".swipe-right").show();
            }
        }
       
        //setTimeout(function () {
            //$(".swipe-left").hide();
           // $(".swipe-right").hide();
        //}, 500);
    }
  
    for (var i = 0; i < precode_.length; i++) {
      $('body').append('\
          <style>\
              .right_card .card_image:nth-child(' + [i + 2] + '),\
              .left_card .card_image:nth-child(' + [i + 2] + ') {\
                  bottom: ' + [(i + 1) * 6] + 'px;\
              }\
              @media all and (min-width:320px) and (max-width:767px){\
                  .right_card .card_image:nth-child(' + [i + 2] + '),\
                  .left_card .card_image:nth-child(' + [i + 2] + ') {\
                      bottom: ' + [(i * 2) + (-89)] + 'px;\
                  }\
              }\
          </style>\
      ')
  }
  });
  