const platform = chrome ?? browser;

const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("async", "true");
script.setAttribute("src", platform.runtime.getURL("js/inject.js"));

document.head.appendChild(script);
