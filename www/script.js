function toogleUnknow(e) {
    console.log(e.innerHTML)
    if (e.innerHTML == '?' ) {
        e.innerHTML = '';
        console.log('remove ?')
    } else {
        e.innerHTML = '?';
        console.log('add ?')
    }
}

function newClickHandeler(e) {
    e = e || window.event;
    e.preventDefault(); // Remove the default Context menu
    console.log(e.which + ' ' + e.type);
    console.log(e.target);

    switch (e.which) {
        case 1: // Left
            break;
        case 2: // Midle
            toogleUnknow(e.target);
            break;
        case 3: // Right
            break;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('span').forEach((e)=>{
        e.onclick = newClickHandeler; // Left click
        e.onauxclick = newClickHandeler; // Midle click
        e.oncontextmenu = newClickHandeler; // Right click -> Context Menu
    });
});

// Drag & Drop!

function swapElements(element1, element2) {
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element1.parentNode.replaceChild(clonedElement2, element1);
    element2.parentNode.replaceChild(clonedElement1, element2);
}

var dragged;
document.addEventListener("drag", function (event) {
}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.tagName.toLowerCase() == "span" && event.target != dragged) {
        event.target.style.background = "LimeGreen";
    }
}, false);

document.addEventListener("dragleave", function (event) {
    if (event.target.tagName.toLowerCase() == "span" && event.target != dragged) {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() == "span" && event.target != dragged) {
        dragged.style.opacity = "";
        event.target.style.background = "";
        swapElements(dragged, event.target);
    }
}, false);
