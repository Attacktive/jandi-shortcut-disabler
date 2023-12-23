import EventHandler = JQuery.EventHandler;

/*
 * `_data` is an internal function which is undocumented.
 * https://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/
 */
// @ts-ignore
const keydownEventsOnWindow = $._data(window, "events")?.keydown;
if (keydownEventsOnWindow) {
	keydownEventsOnWindow.forEach(({ handler }: { handler: EventHandler<Window> }) => {
		console.debug(`About to remove keydown event listener: ${handler}`);
		$(window).off("keydown", handler);
	})
} else {
	console.debug("Seems like they have removed the evil keydown event listeners at all. 😺");
}

// @ts-ignore
const keydownEventsOnDocument = $._data(document, "events")?.keydown;
if (keydownEventsOnDocument) {
	console.debug("There's some keydown event listener(s) registered on the document which is OK for now:");

	keydownEventsOnDocument.forEach(({ handler }: { handler: EventHandler<Window> }, index: number) => {
		console.debug(`#${index + 1}`, handler);
	});
}
