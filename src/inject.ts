import EventHandler = JQuery.EventHandler;

interface EventHandlerContainer {
	data: object | undefined;
	guid: number;
	handler: EventHandler<Window>;
	namespace: string;
	needsContext: boolean | undefined;
	origType: string;
	selector: string | undefined;
	type: string;
}

/*
 * `_data` is an internal function which is undocumented.
 * https://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/
 */
($ as any)._data(window, "events")
	?.keydown
	?.forEach((eventListener: EventHandlerContainer) => {
		$(window).off("keydown", eventListener.handler);
	}
);
