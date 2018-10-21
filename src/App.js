import React, { Component } from 'react';
import Input from './Input'
import Todos from './Todos'
import PageTitle from './PageTitle';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks:[]
    }

    this.addTask=this.addTask.bind(this);
    this.deleteTask=this.deleteTask.bind(this)
  }

  addTask(newTask){
    let tasks = this.state.tasks;

    let mynewTask = {
        id:tasks.length,
        description:newTask,
        active:false
      }

  

    this.setState(prevState => ({
      tasks: [...prevState.tasks, mynewTask]
    }))

    /*this.setState(prevState=>{}{
      tasks:[...prevState.tasks,newTask]
    })*/

    console.table(tasks)
  }

  deleteTask(index){
    
    let tasks = this.state.tasks
    tasks.splice(index,1)

    this.setState({tasks})

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <PageTitle/>
          <div className="todosGrid">
          <Input addTask={this.addTask}/>
          
          <Todos tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
