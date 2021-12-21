$(window).load(function () {

  wedgitData();

  function wedgitData() {
    var dataRole_ = dataRole.split("|");
    var buttonText_ = buttonText.split("|");

    $(".singleClickBlock").append(
      ' <input type="checkbox" id="lol-checkbox" />\
  <label class="button" for="lol-checkbox">\
    <div class="image-knob" style="background:url(' +
        imageKnob +
        ' ) no-repeat"></div>\
    <div class="yes conSet" data-role=' +
        dataRole_[0] +
        ">" +
        buttonText_[0] +
        '</div>\
    <div class="no conSet" data-role=' +
        dataRole_[1] +
        ">" +
        buttonText_[1] +
        "</div>\
  </label>"
    );

    jQuery(function ($) {
      $(".conSet").click(function (evt) {
        evt.stopPropagation();
        $(".overlayActive").not(this).removeClass("overlayActive");
        $(this).toggleClass("overlayActive");
        if ($(this).hasClass("overlayActive")) {
          var ot = $(this).attr("data-role");
          $("#resval").val(ot);
        } else {
          $(this).addClass("overlayActive");
        }
      });
    });
    var infoTool_=infoTool.split("|");

    $(".binary-button-container").before(  "<div class='title-toll'>"+infoTool_[0]+"</div>");
    $(".binary-button-container").after("<div class='output-info'><b>Output</b>: "+infoTool_[1]+"</div>");
  }
});
