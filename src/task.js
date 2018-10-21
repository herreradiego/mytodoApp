import React from 'react'


const Task = (props)=>{
    return(
        
        <div key={props.index} className="todosContainer" onMouseEnter={e=>{this.handleHover(index)}} onMouseLeave={e=>this.handleLeave(index)}>
            <div   id="doneChecker"><input onChange={this.handleCheck} type="checkbox"/></div><p>{task.description}</p>
            <button  id={index} className={btnClass} ref="delBtn" index={index}  onClick={e=>this.deleteTask(index)}>DELETE</button>
        </div>
            
        
        
    )
}


export default Task;