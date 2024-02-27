type EventHandler = JQuery.EventHandler<Window>;

interface JQueryExtension extends JQueryStatic {
	_data(element: Window | Document, key: string): any;
}

const jQueryExtension = ($ as JQueryExtension);

// https://blog.jquery.com/2011/11/08/building-a-slimmer-jquery/
const keydownEventsOnWindow = jQueryExtension._data(window, "events")?.keydown;
if (keydownEventsOnWindow) {
	keydownEventsOnWindow.forEach(({ handler }: { handler: EventHandler }) => {
		console.debug(`About to remove keydown event listener: ${handler}`);
		$(window).off("keydown", handler);
	})
} else {
	console.debug("Seems like they have removed the evil keydown event listeners at all. 😺");
}

const keydownEventsOnDocument = jQueryExtension._data(document, "events")?.keydown;
if (keydownEventsOnDocument) {
	console.debug("There's some keydown event listener(s) registered on the document which is OK for now:");

	keydownEventsOnDocument.forEach(({ handler }: { handler: EventHandler }, index: number) => console.debug(`#${index + 1}`, handler));
}
