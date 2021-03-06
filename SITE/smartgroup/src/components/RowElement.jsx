import PropTypes from 'prop-types'
import axios from 'axios';



const RowElement = ({ id, course, material, location, numpeople, timeframe, user, onClick }) => {
	return (
		<tr onClick={onClick}>
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