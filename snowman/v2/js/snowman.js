$(document).ready(function () {
  var toolInfoArr = toolInfo.split("|");
  var questionTextArr = questionText.split("|");
  var preCodeArr = preCode.split("|");
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
          <div class="question question-1">' +
      questionTextArr[0] +
      '</div>\
         <div class="textarea-container orange"> <textarea pre-code='+preCodeArr[0]+' class="scroll-textarea" placeholder="Comment Here.." name="textarea"></textarea></div>\
        </div>\
      </div>\
      <div class="msg-container eastern-top">\
        <div class="chat-conatiner pantone-line">\
          <div class="question question-2">' +
      questionTextArr[2] +
      '</div>\
      <div class="textarea-container eastern-blue"> <textarea\
            class="textarea2  scroll-textarea"\
            placeholder="Comment Here.." name="textarea"\
            pre-code='+preCodeArr[2]+'></textarea></div>\
        </div>\
      </div>\
    </div>\
    <!-- message left chat end -->\
    <div class="snowman">&nbsp;</div>\
    <!-- message right chat begin -->\
    <div class="mess-r">\
      <div class="msg-container light-yellow-top">\
        <div class="chat-conatiner r-line">\
          <div class="question question-3">' +
      questionTextArr[1] +
      '</div>\
      <div class="textarea-container light-yellow"><textarea\
            class="textarea1 scroll-textarea"\
            placeholder="Comment Here.." name="textarea"\
            pre-code='+preCodeArr[1]+'></textarea></div>\
        </div>\
      </div>\
      <div class="msg-container light-blue-top">\
        <div class="chat-conatiner b-line">\
          <div class="question question-4">' +
      questionTextArr[3] +
      '</div>\
      <div class="textarea-container light-green"><textarea\
            class="textarea3 scroll-textarea"\
            placeholder="Comment Here.." name="textarea" \
            pre-code='+preCodeArr[3]+'></textarea></div\
        </div>\
      </div>\
    </div>\
  </div>'
  );
  $("[pre-code=1], [pre-code=2] , [pre-code=3], [pre-code=4]").keyup(function(val1, val2, val3, val4) {
        val1 = $("[pre-code=1]").val().replace(/[^a-z ,.]/g, '') ;
        val2 =  $("[pre-code=2]").val().replace(/[^a-z ,.]/g, '') ;
        val3 =  $("[pre-code=3]").val().replace(/[^a-z ,.]/g, '') ;
        val4 =  $("[pre-code=4]").val().replace(/[^a-z ,.]/g, '') ;
    outputVal(val1, val2, val3, val4);
  });
  $("textarea").bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-z ,.]/g, ''));
});
});
