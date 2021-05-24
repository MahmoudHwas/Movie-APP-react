import axios from "axios";
import { useEffect, useState, } from "react";
import Genres from "../../component/Genres";
import CustomPagination from "../../component/Pagination/CustomPagination";
import SingelContent from "../../component/SingelContent/SingelContent";
import useGenre from "../../hooks/useGenre";


const Movie = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);



    const fetchMovies = async () => {
    const  { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        setContent(data.results);
        setNumOfPages(data.total_pages);


    };
    
    useEffect(() => {   
        fetchMovies();
        }, [page, genreforURL]);

    return (
        <div>
            <span className="pageTitle">movie</span>
            <Genres
             type="movie"
             selectedGenres={selectedGenres}
             setSelectedGenres={setSelectedGenres}
             genres={genres}
             setGenres={setGenres}
             setPage={setPage}/>

            <div className="trending">{
                content && content.map((c) => ( <SingelContent key={c.id}
                 id={c.id}
                 poster={c.poster_path}
                  title={c.titel || c.name}
                   date={c.first_air_date || c.release_date}
                   media_type="movie"
                   vote_average={c.vote_average}/>)
                )}
            </div>
            {numOfPages > 1 && (
                   <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
         
        </div>
    )
}
export default Movie;