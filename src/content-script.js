var yaml = require('js-yaml');

var element = null;

document.addEventListener("contextmenu", e => {
  element = e.target;
}, true);

function findCodeBlock(element) {
  if (!element) {
    return null;
  } else if(element.tagName === 'BODY' || element.tagName === 'HTML') {
    return null;
  } else if (element.tagName === 'PRE' || element.tagName === 'CODE') {
    return element;
  } else {
    return findCodeBlock(element.parentNode);
  }
}

chrome.runtime.onMessage.addListener((e, sender, cb) => {
  if(e.type == "toggle") {
    var codeElement = findCodeBlock(element);
    if(!codeElement) {
      return;
    }
    var text = codeElement.textContent;
    try {
      var json = JSON.parse(text);
      try {
        var result = yaml.safeDump(json);
        codeElement.textContent = result;
      } catch (e) {
        console.log(e);
      }
    } catch(e) {
      var maybeYaml = text;
      try {
        var result = yaml.safeLoad(maybeYaml);
        codeElement.textContent = JSON.stringify(result, null, 2);
      } catch(e) {
      }
    }
    element = null;
  }
});
