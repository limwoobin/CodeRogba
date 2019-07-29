import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import '../css/movie/movie.css';


class Movie extends Component {
    render() {
        const {title , poster , genres , synopsis} = this.props;
        return (
            <div className="Movie">
                <div className="Movie_Column">
                    <MoviePoster poster={poster} alt={title} />
                </div>
                <div className="Movie_Column">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                        {genres.map((genre , index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <p className="Movie_Synopsis">
                    <LinesEllipsis 
                            text={synopsis}
                            maxLine='3'
                            ellipsis=' ...'
                            trimRight
                            basedOn='letters'
                    />
                    </p>
                </div>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        const {poster , alt} = this.props;
        return(
            <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
        )
    }
}

class MovieGenre extends Component {
    render(){
        const {genre} = this.props;
        return (
            <span className="Movie_Genre">{genre}</span>
        )
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}

export default Movie;