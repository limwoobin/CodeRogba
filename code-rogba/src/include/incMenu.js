import React, { Component } from 'react';
import BoardList from '../board/BoardList';
import IncMain from './incMain';

const boardList = (key) => {
    console.log('key:' + key);
}



class incMenu extends Component {
    state = {
        vval : this.props,
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



    jogga = (vval) => {
        this.setState({
            vval : vval,
        });
        console.log('vval:' + vval);
    }

    render() {
        return (
            <div>
                <button onClick={() => boardList(1)}>MENU1</button><br/>
                <button onClick={() => boardList(2)}>MENU2</button><br/>
                <button onClick={() => boardList(3)}>MENU2</button><br/>
                {/* <button onClick={() => this.jogga(3)}>MENU3</button><br/> */}
            </div>
        );
    }
}

export default incMenu; 