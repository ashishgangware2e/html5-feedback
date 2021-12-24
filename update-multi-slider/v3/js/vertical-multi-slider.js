$("document").ready(function () {
  var Arrslider_ = sliderNo.split("|");
  var ArrstatementPrecode = statementPrecode.split("|");
  var toolinfo_ = toolinfo.split("|");
  var outoutArry = [];

  for (var i = 0; i < Arrslider_.length; i++) {
    $(".vertical-multi-slider").append(
      '<div class="slide-block"><div class="headlineTool">' +
        Arrslider_[i] +
        '</div><div class="tbmid"><div id="slider-' +
        i +
        '" class="slider1" data-code="' +
        ArrstatementPrecode[i] +
        '"></div></div></div>'
    );
    outoutArry[i] = "";
  }
  $(".vertical-multi-slider").before(
    '<div class="title-toll">' +
      toolinfo_[0] +
      '</div><div class="respondent-info ">' +
      toolinfo_[1] +
      "</div>"
  );
  //$('.vertical-multi-slider').after('<div class="output-info"><b>Output</b>: '+toolinfo_[2]+'</div>')

  var min1 = sliderMin;
  var max1 = sliderMax;
  var slider1 = $(".slider1")
    .slider({
      orientation: "vertical",
      min: min1,
      max: max1,
      value: startFrom,
      step: 1,
      range: "min",
      animate: 500,
      slide: function (event, ui) {
        var currentId = $(this).attr("id").split("-")[1];
        var currentCode = $(this).attr("data-code");
        var currentValue = ui.value;
        outoutArry[currentId] = currentCode + ":" + currentValue;
        outputVal(outoutArry);
        if (ui.value < currentValue) {
          $(this).slider("value", currentValue);
          $(this).find(".ui-slider-tip").text(parseInt(currentValue));
        }
      },
      create: function () {
        setTimeout(function () {
          $(".slider1").each(function () {
            $(this)
              .find(".ui-slider-pip")
              .each(function (key, value) {
                $(this)
                  .find(".ui-slider-label")
                  .addClass("hilight_" + key)
                  .text(leftlebalValue[key]);
              });
          });
        }, 0);
      },
    })
    .slider("pips", {
      rest: "label",
      step: stepLabel,
    })
    .slider("float", {
      //labels: leftlebalValue
    });
  $(".ui-slider-pip").click(function (e) {
    return false;
  });

  $(".ui-slider-label").click(function () {
    var lablCurrentVal = $(this).attr("data-value");
    var lablCurrentId = $(this).parent().parent().attr("id").split("-")[1];
    var lablCurrentCode = $(this).parent().parent().attr("data-code");
    outoutArry[lablCurrentId] = lablCurrentCode + ":" + lablCurrentVal;
    outputVal(outoutArry);
  });
});
