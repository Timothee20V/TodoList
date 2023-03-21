import React from 'react';
import Popup from 'reactjs-popup';


const Home = () => {
    return(
        <div>
            <h1>Bienvenue !</h1>
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Contenu de la popup ici !!</div>
            </Popup>
        </div>
    )
}

export default Home