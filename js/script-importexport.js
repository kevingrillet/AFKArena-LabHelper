const newLineTiles = [1, 3, 6, 8, 11, 13, 16, 18, 21, 23, 24]

document.querySelector('#btnSave').onclick = function () {
    let output = "";
    document.querySelectorAll('.floor').forEach((f) => {
        output += " **" + f.firstElementChild.innerHTML + "**\n";
        let cpt = 0;
        f.querySelectorAll('span').forEach((s) => {
            switch (s.className) {
                case 'yellow':
                    output += 'Boss';
                    break;
                case 'black':
                    output += 'Cave of Treasures (Wrizz)';
                    break;
                case 'red':
                    output += 'Praetorian Guard';
                    break;
                case 'lightbrown':
                    output += 'Guard';
                    break;
                case 'brown':
                    output += 'Wandering Trader';
                    break;
                case 'blue':
                    output += 'Abandoned Wagon';
                    break;
                case 'lightblue':
                    output += 'Fountain of Vitality';
                    break;
                case 'pink':
                    output += 'Mystic';
                    break;
                case 'white':
                    output += 'Start';
                    break;
            }
            if (newLineTiles.includes(++cpt)) {
                output += '\n';
            } else {
                output += ', ';
            }
        });
        output += "\n";
    });
    let blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "arcane-labyrinth.txt");
}

document.querySelector('#btnLoad').onclick = function () {
    document.querySelector('#fileInput').click();
}

document.querySelector('#fileInput').onchange = function (file) {
    if (file.target.files[0]) {
        let floor = null;
        let curFloor = 0;
        let curFloorCell = 0;
        let fr = new FileReader();
        fr.onload = function () {
            let lines = fr.result.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] == "") {
                    floor = null;
                } else if (!floor) {
                    floor = document.querySelectorAll('.floor')[curFloor++];
                    curFloorCell = 0;
                } else {
                    let elt = lines[i].split(', ');
                    for (let e = 0; e < elt.length; e++) {
                        switch (elt[e]) {
                            case 'Boss':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'yellow';
                                break;
                            case 'Cave of Treasures (Wrizz)':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'black';
                                break;
                            case 'Praetorian Guard':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'red';
                                break;
                            case 'Guard':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'lightbrown';
                                break;
                            case 'Wandering Trader':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'brown';
                                break;
                            case 'Abandoned Wagon':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'blue';
                                break;
                            case 'Fountain of Vitality':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'lightblue';
                                break;
                            case 'Mystic':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'pink';
                                break;
                            case 'Start':
                                floor.querySelectorAll('span')[curFloorCell++].className = 'white';
                                break;
                        }
                    }
                }
            }
            document.querySelector('#fileInput').value = '';
        }
        fr.readAsText(file.target.files[0]);
    }
}
