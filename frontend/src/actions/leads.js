import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then((response) => {
            dispatch({
                type: GET_LEADS,
                payload: response.data
            });
        })
        .catch((error) => dispatch(
            returnErrors(
                error.response.data, 
                error.response.status
                )
            )
        );
}

// DELETE_LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
        .then((response) => {
            dispatch(createMessage({
                deleteLead: "Lead deleted"
            }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch((error) => {
            const errors = {
                msg: error.response.data,
                status: error.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}

// ADD_LEAD
export const addLead = (lead) => dispatch => {
    axios.post(`/api/leads/`, lead)
        .then((response) => {
            dispatch(createMessage({
                addLead: "Lead Added"
            }));
            dispatch({
                type: ADD_LEAD,
                payload: response.data
            });
        })
        .catch((error) => dispatch(
            returnErrors(
                error.response.data, 
                error.response.status
                )
            )
        );
}