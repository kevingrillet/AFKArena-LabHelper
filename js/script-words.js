function switchWords() {
    let ic = document.querySelector("#Words"),
        bd = document.querySelector(".fa-book"),
        md = document.querySelector(".fa-mobile"),
        l = document.querySelector(".legend"),
        c = document.querySelector("#context-menu-floor");
    if (md.style.display === "none") {
        ic.setAttribute("title", "Switch to game names");
        bd.style.display = "none";
        md.style.display = "inline";


        if (document.querySelector("#ArcaneLabyrinth")) {
            l.querySelector(".black").parentElement.lastChild.nodeValue = " Wrizz";
            c.querySelector(".black").parentElement.lastChild.nodeValue = " Wrizz";
            l.querySelector(".red").parentElement.lastChild.nodeValue = " Red flag";
            c.querySelector(".red").parentElement.lastChild.nodeValue = " Red flag";
            l.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Brown Flag";
            c.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Brown Flag";
            l.querySelector(".pink").parentElement.lastChild.nodeValue = " Hero res";
            c.querySelector(".pink").parentElement.lastChild.nodeValue = " Hero res";
        } else if (document.querySelector("#DismalMaze")) {
            l.querySelector(".yellow").parentElement.lastChild.nodeValue = " Legendary Relic";
            c.querySelector(".yellow").parentElement.lastChild.nodeValue = " Legendary Relic";
            l.querySelector(".red").parentElement.lastChild.nodeValue = " Medium / Hard camp";
            c.querySelector(".red").parentElement.lastChild.nodeValue = " Medium / Hard camp";
            l.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Easy camp";
            c.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Easy camp";
            l.querySelector(".pink").parentElement.lastChild.nodeValue = " Hero res";
            c.querySelector(".pink").parentElement.lastChild.nodeValue = " Hero res";
        }
    }
    else {
        ic.setAttribute("title", "Switch to @Zeb names");
        bd.style.display = "inline";
        md.style.display = "none";

        if (document.querySelector("#ArcaneLabyrinth")) {
            l.querySelector(".black").parentElement.lastChild.nodeValue = " Cave of Treasures (Wrizz)";
            c.querySelector(".black").parentElement.lastChild.nodeValue = " Cave of Treasures (Wrizz)";
            l.querySelector(".red").parentElement.lastChild.nodeValue = " Praetorian Guard";
            c.querySelector(".red").parentElement.lastChild.nodeValue = " Praetorian Guard";
            l.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Guard";
            c.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Guard";
            l.querySelector(".pink").parentElement.lastChild.nodeValue = " Mystic";
            c.querySelector(".pink").parentElement.lastChild.nodeValue = " Mystic";
        } else if (document.querySelector("#DismalMaze")) {
            l.querySelector(".yellow").parentElement.lastChild.nodeValue = " Relic Guardian";
            c.querySelector(".yellow").parentElement.lastChild.nodeValue = " Relic Guardian";
            l.querySelector(".red").parentElement.lastChild.nodeValue = " Praetorian Guard";
            c.querySelector(".red").parentElement.lastChild.nodeValue = " Praetorian Guard";
            l.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Guard";
            c.querySelector(".lightbrown").parentElement.lastChild.nodeValue = " Guard";
            l.querySelector(".pink").parentElement.lastChild.nodeValue = " Mystic";
            c.querySelector(".pink").parentElement.lastChild.nodeValue = " Mystic";
        }
    }
}

window.addEventListener("load", function () {
    document.querySelector("#Words").onclick = switchWords;
});
