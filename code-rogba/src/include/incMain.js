import React, { Component } from 'react';
import BoardList from '../board/BoardList';
import PropTypes from 'prop-types';

class incMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            vval : 0,
        }
    }

    componentDidUpdate = () => {
        console.log('Main componentDidUpdate' + this.props.vval);
    }

    _renderMain = () => {
        return <BoardList 
                    vval={this.props.vval}
                />;
    }

    render() {
        return (
            <div>
                {this._renderMain()}
            </div>
        );
    }
}

incMain.propTypes = {
    vval: PropTypes.number.isRequired
}

export default incMain;