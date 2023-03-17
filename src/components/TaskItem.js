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
        let color = task.isDone ? 'green' : 'blue'
        color = task.isDeleted ? 'red' : color
        const style = {background: color}
        return (
            <div style={style} className='task'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.comment}</p>
                <div className='status'>
                    <button style={style} onClick={() => this.props.onClick1(task)}>{task.isDone ? 'Reprendre' : 'Terminer'}</button>
                    <button style={style} onClick={() => this.props.onClick2(task)}>{task.isDeleted ? 'Réstaurer' : 'Supprimer'}</button>
                </div>
            </div>
        )
    }
}

export default TaskItem;