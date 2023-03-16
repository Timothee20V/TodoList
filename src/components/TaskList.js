import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
                {
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
                {
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
            ],
        }
    }

    handleCreateTask(task) {
        console.log(this.state.tasks)
        const newTasks = this.state.tasks.slice();
        newTasks.push(task);
        this.setState({
            tasks: newTasks,
        })
    }

    renderNotDoneTasks(){
        const notDoneTasks = this.state.tasks.filter((task) => task.isDone === false);
        return notDoneTasks.map((task) => (<TaskItem onCreateTask={(task) => this.handleCreateTask(task)}/>));
    }
    renderDoneTasks() {
        const doneTasks = this.state.tasks.filter((task) => task.isDone === true);
        return doneTasks.map((task) => (<TaskItem onCreateTask={(task) => this.handleCreateTask(task)}/>))
    }

    render() {
        return (
            <div className='lists'>
                <div className='notDone'>
                    {this.renderNotDoneTasks()}
                </div>
                <div className='done'>
                    {this.renderDoneTasks()}
                </div>
            </div>
        )
    }
}

export default TaskList;