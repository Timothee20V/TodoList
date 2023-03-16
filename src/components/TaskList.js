import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    id: 2,
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
                {
                    id: 3,
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    id: 4,
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
                {
                    id: 5,
                    isDone: false,
                    isDeleted: false,
                    title: "Tâche 1",
                    description: "Description de la tâche 1",
                    comment: "",
                },
                {
                    id: 6,
                    isDone: true,
                    isDeleted: false,
                    title: "Tâche 2",
                    description: "Description de la tâche 2",
                    comment: "",
                },
            ],
        }
    }

    handleDone() {
        this.setState({
            isDone: !this.state.isDone,
        })
    }

    handleDelete() {
        this.setState({
            isDeleted: !this.state.isDeleted,
        })
    }

    // handleCreateTask(task) {
    //     console.log(this.state.tasks)
    //     const newTasks = this.state.tasks.slice();
    //     newTasks.push(task);
    //     this.setState({
    //         tasks: newTasks,
    //     })
    // }

    renderTask(task) {
        return (
            <TaskItem
                // onCreateTask={() => this.handleCreateTask(task)}
                onClick1 = {() => this.handleDone()}
                onClick2 = {() => this.handleDelete()}
                i = {task}
                value={this.state.tasks[task]}

            />
        )
    }

    renderNotDoneTasks() {
        const notDoneTasks = this.state.tasks.filter((task) => task.isDone === false);
        return notDoneTasks.map((task) => (this.renderTask(task)));
    }

    renderDoneTasks() {
        const doneTasks = this.state.tasks.filter((task) => task.isDone === true);
        return doneTasks.map((task) => (this.renderTask(task)))
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