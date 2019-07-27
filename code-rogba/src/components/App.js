import React, { Component } from 'react';
import IncHeader from '../include/incHeader';
import IncMenu from '../include/incMenu';
import IncMain from '../include/incMain';
import '../css/include/include.css';

class App extends Component {
    render() {
        return (
            <div id="root">
                <div id="inc_header"><IncHeader /></div>
                <div id="inc_menu"><IncMenu /></div>
                <div id="inc_main"><IncMain /></div>
                {/* <div className="inc_footer"><IncFooter /></div> */}
            </div>
        );
    }
}

export default App;