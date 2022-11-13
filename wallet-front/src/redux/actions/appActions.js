import {GET_APP_DATA} from "./index";

export const getAppData = (data) => {
    return {
        type:GET_APP_DATA,
        payload:data
    }
}