(function($) {
	$.fn.accordion = function() {
		this.on('click', '.accordion-control', function(e) {
			e.preventDefault(); // 阻止默认行为
			$(this).next('.accordion-content').not(':animated').slideToggle();
		});
		return this;
	};
}(jQuery));
