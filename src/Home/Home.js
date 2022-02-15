import { Row, Container } from "react-bootstrap";
import MovieList from '../MovieList/MovieList'
import React, { useEffect, useState } from "react";

function Home() {

    const [movies, setMovies] = useState();
    const fetchData = async () => {

        try {

            const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=71e007863d8b364cd55359df4d5b9a45`)
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
                movie.caption = data.userCaption;
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