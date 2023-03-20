import React, { useState } from 'react';

const TaskForm = (props) => {
    const [state, setState] = useState({
        id: '',
        isDone: false,
        isDeleted: false,
        isOnGoing: false,
        title: '',
        description: '',
        comment: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setState(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {id, title, description, comment} = state;
        const newTask = {
            id,
            isDone: false,
            isDeleted: false,
            isOnGoing: false,
            title,
            description,
            comment
        };
        props.handleCreate(newTask);
        setState({
            id:'',
            title: '',
            description: '',
            comment: ''
        });
    }

    return (
        <form className='task' onSubmit={handleSubmit}>
            <label>
                Titre :
                <input type="text" name="title" value={state.title} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Description :
                <input type="text" name="description" value={state.description} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Commentaire :
                <input type="text" name="comment" value={state.comment} onChange={handleChange}/>
            </label>
            <br/>
            <div className='status'>
                <button type="submit">Créer</button>
            </div>
        </form>
    )
}

export default TaskForm;
