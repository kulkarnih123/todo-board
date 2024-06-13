import './Board.css'
const Board = ({ task,index,taskList,setTaskList }) => {
    const handleDelete = ()=>{
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
    return (
        <div className='po'>
            <p className='p'>{task}</p>
            <div className='buttdiv'>
           <button className='butt' onClick={handleDelete}>
            Delete
           </button>
           </div>
        </div>
    )
}
export default Board