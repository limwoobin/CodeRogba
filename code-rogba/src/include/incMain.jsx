import React, { Component } from 'react';
import BoardList from '../board/BoardList';
import MainPage from '../main/MainPage';
import SignUp from '../Sign/SignUp';
import SignIn from '../Sign/SignIn';
import GuGuDan  from '../webgame/GuGuDan/GuGuDan';
import RSP from '../webgame/RSP/RSP';
import Lotto from '../webgame/Lotto/Lotto';
import Tictacto from '../webgame/Tictacto/Tictacto';
import MineSearch from '../webgame/Minesweeper/MineSearch';
import Contact from '../webgame/member/contact/Contact';

class incMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            page : 0,
        }
    }

    _renderMain = () => {
        const {page} = this.props;
        console.log('main:' + page);
        switch(page){
            case 'MovieList' :  return <BoardList  page={page} />; 
            case 'signUp' : return <SignUp />;
            case 'signIn' : return <SignIn />;
            case 'GuGuDan': return <GuGuDan />;
            case 'RSP' : return <RSP />;
            case 'Lotto' : return <Lotto />;
            case 'Tictacto' : return <Tictacto />;
            case 'Minesweeper' : return <MineSearch />;
            case 'Contact' : return <Contact /> 
            default : return <MainPage />;
        }
    }

    render() {
        return (
            <div>
                {this._renderMain()}
            </div>
        );
    }
}

export default incMain;