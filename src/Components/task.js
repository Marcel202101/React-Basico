import React, {Component} from 'react';
import Proptypes from 'prop-types';
class Task extends Component{
    
    StyleCompleted() {
        return({
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' :'none'
        })
    }

    render(){
        return(
            <p style = {this.StyleCompleted()}>
                {this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id}
                <input type = 'Checkbox' onChange = {this.props.checkDone.bind(this, this.props.task.id)} />
                <button style = {btndelete} onClick = {this.props.deleteTask.bind(this, this.props.task.id)}> x </button>
            </p>
        )
    }
}

Task.Prototype = {
    task: Proptypes.object.isRequired
}
const btndelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;