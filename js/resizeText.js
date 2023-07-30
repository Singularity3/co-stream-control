const resizeText = (wrapper) => {
	wrapper.each(function(i, wrapper) {
		while(wrapper.scrollWidth > wrapper.offsetWidth || wrapper.scrollHeight > wrapper.offsetHeight) {
			var newFontSize = (parseFloat($(wrapper).css('font-size').slice(0, -2)) * 0.95) + 'px';
			$(wrapper).css('font-size', newFontSize);
		}
	});
}