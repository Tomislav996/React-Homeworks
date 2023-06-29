
import { useContext } from "react";

import { MoviesContext } from "../../Context/MovieContext";



export const MovieCardControlls = ({id}) => {
    const { handleRemoveMovie} = useContext(MoviesContext);

    return (
        <div>
            <button onClick={() => handleRemoveMovie(id)}>Remove Movie</button>
        </div>
    )
}