import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import '../css/Sign/Sign.css';

class SignUp extends Component {
    state = {
        date: new Date(),
        userBirth : '',
        calendarView : false,
    }

    _overlapChk = () => {
        //중복확인
    }

    onDateChange = (date) => {
       let year = date.getFullYear();
       let month = date.getMonth() + 1;
       let day = date.getDate();
       const formatDate = year + '-' + month + '-' + day;
       this.setState({
          userBirth : formatDate,
       })
    }

    _signUp = () => {
        console.log('submit');
    }

    render() {
        return (
            <div>
                <form onSubmit={this._signUp}>
                <div>
		        	<h1>회원가입</h1>
			    </div>
                <div>
                    <h2>Email</h2><input type="email" placeholder="email" id="userEmail"/>
                    <button>중복확인</button>
                </div>
                <div>
                    <h2>패스워드</h2><input type="password" placeholder="password" id="userPwd" />
                </div>    
                <div>
                    <h2>패스워드 확인</h2><input type="password" placeholder="password" id="userPwd2" />
                </div>
                <p id="pwdArea"></p>
                <div>
                    <h2>이름</h2><input type="text" placeholder="이름" id="userName" />
                </div>
                <div>
                    <h2>생년월일</h2>
                    <div>
                        {/* {this.state.userBirth} */}
                        <input type="text" id="userBirth" value={this.state.userBirth ? this.state.userBirth : ''} readOnly="readOnly"/>
                    </div>
                    <div className="calArea">
                        <div className="cal">
                        <div className="calendar">
                        <Calendar onChange={this.onDateChange} value={this.state.date} className="calendar"/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <button>회원가입</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

SignUp.defaultProps = {
    userBirth : '',
}

SignUp.propTypes = {
    userBirth : PropTypes.string.isRequired,
}

export default SignUp;