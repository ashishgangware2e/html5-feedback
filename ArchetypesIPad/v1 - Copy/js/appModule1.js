// JavaScript Document
$(document).ready(function(){
var imgStr = img_Str.split("|");
var precodes = _precodes.split("|");
var thumbtitle = thumb_title.split("|");
var thumbdesc = thumb_desc.split("|");
$(".modal-content").click(function(){
	$(function () {
   		//$('.modal').modal('toggle');
	});
})
var hght = [];
var ttlehght = [];
var imghght = [];


function outputs(){
	var opt = [];
	$(".thumbs").each(function(i,e) {
		if($(this).find("a").hasClass('bordrs'))
		opt.push($(this).find("a").attr('data-info'));
    	$("#output").val(opt.toString());
	});
}
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
for(var i=0; i<imgStr.length; i++){
	var extnsion = imgStr[i].split("/")[imgStr[i].split("/").length-1].split(".")[1];
	
	if(extnsion=="jpg" || extnsion=="png" || extnsion=="jpeg" || extnsion=="gif"){
	$("#thumbnall").append('<div class="col-sm-3 col-lg-3 col-md-3 col-xs-6 thumbs">'
							+'<a class="thumbnail" href="#" data-image-id="" data-info="'+precodes[i]+'" data-toggle="" data-title="1" data-image="'+imgStr[i]+'" data-target="#image-gallery">'
							+'<div clsaa="ttle">'+thumbtitle[i]+'</div>'
							+'<img class="img-responsive" src="'+imgStr[i]+'" alt="Short alt text">'
							+'<div class="decription">'+thumbdesc[i]+'</div>'
							+'</a>'
							+'</div>');
	}
	else{
		var limit = 120;
		if (imgStr[i].length > limit) {
		$("#thumbnall").append('<div class="col-lg-2 col-md-4 col-xs-6 thumb"><a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="" data-image="'+imgStr[i]+'" data-target="#image-gallery"><div class="dataText">'+imgStr[i].substr(0, limit-1)+'...</div> <div class="btn btn-primary bordrRadiusNone center-block">View large</div> </a> </div>');
		
		}    
	}
}

$(function() {
    $("a").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass('bordrs');
		outputs();
    });
	$(".thumbs a").each(function(i,e) {
		hght.push($(this).find(".decription").height());
		imghght.push($(this).find("img").height());
		ttlehght.push($(this).find(".ttle").height());
	});
	$(".decription").height(hght.max()+10);
});



loadGallery(true, 'a.thumbnail');

//This function disables buttons when needed
function disableButtons(counter_max, counter_current){
	$('#show-previous-image, #show-next-image').show();
	if(counter_max == counter_current){
		$('#show-next-image').hide();
	} else if (counter_current == 1){
		$('#show-previous-image').hide();
	}
}

/**
 *
 * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
 * @param setClickAttr  Sets the attribute for the click handler.
 */

function loadGallery(setIDs, setClickAttr){
	var current_image,
		selector,
		counter = 0;

	$('#show-next-image, #show-previous-image').click(function(){
		if($(this).attr('id') == 'show-previous-image'){
			current_image--;
		} else {
			current_image++;
		}

		selector = $('[data-image-id="' + current_image + '"]');
		updateGallery(selector);
	});

	function updateGallery(selector) {
		var $sel = selector;
		current_image = $sel.data('image-id');
		
		$('#image-gallery-caption').text($sel.data('caption'));
		$('#image-gallery-title').text($sel.data('title'));
		
		var extnsionPop = $sel.data('image').split("/")[$sel.data('image').split("/").length-1].split(".")[1];
		if(extnsionPop=="jpg" || extnsionPop=="png" || extnsionPop=="jpeg" || extnsionPop=="gif"){
			$('#image-gallery-image').html('<img src="'+$sel.data('image')+'" class="img-responsive">');
		}
		else{
		$('#image-gallery-image').html('<p>'+$sel.data('image')+'</p>');
		}	
		//$('#image-gallery-image').attr('src', $sel.data('image'));
		disableButtons(counter, $sel.data('image-id'));
	}

	if(setIDs == true){
		$('[data-image-id]').each(function(){
			counter++;
			$(this).attr('data-image-id',counter);
		});
	}
	$(setClickAttr).on('click',function(){
		updateGallery($(this));
	});
}
});
