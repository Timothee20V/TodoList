import React from 'react';
import DisplayModal from './DisplayModal';

const Home = () => {
    const props = {
        id: 0,
        title: "Titre de la tâche",
        description: "Description de la tâche",
        comment: "Commentaire de la tâche",
        isOnGoing: true,
        isDone: true,
        isDeleted: true,
    }
    return (
        <div>
            <h1>Bienvenu !</h1>
            <DisplayModal props={props}/>
        </div>
    )
}

export default Home