import axios from 'axios';
import {updateCredit} from "../actions/accountActions";

export const onUpdateCredit  = (id,data) => {

    return dispatch => {
        axios.put(`http://localhost:8000/api/credits/${id}`,{
            total:data
        })
            .then(data=>{
                console.log(data)
                dispatch(updateCredit(data.data.account_id,data.data.total))
            })
    }
}