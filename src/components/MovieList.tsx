import react from 'react'
import '../styles/MovieList.css'
import movies from "../data/movies/movies.json"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const MovieList = () => {
 return ( 
            <div className="movie-list-container">
                <span className="title">Trending Now</span>
                <div className="movies">
                    <section id="section-1">
                        <a className="previous" href="#section-2"><ChevronLeftIcon className="flechita"/></a>
                        {movies.slice(0, 5).map((movie, index) => (<div className="movie" style={{backgroundImage: `url(${movie.image_src})`}}><h3 className="movie-title">MovieTitle</h3></div>))}
                        <a className="next" href="#section-2"><ChevronRightIcon className="flechita"/></a>
                    </section>
                    <section id="section-2">
                        <a className="previous" href="#section-1"><ChevronLeftIcon className="flechita"/></a>
                        {movies.slice(5, movies.length).map((movie, index) => (<div className="movie" style={{backgroundImage: `url(${movie.image_src})`}}><h3 className="movie-title">MovieTitle</h3></div>))}
                        <a className="next" href="#section-1"><ChevronRightIcon className="flechita"/></a>
                    </section>
                </div>
            </div>
    )
}

export default MovieList