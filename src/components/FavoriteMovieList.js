import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const FavoriteMovieList = (props) => {
    // const [favorites, setFavorites] = useState([]);

    const { favorites } = props
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link key={movie.id} className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);

// export default FavoriteMovieList;