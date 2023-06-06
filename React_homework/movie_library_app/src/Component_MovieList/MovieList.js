import './MovieList.css'


const MovieList = () => {
    const movies = [
        {id: 1, name: "Drive", dateofproduction: "2011"},
        {id: 2, name: "The Dark Knight", dateofproduction: "2008"},
        {id: 3, name: "Gladiator", dateofproduction: "2000"},
        {id: 4, name: "LOTR return of the king", dateofproduction: "2003"},
        {id: 5, name: "The Bourne Identity", dateofproduction: "2002"}
    ]

    const message = `Hello, this is a simple React component that shows a list of movies`;
    let currentTime = new Date().toDateString();
    

    return (
        <div>
            <div className="header">
            <h2>{message}</h2>
            <h3>The current date is: {currentTime}</h3>
            </div>
            <div className='moviesContainer'>
            <ul className='moviesList'>
                <h4>Movies List:</h4>
                {
                    movies.map( movie => {
                        return(
                            <li key={movie.id}>Name: {movie.name}, Date of production: {movie.dateofproduction}</li>
                        )
                    })
                }
            </ul>
            </div>
 

        </div>
    )
}

export default MovieList