$(document).ready(function() {
	// function checkURL() {
	// 	return defaults.brouchureUrl == defaults.brouchureUrl.match(/\.(jpeg|jpg|png)$/) != null
	// }
	// function textImage(url){
	// 	var c =checkURL(url);
	// 	if(c){
	// 		return '<img src="'+url+'" alt="" class="img-responsie">';
	// 	} else {
	// 		return '<div class="word-txt">'+url+'</div>';
	// 	}
	// }

	// var txtele=textImage(defaults.brouchureUrl);
	var scaleEmojiArr = scaleEmoji.split("|");

	$('#hotspot-ctrl').append('<div class="clearfix"> \
	<div class="row"> \
		<div class="col-30"> \
		<div class="sidebar"><div class="dropBox draggable" data-class="selectArea"></div><div class="headerText">'+headerText+'</div></div>\
		<div class="col-70 droparea"> <img src="'+defaults.brouchureUrl+'" alt="" class="img-responsie"><div class="dragBox"></div></div>\
		<div class="output-info"><b>Output</b>: The output will be visible in the "Highlighter Analyzer"</div> \
	</div>');
		for (var i = 0; i < scaleEmojiArr.length; i++) {
			$(".dragBox").append('<div id=highiliter-'+[i]+' class="box draggable emoClour-'+[i]+'" data-class="emo-'+[i]+'"><img src="'+scaleEmojiArr[i]+'"/></div>');
		}
		$('.dropBox').draggable({
				helper:'clone',
				containment:"document",
				revert:'invalid',
				start:function(event, ui){
					$(ui.helper).css('z-index','99')
					$(".dropBox ").addClass("disabledbutton")
					// var cureentel = $(ui.helper).attr('data-class')
					// var di = $('.droparea [data-class='+cureentel+']').length;
					// console.log("di",di)
					// if(cureentel){
					// 	$(ui.helper).attr('data-'+cureentel,0);
					// }else{
					//   $(ui.helper).attr('data-'+cureentel,(parseInt(di)));
					//   di++;
					// }
					},
					drag:function(event,ui){},
					// stop:function(event,ui){
					// }
					
			});
			$('.droparea').droppable({
				accept:'.dropBox',
				tolerance: 'touch',
				drop:function(event, ui){
				$(".dragBox").addClass("showPopup")
				// $(".zindex").removeClass("zindex");
				$(".droparea").append("<div class='overlay'></div>")
				//star = this;
				//console.log(event,ui,this)
				dropElement(event, ui,this);
				},
				stop:function(event,ui){},
					});
});

		var finaldata = [];
		var wellndata = [];
		var notwelldata = [];
		var mostdata = [];
		var deletedata = [];
		var dellCord=[];
		var starCord=[];
		var rewrite=[];
		var rewriteCord=[];		
		var star='';

	
		$(document).on('click', '.undoBtn', function(){
			var deleteclass = $(this).parent().attr('data-class')
			var dropindex= $(this).parent().attr('data-'+deleteclass)
			if( $(this).parent().hasClass('star')){
				$(".sidebar li .star").removeClass("cldisable").draggable({disabled:false});
			}			
			getPos.call(this, dropindex, 'event', 'ui','delete');
			$(this).parent().remove()
			// setTimeout(function(){
			// 	$('.droparea [data-class='+deleteclass+']').each(function(index){
			// 		$(this).attr('data-'+deleteclass,index);
			// 	})
			// },400)
		})
		



