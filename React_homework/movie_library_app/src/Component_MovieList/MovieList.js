import './MovieList.css'


const MovieList = () => {
    const movies = [
        {id: 1, name: "Drive", dateofproduction: "2011"},
        {id: 2, name: "The Dark Knight", dateofproduction: "2008"},
        {id: 3, name: "Gladiator", dateofproduction: "2000"},
        {id: 4, name: "LOTR Return Of The King", dateofproduction: "2003"},
        {id: 5, name: "The Bourne Identity", dateofproduction: "2002"},
        {id: 6, name: "Taken", dateofproduction: "2008"},
        {id: 7, name: "2001 A Space Odyssey", dateofproduction: "1968"},
        {id: 8, name: "The Shining", dateofproduction: "1980"},
        {id: 9, name: "The Machinist", dateofproduction: "2004"},
        {id: 10, name: "LOTR The Two Towers", dateofproduction: "2002"}
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