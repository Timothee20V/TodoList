import React, {useEffect, useState} from 'react';
import TaskItem from '../components/TaskItem';

const Informations = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleUnDelete = (id) => {
        const newTasks = [...tasks];
        newTasks[id].isDeleted = !tasks[id].isDeleted;
        setTasks(newTasks);
    };

    const renderTask = (task) => {
        return (
            <TaskItem
                key={task.id}
                onClick4={() => handleUnDelete(task.id)}
                task={task}
            />
        );
    };



    const renderDeletedTasks = () => {
        const deletedTasks = tasks.filter((task) => task.isDeleted);
        console.log(tasks)
        console.log(deletedTasks)
        return deletedTasks.map((task) => renderTask(task));
    };


    return (
        <div>
            <h1>Tâches supprimées</h1>
            <div>
                <div className='displayListRowColumn'>
                    {renderDeletedTasks()}
                </div>
            </div>
        </div>
    )
}


export default Informations;