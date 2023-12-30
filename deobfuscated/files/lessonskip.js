alert(
  'Skip has been turned on. To skip a lesson, press the forward button next to the progress bar.'
)
const replaceScript =
  'https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js'
if (document.scripts[15].src == replaceScript) {
  alert(
    'lesson has already been loaded, refresh the page and run before going into your lesson'
  )
} else {
  fetch('https://raw.githubusercontent.com/J6co0b/ir/main/app-12.chunk.js')
    .then((_0x4f5773) => _0x4f5773.text())
    .then((_0x5e1ae5) => eval(_0x5e1ae5))
}
window.yes = function () {
  p1(prompt('score?'))
}
setInterval(function () {
  try {
    if (
      html5Iframe.contentWindow.document.getElementById('nav-forward') !=
      undefined
    ) {
      html5Iframe.contentWindow.document.getElementById(
        'nav-forward'
      ).disabled = false
      html5Iframe.contentWindow.document.getElementById('nav-forward').onclick =
        yes
    }
  } catch (_0x18ea8a) {}
}, 10)
