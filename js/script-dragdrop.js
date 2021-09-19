var dragged;

function swapElements(element1, element2) {
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element1.parentNode.replaceChild(clonedElement2, element1);
    element2.parentNode.replaceChild(clonedElement1, element2);
}

document.addEventListener('drag', function (event) {
}, false);

document.addEventListener('dragstart', function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', function (event) {
    event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function (event) {
    event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
    if (event.target.tagName.toLowerCase() == 'span'
        && event.target.parentElement.className == 'floor'
        && event.target != dragged) {

        event.target.style.opacity = .8;
        //event.target.style.background = 'LimeGreen';
    }
}, false);

document.addEventListener('dragleave', function (event) {
    if (event.target.tagName.toLowerCase() == 'span'
        && event.target.parentElement.className == 'floor'
        && event.target != dragged) {
        event.target.style.opacity = '';
    }
}, false);

document.addEventListener('drop', function (event) {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() == 'span'
        && event.target.parentElement.className == 'floor'
        && event.target != dragged) {
        dragged.style.opacity = '';
        event.target.style.opacity = '';
        swapElements(dragged, event.target);
    }
}, false);
