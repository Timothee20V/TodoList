import React, {Component} from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            isDeleted: false,
            title: "TITLE",
            description: "Short description",
            comment: "",
        };
    }

    handleDone() {
        this.setState({
            isDone: !this.state.isDone,
        })
    }

    handleDelete() {
        this.setState({
            isDeleted: !this.state.isDeleted,
        })
    }

    render() {
        return (
            <div className='task'>
                <h2>{this.state.title}</h2>
                <div className='status'>
                    <p>{this.state.isDone ? 'Terminée' : 'Non terminée'}</p>
                    <p>{this.state.isDeleted ? 'Supprimée' : 'Non supprimée'}</p>
                </div>
                <p>{this.state.description}</p>
                <p>{this.state.comment}</p>
                <div className='status'>
                    <button onClick={() => this.handleDone()}>{this.state.isDone ? 'Reprendre' : 'Terminer'}</button>
                    <button onClick={() => this.handleDelete()}>{this.state.isDeleted ? 'Desarchiver' : 'Supprimer'}</button>
                </div>
            </div>
        )
    }
}

export default TaskItem;