// JavaScript Document
$(document).ready(function () {
  $(".wrapper_blk").append('<div class="MainBubble_blk"></div>');
  var qutPointArr = qutPoint.split("|");
  var qstTextArr = qstText.split("|");

  var ph = "Typing text....";

  for (i = 0; i < qutPointArr.length; i++) {
    $(".MainBubble_blk").append(
      "<div class='colorBox" +
        [i] +
        "'><div class='pulse" +
        [i] +
        "' style='background-color:" +
        qutPointArr[i] +
        "'><div class='qstText" +
        [i] +
        "'>" +
        qstTextArr[i] +
        "</div></div></div>"
    );
  }
  $(".colorBox0").click(function () {
    $(".MainBubble_blk").append(
      "<div class='orng02'><div class='question_discussion'><div class='Qst_ask'>" +
        qstTextArr[0] +
        "</div> <div class='type_ans'><textarea name='result3' id='result3' class='textarea2' placeholder='Type here...'></textarea></div> </div> </div>"
    );
    $(".pulse0").addClass("no-hover");
    $(".colorBox1 .pulse1").removeClass("no-hover");
    $(".colorBox2 .pulse2").removeClass("no-hover");
    $(".colorBox3 .pulse3").removeClass("no-hover");
    $(".colorBox4 .pulse4").removeClass("no-hover");
    $(".colorBox5 .pulse5").removeClass("no-hover");
    $(".orng01").hide();
    $(".orng03").hide();
    $(".blue01").hide();
    $(".blue02").hide();
    $(".blue03").hide();

    $("textarea").keyup(function () {
      text1 = $("textarea#result3").val();
      outputVal1(text1);
    });
  });

  $(".colorBox1").click(function () {
    $(".MainBubble_blk").append(
      "<div class='orng01'><div class='question_discussion'><div class='Qst_ask'>" +
        qstTextArr[1] +
        "</div><div class='type_ans'> <textarea name='result1' id='result1' class='textarea1' placeholder='Type here...' ></textarea></div></div></div>"
    );
    $(".pulse1").addClass("no-hover");
    $(".colorBox0 .pulse0").removeClass("no-hover");
    $(".colorBox2 .pulse2").removeClass("no-hover");
    $(".colorBox3 .pulse3").removeClass("no-hover");
    $(".colorBox4 .pulse4").removeClass("no-hover");
    $(".colorBox5 .pulse5").removeClass("no-hover");
    $(".orng02").hide();
    $(".orng03").hide();
    $(".blue01").hide();
    $(".blue02").hide();
    $(".blue03").hide();

    $("textarea").keyup(function () {
      text2 = $("textarea#result1").val();
      outputVal2(text2);
    });
  });

  $(".colorBox2").click(function () {
    $(".MainBubble_blk").append(
      ' <div class="blue01"> <div class="question_discussion"><div class="Qst_ask">' +
        qstTextArr[2] +
        '</div> <div class="type_ans"><textarea name="result4" id="result4" class="textarea4" placeholder="Type here..."></textarea></div></div></div>'
    );
    $(".pulse2").addClass("no-hover");
    $(".colorBox0 .pulse0").removeClass("no-hover");
    $(".colorBox1 .pulse1").removeClass("no-hover");
    $(".colorBox3 .pulse3").removeClass("no-hover");
    $(".colorBox4 .pulse4").removeClass("no-hover");
    $(".colorBox5 .pulse5").removeClass("no-hover");
    $(".orng02").hide();
    $(".orng03").hide();
    $(".orng01").hide();
    $(".blue02").hide();
    $(".blue03").hide();

    $("textarea").keyup(function () {
      text3 = $("textarea#result4").val();
      outputVal3(text3);
    });
  });

  $(".colorBox3").click(function () {
    $(".MainBubble_blk").append(
      ' <div class="blue02"> <div class="question_discussion1"><div class="Qst_ask">' +
        qstTextArr[3] +
        '</div> <div class="type_ans"><textarea name="result5" id="result5" class="textarea3" placeholder="Type here..."></textarea></div></div></div>'
    );
    $(".pulse3").addClass("no-hover");
    $(".colorBox0 .pulse0").removeClass("no-hover");
    $(".colorBox1 .pulse1").removeClass("no-hover");
    $(".colorBox2 .pulse2").removeClass("no-hover");
    $(".colorBox4 .pulse4").removeClass("no-hover");
    $(".colorBox5 .pulse5").removeClass("no-hover");
    $(".orng02").hide();
    $(".orng03").hide();
    $(".orng01").hide();
    $(".blue01").hide();
    $(".blue03").hide();

    $("textarea").keyup(function () {
      text4 = $("textarea#result5").val();
      outputVal4(text4);
    });
  });
  $(".colorBox4").click(function () {
    $(".MainBubble_blk").append(
      ' <div class="orng03"> <div class="question_discussion"><div class="Qst_ask">' +
        qstTextArr[4] +
        '</div> <div class="type_ans"><textarea name="result2" id="result2" class="textarea5" placeholder="Type here..."></textarea></div></div></div>'
    );
    $(".pulse4").addClass("no-hover");
    $(".colorBox0 .pulse0").removeClass("no-hover");
    $(".colorBox1 .pulse1").removeClass("no-hover");
    $(".colorBox2 .pulse2").removeClass("no-hover");
    $(".colorBox3 .pulse3").removeClass("no-hover");
    $(".colorBox5 .pulse5").removeClass("no-hover");
    $(".orng02").hide();
    $(".orng01").hide();
    $(".blue01").hide();
    $(".blue02").hide();
    $(".blue03").hide();

    $("textarea").keyup(function () {
      text5 = $("textarea#result2").val();
      outputVal5(text5);
    });
  });
  $(".colorBox5").click(function (e) {
    $(".MainBubble_blk").append(
      ' <div class="blue03"> <div class="question_discussion2"><div class="Qst_ask">' +
        qstTextArr[5] +
        '</div> <div class="type_ans"><textarea name="result6" id="result6" class="textarea6" placeholder="Type here..."></textarea></div></div></div>'
    );
    $(".pulse5").addClass("no-hover");
    $(".colorBox0 .pulse0").removeClass("no-hover");
    $(".colorBox1 .pulse1").removeClass("no-hover");
    $(".colorBox2 .pulse2").removeClass("no-hover");
    $(".colorBox3 .pulse3").removeClass("no-hover");
    $(".colorBox4 .pulse4").removeClass("no-hover");
    $(".orng02").hide();
    $(".orng03").hide();
    $(".orng01").hide();
    $(".blue01").hide();
    $(".blue02").hide();

    $("textarea").keyup(function () {
      text6 = $("textarea#result6").val();
      outputVal6(text6);
    });
    typeIt();
  });

  // output
  function outputVal1() {
    $("#output1").val(text1);
  }
  function outputVal2() {
    $("#output2").val(text2);
  }
  function outputVal3() {
    $("#output3").val(text3);
  }
  function outputVal4() {
    $("#output4").val(text4);
  }
  function outputVal5() {
    $("#output5").val(text5);
  }
  function outputVal6() {
    $("#output6").val(text6);
  }

  // var txt = "Type Here...";
  // var timeOut;
  // var txtLen = txt.length;
  // var char = 0;
  // $(".textarea6,.textarea5,.textarea4,.textarea3,.textarea2,.textarea1").attr(
  //   "placeholder",
  //   "|"
  // );
  // function typeIt() {
  //   // var humanize = Math.round(Math.random() * (500 - 300)) + 300;
  //   timeOut = setTimeout(function () {
  //     char++;
  //     var type = txt.substring(0, char);
  //     $(
  //       ".textarea6,.textarea5,.textarea4,.textarea3,.textarea2,.textarea1"
  //     ).attr("placeholder", type + "|");
  //     typeIt();

  //     if (char == txtLen) {
  //       $(
  //         ".textarea6, .textarea5, .textarea4, .textarea3, .textarea2, .textarea1"
  //       ).attr(
  //         "placeholder",
  //         $(
  //           ".textarea6, .textarea5, .textarea4, .textarea3, .textarea2, .textarea1"
  //         )
  //           .attr("placeholder")
  //           .slice(0, -1)
  //       ); // remove the '|'
  //       clearTimeout(timeOut);
  //     }
  //   }, 500);
  // }
  // typeIt();
});
