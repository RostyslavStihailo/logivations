import {ON_CLEAR, ON_PUSH} from "./actionsTypes";

export function onPushHandler(data){
    return{
        type:ON_PUSH,
        data
    }
}

export function clearHandler(list, time){
    return{
        type:ON_CLEAR,
        data: list
            .map(command =>
                command.split(' '))
            .filter(element => element[1] !== time)
            .map(command =>
                command.join(' '))
    }
}