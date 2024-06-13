import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import Board from './Components/Board'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
      <h1 className='h1' >To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className='bor'>
        {taskList.map((task, index)=>
       <Board 
       key={index}
       index={index}
       task={task}
       taskList={taskList}
       setTaskList={setTaskList}
       />
        )}
      </div>
    </>
  )
}

export default App
