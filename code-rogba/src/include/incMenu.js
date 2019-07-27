import React, { Component } from 'react';
import BoardList from '../board/BoardList';
import IncMain from './incMain';

const boardList = (key) => {
    console.log('key:' + key);
}



class incMenu extends Component {
    state = {
        vval : 0,
    }

    jsonText = { 
        boards: [ 
            { 
              brdno: 1, 
              brdwriter: 'Lee SunSin',
              brdtitle: 'If you intend to live then you die',
              brddate: new Date()
            }, 
            { 
              brdno: 2,
              brdwriter: 'So SiNo', 
              brdtitle: 'Founder for two countries', 
              brddate: new Date() 
            },
            { 
                brdno: 3,
                brdwriter: '니미씨발', 
                brdtitle: '존나게안되네', 
                brddate: new Date() 
            }  
        ] 
    }


    _renderList = (vval) => {
        console.log("renderList:" + vval);
        this.setState({
            vval: vval,
        })
        return <IncMain vval={vval} />;
    }

    componentDidMount = () => {
        console.log('update:' + this.state.vval);
    }

    jogga = (vval) => {
        this.setState({
            vval : 2,
        });
        console.log('vval:' + vval);
    }

    render() {
        return (
            <div>
                <button onClick={() => this._renderList(1)}>MENU1</button><br/>
                <button onClick={() => boardList(2)}>MENU2</button><br/>
                <button onClick={() => boardList(3)}>MENU3</button><br/>
                {/* <button onClick={() => this.jogga(3)}>MENU3</button><br/> */}
            </div>
        );
    }
}

export default incMenu; 