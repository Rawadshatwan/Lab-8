// src/components/Read.jsx
// This component fetches movie data from the backend and displays it using the Movies component
import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./Movies";

// This component fetches movie data from the backend and displays it using the Movies component
function Read() {
    const [data, setData] = useState([]);

    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };
    // This useEffect hook runs once when the component mounts and calls the Reload function to fetch the movie data from the backend
    useEffect(() => {
        Reload();
    }, []);
// This component fetches movie data from the backend and displays it using the Movies component
    return (
        <div>
            <h2>Movie List</h2>
            <Movies myMovies={data} ReloadData={Reload} />
        </div>
    );
}

export default Read;