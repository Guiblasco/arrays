import askUser from "./askUser.js";

// Aquí tienes un ejemplo de cómo pedir un dato al usuario
// En la variable age se guardará el dato que el usuario introduzca
let songTitles: string[];
let positionSong: number;
// Sólo ten en cuenta que el dato que el usuario introduzca siempre será de tipo string
// Si necesitas que sea de otro tipo, tendrás que convertirlo

// Borra todo este código menos la línea 1
// y no borres el archivo askUser.ts, que es el que contiene la función askUser
console.log("Vamos a escribir 5 titulos de canciones\n");
songTitles = [];
for (let titles = 1; titles <= 5; titles++) {
  songTitles.push(askUser(`titulo ${titles}:`));
}
positionSong = Number(askUser("introduce una posición: npm"));

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
