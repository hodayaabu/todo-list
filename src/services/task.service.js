
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'taskDB'

_createTasks()

export const taskService = {
    query,
    getById,
    save,
    remove,
}

function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(taskId) {
    return storageService.get(STORAGE_KEY, taskId)
}
function remove(taskId) {
    return storageService.remove(STORAGE_KEY, taskId)
}
function save(task) {
    if (task._id) {
        return storageService.put(STORAGE_KEY, task)
    } else {
        return storageService.post(STORAGE_KEY, task)
    }
}

function _createTasks() {
    let tasks = utilService.loadFromStorage(STORAGE_KEY)
    if (!tasks || !tasks.length) {
        tasks = [
            {
                _id: utilService.makeId(),
                title: 'Hey!',
                description: 'Would love to catch up sometimes',
                completed: false,
                createdAt: null
            },

        ]
        utilService.saveToStorage(STORAGE_KEY, tasks)
    }
}