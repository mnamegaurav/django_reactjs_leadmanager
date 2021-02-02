import React from 'react';
import Form from './Form';
import Leads from './Leads';

const Dashboard = (props) => {
  return (
    <React.Fragment>
        <Form/>
        <Leads/>
    </React.Fragment>
  )
}

export default Dashboard;