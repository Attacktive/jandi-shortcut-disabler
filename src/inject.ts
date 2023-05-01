import EventHandler = JQuery.EventHandler;

interface EventHandlerContainer {
	handler: EventHandler<Window>;
}

/*
 * `_data` is an internal function which is undocumented.
 * https://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/
 */
// @ts-ignore
$._data(window, "events")
	?.keydown
	?.forEach((eventListener: EventHandlerContainer) => {
		$(window).off("keydown", eventListener.handler);
	}
);
