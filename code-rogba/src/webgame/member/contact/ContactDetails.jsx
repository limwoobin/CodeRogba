import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };
    }

    handleToggle = () => {
        if(!this.state.isEdit){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }else{
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleEdit = () => {
        this.props.onEdit(this.state.name , this.state.phone);
    }

    handleKeyPress = (e) => {
        if(e.charCode === 13){
            this.handleToggle();
        }
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phon}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input 
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
            </div>
        );

        const view = this.state.isEdit ? edit : details;

        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.state.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => {console.error('onRemove not defined'); },
    onEdit: () => {console.error('onEdit not defined'); }
};

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

export default ContactDetails;