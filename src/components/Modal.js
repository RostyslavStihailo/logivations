import React from 'react'
import mod from './modal.module.css'

export default function Modal(props){
    const {isAdd, isList, isClear, isTotal, sortedList} = props.data;
    console.log(props)
    if(isAdd)
        return (
            <div>add</div>
        )
    if(isClear)
        return (
            <div>clear</div>
        )
    if(isList)
        return (
            <div>list</div>
        )
    if(isTotal)
        return (
            <div>total</div>
        )
    return(
        <div className={mod.mod}>
            <h3>Available command</h3>
            <ul>
                <li>
                    <h6>add</h6>
                </li>
                <li>
                    <h6>clear</h6>
                </li>
                <li>
                    <h6>list</h6>
                </li>
                <li>
                    <h6>total</h6>
                </li>
            </ul>
        </div>
    )
}