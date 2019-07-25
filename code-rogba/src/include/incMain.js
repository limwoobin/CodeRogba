import React, { Component } from 'react';
import BoardList from '../board/BoardList';

class incMain extends Component {
    render() {
        return (
            <div>
                vval 은 {this.props.vval}
                <BoardList vval={this.props.vval} />
            </div>
        );
    }
}

export default incMain;