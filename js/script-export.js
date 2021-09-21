document.querySelector("#btnExport").onclick = (e) => {
    /* Not working properly due to Clip-path
    html2canvas(document.querySelector("#LabPath")).then(canvas => {
        document.body.appendChild(canvas)
    });
    */

    let col = window.getComputedStyle(document.body).getPropertyValue("background-color");
    domtoimage.toBlob(document.querySelector("#LabPath"), { bgcolor: col })
        .then(function (blob) {
            saveAs(blob, e.target.name + ".png");
        });
};
