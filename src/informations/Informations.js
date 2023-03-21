import React, {useState} from 'react';
import TaskItem from '../components/TaskItem';

const Informations = () => {

    const [tasks] = useState([]);

    const renderTask = (task) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
            />
        );
    };

    const renderDeletedTasks = () => {
        const deletedTasks = tasks.filter((task) => task.isDeleted);
        return deletedTasks.map((task) => renderTask(task));
    };


    return (
        <div>
            <h1>Tâches supprimées</h1>
            <div className='lists'>
                <div>
                    {renderDeletedTasks()}
                </div>
            </div>
        </div>
    )
}


export default Informations;