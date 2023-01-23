// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let arrayDir = moviesArray.map(function (movie) {
        return movie.director;
    })
    return arrayDir;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    /*  let counterMOvies = 0
     if (moviesArray.lenght === 0) return counterMOvies++; */

    let filterMovies = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie
        }
    }
    )
    return filterMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    let totalScore = moviesArray.reduce(function (accumulator, currentVal) {
        if (!currentVal.score) return accumulator;
        else { return accumulator + currentVal.score }
    }, 0)

    let average = totalScore / moviesArray.length

    let rounded = Number(average.toFixed(2));
    return rounded
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let drama = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArray = Array.from(moviesArray)
    let sortedMovies = newArray.sort(
        (a, b) => {
            if (a.year == b.year) return a.title.localeCompare(b.title);
            else if (a.year < b.year) return a.year - b.year;
        })
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let newArray = Array.from(moviesArray)

    let alphaMovies = newArray.sort((a,b) =>{
        a.title.localeCompare(b.title)
    });

    let shotArray = alphaMovies.slice(0, 19);

    let arrayTitle = []
    for(let i=0; i<shotArray.length; i++){
        let pelicula = shotArray[i].title 
        arrayTitle.push(pelicula)
    }
    return arrayTitle  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
