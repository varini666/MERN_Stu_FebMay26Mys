import { useState } from "react";
export default function GenreFilter() {
    const [genre,setGenre] = useState("All");
    function selectGenre(selectedGenre) {
        setGenre(selectGenre);
    }
    return(
        <section>
            <h3>Genre Filter</h3>
            <p>Selected Genre: {genre}</p>
            <button onClick={()=>selectGenre("Action")}>Action</button>
            <button onClick={()=>selectGenre("Comedy")}>Comedy</button>
            <button onClick={()=>selectGenre("Horror")}>Horror</button>
            <button onClick={()=>selectGenre("Sci-Fi")}>Action</button>
        </section>
    )
}