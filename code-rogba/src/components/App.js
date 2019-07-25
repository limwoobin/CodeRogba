import React, { Component } from 'react';
import IncHeader from '../include/incHeader';
import IncMenu from '../include/incMenu';
import IncMain from '../include/incMain';
//import IncFooter from '../include/incFooter';
import IncCss from '../css/include/include.css';
//import asd from '../reducers/ui';

class App extends Component {
    render() {
        return (
            <div id="root" style={IncCss}>
                <div id="inc_header"><IncHeader /></div>
                <div id="inc_menu"><IncMenu /></div>
                <div id="inc_main"><IncMain /></div>
                {/* <div className="inc_footer"><IncFooter /></div> */}
            </div>
        );
    }
}

export default App;