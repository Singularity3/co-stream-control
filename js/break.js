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
		var venue = scObj["venue"];
        var event = scObj["event"];
		var date = scObj["date"];
		
        $("#venue").html(venue);
        $("#event").html(event);
        $("#date").html(date);
	}
}