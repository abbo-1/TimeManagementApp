const tasks = [
    {
        id: 1,
        text: 'Walk the Dog',
        day: 'Monday',
        reminder: true,
    },
    {
        id: 1,
        text: 'Wash the dog',
        day: 'Tuesday',
        reminder: true,
    },
    {
        id: 1,
        text: 'Pet the dog',
        day: 'Thursday',
        reminder: false,
    },
    {
        id: 1,
        text: 'Feed the dog',
        day: 'Friday',
        reminder: true,
    },

]

const Tasks = () => {
    return (
    <div>
        <>
        {tasks.map((task) => (
        <h3 key={tasks.id}>
            {task.text}<br/>
        {task.day}</h3>
        
        ))}
        </>
    </div>
    )
}

export default Tasks