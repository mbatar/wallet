import axios from 'axios';
import {updateDept} from "../actions/accountActions";

export const onUpdateDept = (id) => {
    return dispatch => {
        axios.put(`http://localhost:8000/api/depts/${id}`)
            .then(data=>dispatch(updateDept(data.data)))
    }
}