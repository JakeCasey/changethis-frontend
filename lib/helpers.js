var getIframeScrollPosition = () => {
  var iframeScrollPosition = document
    .getElementById('iframe')
    .contentWindow.document.getElementById('iframeScrollPosition');

  if (iframeScrollPosition.getAttribute('y')) {
    scroll = iframeScrollPosition.getAttribute('y');
  } else {
    scroll = '0';
  }
  return scroll;
};

export { getIframeScrollPosition };
