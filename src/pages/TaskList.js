import React, {useState, useEffect} from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import Typography from "@mui/material/Typography";

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
        newTasks[id].isOnGoing = false;
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
        newTasks[id].isDone = false;
        setTasks(newTasks);
    };

    const handleUnDelete = (id) => {
        const newTasks = [...tasks];
        newTasks[id].isDeleted = !tasks[id].isDeleted;
        setTasks(newTasks);
    };

    const handleCreate = (newTask) => {
        newTask.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
        setTasks([...tasks, newTask]);
    };

    const handleChangeTitle = (id, value) => {
        const newTasks = [...tasks];
        newTasks[id].title = value;
        setTasks(newTasks);
    }
    const handleChangeDescription = (id, value) => {
        const newTasks = [...tasks];
        newTasks[id].description = value;
        setTasks(newTasks);
    }
    const handleChangeComment = (id, value) => {
        const newTasks = [...tasks];
        newTasks[id].comment = value;
        setTasks(newTasks);
    }

    const renderTask = (task) => {
        return (
            <TaskItem
                key={task.id}
                onClick1={() => handleDone(task.id)}
                onClick2={() => handleDelete(task.id)}
                onClick3={() => handleOnGoing(task.id)}
                onClick4={() => handleUnDelete(task.id)}
                onValueChangeTitle={(value) => handleChangeTitle(task.id, value)}
                onValueChangeDescription={(value) => handleChangeDescription(task.id, value)}
                onValueChangeComment={(value) => handleChangeComment(task.id, value)}
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
            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{margin: 5}}>
                TODOLIST
            </Typography>
            <div className='lists' style={{border: '2px solid', borderRadius: '10px'}}>
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