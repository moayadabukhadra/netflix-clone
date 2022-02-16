import Movie from "../Movie/Movie";


function MovieList(props) {  
  return(
<>
<Movie movies={props.movies}/>

</>

  )
    }
    

export default MovieList;