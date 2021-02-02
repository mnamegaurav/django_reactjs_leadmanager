import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getLeads();
    }

    render() {
        return (
            <div className="mt-4 card card-body">
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.leads.map((lead, index) => (
                                <tr key={lead.id}>
                                    <td>{index+1}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.message}</td>
                                    <td>
                                        <button 
                                            onClick={this.props.deleteLead.bind(this, lead.id)}
                                            className="btn btn-danger btn-sm"
                                            >DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})


export default connect(
        mapStateToProps, { getLeads, deleteLead }
    )(Leads);
