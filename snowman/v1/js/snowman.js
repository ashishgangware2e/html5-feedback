$(document).ready(function () {
  var toolInfoArr = toolInfo.split("|");
  var questionTextArr = questionText.split("|");
  $(".snowman-container").before(
    '<div class="title-toll">' + toolInfoArr[0] + "</div>"
  );
  $(".snowman-container").before(
    '<div class="respondent-info">' + toolInfoArr[1] + "</div>"
  );
  $(".snowman-container").after(
    '<div class="output-info"><b>Output</b>:' + toolInfoArr[2] + "</div>"
  );
  $(".snowman-container").append(
    ' <div class="resize-container">\
    <!-- message left chat -->\
    <div class="mess-l">\
      <div class="msg-container orange-top">\
        <div class="chat-conatiner o-line">\
          <div class="question">' +
      questionTextArr[0] +
      '</div>\
          <textarea class="orange" placeholder="Comment here.."></textarea>\
        </div>\
      </div>\
      <div class="msg-container eastern-top">\
        <div class="chat-conatiner pantone-line">\
          <div class="question">' +
      questionTextArr[2] +
      '</div>\
          <textarea\
            class="eastern-blue"\
            placeholder="Comment here.."\
          ></textarea>\
        </div>\
      </div>\
    </div>\
    <!-- message left chat end -->\
    <div class="snowman">&nbsp;</div>\
    <!-- message right chat begin -->\
    <div class="mess-r">\
      <div class="msg-container light-yellow-top">\
        <div class="chat-conatiner r-line">\
          <div class="question">' +
      questionTextArr[1] +
      '</div>\
          <textarea\
            class="light-yellow"\
            placeholder="Comment here.."\
          ></textarea>\
        </div>\
      </div>\
      <div class="msg-container light-blue-top">\
        <div class="chat-conatiner b-line">\
          <div class="question">' +
      questionTextArr[3] +
      '</div>\
          <textarea\
            class="light-green"\
            placeholder="Comment here.."\
          ></textarea>\
        </div>\
      </div>\
    </div>\
  </div>'
  );
  /*Form valiadtion */
  //   $("#forwardbutton").click(function () {
  //     var txtOpt1 = $("#head").val();
  //     var txtOpt2 = $("#heart").val();

  //     if (!txtOpt1.match(/\S/) || !(txtOpt1.replace(/\s+/g, "").length >= 6)) {
  //       $("#head").css("background", "rgba(255,0,0,0.25)");
  //     } else {
  //       $("#head").css("background", "none");
  //     }
  //     if (!txtOpt2.match(/\S/) || !(txtOpt2.replace(/\s+/g, "").length >= 6)) {
  //       $("#heart").css("background", "rgba(255,0,0,0.25)");
  //     } else {
  //       $("#heart").css("background", "none");
  //     }

  //     if (!txtOpt1.match(/\S/) || !txtOpt2.match(/\S/)) {
  //       $(".err_msg").html(
  //         "<span style='padding:15px 0px 0px 0px; display:block; color:#f00'>Please fill in all boxes before moving on</span>"
  //       );
  //       return false;
  //     }
  //     if (
  //       !(txtOpt1.replace(/\s+/g, "").length >= 6) ||
  //       !(txtOpt2.replace(/\s+/g, "").length >= 6)
  //     ) {
  //       $(".err_msg").html(
  //         "<span style='padding:15px 0px 0px 0px; display:block; color:#f00'>Please type at least six characters in each box.</span>"
  //       );
  //       return false;
  //     }
  //   });
});
