import React, { Component } from 'react';
import BoardList from '../board/BoardList';
import PropTypes from 'prop-types';

class incMain extends Component {

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
    
    componentDidMount(){
        console.log('업데이트되나?');
    }
    
    render() {
        console.log('incMain:' + this.props.vval);
        //const {boards} = this.jsonText;
        return (
            <div>
                {/* <table border="1">
                    <tbody>
                    <tr>
                        <td width="50">No</td>
                        <td width="300">writer</td>
                        <td width="100">title</td>
                        <td width="100">date</td>
                    </tr>
                {
                    boards.map(row => 
                        (<BoardList key={row.brdno} row={row} />)
                    )
                }
                    </tbody>
                </table> */}

                {/* <BoardList /> */}
                vval: {this.props.vval}
            </div>
        );
    }
}

incMain.propTypes = {
    vval: PropTypes.number.isRequired
}

export default incMain;