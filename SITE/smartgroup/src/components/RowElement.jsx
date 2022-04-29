import PropTypes from 'prop-types'
import axios from 'axios';

function join(user, id)
{
  //This function is for the onclick for the entries
  //Idk if I'm gonna do a state here
  //Just need the user and the chat id to join a room
  console.log("attempting to join")
  axios.post(`${process.env.AUTH_URL}/data/joinstudygroup`, { user:user, Studygroup_ID:id}, {timeout:2000})
  .then((response) => {
	console.log(response.status)
	if(response.status == 200){
		console.log("Chatroom joined");
  }})
  .catch((err) => {
	console.log(err);
  })

}

const RowElement = ({ id, course, material, location, numpeople, timeframe, user }) => {
	return (
		<tr onClick={join(user, id)}>
            <th>{id}</th>
			<th>{course}</th>
			<th>{location}</th>
            <th>{material}</th>
			<th>{numpeople}</th>
			<th>{timeframe}</th>
		</tr>
	)
}

RowElement.defaultProps = {
	id: 'Room ID',
    course: 'Course',
    location: 'Location',
    material: 'Material',
    numpeople: '# People',
    timeframe: 'Timeframe',
}

RowElement.propTypes = {
	id: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
	numpeople: PropTypes.string.isRequired,
	timeframe: PropTypes.string.isRequired,
}


export default RowElement