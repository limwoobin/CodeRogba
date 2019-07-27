import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardList extends Component {


    render() {
        console.log('boardList:' + this.props.vval);


        //const {row} = this.props;
        return (
                // <tr>
                //     <td>{row.brdno}</td>
                //     <td>{row.brdtitle}</td>
                //     <td>{row.brdwriter}</td>
                //     <td>{row.brdwriter}</td>
                // </tr>
                <div>
                    vval : {this.props.vval}
                    owner : {this.props.owner}
                </div>

        );
    }
}


BoardList.defaultProps = {
    owner : 'woobeen',
    vval : 0,
}

BoardList.propTypes = {
    vval : PropTypes.number.isRequired,
}
export default BoardList;