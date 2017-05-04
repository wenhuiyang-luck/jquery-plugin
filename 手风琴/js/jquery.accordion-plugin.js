(function($) {
	$.fn.accordion = function(speed) {
		this.on('click', '.accordion-control', function(e) {
			e.preventDefault(); // 阻止默认行为
			$(this).next('.accordion-content').not(':animated').slideToggle(speed);
		});
		return this;
	};
}(jQuery));
