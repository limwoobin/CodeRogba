import React, { Component } from 'react';

class BoardList extends Component {

    render() {
        //const {key , owner} = this.props;
        return (
            <div>
                씨발 키값이 {this.props.vval} 인걸 {this.props.owner}이는 어떻게 알았지
            </div>
        );
    }
}


BoardList.defaultProps = {
    owner : 'woobeen',
    vval : '0',
}
export default BoardList;