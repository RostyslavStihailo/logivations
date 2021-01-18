import React from 'react'
import mod from './modal.module.css'
import {connect} from 'react-redux'

function Modal(props){
    const {isAdd, isList, isClear, isTotal, sortedList, total, prevCom, err} = props.data;
    const center = {textAlign: 'center'};
    if(err)
        return <h3 style={{color: 'red', textAlign:'center'}}>Ops... Command didnt find</h3>

    if(isAdd)
        return (
            <div style={center}><h3>{prevCom
                .split(' ')
                .slice(1)
                .join(' ')}</h3></div>
        )
    if(isClear)
        return (
            <div style={center}><h3>clear</h3> {props.opList
                .map((element, i) => <h5 key={i}>{element
                    .split(' ')
                    .slice(1)
                    .join(' ')
                }</h5>)}</div>
        )
    if(isList)
        if(sortedList){
             return (
                 <div style={center}><h3>list</h3> {sortedList
                     .map((element, i) => <h5 key={i}>{element
                         .split(' ')
                         .slice(1)
                         .join(' ')
                     }</h5>)}</div>
            )}else {
                return null}
    if(isTotal)
        return (
            <div style={center}><h3>Total <br/> {total} EUR</h3></div>
        )
    return(
        <div className={mod.mod}>
            <h3>Available command</h3>
            <ul>
                <li>
                    <h5>add</h5>
                </li>
                <li>
                    <h5>clear</h5>
                </li>
                <li>
                    <h5>list</h5>
                </li>
                <li>
                    <h5>total</h5>
                </li>
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return{
        opList: state.money.operationList
    }
}

export default connect(mapStateToProps)(Modal)