import {useParams} from "react-router-dom";
import {useEffect} from 'react'; 

function Detail() {
    const {id} = useParams();
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json); 
    };
    console.log(`${id}`);

    useEffect(() => {
        getMovies(); 
    },[]);

    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail; 