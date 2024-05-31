

export function TaskPreview({ task, onDeleteTask, onUpdateTask }) {

    function onChangeCompleted() {
        const newTask = { ...task, completed: !task.completed }
        onUpdateTask(newTask)
    }

    function handleUpdateTask(task) {
        const updatedTask = {
            title: prompt('Task title?'),
            description: prompt('Task description?'),
        }
        const newTask = { ...task, ...updatedTask }
        onUpdateTask(newTask)
    }


    return <article className="task-preview-container">
        <div className="task-preview">
            <input type="checkbox" name="completed" className="completed" checked={task.completed} onChange={onChangeCompleted} />
            <div className="data">
                <h5>{task.title}</h5>
                <p>{task.description}</p>
            </div>
        </div>

        <div className="task-actions">

            <button onClick={() => { onDeleteTask(task._id) }}> x </button>

            <button onClick={() => { handleUpdateTask(task) }}> Edit </button>
        </div>

    </article>
}