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
        this.props.setState({
            isDone: !this.state.isDone,
        })
    }

    handleDelete() {
        this.setState({
            isDeleted: !this.state.isDeleted,
        })
    }



    render() {
        const value = this.props.value;
        return (
            <div className='task'>
                <h2>{value.title}</h2>
                <div className='status'>
                    <p>{value.isDone ? 'Terminée' : 'Non terminée'}</p>
                    <p>{value.isDeleted ? 'Suppriméeee' : 'Non supprimée'}</p>
                </div>
                <p>{value.description}</p>
                <p>{value.comment}</p>
                {/*<div className='status'>*/}
                {/*    /!*<button onClick={() => this.props.handleDone()}>{this.state.isDone ? 'Reprendre' : 'Terminer'}</button>*!/*/}
                {/*    /!*<button onClick={() => this.props.handleDelete()}>{this.state.isDeleted ? 'Desarchiver' : 'Supprimer'}</button>*!/*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default TaskItem;