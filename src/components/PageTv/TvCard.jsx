import { NavLink } from "react-router-dom"
import styles from "../MovieCards/MovieCards.module.css"

export function TvCard({movie}) {
    const imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : null;
    return(
        <li className={styles.MovieCard}>
            <NavLink to={"/shows/" + movie.id}>
                <div>
                    <img className={styles.MovieImg} src={imgUrl} alt={movie.name} />
                    <i className={`bx bx-play-circle ${styles.iLX}`}></i>
                    <p className={styles.tittle}>{movie.name}</p>
                    <p className={styles.vote}><i className='bx bxs-star'></i>{movie.vote_average}</p>
                </div>
            </NavLink>
        </li>
        
    );
}