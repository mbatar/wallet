import axios from 'axios';
import {addDept} from "../actions/accountActions";

export const onCreateDept = (dept) => {
    return dispatch => {
        return axios.post('http://localhost:8000/api/depts',{
            account_id:dept.account_id,
            total:dept.total,
            description:dept.description
        })
            .then(data=>{
                dispatch(addDept(data.data))
            })
    }
}