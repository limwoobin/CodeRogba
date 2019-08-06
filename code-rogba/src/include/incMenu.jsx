import React, { Component } from 'react';
import IncMain from './incMain';

class incMenu extends Component {
    
    state = {
        page : 0,
    }

    componentWillReceiveProps = (prevState) => {
        console.log('menu componentWillReceiveProps:' + prevState.page);
        this.setState({
            page : prevState.page,
        })
    }

    _renderList = (page) => {
        this.setState({
            page : page,
        })
    }

    render() {
        return (
            <div>
                <div className="inc_menu">
                    <button onClick={() => this._renderList('MovieList')}>MovieList</button><br/>
                    <button onClick={() => this._renderList('GuGuDan')}>GuGuDan</button><br/>
                    <button onClick={() => this._renderList('RSP')}>RSP</button><br/>
                    <button onClick={() => this._renderList('Lotto')}>Lotto</button><br/>
                    <button onClick={() => this._renderList('Minesweeper')}>Minesweeper</button><br/>
                    <button onClick={() => this._renderList('Tictacto')}>Tictacto</button><br/>
                    <button onClick={() => this._renderList('Contact')}>Contact</button><br/>
                </div>
                <div className="inc_main"><IncMain page={this.state.page} /></div>
            </div>
        );
    }
}

export default incMenu; 