function solve(arr){
    let movies = [];
    arr.forEach(line => {
        let lines = line.split(' ');
        let addMovieIndex = lines.indexOf('addMovie');
        let directorIndex = lines.indexOf('directedBy');
        let dateIndex = lines.indexOf('onDate');
        if(addMovieIndex > -1){
            movies.push({name: lines.slice(addMovieIndex + 1, lines.length).join(' ')})
        }
        if(directorIndex > -1){
            let filmName = lines.slice(0, directorIndex).join(' ');
            let director = lines.slice(directorIndex + 1).join(' ');
            movies.forEach(movie => {
                if (movie.name == filmName){
                    movie.director = director;

                }
            })
        }
        if(dateIndex > -1){
            let filmName = lines.slice(0, dateIndex).join(' ');
            let date = lines.slice(dateIndex + 1).join(' ');
            movies.forEach(movie => {
                if (movie.name == filmName){
                    movie.date = date;

                }
            })
        }
    }) 
    movies.forEach(movie => {
        if(movie.name !== undefined && movie.director !== undefined && movie.date !== undefined){
            console.log(JSON.stringify(movie))
        }
    })
    
}
        // class Movie {
        //     constructor(name, date, director){
        //         this.name = name;
        //         this.date = date;
        //         this.director = director;
        //     }
        // };
            // if(line.includes('addMovie')){
            //     line.splice(line.indexOf('addMovie'), 1);
            //     let movie = new Movie(line.join(' '));
            //     movies.push(movie);
            // }
            // if(line.includes('directedBy')){
            //     let film = line.slice(0, line.indexOf('directedBy'));
            //     movies.forEach(addDirector)
            //     function addDirector(){
            //         if (film.join(' ') == movie[name]){
            //             director = director.slice(director.indexOf('directedBy') + 1, i.length);
            //             movie.director = director.join(' ');            
            //     }
                    
            //     }
            //     console.log(movies);
            // }
            // if(i.includes('onDate')){
                
            // }

//}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )