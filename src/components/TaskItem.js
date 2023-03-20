import React from 'react';

function TaskItem(props) {
    const task = props.task;
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
                    <button style={styleBg} onClick={() => props.onClick3(task)}>Commencer</button>
                    <button style={styleBg} onClick={() => props.onClick2(task)}>Supprimer</button>
                </div>
            }
            {(!task.isDone && task.isOnGoing) &&
                <div className='status'>
                    <button style={styleBg} onClick={() => props.onClick1(task)}>Terminer</button>
                    <button style={styleBg} onClick={() => props.onClick3(task)}>Arrêter</button>
                    <button style={styleBg} onClick={() => props.onClick2(task)}>Supprimer</button>
                </div>
            }
            {(task.isDone) &&
                <div className='status'>
                    <button style={styleBg} onClick={() => props.onClick2(task)}>Supprimer</button>
                </div>
            }
        </div>
    );
}

export default TaskItem;