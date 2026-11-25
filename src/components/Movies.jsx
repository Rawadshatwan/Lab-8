// This component is responsible for rendering a list of movies. It takes in two props: myMovies, which is an array of movie objects, and ReloadData, which is a function to refresh the movie list after a movie is deleted. The component maps through the myMovies array and renders a MovieItem component for each movie, passing the movie object and the ReloadData function as props to each MovieItem.
import MovieItem from "./MovieItem";
// This function imports the MovieItem component and maps through the myMovies array to display each movie using the MovieItem component. It also passes the ReloadData function as a prop to allow for refreshing the movie list after deletion.
function Movies(props) {
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}
// This component is responsible for rendering a list of movies. It takes in two props: myMovies, which is an array of movie objects, and ReloadData, which is a function to refresh the movie list after a movie is deleted. The component maps through the myMovies array and renders a MovieItem component for each movie, passing the movie object and the ReloadData function as props to each MovieItem.
export default Movies;