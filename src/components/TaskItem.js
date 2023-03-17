import React, {Component} from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: props.isDone,
            isDeleted: props.isDeleted,
            isOnGoing: props.isOnGoing,
            title: props.title,
            description: props.description,
            comment: props.comment,
        };
    }

    render() {
        const task = this.props.task;
        let color = task.isOnGoing ? '#065DC6' : '#C61B06';
        color = task.isDone ? '#187506' : color;
        const styleTxt = {
            color: color,
            opacity: 1
        }
        const styleBg = {
            background: 'gray',
            opacity: 0.8
        }
        return (
            <div className='task' style={styleBg}>
                <h2 style={styleTxt}>{task.title}</h2>
                <p style={styleTxt}>{task.description}</p>
                <p style={styleTxt}>{task.comment}</p>
                {(!task.isOnGoing) &&
                    <div className='status'>
                        <button style={styleBg} onClick={() => this.props.onClick3(task)}>Commencer</button>
                        <button style={styleBg} onClick={() => this.props.onClick2(task)}>Supprimer</button>
                    </div>
                }
                {(!task.isDone && task.isOnGoing) &&
                    <div className='status'>
                        <button style={styleBg} onClick={() => this.props.onClick1(task)}>Terminer</button>
                        <button style={styleBg} onClick={() => this.props.onClick3(task)}>Arrêter</button>
                        <button style={styleBg} onClick={() => this.props.onClick2(task)}>Supprimer</button>
                    </div>
                }
                {(task.isDone) &&
                    <div className='status'>
                        <button style={styleBg} onClick={() => this.props.onClick2(task)}>Supprimer</button>
                    </div>
                }
            </div>
        );
    }
}

export default TaskItem;