$.fn.openPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'openPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'openPieChart', new OpenPieChart(this, instanceOptions));
		}
	});
};
