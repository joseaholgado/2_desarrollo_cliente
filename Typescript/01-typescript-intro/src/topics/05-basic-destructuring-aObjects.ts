export { };

console.log("*******************************");
console.log("05-basic-destructuring-aObjects");
console.log("*******************************");

interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
console.log("*******************");
console.log("Sin desestructurar");
console.log("********************");

console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);

console.log("*******************");
console.log("Desestructurando");
console.log("********************");

const{song,songDuration: duration}=audioPlayer;
console.log('Song: ', song);
console.log('Duration: ', duration);
console.log("-------------------");
const{audioVolume: volumen, songDuration: duracion, song: cancion}=audioPlayer;
console.log('CANCION: ', cancion);
console.log('DURACION: ', duracion);
console.log('VOLUMEN: ', volumen);

console.log('-------------TAREA 1: ------------');
console.log('Year (SIN desestructurración); ', audioPlayer.details.year);
const {year: anno}=audioPlayer.details;
console.log('Year (CON desestructurración); ', anno);

console.log('-------------TAREA 2: author ------------');
const{author: autor}=audioPlayer.details;
console.log('Author: (CON desestructuración): ', autor);

const author1 ='Varios';
// const {details:{author: oneAuthor1}} =audioPlayer;
// const{details: {autor: oneAuthor1}}=audioPlayer;

console.log('Author: (CON desestructuración): ', autor);