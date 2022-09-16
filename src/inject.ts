// @ts-ignore
$._data(window, "events")
	?.keydown
	?.forEach((eventListener: object) => {
		// @ts-ignore
		$(window).off("keydown", eventListener.handler);
	}
);
