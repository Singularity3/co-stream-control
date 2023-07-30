window.onload = init;

function init(){
	$('#allWrapper').css('display','block');
	
	var streamJSON = "../sc/streamcontrol.json";
	var xhttp = new XMLHttpRequest();
	var firstUpdate = true;
	var scObj;
	var animated = 0;
	var cacheBuster = 0;
	var startLoop;

	
	function Build() {
		if(navigator.userAgent.indexOf("XSplit") != -1) {
			var xjs = require('xjs');
			var App = new xjs.App();
			var XJSitem;
			var XJSframe = null;

			xjs.ready().then(xjs.Source.getCurrentSource).then(function(source) { source.getItemList().then(function(items) {
				isXsplit = true;

				XJSitem = items[0];

				XJSitem.setBrowserCustomSize(xjs.Rectangle.fromDimensions(1920,1080));
				XJSitem.setPosition(xjs.Rectangle.fromCoordinates(0,0,1,1));
				XJSitem.setPositionLocked(true);
				//XJSitem.setFullDynamicColorRange(true);
				window.external.SetLocalProperty("prop:Browser60fps","1");
				
				App.getTransition().then(function(res) {
					var currTransition = res._value;
					console.log(currTransition);
					if (currTransition.indexOf(".png") == -1 ){
						setTimeout(standbyInfo,300);
					}
					else {
						var transitionDuration = currTransition.split('*')[1] / 10000 ;
						if (!transitionDuration) {
							transitionDuration = 2000;
						}
						console.log(transitionDuration);
						setTimeout(standbyInfo,transitionDuration-250);
					}
				});
			})});
		}
		else{
			setTimeout(standbyInfo,300);
		}
	}
	Build();
	
	xhttp.overrideMimeType('application/json');

	xhttp.onreadystatechange = parseJSON;
	
	pollHandler();
	setInterval(function() {pollHandler();}, 500);
	
	function pollHandler(){
		xhttp.open('GET',streamJSON+"?v="+cacheBuster,true);
		xhttp.send();
		cacheBuster++;
	}
	
	function parseJSON(){
		if (xhttp.readyState === 4) {
			scObj = JSON.parse(xhttp.responseText);
			if(animated != 0){
				standbyInfo();
			}
		}
	}
	
	function standbyInfo(){
		if(firstUpdate){ 
			setText();
			firstUpdate = false;
			animated++;
		}
		else{			
			setText();
		}
	}
	
	function setText(){
        //this looks very dumb and I have no excuse
		$("#p1_w1_1").html(addScore(scObj["T8_Win_1A"], scObj["T8_Win_1AS"]));
        $("#p2_w1_1").html(addScore(scObj["T8_Win_1B"], scObj["T8_Win_1BS"]));
        $("#p1_w1_2").html(addScore(scObj["T8_Win_2A"], scObj["T8_Win_2AS"]));
        $("#p2_w1_2").html(addScore(scObj["T8_Win_2B"], scObj["T8_Win_2BS"]));
        
        $("#p1_l1_1").html(addScore(scObj["T8_Los_1A"], scObj["T8_Los_1AS"]));
        $("#p2_l1_1").html(addScore(scObj["T8_Los_1B"], scObj["T8_Los_1BS"]));
        $("#p1_l1_2").html(addScore(scObj["T8_Los_2A"], scObj["T8_Los_2AS"]));
        $("#p2_l1_2").html(addScore(scObj["T8_Los_2B"], scObj["T8_Los_2BS"]));
        
        $("#p1_wf").html(addScore(scObj["T8_WF_1A"], scObj["T8_WF_1AS"]));
        $("#p2_wf").html(addScore(scObj["T8_WF_1B"], scObj["T8_WF_1BS"]));

        $("#p1_l2_1").html(addScore(scObj["T8_LQ_1A"], scObj["T8_LQ_1AS"]));
        $("#p2_l2_1").html(addScore(scObj["T8_LQ_1B"], scObj["T8_LQ_1BS"]));
        $("#p1_l2_2").html(addScore(scObj["T8_LQ_2A"], scObj["T8_LQ_2AS"]));
        $("#p2_l2_2").html(addScore(scObj["T8_LQ_2B"], scObj["T8_LQ_2BS"]));
        
        $("#p1_ls").html(addScore(scObj["T8_LS_1A"], scObj["T8_LS_1AS"]));
        $("#p2_ls").html(addScore(scObj["T8_LS_1B"], scObj["T8_LS_1BS"]));
        
        $("#p1_lf").html(addScore(scObj["T8_LF_1A"], scObj["T8_LF_1AS"]));
        $("#p2_lf").html(addScore(scObj["T8_LF_1B"], scObj["T8_LF_1BS"]));
        
        $("#p1_gf").html(addScore(scObj["T8_GF_1A"], scObj["T8_GF_1AS"]));
        $("#p2_gf").html(addScore(scObj["T8_GF_1B"], scObj["T8_GF_1BS"]));
	}
    
    function addScore(name, score){
        return name.concat('<div class="score">', score, '</div>')
    }
}