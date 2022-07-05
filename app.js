"Use strict";


let numberOfFilms;
 
function start() {
    numberOfFilms = +prompt("Скільки фільмів ви глянули", " ");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ви глянули", " ");
    }
}

start();
let personalMovieD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 let a = prompt("Один з осанніх фільмів", " "),
     b = prompt("Оцінка фільму", " "),
     c = prompt("Один з осанніх фільмів", " "),
     d = prompt("Оцінка фільму", " ");
 personalMovieD.movies[a] = b;
personalMovieD.movies[c] = d;
 

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
     let a = prompt("Один з осанніх фільмів", " "),
        b = prompt("Оцінка фільму", " ");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieD.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    } 
}
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieD.count < 10) {
    console.log('мало фільмів');
} else if (personalMovieD.count >= 10 && personalMovieD.count <= 30 ) {
    console.log('нормально фільмів');
} else if (personalMovieD.count >= 30) {
    console.log('very good');
} else {
    console.log('error');
}
}
detectPersonalLevel();
console.log(personalMovieD);

function ShowMyDB() {
    if (personalMovieD.privat == false) {
        console.log(personalMovieD);
    } 
}
ShowMyDB();
function writeYourGeres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieD.genres[i - 1] = genre;
    }
}
writeYourGeres();
