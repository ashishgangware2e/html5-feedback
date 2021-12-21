// JavaScript Document
//var chkImg=[];

function getMealOrder() {
    document.getElementById('mealitems').value = $("#meallist").sortable("toArray");
  }

  function getUndooptions(){
      var undoStr = [];
      $(".contant-body li").each(function(){
          undoStr.push($(this).attr("id"));
      })
      document.getElementById('undostr').value = undoStr;
  }

  function resetSideNumbers(){
      $(".listingNumber ul").html("");
            
          $("#meallist li").each(function(index){
              //console.log(index+1)
              if ( $(this).attr("class")=="imgBlock ui-state-default" ){
                  $(".listingNumber ul").append('<li><div class="numBlock1"><span><span class="Showlist">'+(index+1)+'</span></span></div></li>');
              }else{
                  $(".listingNumber ul").append('<li><div class="numBlock2"><span><span class="Showlist">'+(index+1)+'</span></span></div></li>');
              }
          });
  }

  $("document").ready(function () {
      
  var precodeStrArr=precodeStr.split("|");
  var unduStatementStr_ = [];
  if(unduStatementStr!=""){
      var unduStatementStr_ = unduStatementStr.split("|");
  }
  var removeVal=[];
  var undoPreCode_ = undoPreCode.split("|");
      
  	
  



  $("#meatlist").sortable();

  statementStr=statementStr.split("|");
  var initArr=[];
      
  for(var j=1; j<=statementStr.length; j++){
      initArr[j-1] = j;
  }

  //console.log(initArr)

  function shuffleArray(d,m) {
      if(parseInt(randomizationVal)){  


        for (var c = d.length - 1; c > 0; c--) {
              var b = Math.floor(Math.random() * (c + 1));
              var a = d[c];
              var am = m[c];
              d[c] = d[b];
              m[c] = m[b];
              d[b] = a;
              m[b] = am;
        }
      }


      return {"imArr":d,"indxArr":m,'undoObj':{
          'undoStatement':unduStatementStr_,'undoStatID':undoPreCode_
      }};  
  };

  var randomObj = shuffleArray(statementStr,initArr);



      if(backFunctionality == 1){
          var imgArry_ = statementStr;
          var precodeStr_ = precodeStr.split("|");
          var mealItems_ = mealItems.split(",");
          var newArr = [];

          for(var j=0; j<mealItems_.length;j++){
              newArr.push(precodeStr_.indexOf(mealItems_[j]));
              
          }

          newArr.forEach(function(el,index){
              if(imgArry_[el].split(".")[imgArry_[el].split(".").length - 1] == "jpg"||imgArry_[el].split(".")[imgArry_[el].split(".").length - 1] == "jpeg"||imgArry_[el].split(".")[imgArry_[el].split(".").length - 1] == "png"||imgArry_[el].split(".")[imgArry_[el].split(".").length - 1] == "gif"){
                  $("#meallist").append('<li id="'+precodeStr_[el]+'" class="imgBlock ui-state-default"><div class="overimgBlock"><img src="'+imgArry_[el]+'"></div><div class="zoomIconImg zoomIcon cancelSort" data-info="'+imgArry_[el]+'"> </div><div class="closeList cancelSort" data-remove="'+precodeStrArr[i]+'"> </div></li>');
                  $(".listingNumber ul").append('<li><div class="numBlock1"><span><span class="Showlist">'+(index+1)+'</span></span></div></li>')

              }else{
                  $("#meallist").append('<li id="'+precodeStr_[el]+'" class="txtBlock ui-state-default"><div class="overtxtBlock">'+imgArry_[el]+'</div><div class="zoomIconText zoomIcon cancelSort" data-info="'+imgArry_[el]+'"> </div><div class="closeList cancelSort" data-remove="'+precodeStr_[el]+'"> </div></li>');
                  $(".listingNumber ul").append('<li><div class="numBlock2"><span><span class="Showlist">'+(index+1)+'</span></span></div></li>')
              }
              

              
          });



      }else{
          for (var i=0; i<statementStr.length; i++){
          
              if(randomObj.imArr[i].split("/")[randomObj.imArr[i].split("/").length-1].split(".")[1]=="jpg" || randomObj.imArr[i].split("/")[randomObj.imArr[i].split("/").length-1].split(".")[1]=="png" || randomObj.imArr[i].split("/")[randomObj.imArr[i].split("/").length-1].split(".")[1]=="jpeg" || randomObj.imArr[i].split("/")[randomObj.imArr[i].split("/").length-1].split(".")[1]=="gif"){
  
                  $("#meallist").append('<li id="'+precodeStrArr[i]+'" class="imgBlock ui-state-default"><div class="overimgBlock"><img src="'+randomObj.imArr[i]+'"></div><div class="zoomIconImg zoomIcon cancelSort" data-info="'+randomObj.imArr[i]+'"> </div><div class="closeList cancelSort" data-remove="'+precodeStrArr[i]+'"> </div></li>');
                  $(".listingNumber ul").append('<li><div class="numBlock1"><span><span class="Showlist">'+(i+1)+'</span></span></div></li>')
                  $('#mealitems').val(precodeStrArr);
              }
              else{
                  $("#meallist").append('<li id="'+precodeStrArr[i]+'" class="txtBlock ui-state-default"><div class="overtxtBlock">'+randomObj.imArr[i]+'</div><div class="zoomIconText zoomIcon cancelSort" data-info="'+randomObj.imArr[i]+'"> </div><div class="closeList cancelSort" data-remove="'+precodeStrArr[i]+'"> </div></li>');
                  $(".listingNumber ul").append('<li><div class="numBlock2"><span><span class="Showlist">'+(i+1)+'</span></span></div></li>')
                  $('#mealitems').val(precodeStrArr);
              }
          }

      }

       randomObj.undoObj.undoStatement.forEach(function(el,index){
          if(randomObj.undoObj.undoStatement[index].split("/")[randomObj.undoObj.undoStatement[index].split("/").length-1].split(".")[1]=="jpg" || randomObj.undoObj.undoStatement[index].split("/")[randomObj.undoObj.undoStatement[index].split("/").length-1].split(".")[1]=="png" || randomObj.undoObj.undoStatement[index].split("/")[randomObj.undoObj.undoStatement[index].split("/").length-1].split(".")[1]=="jpeg" || randomObj.undoObj.undoStatement[index].split("/")[randomObj.undoObj.undoStatement[index].split("/").length-1].split(".")[1]=="gif"){
               $(".contant-body ul").append('<div><input type="checkbox" id="'+randomObj.undoObj.undoStatID[index]+'_"><label for="'+randomObj.undoObj.undoStatID[index]+'_"><li id="'+randomObj.undoObj.undoStatID[index]+'" class="imgBlock ui-state-default"><div class="overimgBlock"><img src="'+el+'"></div><div class="zoomIconText zoomIcon cancelSort" data-info="'+el+'" style="display: block;"> </div><div class="closeList cancelSort" data-remove="'+randomObj.undoObj.undoStatID[index]+'" style="display: block;"> </div></li></label></div>');
          }
          else{
                $(".contant-body ul").append('<div><input type="checkbox" id="'+randomObj.undoObj.undoStatID[index]+'_"><label for="'+randomObj.undoObj.undoStatID[index]+'_"><li id="'+randomObj.undoObj.undoStatID[index]+'"  class="txtBlock ui-state-default"><div class="overtxtBlock">'+el+'</div><div class="zoomIconText zoomIcon cancelSort" data-info="'+el+'" style="display: block;"> </div><div class="closeList cancelSort" data-remove="'+randomObj.undoObj.undoStatID[index]+'" style="display: block;"> </div></li></label></div>');
          }
          
      })

      getUndooptions();


      $(".btn_submit").click(function(){
          $('.contant-body ul').find('[type=checkbox]:checked').each(function(index,el2){
              var getEl = $(this).next().find("li");
              $('#meallist').append(getEl);
              $(this).parent().remove();
          })
          getMealOrder();
          $(".overlapAll, .popup-block").hide();
          resetSideNumbers();
          getUndooptions();
      })
      
      
      
      
    $(function () {
        
       $(".zoomIconText, .zoomIconImg, .closeList").hide();
       
        if(parseInt(largeView)){
            $(".zoomIconImg, .zoomIconText").show();
        }
        if(parseInt(closeList)){
            $(".closeList").show();
            if(!parseInt(largeView)){
               $(".closeList").css({top:"-3px"});  
            }
        }
        
        
        $(".zoomIconImg").click(function(){
            currentLargeImg=$(this).attr("data-info");
            $(".overlapblock, .closeIcon, .overlapAll").show();
            $(".largeimage").html('<div class="popimgcontant"><img src="'+currentLargeImg+'"></div>');
        });
        $(".zoomIconText").click(function(){
            currentLargeImg=$(this).attr("data-info");
            $(".overlapblock, .closeIcon, .overlapAll").show();
            $(".largeimage").html('<div class="popcontant">'+currentLargeImg+'</div>');
        })
        
        
         $(".closeIcon").click(function(){
            $(".overlapblock, .closeIcon, .overlapAll").hide();
            $(".largeimage").html(' ');
            
        });
        
        $(".closeList").click(function(index){
           
            if($("#meallist li").length !=1){

              // $(this).parent().wrap('<div></div>')
              // $(this).parent().parent().prepend('<input type="checkbox" />');

              var element = $(this).parent();
              var elId = $(this).parent().attr("id");
              

              $(".contant-body ul").append(element);

              $(element).wrap('<div class="undo-wrapper"><label for="'+elId+'_"></label></div>');

              $(element).parent().parent().prepend('<input type="checkbox" id="'+elId+'_"/>');
              
              resetSideNumbers();

                //$(this).parent().remove();
                //console.log($("#meallist li").length);
                //var listRebind = $("#meallist li").length;

                //for (var i=0; i<listRebind; i++){
                    
                //$(".listingNumber ul").append('<li><div class="numBlock2"><span><span class="Showlist">'+(i+1)+'</span></span></div></li>');
                  //}
              removeVal.push( $(this).parent().attr("id") )
              console.log(removeVal)
              $("#removestr").val(removeVal)
              getMealOrder();
              getUndooptions();

            }
            
        });

        

      /*$("#meatlist").sortable({
        cursor: 'move',
        connectWith: "#meallist",
        receive: function (event, ui) {
          var itemID = ui.item.attr('id');
          var idPrefix = itemID.substring(0, 4);

          if (idPrefix != 'meat') {
            ui.item.appendTo('#meallist');
            getMealOrder();
          }
        }
      });*/
      
      $(".zoomIcon, .closeList").sortable({
        start: function() {
          return false; // will still cause `this.helper is null`
        }
      });
      $("#meallist").sortable({
        cursor: 'move',
        update: function () { getMealOrder(); },
        connectWith: "#meatlist",
        cancel: ".cancelSort",       
          
      });
      $("#meallist").disableSelection();  
        
    });
  
    $(".UndoButton").click(function(){
      $(".overlapAll, .popup-block").show();
      
    });
    $(".btn_close, .btn_cancel").click(function(){
      $(".overlapAll, .popup-block").hide();
      //$(".largeimage").html(' ');
      
  });

  //$('#mealitems').val($("#meallist").sortable("toArray"));	

  if(backFunctionality == 1){
      $("#mealitems").val(mealItems);
      $("#removestr").val(removeStr);
  }
  
          
  });


