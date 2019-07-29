import React, { Component } from 'react';
import AppLogo from '../img/include/drogba_logo.png';
import Style from '../css/include/include.css';
import IncMenu from './incMenu';

class incHeader extends Component {
    render() {
        return (
            <div className="headerMain" style={Style}>
                <div className="headerLeft">
                    <img src={AppLogo} alt="AppLogo" className="AppLogo"/>
                </div>
                <div className="headerRight">
                    Drogba's Web Site
                    <a href="https://www.naver.com">네이버 </a>
                    <a href="https://www.daum.net">다음 </a>
                    <a href="https://www.google.com">구글 </a>
                </div>

                <div className="inc_sub"><IncMenu /></div>
            </div>
        );
    }
}

export default incHeader;