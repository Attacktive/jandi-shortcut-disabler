const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("async", "true");
script.setAttribute("src", chrome.runtime.getURL("inject.js"));

document.head.appendChild(script);
