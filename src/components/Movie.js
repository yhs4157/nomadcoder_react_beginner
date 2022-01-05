import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    console.log("movie");
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie_img}/>
            <h2 className={styles.movie_title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
                <ul className={styles.movie_genres}>
                {genres && genres.map((gen) => (
                    <li key={gen}>{gen}</li>
                ))}
                </ul>
        </div>
    )
}

Movie.propTypes ={
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie; 