var documentStartY = '';
var documentStartX = '';

function swipedetect(el, callback) {
    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        mousedown = false,
        threshold = 50, //required min distance traveled to be considered swipe
        restraint = 1000, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 500, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir) {}

    touchsurface.addEventListener('touchstart', function(e) {
        var touchobj = e;
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX || e.touches[0].pageX;
        startY = touchobj.pageY || e.touches[0].pageY;
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        mousedown = true;
        handleswipe("selectEL");
        e.preventDefault();
    }, false)


    touchsurface.addEventListener('touchmove', function(e) {
        // e.preventDefault() // prevent scrolling when inside DIV
        if (mousedown == true) {
            var cureY = e.pageY || e.touches[0].pageY;
            var cureX = e.pageX || e.touches[0].pageX;
            var moveHeight = cureY - startY;
            var moveWidth = cureX - startX;
            handleswipe("moveFunction_" + moveWidth);
        }
    }, false)


    touchsurface.addEventListener('touchend', function(e) {


        var touchobj = e;
        var touchobjX = touchobj.pageX || touchobj.changedTouches[0].pageX;
        var touchobjY = touchobj.pageY || touchobj.changedTouches[0].pageY;
        distX = touchobjX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobjY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed

        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for vertical swipe met

            swipedir = (distX < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        } else {
            swipedir = 'revertBack';
        }
        handleswipe(swipedir);
        mousedown = false;
        e.preventDefault()
    }, false)

    $(document).on('touchend', function(e) {
        //  console.log("doucment tiouch end called");

        if ($(e.target).parents().hasClass("touchsurface") || $(e.target).hasClass("touchsurface") || $(e.target).parents().hasClass("reload-block") || $(e.target).hasClass("reload-block")) {} else {
            var touchobj = e;
            var touchobjX = touchobj.pageX || touchobj.changedTouches[0].pageX;
            var touchobjY = touchobj.pageY || touchobj.changedTouches[0].pageX;
            distY = touchobjY - documentStartY // get vertical dist traveled by finger while in contact with surface
            distX = touchobjX - documentStartX // get vertical dist traveled by finger while in contact with surface

            if (Math.abs(distX) >= threshold && mousedown == true) { // 2nd condition for vertical swipe met
                swipedir = (distX < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            } else {
                swipedir = 'revertBack';
            }
            handleswipe('FromDocument_' + swipedir);
            mousedown = false;

            //e.preventDefault();
        }


    });
}


//Drag Detect
function mouseDetect(el, callback) {


    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        mousedown = false,
        threshold = 100, //required min distance traveled to be considered swipe
        restraint = 1000, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 500, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir) {}

    touchsurface.addEventListener('mousedown', function(e) {

        var touchobj = e;
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        documentStartY = touchobj.pageY
        documentStartX = touchobj.pageX
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        mousedown = true;
        handleswipe("selectEL");
        e.preventDefault();
    }, false)

    touchsurface.addEventListener('mousemove', function(e) {
        // e.preventDefault() // prevent scrolling when inside DIV
        if (mousedown == true) {
            var cureY = e.pageY;
            var cureX = e.pageX;
            var moveHeight = cureY - startY;
            var moveWidth = cureX - startX;
            handleswipe("moveFunction_" + moveWidth);
        }
    }, false)

    touchsurface.addEventListener('mouseup', function(e) {


        var touchobj = e;
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed


        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for vertical swipe met

            swipedir = (distX < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        } else {
            swipedir = 'revertBack';
        }
        handleswipe(swipedir);
        mousedown = false;
        e.preventDefault()
    }, false)

    $(document).on('mouseup', function(e) {
        if ($(e.target).parents().hasClass("touchsurface") || $(e.target).hasClass("touchsurface") || $(e.target).parents().hasClass("reload-block") || $(e.target).hasClass("reload-block")) {} else {
            var touchobj = e;
            distY = touchobj.pageY - documentStartY // get vertical dist traveled by finger while in contact with surface
            distX = touchobj.pageX - documentStartX // get vertical dist traveled by finger while in contact with surface
            if (Math.abs(distX) >= threshold && mousedown == true) { // 2nd condition for vertical swipe met

                swipedir = (distX < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            } else {
                swipedir = 'revertBack';
            }
            handleswipe('FromDocument_' + swipedir);
            mousedown = false;

            //e.preventDefault();
        }


    });
}


//USAGE:
// var el = $("#touchsurface")[0];
// swipedetect(el, function(swipedir){
// // swipedir contains either "none", "left", "right", "top", or "down"
// if(swipedir == "left"){
// swipeHandlerLeft(this);
// }
// if(swipedir == "right"){
// swipeHandlerRight(this);
// }

// if(swipedir == "up"){
// console.log("top");
// }

// if(swipedir == "down"){
// console.log("down");
// }