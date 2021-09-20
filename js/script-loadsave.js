function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(" ");
}

const newLineTiles = [1, 3, 6, 8, 11, 13, 16, 18, 21, 23, 24]

document.querySelector("#btnSave").onclick = (e) => {
    let output = "";
    document.querySelectorAll(".floor").forEach((f) => {
        output += " **" + f.firstElementChild.innerHTML + "**\n";
        let cpt = 0;
        f.querySelectorAll("span").forEach((s) => {
            if (s.innerHTML == "?") {
                output += "?";
            }
            switch (s.className) {
                case "yellow":
                    output += e.target.name == "ArcaneLabyrinth" ? "Boss" : "Relic Guardian";
                    break;
                case "black":
                    output += "Cave of Treasures (Wrizz)";
                    break;
                case "purple":
                    output += "Witch's Den";
                    break;
                case "red":
                    output += "Praetorian Guard";
                    break;
                case "lightbrown":
                    output += "Guard";
                    break;
                case "brown":
                    output += "The Roamer";
                    break;
                case "blue":
                    output += "Abandoned Wagon";
                    break;
                case "lightblue":
                    output += "Fountain of Vitality";
                    break;
                case "orange":
                    output += "Divine Fountain";
                    break;
                case "pink":
                    output += "Mystic";
                    break;
                case "white":
                    output += "Start";
                    break;
            }
            if (newLineTiles.includes(++cpt)) {
                output += "\n";
            } else {
                output += ", ";
            }
        });
        output += "\n";
    });
    document.querySelectorAll(":scope .constraints div").forEach((c) => {
        output += " **" + c.firstElementChild.innerHTML + "**\n";
        c.querySelectorAll("img").forEach((i) => {
            output += i.alt + "\n";
        });
        output += "\n";
    });
    let blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    saveAs(blob, e.target.name + ".txt");
}

document.querySelector("#btnLoad").onclick = function () {
    document.querySelector("#fileInput").click();
}

document.querySelector("#fileInput").onchange = function (file) {
    if (file.target.files[0]) {
        let floor = null;
        let curImage = 0;
        let curFloor = 0;
        let curFloorCell = 0;
        let curTile = null;
        let fr = new FileReader();
        fr.onload = function () {
            let lines = fr.result.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] == "") {
                    floor = null;
                } else if (!floor && lines[i].includes("Floor")) {
                    floor = document.querySelectorAll(".floor")[curFloor++];
                    curFloorCell = 0;
                } else if (floor) {
                    let elt = lines[i].split(", ");
                    for (let e = 0; e < elt.length; e++) {
                        curTile = floor.querySelectorAll("span")[curFloorCell++];
                        if (elt[e].charAt(0) == "?") {
                            curTile.innerHTML = "?";
                            elt[e].slice(1);
                        }
                        switch (elt[e]) {
                            case "Boss":
                            case "Relic Guardian":
                                curTile.className = "yellow";
                                break;
                            case "Cave of Treasures (Wrizz)":
                                curTile.className = "black";
                                break;
                            case "Witch's Den":
                                curTile.className = "purple";
                                break;
                            case "Praetorian Guard":
                                curTile.className = "red";
                                break;
                            case "Guard":
                                curTile.className = "lightbrown";
                                break;
                            case "The Roamer":
                            case "Wandering Trader":
                                curTile.className = "brown";
                                break;
                            case "Abandoned Wagon":
                                curTile.className = "blue";
                                break;
                            case "Fountain of Vitality":
                                curTile.className = "lightblue";
                                break;
                            case "Divine Fountain":
                                curTile.className = "orange";
                                break;
                            case "Mystic":
                                curTile.className = "pink";
                                break;
                            case "Start":
                                curTile.className = "white";
                                break;
                        }
                    }
                } else if (lines[i].includes("Dismal Luck")) {
                    i++;
                    curImage = 0;
                    for (i; i < lines.length; i++) {
                        if (lines[i] == "") { break; }
                        curTile = document.querySelectorAll(":scope .dismalLuck img")[curImage++];
                        curTile.src = "./images/dismalMaze/" + lines[i] + ".png";
                        curTile.alt = lines[i];
                        curTile.title = capitalizeTheFirstLetterOfEachWord(lines[i].replace("_", " "));
                    }

                } else if (lines[i].includes("Allowed Factions")) {
                    i++;
                    curImage = 0;
                    for (i; i < lines.length; i++) {
                        if (lines[i] == "") { break; }
                        curTile = document.querySelectorAll(":scope .allowedFactions img")[curImage++];
                        curTile.src = "./images/factions/" + lines[i] + ".png";
                        curTile.alt = lines[i];
                    }
                }
            }
            document.querySelector("#fileInput").value = "";
        }
        fr.readAsText(file.target.files[0]);
    }
}
