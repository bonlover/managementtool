import axios from "axios";
import {GET_ERRORS} from './types';

export const createProjectTask = (backlog_id, project_task, history) => async dispatch => {
    try {
        await axios.post(`/api/backlog/${backlog_id}`, project_task);
        history.push(`/project_board/${backlog_id}`);
        dispatch({
            type: GET_ERRORS,
            payload:{}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        });
    }
}