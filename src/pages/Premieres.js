import {get} from "../utils/HttpClient"
import { useEffect, useState } from "react";
import { PremiereCards } from "../components/MovieCards/PremiereCards"
import styles from "../components/PageMovies/PageMovies.module.css"
import { Loading } from "../components/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export function Premieres ({ search }) {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    const [page, setPage] = useState(2);
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
        
        <InfiniteScroll  dataLength={movies.length} hasMore={hasMore} loader={<Loading></Loading>} next={()=> (setPage((prevPage) => prevPage +1))} className={styles.divContainer}>
            <ul className={styles.MoviesContainer}> 
                {movies.map((movie) => <PremiereCards key={movie.id} movie={movie}></PremiereCards>)}
            </ul>
        </InfiniteScroll>
    )
}