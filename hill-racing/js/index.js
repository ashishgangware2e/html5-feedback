var html =
    "<div id='container' style='overflow:auto;'><div id='dropItem'></div><div class='linear-scale'><div id='scale1' class='scalefrom'></div><div id='scale2' class='scalefrom'></div><div id='scale3' class='scalefrom'></div><div id='scale4' class='scalefrom'></div><div id='scale5' class='scalefrom'></div><div id='scale6' class='scalefrom'></div><div id='scale7' class='scalefrom'></div><div id='scale8' class='scalefrom'></div><div id='scale9' class='scaleto'></div><div id='scale10' class='scaleto'></div><div id='scale11' class='scaleto'></div></div><div class='midscal_line'></div><div id='leftScale' class='note_left'>Not all price competitive</div><div id='rightScale' class='note_right'>Extremely price competitive</div><div><input id='conButton' disabled='true' type='button' onclick='sendOutput();' class='button'/></div></div>",
  arr = new Array(),
  temparr = new Array(),
  scaleValue = 0,
  minValue = 0,
  maxValue = 100,
  left = 170,
  xml,
  basePath = "images/";
function fuctioncalling(_xml) {
  (xml = $.parseXML(_xml)), document.write(html);
  for (
    var brandsArr,
      imageArr = arrayShuffle($(xml).find("brand").text().split("|")),
      imageDiv = "",
      i = 0;
    i < imageArr.length;
    i++
  )
    (imageDiv +=
      "<div class='drag' id='img_" +
      i +
      "' style='top:10px; left:" +
      left +
      "px;'><img src='" +
      basePath +
      imageArr[i] +
      "'></div>"),
      (left += 100),
      arr.push("0");
  (document.getElementById("dropItem").innerHTML = imageDiv),
    (document.getElementById("leftScale").innerHTML = $(xml)
      .find("scale")
      .text()
      .split("|")[0]),
    (document.getElementById("rightScale").innerHTML = $(xml)
      .find("scale")
      .text()
      .split("|")[1]),
    (scaleValue = $(xml).find("range").text().split("|")[0]),
    (scaleValue = $(xml).find("range").text().split("|")[1]),
    (scaleValue = $(xml).find("range").text().split("|")[2]),
    (scaleValue = $(xml).find("range").text().split("|")[3]),
    (scaleValue = $(xml).find("range").text().split("|")[4]),
    (scaleValue = $(xml).find("range").text().split("|")[5]),
    (scaleValue = $(xml).find("range").text().split("|")[6]),
    (scaleValue = $(xml).find("range").text().split("|")[7]),
    (scaleValue = $(xml).find("range").text().split("|")[8]),
    (scaleValue = $(xml).find("range").text().split("|")[9]),
    // (maxValue = $(xml).find("range").text().split("|")[1]),
    (document.getElementById("scale1").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[0]),
    (document.getElementById("scale2").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[1]),
    (document.getElementById("scale3").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[2]),
    (document.getElementById("scale4").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[3]),
    (document.getElementById("scale5").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[4]),
    (document.getElementById("scale6").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[5]),
    (document.getElementById("scale7").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[6]),
    (document.getElementById("scale8").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[7]),
    (document.getElementById("scale9").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[8]),
    (document.getElementById("scale10").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[9]),
    (document.getElementById("scale11").innerHTML = $(xml)
      .find("range")
      .text()
      .split("|")[10]),
    (document.getElementById("conButton").style.left =
      $("#container").width() / 2 - $("#conButton").width() / 2),
    jQuery(function ($) {
      $(".drag")
        .drag(function (ev, dd) {
          $(this).css({
            top: dd.offsetY,
            left: dd.offsetX,
            bottom: 61,
            zIndex: 1e3,
          });
        })
        .drag("end", function (ev, dd) {
          (arr[$(this).attr("id").split("_")[1]] = dd.offsetX),
            (temparr[$(this).attr("id").split("_")[1]] = dd.offsetX);
          var y = getPosition($(this).attr("id").split("_")[1]);
          $(this).animate({ top: y }, 500);
        });
    });
}
function arrayShuffle(oldArray) {
  for (var newArray = oldArray.slice(), len = newArray.length, i = len; i--; ) {
    var p = parseInt(Math.random() * len),
      t = newArray[i];
    (newArray[i] = newArray[p]), (newArray[p] = t);
  }
  return newArray;
}
function getPosition(dropid) {
  for (
    var count = 0, newarr = new Array(), i = 0, pos;
    i < temparr.length;
    i++
  ) {
    var obj = new Object();
    null == temparr[i]
      ? (obj.value = 0)
      : ("671" == temparr[i] && (count++, temparr[i]),
        (obj.value = temparr[i]),
        newarr.push(obj)),
      (obj.id = i);
  }
  newarr.sort(function (a, b) {
    return a.value <= b.value ? -1 : a.value > b.value ? 1 : void 0;
  });
  for (var len = newarr.length, i = 0, rtval; i < newarr.length; i++)
    $("#img_" + newarr[i].id).css("zIndex", len),
      len--,
      arr[dropid] == newarr[i].value && dropid == newarr[i].id
        ? (pos = i)
        : 0 != newarr[i].value &&
          $("#img_" + newarr[i].id).animate({ top: 255 - 65 * i }, 500);
  for (var i = 0; i < newarr.length; i++) pos == i && (rtval = 255 - 65 * i);
  return enable(newarr), rtval;
}
function enable(newarr) {
  newarr.length == arr.length &&
    ((document.getElementById("conButton").disabled = !1),
    (document.getElementById("conButton").style.opacity = 1),
    (document.getElementById("conButton").style.filter = "alpha(opacity=100)"),
    (document.getElementById("conButton").style.cursor = "pointer"));
}
function sendOutput() {
  for (var valueStr = "", i = 0; i < arr.length; i++) {
    var val = Number(
      Math.round((((arr[i] - 28) / 639) * (maxValue - minValue) * 100) / 100) +
        Number(minValue)
    );
    valueStr += 0 == i ? "" + val : "," + val;
  }
  // alert(valueStr), flashData(valueStr);
}

//# sourceMappingURL=index.min.js.map
