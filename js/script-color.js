const _STYLE_FILES = ['./css/style-colors.css', './css/style-colors-light.css']

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
    ic.setAttribute('title', 'Switch to night mode')
    sc.setAttribute('href', _STYLE_FILES[1])
    document.querySelector('.fa-sun').style.display = 'none'
    document.querySelector('.fa-moon').style.display = 'inline'
  } else {
    ic.setAttribute('title', 'Switch to day mode')
    sc.setAttribute('href', _STYLE_FILES[0])
    document.querySelector('.fa-sun').style.display = 'inline'
    document.querySelector('.fa-moon').style.display = 'none'
  }
}

window.addEventListener('load', function () {
  document.querySelector('#Mode').onclick = switchMode
})
