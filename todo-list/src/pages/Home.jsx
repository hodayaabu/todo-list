import { useState, useEffect } from 'react'
import { TaskList } from '../comps/TaskList'
import { taskService } from '../services/task.service'
import { taskActions } from '../store/actions/task.actions'
import { useSelector } from "react-redux"

export function Home() {
    // const [tasks, setTasks] = useState([])
    const [task, setTask] = useState([])

    const tasks = useSelector((storeState) => storeState.taskModule.tasks);

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        try {
            await taskActions.loadTasks();
        } catch (err) {
            console.log("Issues loading tasks ,", err);
        }
    }

    async function onAddTask() {

        const task = {
            title: prompt('Task title?'),
            description: prompt('Task description?'),
        }

        try {
            await taskActions.saveTask(task)


        } catch (err) {
            console.log('Error from onAddTask ->', err)
        }

    }

    async function onDeleteTask(id) {

        try {
            await taskActions.removeTask(id)

        } catch (err) {
            console.log('Error from onDeleteTask ->', err)
        }

    }

    async function onUpdateTask(task) {
        try {
            await taskActions.saveTask(task)


        } catch (err) {
            console.log('Error from onUpdateTask ->', err)
        }

    }

    if (!tasks) return <div>Loading...</div>
    return (
        <section className='home'>
            <div>
                <h1 className='main-title'>TODO LIST</h1>

                <div className="container">
                    <div className="actions">
                        <button onClick={onAddTask}>ADD TASK</button>
                        <div className="filter">
                            <button>filter</button>
                        </div>
                    </div>

                    <TaskList tasks={tasks} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
                </div>
            </div>
        </section>
    )
}
