import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        userEmail : '',
        userPwd : '',
    }

    _Login = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>로그인</h1>
                </div>
                <div>
                    Email <input type="email" placeholder="email" id="userEmail" />
                </div>
                <div>    
                    Password <input type="password" placeholder="password" id="userPwd" />
                </div>
                <div>
                    <button onClick={() => this._Login()}>Login</button>
                </div>
            </div>
        );
    }
}

export default SignIn;