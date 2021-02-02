import React from 'react';
import Form from './Form';
import Leads from './Leads';

const Dashboard = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Form/>
                </div>
                <div className="col-12 col-md-8">
                    <Leads/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;