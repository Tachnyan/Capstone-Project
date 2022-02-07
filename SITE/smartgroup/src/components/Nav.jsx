import { Link } from 'react-router-dom'

export const Nav = () => (
    <nav className="App-nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/StudyGroupsList">Study Groups List</Link>
            </li>
        </ul>
    </nav>
)