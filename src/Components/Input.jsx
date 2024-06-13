import {useState} from 'react'
import './Input.css'

const Input = ({taskList, setTaskList}) => {
    const[input,setInput] = useState("")
    const handleAddTask=(e)=>{
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("")
    }
    return(
        <div>
            <form className='form'  action="">
                <input className='input' type="text"
                placeholder="Add a task"
                onChange={(e)=>setInput(e.target.value)}
                 />
                 <button className='button' onClick={handleAddTask} >add</button>
            </form>
        </div>
    )
}
export default Input