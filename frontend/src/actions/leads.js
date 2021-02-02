import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then((response) => {
            dispatch({
                type: GET_LEADS,
                payload: response.data
            });
        })
        .catch((error) => console.log(error));
}

// DELETE_LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
        .then((response) => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch((error) => console.log(error));
}

// ADD_LEAD
export const addLead = (lead) => dispatch => {
    axios.post(`/api/leads/`, lead)
        .then((response) => {
            dispatch({
                type: ADD_LEAD,
                payload: response.data
            });
        })
        .catch((error) => console.log(error));
}