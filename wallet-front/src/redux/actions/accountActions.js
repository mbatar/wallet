import {ADD_CREDIT, ADD_DEPT, CREATE_ACCOUNT, DELETE_ACCOUNT, UPDATE_CREDIT, UPDATE_DEPT} from "./index";

export const createAccount = (data) => {
    let newData = {...data,credits:[],depts:[]};
    return {
        type:CREATE_ACCOUNT,
        payload:newData
    }
}

export const deleteAccount = (data) => {
    console.log(data)
    return {
        type:DELETE_ACCOUNT,
        payload:data.id
    }
}

export const addCredit = (data) => {
    console.log(data)
    return {
        type:ADD_CREDIT,
        payload:{
            account_id:data.account_id,
            data:data
        }
    }
}

export const addDept = (data) => {
    return {
        type:ADD_DEPT,
        payload:{
            account_id:data.account_id,
            data:data
        }
    }
}

export const updateDept = (id,data) => {
    return {
        type:UPDATE_DEPT,
        payload:{
            id:id,
            payload:data
        }
    }
}

export const updateCredit = (account_id,data) => {
    return {
        type:UPDATE_CREDIT,
        payload:{
            account_id:account_id,
            data:data
        }
    }
}

