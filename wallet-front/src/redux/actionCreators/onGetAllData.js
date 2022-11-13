import axios from 'axios';
import {getAppData} from "../actions/appActions";
export const onGetAllData = () => {
return dispatch => {axios.get('http://localhost:8000/api/test')
    .then(data=>{
        console.log(data);
        dispatch(getAppData(data.data))
    })}
}