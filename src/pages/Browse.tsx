import react from 'react'
import '../styles/Browse.css'
import Button from '../components/Button'
import MovieList from '../components/MovieList'

const Browse = () => {
    return <div className="browse-container">
        <div className="thumbnail-section">
            <div className="thumbnail" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 15%, transparent 60%), url(assets/images/popcorn.jpg) ` }}></div>
            <div className="description-section">
                <span className="description">Esta es la descripcion de la pelicula de los pochoclos! Esperamos que disfrutes la pelicula</span>
                <div className="actions">
                    <Button primary label="Play"/>
                    <Button secondary label="More Info"/>
                </div>
            </div>
        </div>

        <MovieList />
    </div>
}

export default Browse