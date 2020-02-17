import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native'

enum FetchStatus {
    PENDING = "PENDING",
    DONE = "DONE",
    ERROR = "ERROR"
}

class Task {
    @observable
    public name: String
    @observable
    public completed: Boolean
    @observable
    public readonly addedDate: Date

    constructor(name: String) {
        this.name = name
        this.completed = false
        this.addedDate = new Date()
    }

    @action
    setCompleted(completed: Boolean) {
        this.completed = completed
    }
}

class TaskStore {
    @observable
    public tasks = []
    @observable
    public status = FetchStatus.PENDING
    @observable
    public edit = false

    @action
    async fetchTasks() {
        // Set tasks to empty and change state
        this.tasks = []
        this.status = FetchStatus.PENDING

        // Fetch values from storage
        try {
            const value = await AsyncStorage.getItem('tasks')
            // Assign new vale and change state
            this.tasks = value !== null ? JSON.parse(value) : []
            this.status = FetchStatus.DONE
        } catch (error) {
            // Log error and change state
            console.error(error.message)
            this.status = FetchStatus.ERROR
        }
    }

    @action
    async setTasks(tasks: Array<Task>) {
        this.tasks = tasks
        this.updateTasks()
    }

    @action
    async addTask(name: String) {
        this.tasks = [...this.tasks, new Task(name)]
        this.updateTasks()
    }

    @action
    async deleteTask(index) {
        this.tasks = this.tasks.filter((_, i) => i != index)
        this.updateTasks()
    }

    @action
    toggleEdit() {
        this.edit = !this.edit
    }

    containsTask(name) {
        return this.tasks.some(task => task.name === name)
    }

    private async updateTasks() {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(this.tasks))
        } catch (error) {
            console.error(error.message)
        }
    }
}

const taskStore = new TaskStore()

export {
    Task,
    taskStore
} 