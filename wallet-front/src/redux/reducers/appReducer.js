import {ADD_CREDIT, ADD_DEPT, CREATE_ACCOUNT, DELETE_ACCOUNT, GET_APP_DATA, UPDATE_CREDIT} from "../actions";

const initialState = {
    accounts:[],
}
export const appReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_APP_DATA:
            return {
                ...state,
                accounts: action.payload.accounts
            };
        case CREATE_ACCOUNT:
            return {
                ...state,
                accounts:[...state.accounts,action.payload]
            };

        case DELETE_ACCOUNT:

            return {
                ...state,
                accounts:state.accounts.filter(item=>{
                    return item.id !== action.payload
                })
            };

        case ADD_CREDIT:
            return {
                ...state,
                accounts:state.accounts.map(e=>{
                    if(e.id === action.payload.account_id){
                        return {
                            ...e,totalcredit:e.totalcredit+action.payload.data.total,balance:e.balance+action.payload.data.total,credits:[...e.credits,action.payload.data]

                        }
                    }else{
                        return e
                    }
                })
            };
        case ADD_DEPT:
            return {
                ...state,
                accounts:state.accounts.map(e=>{
                    if (e.id === action.payload.account_id){
                        return {
                            ...e,totaldept:e.totaldept+action.payload.data.total,balance:e.balance-action.payload.data.total,depts:[...e.depts,action.payload.data]
                        }
                    }else{
                        return e
                    }
                })
            };
        case UPDATE_CREDIT:

            return {
                ...state,
                accounts:state.accounts.map(e=>{
                    if(e.id===action.payload.account_id){
                        return {
                            ...e,totalcredit:action.payload.data
                        }
                    }else{
                        return e
                    }
                })
            }

        default:
            return state

    }
};

