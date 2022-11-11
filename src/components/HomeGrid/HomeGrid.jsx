import {get} from "../../utils/HttpClient"
import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCards/MovieCards"
import styles from "./HomeGrid.module.css"
import { Loading } from "../loading/Loading";
import { useQuery } from "../../hooks/useQuey";

export function HomeGrid () {
    const [movies, setMovies] = useState([]);
    // const [page, setPage] = useState(2);
    // const [hasMore, setHasMore] = useState(true);

    const [isLoading, setIsLoading] = useState(true);   
    
    
    const query = useQuery();
    const search = query.get("search"); 
    
    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(searchURl).then((data) =>{
            setMovies(data.results);
            setIsLoading(false)
        });
         
    }, [search]);

    movies.concat()
    if (isLoading){
        return <Loading></Loading>;
    }
    
    return(
        
        <div className={styles.divContainer}>
            <h3 className={styles.title}>Discover</h3>
            <p className={styles.SubTitle}>There will always be more to enjoy!</p>
            <ul className={styles.MoviesContainer}> 
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </ul>
        </div>
    )
}