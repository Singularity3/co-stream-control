var pNameW;
var pNameH;
var pNameF;
var pNameP;
var p1NameX;
var p1NameY;
var p1NameInit;
var p1NameAlign;
var p2NameX;
var p2NameY;
var p2NameInit;
var p2NameAlign;
var pNameTime;
var pNameDelay;
var pScoreW;
var pScoreH;
var pScoreF;
var p1ScoreX;
var pScoreY;
var p2ScoreX;
var pScoreTime;
var pScoreDelay;
var roundW;
var roundH;
var roundX;
var roundY;
var roundF;
var roundInit;
var roundTime;
var roundDelay;
var gName;
var flagW;
var flagH;
var flag1X;
var flag1Y;
var flag2X;
var flag2Y;
var flagTime;
var flagDelay;
var sboardH;
var sboardY;
var leftBackgroundX;
var rightBackgroundX;
var backgroundH;
var backgroundW;
var backgroundY;
var roundCenterW;
var roundCenterH;

var games = {
	
	"ST": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '260px',
		"rbx": '260px',
		"p1i": '+60px',
		"p2i": '-60px',
        "bgw": '620px',     // background width
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '980px',
		"rx": '849px',
		"gn": 'Street Fighter Super Turbo',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '5px'
	},
	
	"UNICLR": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '10px',
		"rx": '849px',
		"gn": 'Under Night In-Birth exe:late-clr',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '10px'
	},

	"STRIVE": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '150px',
		"rbx": '150px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '20px',
		"rx": '849px',
		"gn": 'Guilty Gear Strive',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '30px'
	},

	"DBFZ": {
		"p1y": '3px',
		"p2y": '3px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '210px',		// left background x
		"rbx": '210px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '43px',
		"psh": '35px',		// player scorecard height
		"psy": '1px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '3px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Dragonball FighterZ',
		"sbh": '40px',		// scoreboard height
		"bgh": '46px',		// background height
		"bgy": '0px'		// background y post (from top of screen)
	},

	"BBCF": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '210px',		// left background x
		"rbx": '210px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'BlazBlue Central Fiction',
		"sbh": '42px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '0px'		// background y post (from top of screen)
	},

	"GBFV": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '445px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '200px',		// left background x
		"rbx": '200px',     // right background x
        "bgw": '530px',     // background width
		"p1i": '0px',		// player 1 init
		"p2i": '0px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Granblue Fantasy Versus Rising',
		"sbh": '44px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '3px'		// background y post (from top of screen)
	},

	"SSBU": {
        "p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '445px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '280px',		// left background x
		"rbx": '280px',     // right background x
        "bgw": '500px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Street Fighter 6',
		"sbh": '44px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '3px'		// background y post (from top of screen)
	},

	"MBTL": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '3px',
		"rx": '849px',
		"gn": 'Melty Blood Type Lumina',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '10px'
	},

	"3S": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '980px',
		"rx": '849px',
		"gn": 'Street Fighter 3rd Strike',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '6px'
	},

	"XRD": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '210px',		// left background x
		"rbx": '210px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Guilty Gear Xrd Rev 2',
		"sbh": '42px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '5px'		// background y post (from top of screen)
	},

	"GGPR": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '245px',
		"rbx": '245px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '980px',
		"rx": '849px',
		"gn": 'Guilty Gear Accent Core +R',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '10px'
	},

	"T7": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '10px',
		"rx": '849px',
		"gn": 'Tekken 7',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '10px'
	},

	"VF5": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '225px',		// left background x
		"rbx": '225px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player scoxre font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '90px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Virtua Fighter 5',
		"sbh": '42px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '2px'		// background y post (from top of screen)
	},

	"SC6": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '130px',		// left background x
		"rbx": '120px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '182px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Soul Calibur 6',
		"sbh": '42px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '3px'		// background y post (from top of screen)
	},

	"KOFXV": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '210px',		// left background x
		"rbx": '210px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'King of Fighters XV',
		"sbh": '42px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '0px'		// background y post (from top of screen)
	},

	"SAMSHO": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '180px',
		"rbx": '180px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '10px',
		"rx": '849px',
		"gn": 'Samurai Shodown',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '0px'
	},
    	"DNF": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '5px',
		"rx": '849px',
		"gn": 'DNF Duel',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '0px'
	},
    "SKLGRL": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '5px',
		"rx": '849px',
		"gn": 'Skullgirls',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '0px'
    },
    "UMVC3": {
		"p1y": '8px',
		"p2y": '8px',
		"pf": '37px',
		"pp": '3px',
        "pw": '535px',      // player name textbox width
		"p1x": '336px',
		"p2x": '1226px',
		"lbx": '220px',
		"rbx": '220px',
        "bgw": '620px',     // background width
		"p1i": '+60px',
		"p2i": '-60px',
		"p1a": 'center',
		"p2a": 'center',
		"psw": '48px',
		"psh": '45px',
		"psy": '6px',
		"psf": '37px',
		"rw": '200px',
		"rh": '45px',
		"ry": '5px',
		"rx": '849px',
		"gn": 'Skullgirls',
		"sbh": '47px',
		"bgh": '66px',
		"bgy": '0px'
    },
    "SF6": {
		"p1y": '6px',
		"p2y": '6px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '445px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '250px',		// left background x
		"rbx": '250px',     // right background x
        "bgw": '500px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '45px',
		"psh": '37px',		// player scorecard height
		"psy": '4px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '5px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Street Fighter 6',
		"sbh": '44px',		// scoreboard height
		"bgh": '55px',		// background height
		"bgy": '3px'		// background y post (from top of screen)
	},
    "MK1": {
		"p1y": '3px',
		"p2y": '3px',
		"pf": '10px',		//player name font
		"pp": '0px',		//plauer name padding
        "pw": '535px',      // player name textbox width
		"p1x": '200px',		// player 1 name (left)
		"p2x": '200px',		// player 2 name (left)
		"lbx": '210px',		// left background x
		"rbx": '210px',		// right background x
        "bgw": '620px',     // background width
		"p1i": '+60px',		// player 1 init
		"p2i": '-60px',		// player 2 init
		"p1a": 'center',	// player 1 text align
		"p2a": 'center',	// player 2 text align
		"psw": '43px',
		"psh": '35px',		// player scorecard height
		"psy": '1px',		// player scorecard y pos (from top)
		"psf": '30px',		// player score font size
		"rw": '200px',		// round card background width
		"rh": '45px',		// round card background height
		"ry": '0px',		// round card y pos (from top of card)
		"rx": '849px',		// round card x pos (maybe get rid of this)
		"gn": 'Dragonball FighterZ',
		"sbh": '40px',		// scoreboard height
		"bgh": '46px',		// background height
		"bgy": '0px'		// background y post (from top of screen)
	},
	
};

getCSS = function(game){
	for (var key in games){
		if(key == game.toUpperCase()){
			p1NameY = games[key].p1y;
			p2NameY = games[key].p2y;
			pNameF = games[key].pf;
			pNameP = games[key].pp;
            pNameW = games[key].pw;
			p1NameX = games[key].p1x;
			p1NameInit = games[key].p1i;
			p1NameAlign = games[key].p1a;
			p2NameX = games[key].p2x;
			p2NameInit = games[key].p2i;
			p2NameAlign = games[key].p2a;
			pScoreW = games[key].psw;
			pScoreH = games[key].psh;
			pScoreY = games[key].psy;
			pScoreF = games[key].psf;
			roundW = games[key].rw;
			roundH = games[key].rh;
			roundY = games[key].ry;
			roundX = games[key].rx;
			roundCenterW = games[key].rcw;
			roundCenterH = games[key].rch;
			gName = games[key].gn;
			sboardH = games[key].sbh;
			backgroundH = games[key].bgh;
            backgroundW = games[key].bgw;
			backgroundY = games[key].bgy;
			leftBackgroundX = games[key].lbx;
			rightBackgroundX = games[key].rbx;
		}
	}
}