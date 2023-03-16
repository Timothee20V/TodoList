import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 0,
                    isDone: false,
                    isDeleted: false,
                    title: "Acheter des courses",
                    description: "Faire les courses pour la semaine.",
                    comment: "J'irai au supermarché demain matin.",
                },
                {
                    id: 1,
                    isDone: true,
                    isDeleted: false,
                    title: "Rendre un livre à la bibliothèque",
                    description: "Rendre le livre emprunté à la bibliothèque.",
                    comment: "Je l'ai déjà lu, je vais le rendre cet après-midi.",
                },
                {
                    id: 2,
                    isDone: false,
                    isDeleted: false,
                    title: "Appeler le plombier",
                    description: "Prendre rendez-vous avec le plombier pour réparer le robinet de la cuisine.",
                    comment: "Je vais appeler dès maintenant.",
                },
                {
                    id: 3,
                    isDone: true,
                    isDeleted: false,
                    title: "Faire du sport",
                    description: "Aller à la salle de sport pour faire une séance de musculation.",
                    comment: "C'était une bonne séance, je me sens fatigué mais satisfait.",
                },
                {
                    id: 4,
                    isDone: false,
                    isDeleted: false,
                    title: "Envoyer un mail important",
                    description: "Envoyer un mail important à mon collègue.",
                    comment: "Je vais le relire une dernière fois avant de l'envoyer.",
                },
                {
                    id: 5,
                    isDone: true,
                    isDeleted: false,
                    title: "Préparer le dîner",
                    description: "Préparer un dîner pour mes amis qui viennent ce soir.",
                    comment: "J'ai besoin d'aller faire quelques courses supplémentaires pour la recette.",
                },
            ],
        }
    }

    handleDone(id) {
        const newTasks = this.state.tasks.slice()
        newTasks[id].isDone = !this.state.tasks[id].isDone
        this.setState({
            tasks: newTasks,
        })
    }

    handleDelete(id) {
        const newTasks = this.state.tasks.slice()
        newTasks[id].isDeleted = !this.state.tasks[id].isDeleted
        this.setState({
            tasks: newTasks,
        })
    }

    renderTask(task) {
        return (
            <TaskItem
                key={task.id}
                onClick1 = {() => this.handleDone(task.id)}
                onClick2 = {() => this.handleDelete(task.id)}
                task={task}

            />
        )
    }

    renderNotDoneTasks() {
        const notDoneTasks = this.state.tasks.filter((task) => task.isDone === false);
        return notDoneTasks.map((task) => (this.renderTask(task)));
    }

    renderDoneTasks() {
        const doneTasks = this.state.tasks.filter((task) => task.isDone === true);
        return doneTasks.map((task) => (this.renderTask(task)))
    }

    render() {
        return (
            <div className='lists'>
                <div className='notDone'>
                    {this.renderNotDoneTasks()}
                </div>
                <div className='done'>
                    {this.renderDoneTasks()}
                </div>
            </div>
        )
    }
}

export default TaskList;