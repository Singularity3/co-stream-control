const changeName = async (wrapper, oldName, newName) => {
	if ($('#'+oldName).text() != newName) {
		TweenMax.to(wrapper,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$('#'+oldName).html(newName);
			TweenMax.to(wrapper,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeNameResize = async (wrapper, oldName, newName, fontSize) => {
	if ($('#'+oldName).text() != newName) {
		TweenMax.to(wrapper,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$(wrapper).css('font-size', fontSize);
			$('#'+oldName).html(newName);
			setTimeout(() => {
				resizeText(wrapper);
			},10);
			TweenMax.to(wrapper,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeNameTeamResize = async (wrapper, oldName, oldTeam, newName, newTeam, fontSize) => {
	if ($('#'+oldName).text() != newName || $('#'+oldTeam).text() != newTeam) {
		TweenMax.to(wrapper,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$(wrapper).css('font-size', fontSize);
			$('#'+oldName).html(newName);
			$('#'+oldTeam).html(newTeam);
			setTimeout(() => {
				resizeText(wrapper);
			},10);
			TweenMax.to(wrapper,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeNameTeam = async (wrapper, oldName, oldTeam, newName, newTeam) => {
	if ($('#'+oldName).text() != newName || $('#'+oldTeam).text() != newTeam) {
		TweenMax.to(wrapper,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$('#'+oldName).html(newName);
			$('#'+oldTeam).html(newTeam);
			TweenMax.to(wrapper,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeScore = async (oldScore, newScore) => {
	if ($('#'+oldScore).text() != newScore) {
		TweenMax.to('#'+oldScore,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$('#'+oldScore).html(newScore);
			TweenMax.to('#'+oldScore,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeField = async (object, value) => {
	if ($('#'+object).text() != value) {
		TweenMax.to('#'+object,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$('#'+object).html(value);
			TweenMax.to('#'+object,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeFieldResize = async (wrapper, object, value, fontSize) => {
	if ($('#'+object).text() != value) {
		TweenMax.to('#'+object,.3,{css:{opacity: 0},ease:Quad.easeOut,delay:0,onComplete:() => {
			$(wrapper).css('font-size', fontSize);
			$('#'+object).html(value);
			setTimeout(() => {
				resizeText(wrapper);
			},10);
			TweenMax.to('#'+object,.3,{css:{opacity: 1},ease:Quad.easeOut,delay:.2});
		}});
	}
}

const changeImage = async (wrapper, object, holder, value, path) => {
	if ($('#'+holder).text() != value) {
		TweenMax.to('#'+wrapper,.3,{css:{opacity: 0},delay:0,onComplete:() => {
			$('#'+object).attr('src', path);
			$('#'+holder).html(value);
			TweenMax.to('#'+wrapper,.3,{css:{opacity: 1},delay:.2});
		}});
	}
}

const changeNameNoFade = async (wrapper, oldName, newName) => {
	if ($('#'+oldName).text() != newName) {
		$('#'+oldName).html(newName);
	}
}

const changeNameResizeNoFade = async (wrapper, oldName, newName, fontSize) => {
	if ($('#'+oldName).text() != newName) {
		$(wrapper).css('font-size', fontSize);
		$('#'+oldName).html(newName);
		setTimeout(() => {
			resizeText(wrapper);
		},10);
	}
}

const changeNameTeamResizeNoFade = async (wrapper, oldName, oldTeam, newName, newTeam, fontSize) => {
	if ($('#'+oldName).text() != newName || $('#'+oldTeam).text() != newTeam) {
		$(wrapper).css('font-size', fontSize);
		$('#'+oldName).html(newName);
		$('#'+oldTeam).html(newTeam);
		setTimeout(() => {
			resizeText(wrapper);
		},10);
	}
}

const changeNameTeamNoFade = async (wrapper, oldName, oldTeam, newName, newTeam) => {
	if ($('#'+oldName).text() != newName || $('#'+oldTeam).text() != newTeam) {
		$('#'+oldName).html(newName);
		$('#'+oldTeam).html(newTeam);
	}
}

const changeScoreNoFade = async (oldScore, newScore) => {
	if ($('#'+oldScore).text() != newScore) {
		$('#'+oldScore).html(newScore);
	}
}

const changeFieldNoFade = async (object, value) => {
	if ($('#'+object).text() != value) {
		$('#'+object).html(value);
	}
}

const changeFieldResizeNoFade = async (wrapper, object, value, fontSize) => {
	if ($('#'+object).text() != value) {
		$(wrapper).css('font-size', fontSize);
		$('#'+object).html(value);
		setTimeout(() => {
			resizeText(wrapper);
		},10);
	}
}

const changeImageNoFade = async (wrapper, object, holder, value, path) => {
	if ($('#'+holder).text() != value) {
		$('#'+object).attr('src', path);
		$('#'+holder).html(value);
	}
}