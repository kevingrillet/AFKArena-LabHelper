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
