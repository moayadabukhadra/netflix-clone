import { Row, Container } from "react-bootstrap";
import MovieList from '../MovieList/MovieList'
import React, { useEffect, useState } from "react";

function Home() {

    const [movies, setMovies] = useState();
    const fetchData = async () => {

        try {

            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            console.log(response);

            const data = await response.json();
          
            console.log(data);
            setMovies(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    const updateCaptions = (data, id) => {
   
        let updatedMovies = movies.map(movie => {
            if (movie.id === id) {
                movie.comment = data.userCaption;
                return movie;
            }
            else return movie
        })
        setMovies(updatedMovies);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Movie List</h1>
            <main>
                {movies && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies={movies} updateCaptions={updateCaptions}  />
                           
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

    export default Home;