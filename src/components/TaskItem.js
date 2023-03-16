import React, {Component} from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: props.isDone,
            isDeleted: props.isDeleted,
            title: props.title,
            description: props.description,
            comment: props.comment,
        };
    }

    render() {
        const task = this.props.task;
        return (
            <div className='task'>
                <h2>{task.title}</h2>
                <div className='status'>
                    <p>{task.isDone ? 'Terminée' : 'Non terminée'}</p>
                    <p>{task.isDeleted ? 'Supprimée' : 'Non supprimée'}</p>
                </div>
                <p>{task.description}</p>
                <p>{task.comment}</p>
                <div className='status'>
                    <button onClick={() => this.props.onClick1(task)}>{task.isDone ? 'Reprendre' : 'Terminer'}</button>
                    <button onClick={() => this.props.onClick2(task)}>{task.isDeleted ? 'Desarchiver' : 'Supprimer'}</button>
                </div>
            </div>
        )
    }
}

export default TaskItem;