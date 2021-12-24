$(function() {
    
    $("#pips-slider")
    
        .slider({
        
            range: true,
            min: 0,
            max: 20,
            values: [ 4, 16 ],
        	step: 1
        
        })
    
        .slider("pips", {
        	
        	first: "label",
        	last: "label",
            rest: "label",
        	step: 1,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
        })
    
    	.slider("float", {
        	
        	handle: true,
        	pips: false,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
        });
        
    //     $("#flat-slider")
    // .slider({
    //     max: 50,
    //     min: 0,
    //     range: true,
    //     values: [15, 35]
    // })
    // .slider("pips", {
    //     first: "pip",
    //     last: "pip"
    // });
                    
$("#flat-slider-vertical-1")
    .slider({
        max: 25,
        min: 0,
        range: "min",
        value: 20,
        orientation: "vertical"
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider("float");

});