import axios from 'axios';
import {addCredit} from "../actions/accountActions";

export const onCreateCredit = (credit) => {
    return dispatch => {
        return axios.post('http://localhost:8000/api/credits',{
            account_id:credit.account_id,
            total:credit.total,
            description:credit.description
        })
            .then(data=>{
                dispatch(addCredit(data.data))
            })
    }
}

