import React from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


function TaskItem(props) {
    const task = props.task;
    let color = task.isOnGoing ? '#065DC6' : '#C61B06';
    color = task.isDone ? '#187506' : color;
    const style = {
        background: color,
    }
    return (
        <div className='task' style={style}>
            <h2 style={style}>{task.title}</h2>
            <p style={style}>{task.description}</p>
            <p style={style}>{task.comment}</p>
            <div>
                {(!task.isOnGoing && !task.isDeleted) &&
                    <div className='status'>
                        <button style={style} onClick={() => props.onClick3(task)}>Commencer</button>
                        <button style={style} onClick={() => props.onClick2(task)}>Supprimer</button>
                    </div>
                }
                {(!task.isDone && task.isOnGoing && !task.isDeleted) &&
                    <div className='status'>
                        <button style={style} onClick={() => props.onClick1(task)}>Terminer</button>
                        <button style={style} onClick={() => props.onClick3(task)}>Arrêter</button>
                        <button style={style} onClick={() => props.onClick2(task)}>Supprimer</button>
                    </div>
                }
                {(task.isDone && !task.isDeleted) &&
                    <div className='status'>
                        <button style={style} onClick={() => props.onClick2(task)}>Supprimer</button>
                    </div>
                }
                {(task.isDeleted) &&
                    <div>
                        <button style={style} onClick={() => props.onClick4(task)}>Restaurer la tâche</button>
                    </div>
                }
            </div>
            <div>
                <Popup trigger={<button>Modifier</button>} modal position="right center" contentStyle={{borderRadius: "5px"}}>
                    <div className="modal">
                        <div className="header">Modifier la tâche</div>
                        <div className="content">
                            Contenu de la popup ici.
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
    );
}

export default TaskItem;