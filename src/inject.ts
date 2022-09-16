import EventHandler = JQuery.EventHandler;

type EventHandlerContainer = {
	data: object | undefined,
	guid: number,
	handler: EventHandler<any>,
	namespace: string,
	needsContext: boolean | undefined,
	origType: string,
	selector: string | undefined,
	type: string
};

// @ts-ignore: _data is an internal data structure which is undocumented. https://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/
$._data(window, "events")
	?.keydown
	?.forEach((eventListener: EventHandlerContainer) => {
		$(window).off("keydown", eventListener.handler);
	}
);
