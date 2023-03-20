import React, {useState, useEffect} from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
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

    const handleDone = (id) => {
        const newTasks = [...tasks];
        newTasks[id].isDone = !tasks[id].isDone;
        setTasks(newTasks);
    };

    const handleDelete = (id) => {
        const newTasks = [...tasks];
        newTasks[id].isDeleted = !tasks[id].isDeleted;
        setTasks(newTasks);
    };

    const handleOnGoing = (id) => {
        const newTasks = [...tasks];
        newTasks[id].isOnGoing = !tasks[id].isOnGoing;
        setTasks(newTasks);
    };

    const handleCreate = (newTask) => {
        newTask.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
        setTasks([...tasks, newTask]);
    };

    const renderTask = (task) => {
        return (
            <TaskItem
                key={task.id}
                onClick1={() => handleDone(task.id)}
                onClick2={() => handleDelete(task.id)}
                onClick3={() => handleOnGoing(task.id)}
                task={task}
            />
        );
    };

    const renderNotDoneTasks = () => {
        const notDoneTasks = tasks.filter((task) => !task.isDone && task.isOnGoing && !task.isDeleted);
        return notDoneTasks.map((task) => renderTask(task));
    };

    const renderDoneTasks = () => {
        const doneTasks = tasks.filter((task) => task.isDone && !task.isDeleted);
        return doneTasks.map((task) => renderTask(task));
    };

    const renderOnGoingTasks = () => {
        const archivedTasks = tasks.filter((task) => !task.isOnGoing && !task.isDeleted && !task.isDone);
        return archivedTasks.map((task) => renderTask(task));
    };

    const renderForm = () => {
        return <TaskForm handleCreate={handleCreate}/>;
    };

    return (
        <div>
            <h1>TODOLIST</h1>
            <div className='lists'>
                <div className='column'>
                    <p>A faire</p>
                    {renderOnGoingTasks()}
                </div>
                <div className='column'>
                    <p>En cours</p>
                    {renderNotDoneTasks()}
                </div>
                <div className='column'>
                    <p>Terminées</p>
                    {renderDoneTasks()}
                </div>
                <div className='column'>
                    <p>Ajouter une tâche</p>
                    {renderForm()}
                </div>
            </div>
        </div>
    )
}


export default TaskList;