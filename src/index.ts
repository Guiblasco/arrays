import askUser from "./askUser.js";

let songTitles: string[];

let positionSong: number;

songTitles = ["el bejote", "la papaya", "5º sinfonia"];

positionSong = parseInt(askUser("introduce una posicion:  "));

if (songTitles[positionSong - 1]) {
  console.log(`el titulo es: ${songTitles[positionSong - 1]}`);
} else {
  console.log(`Error, ¡posicion incorrecta!`);
}
