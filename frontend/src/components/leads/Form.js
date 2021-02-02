import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';


export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        this.props.addLead(lead);
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="card card-body my-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addLead })(Form);
