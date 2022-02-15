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
                props.movies.results.map(movie => {
                    return <div key={movie.id}>
                        <Card key={movie.id} >
                            <Card.Img variant="top" src={movie.poster_path} />
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