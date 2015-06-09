'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.indexOf(':\/\/cdnjs.cloudflare.com\/') >= 0 ) {
      var url = details.url.replace(':\/\/cdnjs.cloudflare.com\/', ':\/\/mirror-cdnjs.b0.upaiyun.com\/');

      return {redirectUrl: url};
     } else {
      return {};
    }
  },

  {
    urls: ["<all_urls>"]
  },

  ['blocking']
);
