import askUser from "./askUser.js";

let songTitles: string[];
let positionSong: number;

console.log("Vamos a escribir 5 titulos de canciones\n");

songTitles = [];
for (let titles = 1; titles <= 5; titles++) {
  songTitles.push(askUser(`titulo ${titles}:`));
}
positionSong = Number(askUser("introduce una posición: "));

switch (positionSong) {
  case 1:
    console.log(`Titulo de la canción 1: ${songTitles[0]}`);
    break;
  case 2:
    console.log(`Titulo de la canción 2: ${songTitles[1]}`);
    break;
  case 3:
    console.log(`Titulo de la canción 3: ${songTitles[2]}`);
    break;
  case 4:
    console.log(`Titulo de la canción 4: ${songTitles[3]}`);
    break;
  case 5:
    console.log(`Titulo de la canción 5: ${songTitles[4]}`);
    break;
  default:
    console.log(`ERROR: La posición de la canción ${positionSong} no existe.`);
    break;
}
