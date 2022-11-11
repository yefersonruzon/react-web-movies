import {get} from "../utils/HttpClient"
import { useEffect, useState } from "react";
import styles from "../components/PageMovies/PageMovies.module.css"
import { Loading } from "../components/loading/Loading";
import { WeeklyCards } from "../components/MovieCards/WeeklyCards";

export function Weekly ({ search }) {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    const [hasMore, setHasMore] = useState(true);
   
    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/trending/movie/day?query=" + search 
        : "/trending/movie/day?" ;
        get(searchURl).then((data) =>{
            setMovies(prevMovies => prevMovies.concat(data.results) );
            setHasMore(data.page < data.total_pages)
            setIsLoading(false)
        });
    }, [search]);
    
    return(
        
        <div  dataLength={movies.length} hasMore={hasMore} loader={<Loading></Loading>} className={styles.divContainer}>
            <ul className={styles.MoviesContainer}> 
                {movies.map((movie) => <WeeklyCards key={movie.id} movie={movie}></WeeklyCards>)}
            </ul>
        </div>
    )
}