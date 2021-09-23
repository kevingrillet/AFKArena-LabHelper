const _STYLE_FILES = ['./css/style-colors-dark.css', './css/style-colors-light.css', './css/style-colors-zeb.css']

/*
const _SVG_GRAPHICS = ["path", "circle"]
function setSVGColors() {
    let col = window.getComputedStyle(document.body).getPropertyValue("color");
    console.log(document.querySelectorAll(":scope .tags object"))
    document.querySelectorAll(":scope .tags object").forEach((e) => {
        _SVG_GRAPHICS.forEach((g) => {
            e.contentDocument?.querySelectorAll(g).forEach((se) => {
                se.removeAttribute("style");
                se.setAttribute("fill", col);
            });
        });
    });
} */

function switchMode () {
  const sc = document.querySelector('#styleColor')
  const ic = document.querySelector('#Mode')
  if (sc.getAttribute('href') === _STYLE_FILES[0]) {
    ic.setAttribute('title', 'Switch to @Zeb mode')
    sc.setAttribute('href', _STYLE_FILES[1])
    ic.querySelector('.fa-book').style.display = 'inline'
    ic.querySelector('.fa-sun').style.display = 'none'
  } else if (sc.getAttribute('href') === _STYLE_FILES[1]) {
    ic.setAttribute('title', 'Switch to night mode')
    sc.setAttribute('href', _STYLE_FILES[2])
    ic.querySelector('.fa-moon').style.display = 'inline'
    ic.querySelector('.fa-book').style.display = 'none'
  } else {
    ic.setAttribute('title', 'Switch to day mode')
    sc.setAttribute('href', _STYLE_FILES[0])
    ic.querySelector('.fa-sun').style.display = 'inline'
    ic.querySelector('.fa-moon').style.display = 'none'
  }
}

window.addEventListener('load', function () {
  document.querySelector('#Mode').onclick = switchMode
})
