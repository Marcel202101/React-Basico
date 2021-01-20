import React, {Component} from 'react';
import Task from './task';
class Tasks extends Component{

    render(){
      return(
        <div>
            
          {this.props.tasks.map(task =>(
              
              <Task checkDone = {this.props.checkDone} deleteTask = {this.props.deleteTask} key = {task.id} task = {task}/>
            
            ))};

        </div>
      )
    }
  }

export default Tasks;