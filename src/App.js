import React,{Component}from 'react';
import task from './Sample/task.json';

//Componentes
import Tasks from './Components/tasks';
import TaskForm from './Components/TaskForm';
import Posts from './Components/posts';

class App extends Component{
  state = {
    task:task
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.task.length
    }
    
    console.log(this.state.task);
    this.setState({
      task: [...this.state.task, newTask]
    })
  }

  deleteTask = (id)=>{
    const newTask = this.state.task.filter(task => task.id !== id);
    this.setState({
      task: newTask
    })
  }
  checkDone = (id)=>{
    const newTask = this.state.task.map(task => {
      if(id === task.id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      task: newTask
    })
  }
  render(){
    return(
      <div>  
          <TaskForm addTask = {this.addTask}/>  
          <Tasks checkDone = {this.checkDone} deleteTask = {this.deleteTask} tasks = {this.state.task}/>    
          <Posts/>
      </div>
    )
  }
}
export default App;
