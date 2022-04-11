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

        axios.get(`${process.env.AUTH_URL}/auth/logout`, {timeout:2000})
            .then((val) => {
                if (val.status == 200) {
                    console.log(val)
                    window.location.href = `${process.env.AUTH_URL}/login`
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
                        <a href="#" onClick={this.logout}>Log Out</a>
                    </li>
                </ul>
            </nav>
        )
    }

}