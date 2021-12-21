// JavaScript Document
$(function () {
  var productImgA = productImg.split("|");
  var productLargeImgA = productLargeImg.split("|");
  var productPriceA = productPrice.split("|");
  var price = 0;
  var shopingCartList = "";
  var output = [];

  for (var i = 0; i < productImgA.length; i++) {
    shopingCartList +=
      '<li class="ui-widget-content ui-corner-tr" data-info=' +
      parseInt(i + 1) +
      ">" +
      '<h5 class="ui-widget-header">' +
      priceSymbol +
      "" +
      productPriceA[i] +
      "</h5>" +
      '<img src="' +
      productImgA[i] +
      '" alt="This price is ' +
      priceSymbol +
      "" +
      productPriceA[i] +
      '" width="96" height="72">' +
      '<a href="' +
      productLargeImgA[i] +
      '" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>' +
      '<a href="" title="Delete this image" class="ui-icon ui-icon-addCart ">Delete image</a>' +
      "</li>";
    if (i == 14) break;
    output.push(0);
  }
  var shopingCart =
    '<ul id="shoppingCart" class="shoppingCart ui-helper-reset ui-helper-clearfix">' +
    shopingCartList +
    "</ul>";

  var optBox =
    '<div class="outputbox"><div class="mainprice"><div class="pricebox"><span class="Tprice">Total Price</span></div></div><div class="pricedisplay"><span><p id="price">' +
    priceSymbol +
    '0</p></span></div><div class="mainpricedisplayeffect"><div class="priceeffect"></div></div></div>';

  var popup =
    '<div id="popupfade"><div class="backgnd" id="modal"><div id="heading">' +
    popupMsg +
    '</div><div class="closeBtn " id="closeBtn"></div><div id="content"></div></div></div>';

  $(".mainContainer").append(
    '<div class="ui-widget ui-helper-clearfix"><div class="header">&nbsp;</div>' +
      shopingCart +
      "" +
      optBox +
      '<div class="getdropval" id="getdropval" >View Cart<div class="arrow"></div></div><div class="trolly" id="trolly">&nbsp;</div><div id="addCart" class="ui-widget-content ui-state-default"></div>' +
      popup +
      ""
  );

  // there's the gallery and the addCart
  $("#popupfade").hide();
  var $gallery = $("#shoppingCart"),
    $trash = $("#addCart");

  // let the shoppingCart items be draggable
  $("li", $gallery).draggable({
    cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move",
  });

  // let the addCart be droppable, accepting the shoppingCart items
  $trash.droppable({
    accept: "#shoppingCart > li",
    activeClass: "ui-state-highlight",
    drop: function (event, ui) {
      deleteImage(ui.draggable);
    },
  });

  // let the shoppingCart be droppable as well, accepting items from the addCart
  $gallery.droppable({
    accept: "#addCart > li",
    activeClass: "custom-state-active",
    drop: function (event, ui) {
      recycleImage(ui.draggable);
    },
  });

  // image deletion function
  var recycle_icon =
    "<a href='' title='Recycle this image' class='ui-icon ui-icon-refresh delete-icon '>Recycle image</a>";
  function deleteImage($item) {
    $item.fadeOut(function () {
      var $list = $("ul", $trash).length
        ? $("ul", $trash)
        : $("<ul class='shoppingCart ui-helper-reset'/>").appendTo($trash);

      $item.find("a.ui-icon-addCart").remove();
      $item
        .append(recycle_icon)
        .appendTo($list)
        .fadeIn(function () {
          $item
            .animate({ })
            .find("img")
            .animate({ height: "60px" });
        });
    });
    price += parseInt($item.find("h5").html().split(priceSymbol)[1]);
    totalValue(price);
    output[$item.attr("data-info") - 1] = 1;
    outputValues();
  cartItem()
  
  }

  function totalValue(price) {
    $("#price").html(priceSymbol + price);
  }

  function outputValues() {
    outputValue(output);
  }

  // image recycle function
  var trash_icon =
    "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-addCart'>Delete image</a>";

  function recycleImage($item) {
    $item.fadeOut(function () {
      $item
        .find("a.ui-icon-refresh")
        .remove()
        .end()
        .removeAttr("style")
        // .css({ width: "86px" })
        .append(trash_icon)
        .find("img")
        .css("height", "72px")
        .end()
        .appendTo($gallery)
        .fadeIn();
    });
    price -= parseInt($item.find("h5").html().split(priceSymbol)[1]);
    totalValue(price);
    output[$item.attr("data-info") - 1] = 0;
    outputValues();
    if ($("#addCart ul li").length == 1) {
      setTimeout(function () {
        $("#closeBtn").trigger("click");
      }, 500);
    }
  }

  // image preview function, demonstrating the ui.dialog used as a modal window
  function viewLargerImage($link) {
    var src = $link.attr("href"),
      title = $link.siblings("img").attr("alt"),
      $modal = $("img[src$='" + src + "']");

    if (!$modal.length) {
      alert("else")
     $modal.dialog("open");
    } else {
      
      var img = $(
        "<img alt='" +
          title +
          "' width='384' height='288' style='display: none; padding: 8px;' />"
      )
        .attr("src", src)
        .appendTo("body");
      setTimeout(function () {
        img.dialog({
          title: title,
          width: 400,
          modal: true,
        });
      }, 1);
    }
  }

  // resolve the icons behavior with event delegation
  $(".shoppingCart > li").click(function (event) { 
    var $item = $(this),
      $target = $(event.target);
    if ($target.is("a.ui-icon-addCart")) {
      deleteImage($item);
      $item.find("a.ui-icon-addCart").remove();
    } else if ($target.is("a.ui-icon-zoomin")) {
      viewLargerImage($target);
    } else if ($target.is("a.ui-icon-refresh")) {
      recycleImage($item);
      $item.find("a.ui-icon-refresh").remove();
    }
    return false;
  });

  $("#getdropval").click(function (event) {
    if ($("#addCart ul li").length != 0) {
      $("#content").html($("#addCart .shoppingCart"))

      $("#addCart ul li a").css({display:"block"})
 
      $("#popupfade").fadeIn();
     
    }
  });
  $("#closeBtn").on("click", function () {
        
  
    // $(this).remove();
    $("#popupfade").fadeOut();
    $("#addCart ul li ").css({display:"none"})
    $('.imgView').css({width:"95px"})
    $("#addCart").html($("#content .shoppingCart"))
  });
  function cartItem(){
    $("#addCart ul li").prevAll().css({width:"98px", margin:"5px"})
    // $('.imgView').css({width:"98px", margin:"5px"})
  }

});
