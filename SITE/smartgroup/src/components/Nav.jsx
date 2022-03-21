import axios from 'axios'
import { Link } from 'react-router-dom'




export default class Nav extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(event) 
    {
        event.preventDefault();

        axios.get("/auth/logout")
            .then((val) => {
                if (val == 200) {
                    window.location.href = '127.0.0.1:3002/login'
                }
            }).catch((err) => {
                console.log(err)
            })
    }



    render() 
    {
        return(
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
                        <a href="javascript:;" onClick={this.logout}>Log Out</a>
                    </li>
                </ul>
            </nav>
        )
    }

}