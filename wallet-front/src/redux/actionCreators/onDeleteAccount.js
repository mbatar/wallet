import axios from 'axios'
import {deleteAccount} from "../actions/accountActions";
export const onDeleteAccount = (id) => {
    return dispatch => {
        return axios.delete(`http://localhost:8000/api/accounts/${id}`)
            .then(data=>{
                dispatch(deleteAccount(data.data))
            })
    }
}