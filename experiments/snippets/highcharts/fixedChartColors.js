var chartObj = arguments[0],
	s = chartObj && chartObj.series,
	$ = skuid.$,
	ind = 0; //Default to the first color in the index

if (chartObj && s) {
	$.each(s, function (i, s) {
		switch (s.id) {
			case "Won (SUM)":
			case "Won":
				ind = 0;
				break;
			case "Lost (SUM)":
			case "Lost":
				ind = 1;
				break;
			case "Overdue (SUM)":
			case "Overdue":
				ind = 2;
				break;
			case "Open (SUM)":
			case "Open":
				ind = 3;
				break;
			default:
				console.warn("Couldn't find color entry for serie " + s.id);
				break;
		}
		// update series index number and color index with ind variable.
		$.extend(true, chartObj.series[i], {
			index: ind,
			_colorIndex: ind
		});
	});
} else console.error("Could not find Chart or Series.");
