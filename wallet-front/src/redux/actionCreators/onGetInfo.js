import axios from 'axios';

export const onGetInfo = (id) => {
    return dispatch => {
        axios.get(`http://localhost:8000/api/showInfo/${id}`)
            .then(data => console.log(data));
    }
}