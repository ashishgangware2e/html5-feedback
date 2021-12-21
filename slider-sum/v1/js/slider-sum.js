$("document").ready(function(){

	var ele="";
	var arr=[];
	var color = slidecolors.split("|");
	var statementStrArr=statementStr.split("|");
	var slide1 = color.length;	
	var chartLine="";
	var outputinput='';
	var toolInfo_=toolInfo.split("|");
	
	$(".slider-outer-container").append('<div class="sliderContainer"></div>');
	$(".slider-outer-container").before('<div class="title-toll">'+toolInfo_[0]+' </div><div class="respondent-info">'+toolInfo_[1]+'</div>');

	for(var i = 0;i<slide1;i++){
		arr[i] = 0;
		// ele = ele + `<div class="row statementArea"><div class="statementBlock">${statementStrArr[i]}</div><div class="slider" id="sliderbars_${i}" data-color=${color[i]} data-index=${i}  data-fill="0" data-blank="0"></div><div class="inputBlock"><input type="text" value="" id="inputVal_${i}" class="inputStyles" \></div></div>`;
		ele = ele + "<div class=\"row statementArea\"><div class=\"statementBlock\">".concat(statementStrArr[i], "</div><div class=\"slider\" id=\"sliderbars_").concat(i, "\" data-color=").concat(color[i], " data-index=").concat(i, "  data-fill=\"0\" data-blank=\"0\"></div><div class='curent-sum'><span id='curent-output-"+[i]+"'>0</span><span class='percentage'>%</span></div></div>");
		outputinput = outputinput + "<input type=\"text\" class='output-val' id=\"output".concat(i, "\">");
	
	}

	chartLine = chartLine + "<div class='barchart' id='barline' data-width='0' style='background:"+sliderFillcolor+"'>&nbsp;</div>"; // need to check
	
	var topChart='<div class="row value-slider"><div class="statementBlock">&nbsp;</div><div class="chartBlock">'+chartLine+'<div class="inputBlock"><input type="text" readonly value="0%" id="inputfinalVal" class="totalVal" \></div></div></div>';

	$(outputinput).insertBefore("#outputval");

	$(".sliderContainer").append(topChart+ele);


	var a=0;
	$(".slider").slider({
		min: 0,
		max: 100,
		step:1,
		range:'min',
		slide: function( event, ui ) {
			var This = $(this);//check this line
			var fill = +This.attr("data-fill"); //your old filled value
			var blank = +This.attr("data-blank"); //value from which we started on so 1st slider is 20 then second slider blank value will be 80//its like starting point in a race
			var netSliderValue = ui.value - ( fill + blank ); // i gues this will always be 1
			var allSliderValSum = +$("#outputval").val();
			if((allSliderValSum + netSliderValue) > 100){
				return false;
			}
			if(blank > ui.value){
				return false;
			}
			slideCalculation(This,ui,fill,blank);
		
		},
		create: function(event, ui){
			var dataColour=$(this).attr("data-color");
			$(this).find(".ui-slider-range").css("background",dataColour);
			$(this).append("<div class='blank-data'></div>");
		}		
	});
		
		function slideCalculation(This,ui,fill,blank){
     		var slide = ui.value - ( fill + blank );
			This.attr("data-fill",( fill + slide));
			This.slider( "option", "value", ui.value );

			if(blank == 0){//first element
				$(".slider").not(This).each(function(){//leaving current slider
    				var b = +$(this).attr("data-blank") + slide; //add 1 to old resp blank data			
					var f = +$(this).attr("data-fill");			
					$(this).attr("data-blank",b);
					$(this).find(".blank-data").width(b+"%");
					$(this).slider( "option", "value", ( b + f ) );
				});
			} else if(blank > 0) {//for rest
				$(".slider").not(This).not("[data-blank='0']").each(function(index,ele){
					var b = +$(this).attr("data-blank");				
					var f = +$(this).attr("data-fill");
					if(f == 0 && (b >= (fill + blank))){
						$(this).attr("data-blank", b + slide);
						$(this).find(".blank-data").width(b + slide+"%");
						$(this).slider( "option", "value", ( b + f + slide ) );
					} else if(f > 0 && b != 0 && (b >= (fill + blank))){
						 $(ele).attr("data-blank", b + slide);
						 $(ele).find(".blank-data").width(b + slide+"%");
						 $(ele).slider( "option", "value", ( b + f + slide ) );
					}
				});
			}

			let sum = 0;
			let r = $(".chartBlock").width() / 100;
			$(".slider").each(function(i,ele){
				let f = +$(this).attr("data-fill");
				let c = $(this).attr("data-color");
				sum = sum + f;
				let per = Math.floor(f * r);
				$("#output"+i).val(f);
				individualSliderValue(i,f)
				$("#inputVal_"+i).val(f==0?'':f);
				$("#curent-output-"+i).text(sum,"%")
			});
			$("#barline").css({width:sum+"%"}).attr("data-width",sum);
			outputValue(sum);
			$(".totalVal").val(sum+"%");
			

		}
		
		
		if(backpunch==true){
			
			let outputval=0;
			let process=$(".chartBlock").width()/100;
			var datafillarr=datafill.split("|");
			
			$(".slider").each(function(index,ui){
				$(this).attr("data-fill",""+datafillarr[index]+"");
				let filledvalue =+$(this).attr("data-fill");
				let blankvalue = +$(this).attr("data-blank"); 
				outputval =parseInt(parseInt(outputval)+parseInt(filledvalue));
            	if(filledvalue ==0){
					$(this).attr("data-blank", blankvalue + outputval );
					$(this).find(".blank-data").width(blankvalue + outputval+"%");
					$(this).slider( "option", "value", ( blankvalue + outputval ) );
				} 
				else{					
					$(this).attr("data-blank", blankvalue + outputval-filledvalue)
					$(this).find(".blank-data").width( blankvalue+outputval-filledvalue+"%");
					$(this).slider( "option", "value", ( blankvalue + outputval+filledvalue -datafillarr[index]) );
				}
			
				$("#output"+index).val(filledvalue);
				individualSliderValue(index,filledvalue)
				$("#inputVal_"+index).val(filledvalue==0?'':filledvalue);
				$("#curent-output-"+index).html(filledvalue)

			});

			$("#barline").css({width:outputval+"%"}).attr("data-width",outputval);
			outputValue(outputval);
			$("#inputfinalVal").val(outputval+"%")
		}

		/*this code used for inout filed show with slider*/
	/*	$(".inputStyles").bind("input",function(){

			if(this.value>100){
				console.log("1")
				this.value = this.value.substring(0,this.value.length-1);
				return false;
			} else {
				console.log("else")
				if(sumval() > 100){
					console.log("2")
					this.value = this.value.length > 1?this.value.substring(0,this.value.length-1):this.value;
					return false;
				}			
			}
	
			var This = $(this).closest(".row").find(".slider");
			var blank = +This.attr("data-blank");
			slideCalculation(This,{value:+this.value + blank});
			
		});
		
		
		
		
		function sumval(){
			var sum=0;
			$(".inputStyles").each(function(){
				if(this.value != ""){
					//console.log(parseInt(this.value));
					sum = sum + parseInt(this.value);
				}
			});
			return sum;
		}
*/
		

		//$(".totalVal").val("0%");

});