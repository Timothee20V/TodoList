import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            isDone: false,
            isDeleted: false,
            isOnGoing: false,
            title: '',
            description: '',
            comment: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {id, title, description, comment} = this.state;
        const newTask = {
            id,
            isDone: false,
            isDeleted: false,
            isOnGoing: false,
            title,
            description,
            comment,
        };
        this.props.handleCreate(newTask);
        this.setState({
            id:'',
            title: '',
            description: '',
            comment: ''
        });
    }


    render() {
        return (
            <form className='task' onSubmit={this.handleSubmit}>
                <label>
                    Titre :
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Description :
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Commentaire :
                    <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}/>
                </label>
                <br/>
                <div className='status'>
                    <button type="submit">Créer</button>
                </div>
            </form>
        )
    }
}

export default TaskForm;