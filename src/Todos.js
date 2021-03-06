import React from 'react'



class Todos extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            tasks:this.props.tasks

        }

        this.deleteTask = this.deleteTask.bind(this)
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        
    }


    handleHover(index){
        let tasks = this.props.tasks
        tasks[index].active=true
        this.setState({
            tasks:tasks
        })
        
       
    }

    handleLeave(index){

        let tasks = this.state.tasks
        tasks[index].active=false
        this.setState({
            tasks:tasks
        })
         
    }

    handleCheck(index){
        let alltasks = this.state.tasks
        alltasks[index].checked= !alltasks[index].checked
        this.setState({
            tasks:alltasks
        })
        console.log("VALOR 1 :"+JSON.stringify( this.props.tasks[index]))
        console.log("estado del state :"+ JSON.stringify(this.state.tasks))
        console.log("estado del props :"+ JSON.stringify(this.props.tasks))
    }




    deleteTask(index){
        this.props.deleteTask(index)
        
    }


    render(){

        return(
               
            <div >
            {this.props.tasks.map((task,index)=>{ 
                /*console.log("array: "+JSON.stringify(task))*/
                if(task.checked){
                    return(
                        <div  className="todosContainer checked" key={index}  onMouseEnter={e=>{this.handleHover(index)}} onMouseLeave={e=>this.handleLeave(index)}>
                            <div   id="doneChecker"><input onChange={e=>this.handleCheck(index)} type="checkbox"/></div><p className="done">{task.description}</p>
                            <button  className={task.active ? 'show deleteBtn':'hide'}  ref="delBtn" index={index}  onClick={e=>this.deleteTask(index)}>DELETE</button>
                        </div>
                    )
                }
                return(
                    <div  className={task.cheked ? 'todosContainer checked':'todosContainer'} key={index}  onMouseEnter={e=>{this.handleHover(index)}} onMouseLeave={e=>this.handleLeave(index)}>
                        <div   id="doneChecker"><input onChange={e=>this.handleCheck(index)} type="checkbox"/></div><p>{task.description}</p>
                        <button  className={task.active ? 'show deleteBtn':'hide deleteBtn'}  ref="delBtn" index={index}  onClick={e=>this.deleteTask(index)}>DELETE</button>
                    </div>
                    )
                })
            }
            </div>
            
        )
    }
}


export default Todos