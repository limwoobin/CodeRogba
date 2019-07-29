import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/Movie'
import '../App.css';

class BoardList extends Component {

    state = {

    }

    componentDidUpdate = () => {
        const {vval} = this.props;
        console.log('BoardList:' + vval);
        if(vval === 1){
            this._getMovies();
        }
    }

    // shouldComponentUpdate = (nextProps , nextState) => {
    //     console.log('shouldComponentUpdate:' + nextProps.vval);
    //     const {vval} = nextProps;
    //         console.log('BoardList:' + vval);
    //         if(vval === 1){
    //             console.log('성공쿠');
    //             this._getMovies();
    //         }
    //     return true;    
    // }

    _getMovies = async () => {
        console.log('getMoives');
        const movies = await this._callMovieApi();
        this.setState({
            movies
        })
    }

    _callMovieApi = () => {
        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download count')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => {console.log(err)})
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            return <Movie 
                        key={movie.id}
                        title={movie.title_english}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        synopsis={movie.synopsis}
                    />
        })
        return movies;
    }

    render() {
        const {movies} = this.state;
        console.log('render:' + {movies});
        return (
                <div>
                    <h1>vval:{this.props.vval}</h1>
                    <div className={movies ? "App" : "App--loading"}>
                        {movies ? this._renderMovies() : 'Loading'}
                    </div>
                </div>
        );
    }
}

BoardList.defaultProps = {
    vval : 0,
}

BoardList.propTypes = {
    vval : PropTypes.number.isRequired,
}
export default BoardList;