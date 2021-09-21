const _STYLE_FILES = ["./css/style-colors.css", "./css/style-colors-light.css"];
const _LAMP_SVG = ["./images/logos/svg/lamp.svg", "./images/logos/svg/lamp_on.svg"]

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
}*/

function switchMode() {
    let sc = document.querySelector("#styleColor");
    let ic = document.querySelector("#Mode");
    if (sc.getAttribute("href") == _STYLE_FILES[0]) {
        ic.setAttribute("title", "Switch To night mode");
        ic.setAttribute("src", _LAMP_SVG[1])
        sc.setAttribute("href", _STYLE_FILES[1]);
    }
    else {
        ic.setAttribute("title", "Switch to day mode");
        ic.setAttribute("src", _LAMP_SVG[0])
        sc.setAttribute("href", _STYLE_FILES[0]);
    }
}

window.addEventListener("load", function () {
    document.querySelector("#Mode").onclick = switchMode;
});
