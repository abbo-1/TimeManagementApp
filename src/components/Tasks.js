
const Tasks = ({ tasks }) => {
    return (
        <>
        {tasks.map((task) => (
        <h3 key={tasks.id}>
        {task.text}<br/>
        {task.day}</h3>
        
        ))}
        </>
    )}

export default Tasks