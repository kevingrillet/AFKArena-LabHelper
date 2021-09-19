document.querySelector('#btnExport').onclick = function (e) {
    /* Not working properly due to Clip-path
    html2canvas(document.querySelector('#LabPath')).then(canvas => {
        document.body.appendChild(canvas)
    });
    */

    domtoimage.toBlob(document.querySelector('#LabPath'), { bgcolor: '#2e2b33'})
        .then(function (blob) {
            saveAs(blob, e.target.name+'.png');
        });
}