function dropElement(event1,ui,This){		
	var $newPosX = ui.offset.left - $(This).offset().left+7;
	var $newPosY = ui.offset.top - $(This).offset().top;
	//var cssstyle = $('.sidebar').find(ui.helper).attr('style');
	var currenelclass = $('.sidebar').find(ui.helper).attr('data-class');
	//console.log(currenelclass);
	var dataindex= ui.helper.attr('data-'+event1);
	currentIndex= +dataindex;
	console.log($newPosX,$newPosY,currenelclass,event1)
		
		// $(".re-write input").unbind("input").bind("input",function(){
		// 	var index = $(this).attr("data-index");
		// 	rewrite[index]=rewrite[index].split("-")[0]+"-"+this.value;
		// 	dataval(wellndata, notwelldata, mostdata, deletedata, starCord, dellCord,rewrite,rewriteCord);
		// });			
		var count=0;
	
		$(".emoClour-0").unbind().click(function () {
			event1.isDefaultPrevented();
			$('.droparea').append('<div data-class="green" class="draggable draggable-resize '+ui.draggable.attr('data-class')+' zindex green"  style="width:105px;height:60px;left:'+($newPosX-7)+'px;top:'+$newPosY+'px; position:absolute" data-'+count+'="'+count+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
			getPos.call(this,dataindex, event, ui, ($newPosX-22),$newPosY,"new");
		 	clickAfterDrag(ui,This);
			resizedData();
			overlayShowHide();
			count++;
		});
		$(".emoClour-1").unbind().click(function () {
			$('.droparea').append('<div data-class="red" class="draggable draggable-resize '+ui.draggable.attr('data-class')+' zindex red"  style="width:105px;height:60px;left:'+($newPosX-7)+'px;top:'+$newPosY+'px; position:absolute" data-'+count+'="'+count+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
				getPos.call(this,dataindex, event, ui, ($newPosX-22),$newPosY,"new");
				resizedData();
				overlayShowHide();
	 		count++;
		});

	
}
function overlayShowHide(){
	$(".overlay").remove();
	$(".dropBox,.dragBox").removeClass("disabledbutton , showPopup") 
}

function resizedData(){
	//debugger
	$('.draggable-resize').droppable({
		greedy: true,
		tolerance: 'fit',
		drop: function (event, ui) {
			debugger
			dropElement(event, ui,star);
		}
	});	
	$('.red:not(.box), .green, .re-write:not(.box), .delete:not(.box)').resizable({					
		handles:'all',
		containment:$(".droparea"),
		stop:function(e, ui){
			var currentresize = $(this).attr('data-class');
			var resizeindex = $(this).attr('data-'+currentresize);
			getPos.call(this, resizeindex, e, ui,'resize');
		}
	});

}

function clickAfterDrag(ui,This){
	var $newPosX = ui.offset.left - $(This).offset().left+7;
    var $newPosY = ui.offset.top - $(This).offset().top;

	var count=0;
	$('.draggable-resize').draggable({					
		revert: 'true',
		containment:$(".droparea"),
		drag:function(event,ui){
		//dropElement(event, ui,star);
		// $(this).addClass("h"+count)
		// count++;
		},					
		stop: function(e, ui){
			// debugger
			   var dragclass = $(this).attr('data-class');
			   var dragindex= $(this).attr('data-'+dragclass);
			//    $('[data-undefined=undefined]').remove();
			 // getPos.call(this, ui, ($newPosX-22),$newPosY);
			   $(".zindex").removeClass("zindex");
			   $(this).addClass("zindex");
		 }				
	 });
	 
}

		function getPos(i, el, ui, left,top,new1){
			//debugger
			var lleft = 0,ttop=0;
			if(new1=="new"){
				lleft = $(".droparea").position().left;
				ttop = $(".droparea").position().top + 30;
			}			
			var leftpos = '', toppos='',w ='',h='';
			var $this = '';
			
			// if(left == "green"){
			// 	//debugger
			// 	// debugger
			// 	//console.log(11);
			// 	leftpos = parseFloat($(this).position().left).toFixed(0);
			// 	toppos = parseFloat($(this).position().top).toFixed(0);
			// 	w= $(this).outerWidth();
			// 	h= $(this).outerHeight();
			// 	$this = $(this)
			// }else if(left != undefined && left !=='delete'){
			// 	//console.log(22);
			// 	$this = ui.helper
			// 	leftpos = Math.round($($this).position().left-lleft);
			// 	toppos = Math.round($($this).position().top - ttop);
			// 	w= $($this).outerWidth();
			// 	h= $($this).outerHeight();		
			// }else if(left !=='delete'){
			// 	//console.log(33);
			// 	leftpos = ui.draggable.position().left;
			// 	toppos = ui.draggable.position().top;
			// 	w= ui.draggable.outerWidth();
			// 	h= ui.draggable.outerHeight();
			// 	$this = ui.draggable
			// }else if(left =='delete'){
			// 	//console.log(44);
			// 	$this = $(this).parent()
			// }
			// var $datatype = null;		
			
			// if($this.hasClass('green')){
			// 	$datatype = 1
			// }else if($this.hasClass('red')){
			// 	$datatype = 2
			// }else if($this.hasClass('star')){
			// 	$datatype = 3
			// }else if($this.hasClass('re-write')){
			// 	$datatype = 4
			// }else{
			// 	$datatype = 5
			// }

			// switch ($datatype) {
			// 	case 1:			
			// 		//console.log(5);
			// 		if(left=='delete'){		
			// 			wellndata.splice(i,1)
			// 		}else{
			// 			wellndata[i] = leftpos+':'+toppos+':'+w+':'+h;
			// 		}
			// 		break;
			// 	case 2:
			// 		//console.log(4);
			// 		if(left=='delete'){				
			// 			notwelldata.splice(i,1)
			// 		}else{
			// 			notwelldata[i] = leftpos+':'+toppos+':'+w+':'+h;
			// 		}
			// 		break;
			// 	case 3:
			// 		if(left=='delete'){				
			// 			mostdata.splice(i,1)
			// 		}else{
			// 			mostdata[i] = leftpos+':'+toppos+':'+w+':'+h;
			// 			starCord[i] = (leftpos+28)+':'+(toppos+30);
			// 			//console.log(1);
			// 		}
			// 		break;
					
			// 	case 4:
					
			// 		if(left=='delete'){				
			// 			rewrite.splice(i,1)
			// 			rewriteCord.splice(i,1)
			// 		}else{
						
			// 			rewrite[i] = leftpos+':'+toppos+':'+w+':'+h;
			// 			rewriteCord[i] = (leftpos+28)+':'+(toppos+30);
			// 			//console.log(2);
			// 		}			
			// 		break;
			// 	case 5:
			// 		if(left=='delete'){				
			// 			deletedata.splice(i,1)
			// 			dellCord.splice(i,1)
			// 		}else{
			// 			deletedata[i] = leftpos+':'+toppos+':'+w+':'+h;
			// 			dellCord[i]= (leftpos+28)+':'+(toppos+30);
			// 			//console.log(3);
			// 		}		
			// }	
			dataval(wellndata, notwelldata, mostdata, deletedata, starCord, dellCord,rewrite,rewriteCord);
		}
    
function checkInput(){
	
	$(".highlight").removeClass("highlight");
	$(".re-write input").each(function(index,elem){
		var pattern = new RegExp(/^\s+$/);
		var val = $(this).val();
		if(pattern.test(val) || val == ""){
			$(this).parent().addClass("highlight");
		}
	});
	if($(".highlight").length>0){
		return false;
	} else {
		return true;
	}
}

	function checkStarValidate(){
		if($(".star.draggable-resize").length>0 || $(".imagePopup").length == 0){
			
			return true
		} else {
			$(".imagePopup").show(0);
			return false;
		}
	}
	
// $(window).load(function(){
// 	$('.loader').fadeOut();
// })

$(document).ready(function(){
	$("#hotspot-ctrl").append('<div class="imagePopup profilePopup"><div class="imgBox"><span class="cross" style="display: inline-block;"></span><div style="text-align: justify;">'+noStarSelect+'</div></div></div>');
	$(".imagePopup").hide(0);
	$(".imagePopup,.cross").click(function(){
		$(".imagePopup").remove(0);
	});
});