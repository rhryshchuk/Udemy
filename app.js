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
if (personalMovieD.count < 10) {
    console.log('мало фільмів');
} else if (personalMovieD.count >= 10 && personalMovieD.count <= 30 ) {
    console.log('нормально фільмів');
} else if (personalMovieD.count >= 30) {
    console.log('very good');
} else {
    console.log('error');
}
console.log(personalMovieD);
 