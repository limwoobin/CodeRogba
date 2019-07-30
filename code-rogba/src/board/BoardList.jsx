import React, { Component } from 'react';
import Movie from '../movie/Movie'
import '../App.css';
import LoadingBar from '../img/loading.gif';
import Style from '../css/common.css';

class BoardList extends Component {

    state = {

    }

    componentDidMount = () => {
        console.log('componentDidMount:' + this.props.page);
        const {page} = this.props;
        if(page === 'MovieList'){
            this._getMovies();
        }
    }

    // componentWillReceiveProps = (prevState) => {
    //     console.log('prevState.vval:' + this.props.vval);
    //     const {vval} = prevState;
    //     console.log('prevState.vval:' + vval);
    //     if(vval === 1){
    //         this._getMovies();
    //     }
    // }


    _getMovies = async () => {
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
        return (
                <div>
                    <div className={movies ? "App" : "App--loading"}>
                    {movies ? this._renderMovies() : <img src={LoadingBar} alt="LoadingBar" className="LoadingBar" style={Style} />}
                        {/* {movies ? this._renderMovies() : 'Movie Loading...'} */}
                    </div>
                </div>
        );
    }
}

BoardList.defaultProps = {
    page : 0,
}

export default BoardList;