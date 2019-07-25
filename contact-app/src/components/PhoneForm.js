import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef();

    state = {
        name : '',
        phone : '',
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSumbit = (e) => {
        e.preventDefault(); 
        // 페이지가 리로딩되는것을 방지(원래 해야할 작업을 안하는것)
        
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input 
                    name='name'
                    placeholder='이름'
                    onChange={this.handleChange}
                    value={this.state.name} 
                    ref={this.input}
                />
                <input 
                    name='phone'
                    placeholder='전화번호' 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;