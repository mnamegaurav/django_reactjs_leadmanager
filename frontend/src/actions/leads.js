import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';
import { tokenConfig } from './auth';


// GET_LEADS
export const getLeads = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState))
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
export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}`, tokenConfig(getState))
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
export const addLead = (lead) => (dispatch, getState) => {
    axios.post(`/api/leads/`, lead, tokenConfig(getState))
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