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
    if (element.children.length) {
      return null;
    } else {
      return element;
    }
  } else {
    return findCodeBlock(element.parent);
  }
}

chrome.runtime.onMessage.addListener((e, sender, cb) => {
  if(e.type == "toggle") {
    var codeElement = findCodeBlock(element);
    if(!codeElement) {
      alert('Sorry, could not find any valid code block.');
      return;
    }
    var text = codeElement.textContent;
    var result = 'YAML';
    codeElement.textContent = result;
    element = null;
  }
});
