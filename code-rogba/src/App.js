import React, { Component } from 'react';
import IncHeader from './include/incHeader';

class App extends Component {
    render() {
        return (
            <div id="root">
                <div className="inc_header"><IncHeader /></div>
            </div>
        );
    }
}

export default App;