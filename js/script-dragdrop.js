var dragged;

function swapElements(element1, element2) {
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element1.parentNode.replaceChild(clonedElement2, element1);
    element2.parentNode.replaceChild(clonedElement1, element2);
}

function pElt3(element) {
    return element.parentElement.parentElement.parentElement;
}

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (
        event.target !== dragged
        &&
        (
            (
                dragged.tagName.toLowerCase() === "span"
                && event.target.tagName.toLowerCase() === "span"
                && event.target.parentElement.className === "floor"
            )
            ||
            (
                dragged.tagName.toLowerCase() === "img"
                && event.target.tagName.toLowerCase() === "img"
                && pElt3(dragged).className === pElt3(event.target).className
            )
        )
    ) {
        event.target.style.opacity = 0.8;
    }
}, false);

document.addEventListener("dragleave", function (event) {
    if (
        event.target !== dragged
        &&
        (
            (
                dragged.tagName.toLowerCase() === "span"
                && event.target.tagName.toLowerCase() === "span"
                && event.target.parentElement.className === "floor"
            )
            ||
            (
                dragged.tagName.toLowerCase() === "img"
                && event.target.tagName.toLowerCase() === "img"
                && pElt3(dragged).className === pElt3(event.target).className
            )
        )
    ) {
        event.target.style.opacity = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (
        event.target !== dragged
        &&
        (
            (
                dragged.tagName.toLowerCase() === "span"
                && event.target.tagName.toLowerCase() === "span"
                && event.target.parentElement.className === "floor"
            )
            ||
            (
                dragged.tagName.toLowerCase() === "img"
                && event.target.tagName.toLowerCase() === "img"
                && pElt3(dragged).className === pElt3(event.target).className
            )
        )
    ) {
        dragged.style.opacity = "";
        event.target.style.opacity = "";
        swapElements(dragged, event.target);
    }
}, false);
