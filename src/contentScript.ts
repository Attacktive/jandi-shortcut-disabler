const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("async", "true");
// @ts-ignore
script.setAttribute("src", chrome.runtime.getURL("inject.js"));

const head = (document.head || document.getElementsByTagName("head")[0] || document.documentElement);
head.appendChild(script);
