import PropTypes from "prop-types" 
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    console.log("movie");
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <Link to={`/movie/${id}`}>{title}</Link>
            <p>{summary}</p>
                <ul>
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