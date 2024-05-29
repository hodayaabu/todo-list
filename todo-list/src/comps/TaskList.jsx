import { Link } from 'react-router-dom'

import { TaskPreview } from './TaskPreview.jsx'

export function TaskList({ tasks, onDeleteTask, onUpdateTask }) {
    return (
        <ul className="task-list">
            {tasks && tasks?.map((task) => (
                <li key={task._id}>
                    <TaskPreview key={task._id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />

                    {/* <Link to={`/Task/${task._id}`}>Details</Link> */}
                </li>
            ))}
        </ul>
    )
}
