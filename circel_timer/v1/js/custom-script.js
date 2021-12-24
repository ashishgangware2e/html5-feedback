$(document).ready(function () {
  $(".thermometer-tool").append('<div class="parent-circel">\
  <div class="round-data-circel">\
    <div class="drow-white-circel"\
      <div class="drow-upercircel">\
        <div id="slider2" class="rs-chrome rs-control"></div>\
      </div>\
    </div>\
  </div>\
</div>')
  $("#slider2").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 200,
    width: 18,
    value: 0,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: changeTooltip,
  });

  function changeTooltip(e) {
    var val = e.value,
      speed;
    output(val);
    if (val < 20) speed = "Slow";
    else if (val < 40) speed = "Normal";
    else if (val < 70) speed = "Speed";
    else speed = "Very Speed";
    return;
  }
 

  $(".rs-overlay").append(
    '<div class="disagree">'+widgetStatement.split("|")[0]+'</div><div class="agree">'+widgetStatement.split("|")[1]+'</div>'
  );
  $(".rs-container").append(
    '<div class="first-line icon-line"></div><div class="sec-line icon-line"></div><div class="third-line icon-line"></div><div class="four-line icon-line"></div><div class="five-line icon-line"></div><div class="six-line icon-line"></div><div class="seven-line icon-line"></div><div class="eight-line icon-line"></div><div class="nine-line icon-line"></div><div class="ten-line icon-line"></div><div class="eleven-line icon-line"></div>'
  );
});
