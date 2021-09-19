function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

const newLineTiles = [1, 3, 6, 8, 11, 13, 16, 18, 21, 23, 24]

document.querySelector('#btnSave').onclick = function (e) {
    let output = '';
    document.querySelectorAll('.floor').forEach((f) => {
        output += ' **' + f.firstElementChild.innerHTML + '**\n';
        let cpt = 0;
        f.querySelectorAll('span').forEach((s) => {
            if (s.innerHTML == '?') {
                output += '?';
            }
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
                    output += 'The Roamer';
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
        output += '\n';
    });
    document.querySelectorAll(':scope .constraints div').forEach((c) => {
        output += ' **' + c.firstElementChild.innerHTML + '**\n';
        c.querySelectorAll('img').forEach((i) => {
            output += i.alt + '\n';
        });
        output += '\n';
    });
    let blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, e.target.name + '.txt');
}

document.querySelector('#btnLoad').onclick = function () {
    document.querySelector('#fileInput').click();
}

document.querySelector('#fileInput').onchange = function (file) {
    if (file.target.files[0]) {
        let floor = null;
        let curImage = 0;
        let curFloor = 0;
        let curFloorCell = 0;
        let fr = new FileReader();
        fr.onload = function () {
            let lines = fr.result.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] == '') {
                    floor = null;
                } else if (!floor && lines[i].includes('Floor')) {
                    floor = document.querySelectorAll('.floor')[curFloor++];
                    curFloorCell = 0;
                } else if (floor) {
                    let elt = lines[i].split(', ');
                    for (let e = 0; e < elt.length; e++) {
                        if (elt[e].charAt(0) == '?') {
                            floor.querySelectorAll('span')[curFloorCell++].innerHTML = '?';
                            elt[e].slice(1);
                        }
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
                            case 'The Roamer':
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
                } else if (lines[i].includes('Dismal Luck')) {
                    i++;
                    curImage = 0;
                    for (i; i < lines.length; i++) {
                        if (lines[i] == '') { break; }
                        document.querySelectorAll(':scope .dismalLuck img')[curImage].src = './images/dismalMaze/' + lines[i] + '.png';
                        document.querySelectorAll(':scope .dismalLuck img')[curImage].alt = lines[i];
                        document.querySelectorAll(':scope .dismalLuck img')[curImage++].title = capitalizeTheFirstLetterOfEachWord(lines[i].replace('_', ' '));
                    }

                } else if (lines[i].includes('Allowed Factions')) {
                    i++;
                    curImage = 0;
                    for (i; i < lines.length; i++) {
                        if (lines[i] == '') { break; }
                        document.querySelectorAll(':scope .allowedFactions img')[curImage].src = './images/factions/' + lines[i] + '.png';
                        document.querySelectorAll(':scope .allowedFactions img')[curImage++].alt = lines[i];
                    }
                }
            }
            document.querySelector('#fileInput').value = '';
        }
        fr.readAsText(file.target.files[0]);
    }
}
