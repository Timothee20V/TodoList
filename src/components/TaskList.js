import React, {Component} from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    handleDone(id) {
        const newTasks = this.state.tasks.slice()
        newTasks[id].isDone = !this.state.tasks[id].isDone
        this.setState({
            tasks: newTasks,
        })
    }

    handleDelete(id) {
        const newTasks = this.state.tasks.slice()
        newTasks[id].isDeleted = !this.state.tasks[id].isDeleted
        this.setState({
            tasks: newTasks,
        })
    }

    handleOnGoing(id) {
        const newTasks = this.state.tasks.slice()
        newTasks[id].isOnGoing = !this.state.tasks[id].isOnGoing
        this.setState({
            tasks: newTasks,
        })
    }

    handleCreate = (newTask) => {
        console.log(this.state.tasks)
        newTask.id = this.state.tasks[this.state.tasks.length - 1] ? this.state.tasks[this.state.tasks.length-1].id + 1 : 0
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }));
    }

    renderTask(task) {
        return (
            <TaskItem
                key={task.id}
                onClick1={() => this.handleDone(task.id)}
                onClick2={() => this.handleDelete(task.id)}
                onClick3={() => this.handleOnGoing(task.id)}
                task={task}
            />
        )
    }

    renderNotDoneTasks() {
        const notDoneTasks = this.state.tasks.filter((task) => task.isDone === false && task.isOnGoing === true && task.isDeleted === false);
        return notDoneTasks.map((task) => (this.renderTask(task)));
    }

    renderDoneTasks() {
        const doneTasks = this.state.tasks.filter((task) => task.isDone === true && task.isDeleted === false);
        return doneTasks.map((task) => (this.renderTask(task)))
    }

    renderOnGoingTasks() {
        const archivedTasks = this.state.tasks.filter((task) => task.isOnGoing === false && task.isDeleted === false && task.isDone === false);
        return archivedTasks.map((task) => (this.renderTask(task)));
    }

    renderForm() {
        return (
            <TaskForm
                handleCreate={this.handleCreate}
            />
        );
    }


    render() {
        return (
            <div>
                <h1>TODOLIST</h1>
                <div className='lists'>
                    <div className='column'>
                        <p>A faire</p>
                        {this.renderOnGoingTasks()}
                    </div>
                    <div className='column'>
                        <p>En cours</p>
                        {this.renderNotDoneTasks()}
                    </div>
                    <div className='column'>
                        <p>Terminées</p>
                        {this.renderDoneTasks()}
                    </div>
                    <div className='column'>
                        <p>Ajouter une tâche</p>
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;