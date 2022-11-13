import axios from 'axios';
import {createAccount} from "../actions/accountActions";

export const onSubmitData = (account) => {
    return dispatch => {
            return axios.post('http://localhost:8000/api/accounts', {
            name: account.name,
            person_name: account.person_name,
            tel: account.tel,
            address: account.address
        })
            .then(data =>{
                dispatch(createAccount(data.data))
            })
    }
}
