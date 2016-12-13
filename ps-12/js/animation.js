(function() {
	$('.chart').waypoint(function(){
		$(this).easyPieChart({
		barColor: 'rgba(66, 68, 69, 1)',
		trackColor: 'rgba(215, 219, 221, 0.6)',
		lineWidth: 10,
		animate: 1000,
		size: 100,
		onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
	});
})();