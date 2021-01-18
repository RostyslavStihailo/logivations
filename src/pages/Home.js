import React from 'react'
import home from './home.module.css'
import {connect} from 'react-redux'
import {clearHandler, onPushHandler} from "../redux/actions/moneyActions";
import {fixer} from "../api/fixer";
import Modal from "../components/Modal";

class Home extends React.Component{

    state = {
        command: '',
        isAdd:false,
        isList:false,
        isClear:false,
        isTotal:false,
        sortedList:null,
        total: null,
        prevCom:null,
        err:false
    }

    listHandler(list){
        const newArr = [...list];
        newArr.sort((a, b) =>
            Date.parse(a.split(' ')[1]) - Date.parse(b.split(' ')[1])
        )
        return newArr
    }

    onChangeHandler(event){
        this.setState({
            command:event.target.value
        })
    }

    async onSubmitHandler(event)  {
        event.preventDefault();
        switch (this.state.command.split(' ')[0]){
            case 'add': if(this.state.command.split(' ').length === 5)
                this.props.onPush(this.state.command);
            this.setState({
                isAdd: true,
                isList:false,
                isTotal:false,
                isClear:false,
                prevCom: this.state.command,
                err:false
            })
            break;
            case 'list':
                this.listHandler(this.props.opList)
                this.setState({
                    isAdd: false,
                    isList:true,
                    isTotal:false,
                    isClear:false,
                    sortedList: this.listHandler(this.props.opList),
                    err:false

                })
                break;
            case 'total':
                fixer(this.props.opList)
                this.setState({
                    isAdd: false,
                    isList:false,
                    isTotal:true,
                    isClear:false,
                    total: await fixer(this.props.opList),
                    err:false
                })
                break;
            case 'clear':
                if(this.state.command.split(' ').length === 2)
                    this.props.clearHandler(this.props.opList, this.state.command.split(' ')[1])
                this.setState({
                    isAdd: false,
                    isList:false,
                    isTotal:false,
                    isClear:true,
                    err:false
                })
            break;
            default:
                this.setState({
                    err: true
                })
        }

      /*  if(this.state.command.split(' ')[0] === 'add' && this.state.command.split(' ').length === 5)
            this.props.o*///nPush(this.state.command);

        this.setState({
            command:''
        })
    }

    render() {
        return(
           <div>
            <form onSubmit={this.onSubmitHandler.bind(this)}>
               <h5 style={{textAlign:'center', marginTop: '30px'}}>Write command down below</h5>
               <div className={home.home}>
                   <input className='form-control'
                          placeholder='Enter command'
                          onChange={(event) => this.onChangeHandler(event)}
                          value={this.state.command}
                   />
                   <button type='submit'
                           className='btn btn-primary'
                   >Submit</button>
               </div>
           </form>
               <Modal
                   data={this.state}
               />
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        opList: state.money.operationList
    }
}

function mapDispatchToProps(dispatch){
    return{
        onPush: (com) => dispatch(onPushHandler(com)),
        clearHandler: (list, time) => dispatch(clearHandler(list, time))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)