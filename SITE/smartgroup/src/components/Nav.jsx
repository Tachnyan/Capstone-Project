import { Link } from 'react-router-dom'

export const Nav = () => (
    <nav className="App-nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Profile">Profile</Link>
            </li>
            <li>
                <Link to="/StudyGroupsList">Study Groups List</Link>
            </li>
            <li>
                <Link to="/CreateRoom">Create Room</Link>
            </li>
            <li>
                <Link to="/StudyRoom">Study Room</Link>
            </li>
        </ul>
    </nav>
)