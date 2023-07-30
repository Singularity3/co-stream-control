window.onload = init;

function init(){
	$('#allWrapper').css('display','block');
	
	var streamJSON = "../sc/streamcontrol.json";
	var xhttp = new XMLHttpRequest();
	var firstUpdate = true;
	var scObj;
	var animated = 0;
	var cacheBuster = 0;
	var wrapper1 = $("#pWrapper1");
	var wrapper2 = $("#pWrapper2");
	var wrapper3  = $("#round");
	var fWrapper1 = $("#fWrapper1");
	var fWrapper2 = $("#fWrapper2");
	var round;
	var hideP1 = false;
	var hideP2 = false;
	var startLoop;
	var gameHold;
	var countryHold1;
	var countryHold2;
	
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
						setTimeout(scoreboard,300);
					}
					else {
						var transitionDuration = currTransition.split('*')[1] / 10000 ;
						if (!transitionDuration) {
							transitionDuration = 2000;
						}
						console.log(transitionDuration);
						setTimeout(scoreboard,transitionDuration-250);
					}
				});
			})});
		}
		else{
			setTimeout(scoreboard,300);
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
				scoreboard();
			}
		}
	}
	
	function scoreboard(){
		if(firstUpdate){ 
			game = scObj['game'];
			gameHold = game;
			getCSS(game);
			//logoLoop();
			$("#backgroundLeft").css({ "left": leftBackgroundX, "top": backgroundY, "height": backgroundH, "width": backgroundW});
			$("#backgroundRight").css({ "right": rightBackgroundX, "top": backgroundY, "height": backgroundH, "width": backgroundW});
			$("#playerContainerLeft").css({ "padding-top": pNameP, "height": sboardH, "width": pNameW, "font-size": pNameF, "margin-top": p1NameY });
			$("#playerContainerRight").css({ "padding-top": pNameP, "height": sboardH, "width": pNameW, "font-size": pNameF, "margin-top": p2NameY });
			$("#scoreContainerLeft").css({ "top": pScoreY, "height": pScoreH, "width": pScoreW, "font-size": pScoreF });
			$("#scoreContainerRight").css({ "top": pScoreY, "height": pScoreH, "width": pScoreW, "font-size": pScoreF});
			$("#backgroundCenter").css({"top": roundY, "max-width": roundW, "transform": "none"});
            $("#backgroundCenter").css({"transform": "translate(-50%, 0%)"});

			getMatch();
			firstUpdate = false;
			animated++;
		}
		else{			
			getMatch();
		}
	}
	
	function getMatch(){
		var pName1 = scObj["pName1"];
		var pName2 = scObj["pName2"];
		var pTeam1 = scObj["pTeam1"];
		var pTeam2 = scObj["pTeam2"];
		var pScore1 = scObj["pScore1"];
		var pScore2 = scObj["pScore2"];
		var pPronouns1 = scObj["pPronouns1"];
		var pPronouns2 = scObj["pPronouns2"];
		var round = scObj["round"];
		game = scObj['game'];
		
		if(firstUpdate){
			
			//TweenMax.set("#backgroundLeft",{css:{x: p1NameInit}});
			//TweenMax.set("#backgroundRight",{css:{x: p2NameInit}});
			$("#p1Player").html(pName1);
			$("#p1Sponsor").html(pTeam1);
			$("#p2Player").html(pName2);
			$("#p2Sponsor").html(pTeam2);
			$("#p1Score").html(pScore1);
			$("#p2Score").html(pScore2);
			$("#p1Pronouns").html(pPronouns1);
			$("#p2Pronouns").html(pPronouns2);
			$("#round").html(round);

			TweenMax.to("#backgroundLeft",.3,{css:{x: '+0px', opacity: 1},ease:Quad.easeOut,delay:.1});
			TweenMax.to("#backgroundRight",.3,{css:{x: '+0px', opacity: 1},ease:Quad.easeOut,delay:.1});
			TweenMax.to("#backgroundCenter",.3,{css:{y: '+0px', opacity: 1},ease:Quad.easeOut,delay:.1});
		}
		else{
			if ($("#p1Player").text() != pName1) {
				TweenMax.to("#p1Player",.3,{css:{x:p1NameInit, opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function() {
					$("#playerContainerLeft").css('font-size', pNameF);
					$("#p1Player").html(pName1);
					
					TweenMax.to("#p1Player",.3,{css:{x:"+0px", opacity: 1},ease:Quad.easeOut,delay:.1});
				}});
			}

			if ($("#p1Sponsor").text() != pTeam1) {
				TweenMax.to("#p1Sponsor", .3, {
					css: { x: p1NameInit, opacity: 0 }, ease: Quad.easeOut, delay: 0, onComplete: function () {
						$("#playerContainerLeft").css('font-size', pNameF);
						$("#p1Sponsor").html(pTeam1);
						
						TweenMax.to("#p1Sponsor", .3, { css: { x: "+0px", opacity: 1 }, ease: Quad.easeOut, delay: .1 });
					}
				});
			}
				
			if ($("#p2Player").text() != pName2){
				TweenMax.to("#p2Player",.3,{css:{x:p2NameInit, opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function() {
					$("#playerContainerRight").css('font-size', pNameF);
					$("#p2Player").html(pName2);
					
					TweenMax.to("#p2Player",.3,{css:{x:"+0px", opacity: 1},ease:Quad.easeOut,delay:.1});
				}});
			}

			if ($("#p2Sponsor").text() != pTeam2) {
				TweenMax.to("#p2Sponsor", .3, {
					css: { x: p2NameInit, opacity: 0 }, ease: Quad.easeOut, delay: 0, onComplete: function () {
						$("#playerContainerRight").css('font-size', pNameF);
						$("#p2Sponsor").html(pTeam2);
						
						TweenMax.to("#p2Sponsor", .3, { css: { x: "+0px", opacity: 1 }, ease: Quad.easeOut, delay: .1 });
					}
				});
			}
			
			if ($("#p1Score").text() != pScore1) {
				TweenMax.to("#p1Score",.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:function(){
					$("#p1Score").html(pScore1);
					TweenMax.to("#p1Score",.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.1});
				}});
			}
			
			if ($("#p2Score").text() != pScore2) {
				TweenMax.to("#p2Score", .3, {
					css: { opacity: 0 }, ease: Quad.easeOut, delay: 0, onComplete: function () {
						$("#p2Score").html(pScore2);
						TweenMax.to("#p2Score", .3, { css: { opacity: 1 }, ease: Quad.easeOut, delay: .1 });
					}
				});
			}

			if ($("#p1Pronouns").text() != pPronouns1) {
				TweenMax.to("#p1Pronouns", .3, {
					css: { opacity: 0 }, ease: Quad.easeOut, delay: 0, onComplete: function () {
						$("#p1Pronouns").html(pPronouns1);
						TweenMax.to("#p1Pronouns", .3, { css: { opacity: 1 }, ease: Quad.easeOut, delay: .1 });
					}
				});
			}

			if ($("#p2Pronouns").text() != pPronouns2) {
				TweenMax.to("#p2Pronouns", .3, {
					css: { opacity: 0 }, ease: Quad.easeOut, delay: 0, onComplete: function () {
						$("#p2Pronouns").html(pPronouns2);
						TweenMax.to("#p2Pronouns", .3, { css: { opacity: 1 }, ease: Quad.easeOut, delay: .1 });
					}
				});
			}
			
			if ($("#round").text() != round) {
					TweenMax.to("#round",.3,{css:{opacity: 0},delay:0,onComplete:function() {
					$("#round").css('font-size', roundF);
					$("#round").html(round);
					TweenMax.to("#round",.3,{css:{opacity: 1},delay:.1});
				}});
			}
			
			if (gameHold != game){
				//TweenMax.to("#scoreboardContainer",.3,{css:{opacity:0}});
				TweenMax.to("#scoreboardContainer",.3,{css:{opacity:0},onComplete:function(){
					getCSS(game);
					$("#backgroundLeft").css({ "left": leftBackgroundX, "top": backgroundY, "height": backgroundH, "width": backgroundW});
                    $("#backgroundRight").css({ "right": rightBackgroundX, "top": backgroundY, "height": backgroundH, "width": backgroundW});
			        $("#playerContainerLeft").css({ "padding-top": pNameP, "height": sboardH, "width": pNameW, "font-size": pNameF, "margin-top": p1NameY });
			        $("#playerContainerRight").css({ "padding-top": pNameP, "height": sboardH, "width": pNameW, "font-size": pNameF, "margin-top": p2NameY });
			        $("#scoreContainerLeft").css({ "top": pScoreY, "height": pScoreH, "width": pScoreW, "font-size": pScoreF });
			        $("#scoreContainerRight").css({ "top": pScoreY, "height": pScoreH, "width": pScoreW, "font-size": pScoreF});
			        $("#backgroundCenter").css({"top": roundY, "max-width": roundW, "transform": "none"});
                    $("#backgroundCenter").css({"transform": "translate(-50%, 0%)"});
					gameHold = game;
					
					TweenMax.to("#scoreboardContainer",.3,{css:{opacity:1},delay:1});
				}});
			}
            $("#backgroundCenter").css({"transform": "translate(-50%, 0%)"});
		}
	}
	
	function logoLoop(){
		clearInterval(startLoop);
		$(".logos").css("display","none");
		var initialFadeIn = 300;
		var itemInterval = 1000;
		var fadeTime = 1500;
		var currentItem = 0;
		var itemCount = 2;
		
		setTimeout(function(){
			if(itemCount > 1){
			$('#logoWrapper').find('img').eq(currentItem).fadeIn(initialFadeIn);
				
			if(game == 'BBTAG' || game == 'UNICLR'){
				//var logoAdjustW = parseFloat(logoAdjust[3]) * logoAdjust[2];
				//var logoAdjustH = parseFloat(logoAdjust[4]) * logoAdjust[2];
				//TweenMax.set('.logos',{css:{x: logoAdjust[0], y: logoAdjust[1], width: logoAdjustW, height: 100}});
			}
			else if(game == 'SFALPHA2' || game == 'F3RDSTRIKE' || game == 'WINDJAM'){
				TweenMax.set('.logos',{css:{width: '0px', height: '0px'}});
			}
			else{
				//var logoAdjustW = logoAdjust[3];
				//var logoAdjustH = logoAdjust[4];
				//TweenMax.set('.logos',{css:{x: '+0px', y: '+0px', width: logoAdjustW, height: logoAdjustH}});
			}
			
			function loopRotate() {
				$('#logoWrapper').find('img').eq(currentItem).fadeOut(fadeTime);
				
				if(currentItem == itemCount - 1) {
					currentItem = 0;
				}
				else {
					currentItem++;
				}
				
				$('#logoWrapper').find('img').eq(currentItem).fadeIn(fadeTime);
			}
			
			startLoop = setInterval(loopRotate, itemInterval);
		}
		else{
			$('#logo').fadeIn(initialFadeIn);
			
			if(game == 'BBTAG' || game == 'UNICLR'){
				//var logoAdjustW = parseFloat(logoAdjust[3]) * logoAdjust[2];
				//var logoAdjustH = parseFloat(logoAdjust[4]) * logoAdjust[2];
				TweenMax.set('.logos',{css:{x: logoAdjust[0], y: logoAdjust[1], width: logoAdjustW, height: logoAdjustH}});
			}
			else if(game == 'SFALPHA2' || game == 'SF3RDSTRIKE' || game == 'WINDJAM'){
				TweenMax.set('.logos',{css:{width: '0px', height: '0px'}});
			}
			else{
				//var logoAdjustW = logoAdjust[3];
				//var logoAdjustH = logoAdjust[4];
				//TweenMax.set('.logos',{css:{x: '+0px', y: '+0px', width: logoAdjustW, height: logoAdjustH}});
			}
		}
			
		},50)
		
	}

}