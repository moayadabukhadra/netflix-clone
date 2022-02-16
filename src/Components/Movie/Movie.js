import { Card, CardGroup, Button } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
function Movie(props){
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
  return (
    <>
        <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
            {
                props.movies.map(movie => {
                    return <div key={movie.id}>
                        <Card key={movie.id}  style={{width:550}}>
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} style={{width:500}} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview ? movie.overview : "No text"}
                                </Card.Text>
                                <Card.Text>
                                        {movie.caption ? movie.caption : "No Caption Added"}
                                    </Card.Text>
                            <Card.Footer>
                            <Button variant="primary" onClick={() => { setMovie(movie); setShowModal(true) }} >Show Modal</Button>
                            </Card.Footer>
                              
                               
                            </Card.Body>
                        </Card>
                    </div>
                })
            }
        </CardGroup>
        {showModal && <ModalMovie show={showModal} movie={movie} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
    </>
)
        }
        export default Movie