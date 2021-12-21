$(document).ready(function(){

     var patientlabelArr=patientlabelStr.split("|");
     var patientdeatilArr=patientdeatilStr.split("|");
     var medicineNameArr=medicineNameStr.split("|");
     var medicineInfoArr=medicineInfoStr.split("|");


     //Create Patient Detail HTML
     var elementspatientresize="";
     elementspatientresize +='<div class="e-clinic-inner">\
                <div class="patient-resize"> ';
    
     for(var i=0; i < patientlabelArr.length; i++){
            elementspatientresize +='<div class="patient-row">\
                <div class="patient-label">'+patientlabelArr[i]+'</div>\
                <div class="patient-info">'+patientdeatilArr[i]+'</div>\
        </div>\
        ';
    }
    
    elementspatientresize +='</div>\
    </div>';

   //Create buttons HTML
   var buttonMedecineElements="";
  
   buttonMedecineElements +='<div class="btn-inner">\
  ';
    var outputArr = [];
    if(medicineNameArr.length==medicineInfoArr.length){
        for(var i=0; i < medicineNameArr.length; i++){
        
            buttonMedecineElements +='<div class="btn-medicine" data-info="'+[i+1]+'">\
            <div class="dispay-table">\
            <div class="table-cell">\
            <div class="m-title">'+medicineNameArr[i]+'</div>\
            <div class="m-info">'+medicineInfoArr[i]+'</div>\
            </div>\
            </div>\
        </div>\
        ';
        outputArr.push(0);
        }
    }
  outputVal(outputArr)

  buttonMedecineElements +='</div>';


 
  //Bind Variables to elements
  $(".e-clinic-wrrapper").html(elementspatientresize + buttonMedecineElements);
  //$(".e-clinic-wrrapper").html(elementspatientresize);
  //$(".e-clinic-inner").after(buttonMedecineElements);

  //button selection highlight
  $(".btn-medicine").click(function(){

    var dataInfo=$(this).attr("data-info");

     if($(this).hasClass("button-active")){
        $(this).removeClass("button-active");
         outputArr[dataInfo-1]=0;

   
    }
    else{
        $(this).addClass("button-active");
        outputArr[dataInfo-1]=dataInfo;
    }
  
    outputVal(outputArr)
  });
  




  });

