// This function imports cards
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Button from 'react-bootstrap/Button';

// This component is responsible for rendering a single movie item. It takes in two props: mymovie, which is an object containing the movie's details, and Reload, which is a function to refresh the movie list after a movie is deleted. The component displays the movie's poster, title, and year using a Bootstrap Card component. It also includes a delete button that triggers the handleDelete function when clicked.
export default function MovieItem(props){
const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movie/' + props.mymovie._id)
            .then(() => {
                props.Reload(); // Refresh the movie list after deletion
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    };
    return(
    <div>
     {/* Each one displays a different object uses a card to display them*/}

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.mymovie.poster} />
      <Card.Body>
        <Card.Title>{props.mymovie.title}</Card.Title>
        <Card.Text>
            {props.mymovie.year}
        </Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Card>
    </div>
    )
}