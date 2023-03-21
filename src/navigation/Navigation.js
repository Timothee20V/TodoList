import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className='nav'>
            <Link to="/">Accueil</Link> |
            <Link to="/todoList">TodoList</Link> |
            <Link to="/informations">Informations</Link> |
        </nav>
    );
}
export default Navigation