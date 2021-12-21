$(document).ready(function() {
	var scaleEmojiArr = scaleEmoji.split("|");
	var finaldata = [];
	var wellndata = [];
	var notwelldata = [];
	var mostdata = [];
	var deletedata = [];
	var dellCord=[];
	var starCord=[];
	var rewrite=[];
	var rewriteCord=[];


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
					var cureentel = $(ui.helper).attr('data-class')
					var di = $('.droparea [data-class='+cureentel+']').length;
					console.log("di",di)
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



function dropElement(event1,ui,This){		
	var $newPosX = ui.offset.left - $(This).offset().left+7;
	var $newPosY = ui.offset.top - $(This).offset().top;
	//var cssstyle = $('.sidebar').find(ui.helper).attr('style');
	var currenelclass = $('.sidebar').find(ui.helper).attr('data-class');
	//console.log(currenelclass);
	var dataindex= ui.helper.attr('data-'+event1);
	currentIndex= +dataindex;
	console.log(dataindex);
	
	$('.box[id^="highiliter-"]').unbind().click(function () {
			var count=0;
			var idEs=$(this).attr("id");
			if(idEs =="highiliter-0"){
							$('.droparea').append('<div data-class="green" class="draggable draggable-resize '+ui.draggable.attr('data-class')+' zindex green"  style="width:105px;height:60px;left:'+($newPosX-7)+'px;top:'+$newPosY+'px; position:absolute" data-"green'+count+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
			getPos.call(this,dataindex, ui, ($newPosX-22),$newPosY,"new");
		 	clickAfterDrag(ui,This);
			resizedData();
			overlayShowHide();
			
			}
			 if(idEs =="highiliter-1"){
				$('.droparea').append('<div data-class="red" class="draggable draggable-resize '+ui.draggable.attr('data-class')+' zindex red"  style="width:105px;height:60px;left:'+($newPosX-7)+'px;top:'+$newPosY+'px; position:absolute" data-'+count+'="'+count+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
				getPos.call(this,dataindex, ui, ($newPosX-22),$newPosY,"new");
				clickAfterDrag(ui,This);
				resizedData();
				overlayShowHide();
	 
			}
			 if(idEs =="highiliter-2"){
				$('.droparea').append('<div data-class="star" class="draggable draggable-resize '+ui.draggable.attr('data-class')+' zindex star"  style="width:105px;height:60px;left:'+($newPosX-7)+'px;top:'+$newPosY+'px; position:absolute" data-'+count+'="'+count+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
				getPos.call(this,dataindex, ui, ($newPosX-22),$newPosY,"new");
				clickAfterDrag(ui,This);
				resizedData();
				overlayShowHide();

			}				
			 if(idEs =="highiliter-3"){
				var ind = $("[data-class='re-write'] input").length;
				$('.droparea').append('<div data-class="re-write" class="draggable draggable-resize '+ui.draggable.attr('data-class')+'  zindex re-write" style="width:72px;height:25px;left:'+($newPosX+9)+'px;top:'+$newPosY+'px; position:absolute;border: 1px solid black;background:white;" data-'+count+'="'+ui.helper.attr('data-'+count+'')+'"><input data-index="'+ind+'" type="text" style="width: 100%;top: 50%;left: 50%;position: absolute;transform: translate(-50%,-50%);outline: 0px;border: 0px;padding-left: 2px;" placeholder="Message"/><div class="undoBtn">X</div><div class="moveItem"></div></div>');
				getPos.call(this,dataindex, ui, ($newPosX-6),$newPosY,"new");
				$(".re-write input:last").focus();
				clickAfterDrag(ui,This);
				resizedData();
				overlayShowHide();

			}
			 if(idEs =="highiliter-4"){
				 var t=ui;
				 console.log(t)
				$('.droparea').append('<div data-class="delete" class="draggable draggable-resize '+ui.draggable.attr('data-class')+'  zindex delete" style="width:72px;height:62px;left:'+($newPosX+13)+'px;top:'+($newPosY+11)+'px; position:absolute" data-="delete'+(count++)+'"><div class="undoBtn">X</div><div class="moveItem"></div></div>');
				getPos.call(this,dataindex, ui, ($newPosX-2),($newPosY+11),"new");
				clickAfterDrag(ui,This);
				resizedData();
				overlayShowHide();
			}
			count++;
		});

	
}
function overlayShowHide(){
	$(".overlay").remove();
	$(".dropBox,.dragBox").removeClass("disabledbutton , showPopup") 
}

function resizedData(){
	//debugger
	// $('.draggable-resize').droppable({
	// 	greedy: true,
	// 	tolerance: 'fit',
	// 	drop: function (event, ui) {
	// 		debugger
	// 		dropElement(event, ui,star);
	// 	}
	// });	
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

function getPos(i, ui, left,top,new1){
			//debugger
			var lleft = '',ttop='';
			if(new1=="new"){
				lleft = $(".droparea").position().left;
				ttop = $(".droparea").position().top +30;
			}			
			var leftpos = '', toppos='',w ='',h='';
			var $this = '';
			if($(this).find('green')){
				wellndata.push($(".green").position().left+':'+$(".green").position().top+':'+$(".green").width()+':'+$(".green").height());
			}
			// else if(!$(this).find('red')){
			// 	notwelldata.push$(".red").position().left+':'+$(".red").position().top+':'+$(".red").width()+':'+$(".red").height();
			// }
			// else if(!$(this).find('star')){
			// 	mostdata.push$(".star").position().left+':'+$(".star").position().top+':'+$(".star").width()+':'+$(".star").height();
			// }
			// if(!$(this).find('re-write')){
			// 	rewrite.push$(".re-write").position().left+':'+$(".re-write").position().top+':'+$(".re-write").width()+':'+$(".re-write").height();
			// }
			// if($(this).find('delete')){
			// 	// debugger
			//    deletedata.push($(this).position().left+':'+$(this).position().top+':'+$(this).width()+':'+$(this).height());
			// }
			console.log($(".green").position(),new1,left);
			if($(".green")){
				//debugger
				// debugger
				console.log($(this));
				leftpos = parseFloat($(".green").position().left).toFixed(0);
				toppos = parseFloat($(".green").position().top).toFixed(0);
				w= $(".green").width();
				h= $(".green").height();
				$this = $(this)
			}
			// else if(left != undefined && left !=='delete'){
			// 	//console.log(22);
				// $this = ui.helper;
			// 	leftpos = Math.round($($this).position().left - lleft);
			// 	toppos = Math.round($($this).position().top - ttop);
			// 	w= $($this).outerWidth();
			// 	h= $($this).outerHeight();		
			// }
			// else if(left !=='delete'){
			// 	//console.log(33);
			// 	leftpos = ui.draggable.position().left;
			// 	toppos = ui.draggable.position().top;
			// 	w= ui.draggable.outerWidth();
			// 	h= ui.draggable.outerHeight();
			// 	$this = ui.draggable
			// }
			// else if(left =='delete'){
			// 	//console.log(44);
			// 	$this = $(this).parent()
			// }
			var $datatype = null;		
			
			if($('.green')){
				$datatype = 1
			}
			// else if($this.hasClass('red')){
			// 	$datatype = 2
			// }else if($this.hasClass('star')){
			// 	$datatype = 3
			// }else if($this.hasClass('re-write')){
			// 	$datatype = 4
			// }else{
			// 	$datatype = 5
			// }

			switch ($datatype) {
				case 1:			
					//console.log(5);
					if(($('.green').position().left)==left){		
						console.log("wellndata",wellndata)
						wellndata.splice(i,1)
					}
					else{
						wellndata[i] = leftpos+':'+toppos+':'+w+':'+h;
					}
					break;
				// case 2:
				// 	//console.log(4);
				// 	if(left=='delete'){				
				// 		notwelldata.splice(i,1)
				// 	}else{
				// 		notwelldata[i] = leftpos+':'+toppos+':'+w+':'+h;
				// 	}
				// 	break;
				// case 3:
				// 	if(left=='delete'){				
				// 		mostdata.splice(i,1)
				// 	}else{
				// 		mostdata[i] = leftpos+':'+toppos+':'+w+':'+h;
				// 		starCord[i] = (leftpos+28)+':'+(toppos+30);
				// 		//console.log(1);
				// 	}
				// 	break;
					
				// case 4:
					
				// 	if(left=='delete'){				
				// 		rewrite.splice(i,1)
				// 		rewriteCord.splice(i,1)
				// 	}else{
						
				// 		rewrite[i] = leftpos+':'+toppos+':'+w+':'+h;
				// 		rewriteCord[i] = (leftpos+28)+':'+(toppos+30);
				// 		//console.log(2);
				// 	}			
				// 	break;
				// case 5:
				// 	if(left=='delete'){				
				// 		deletedata.splice(i,1)
				// 		dellCord.splice(i,1)
				// 	}else{
				// 		deletedata[i] = leftpos+':'+toppos+':'+w+':'+h;
				// 		dellCord[i]= (leftpos+28)+':'+(toppos+30);
				// 		//console.log(3);
				// 	}		
			}	
			dataval(wellndata, notwelldata, mostdata, deletedata, starCord, dellCord,rewrite,rewriteCord);
			console.log("wellndata",wellndata)

}	

		 $(document).on('click', '.undoBtn', function(){

		//	$(".undoBtn").unbind().click(function () {
				deletedata
			var deleteclass = $(this).parent().attr('data-class')
			var dropindex= $(this).parent().attr('data-'+deleteclass)
			if( $(this).parent().hasClass('star')){
				$(".sidebar li .star").removeClass("cldisable").draggable({disabled:false});
			}			
			var blankValue=deletedata.at(-1);
			// console.log(deletedata.at(-1));
			dataval(wellndata, notwelldata, mostdata, blankValue, starCord, dellCord,rewrite,rewriteCord);
			// console.log("wellndata",wellndata)
			//getPos.call(this, dropindex, 'event', 'ui','delete');
			$(this).parent().remove()
			// setTimeout(function(){
			// 	$('.droparea [data-class='+deleteclass+']').each(function(index){
			// 		$(this).attr('data-'+deleteclass,index);
			// 	})
			// },400)
		})

// function checkInput(){
	
// 	$(".highlight").removeClass("highlight");
// 	$(".re-write input").each(function(index,elem){
// 		var pattern = new RegExp(/^\s+$/);
// 		var val = $(this).val();
// 		if(pattern.test(val) || val == ""){
// 			$(this).parent().addClass("highlight");
// 		}
// 	});
// 	if($(".highlight").length>0){
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// 	function checkStarValidate(){
// 		if($(".star.draggable-resize").length>0 || $(".imagePopup").length == 0){
			
// 			return true
// 		} else {
// 			$(".imagePopup").show(0);
// 			return false;
// 		}
// 	}
	
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

});