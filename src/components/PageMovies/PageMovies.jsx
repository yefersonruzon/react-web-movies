import {get} from "../../utils/HttpClient"
import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCards/MovieCards"
import styles from "./PageMovies.module.css"
import { Loading } from "../loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export function PageMovies ({ search }) {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
   
 
    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/movie?query=" + search +  "&page=" + page
        : "/discover/movie?page=" + page;
        get(searchURl).then((data) =>{
            setMovies(prevMovies => prevMovies.concat(data.results) );
            setHasMore(data.page < data.total_pages)
            setIsLoading(false)
        });
    }, [search, page]);
    
    
    return(
        
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} loader={<Loading></Loading>} next={()=> (setPage((prevPage) => prevPage +1))} className={styles.divContainer}>
            <ul className={styles.MoviesContainer}> 
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </ul>
        </InfiniteScroll>
    )
}