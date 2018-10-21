
import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Newtask:[],

        }

        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleInput(intro){
        
        this.setState=({
            Newtasks:this.refs.value
        
        
    })

    

    console.log(intro.target.value)
}

    addTask(event){

        let newTask = this.refs.task.value
        event.preventDefault();
       // console.log("agregaste"+newTask)

        this.props.addTask(newTask)
        event.target.reset()
    }

render(){
    return(
    
        
        
        <div >
            <form onSubmit={this.addTask} className="inputWrapper">
                <input className="input" placeholder="Add Todo Here" ref="task" type="text" onChange={this.handleInput}/>
                     <div id="addTodo">
                <button type="submit" value="Agregar">Agregar</button>
            </div>
            </form>
        </div>
            
        
    
    )
}



}

export default Input

