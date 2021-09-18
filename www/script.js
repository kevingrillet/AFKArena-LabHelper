const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("html");

var clicked;

const normalizePozition = (mouseX, mouseY) => {
    // ? compute what is the mouse position relative to the container element (scope)
    let {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();

    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    // ? check if the element will go out of bounds
    const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth > scope.clientWidth;

    const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight > scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    // ? normalize on X
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
    }

    // ? normalize on Y
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
    }

    return { normalizedX, normalizedY };
};

document.addEventListener("click", (e) => {
    // ? close the menu if the user clicks outside of it
    if (clicked != e.target && e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove("visible");
        clicked = null;
    }
});

function newClickHandeler(e) {
    e = e || window.event;
    switch (e.which) {
        case 1: // Left
        case 3: // Right
            e.preventDefault(); // Remove default Context Menu
            clicked = e.target;

            const { clientX: mouseX, clientY: mouseY } = e;

            const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

            contextMenu.classList.remove("visible");

            contextMenu.style.top = `${normalizedY}px`;
            contextMenu.style.left = `${normalizedX}px`;

            setTimeout(() => {
                contextMenu.classList.add("visible");
            });
            break;
        case 2: // Midle
            toogleUnknow(e.target);
            break;
    }
}

function toogleUnknow(e) {
    if (e.innerHTML == '?' ) {
        e.innerHTML = '';
    } else {
        e.innerHTML = '?';
    }
}

// Replace all clicks on span
document.querySelectorAll(':scope .floor span').forEach((e) => {
    e.onclick = newClickHandeler; // Left click
    e.onauxclick = newClickHandeler; // Midle click
    e.oncontextmenu = newClickHandeler; // Right click -> Context Menu
});

document.querySelectorAll('.item').forEach((e) => {
    e.onclick = function (e) {
        let curElt;
        if (e.target.tagName.toLowerCase() == "div") {
            curElt = e.target.firstElementChild;
        }else {
            curElt = e.target;
        }
        clicked.className = curElt.className;
        if (clicked.innerHTML == '?') {
            clicked.innerHTML = '';
        }
        contextMenu.classList.remove("visible");
        clicked = null;
    }
});
