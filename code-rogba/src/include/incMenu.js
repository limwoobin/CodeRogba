import React, { Component } from 'react';
import IncMain from './incMain';

class incMenu extends Component {
    
    state = {
        vval : 0,
    }

    _renderList = (vval) => {
        this.setState({
            vval : vval,
        })
    }


    render() {
        return (
            <div>
                <div className="inc_menu">
                    <button onClick={() => this._renderList(1)}>MENU1</button><br/>
                    <button onClick={() => this._renderList(2)}>MENU2</button><br/>
                    <button onClick={() => this._renderList(3)}>MENU3</button><br/>
                </div>
                <div className="inc_main"><IncMain vval={this.state.vval}/></div>
            </div>
        );
    }
}

export default incMenu; 