import {ON_CLEAR, ON_PUSH} from "../actions/actionsTypes";

const initialState = {
    operationList:[]
}

export default function moneyReduser(state = initialState, action){
    switch (action.type){
        case ON_PUSH: return {
            ...state, operationList: [...state.operationList, action.data]
        }
        case ON_CLEAR: return {
            ...state, operationList: action.data
        }
        default: return state
    }
}