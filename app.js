"Use strict";


let numberOfFilms = +prompt("Скільки фільмів ви глянули", " ");
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
console.log(personalMovieD);
