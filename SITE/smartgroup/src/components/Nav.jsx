import axios from 'axios'
import { Link } from 'react-router-dom'

function logout(){
    axios.get("/auth/logout")
    .then((val) => {
        if(val == 200){
            window.location.href("/")
        }
    })
}

export const Nav = () => (
    <nav className="App-nav">
        <ul>
            <li>
                <Link to="/app">Home</Link>
            </li>
            <li>
                <Link to="/app/Profile">Profile</Link>
            </li>
            <li>
                <Link to="/app/StudyGroupsList">Study Groups List</Link>
            </li>
            <li>
                <Link to="/app/CreateRoom">Create Room</Link>
            </li>
            <li>
                <Link to="/app/StudyRoom">Study Room</Link>
            </li>
            <li>
                <Link to="/auth/logout" onClick={logout()}>Log Out</Link>
            </li>
        </ul>
    </nav>
)