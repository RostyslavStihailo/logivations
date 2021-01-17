import {combineReducers} from "redux";
import moneyReduser from "./moneyReduser";

export default combineReducers({
    money: moneyReduser
})