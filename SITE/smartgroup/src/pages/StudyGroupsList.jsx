import RowElement from '../components/RowElement'
import './StudyGroupsList.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function StudyGroupsList(props) {

  
  return (
    <div className="studygroupslist">
      <header>
        
        <h1>
          Current Study Groups &emsp;&emsp;&emsp;&emsp;&emsp;
          <Link to="/"><button>Back to Menu</button></Link>
          <Link to="/CreateRoom"><button>Create Group</button></Link>
          <Link to="/StudyRoom"><button>Join Group</button></Link>
        </h1>
      </header>
      <div class="TableOverflow">
        <table class="groupstable">
          <thead>
            <RowElement />
          </thead>
          <tbody>
            <RowElement id='1' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='2' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='3' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='4' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='5' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='6' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='7' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='8' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='9' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='10' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='11' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='12' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='13' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='14' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='15' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='16' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='17' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='18' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='19' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='20' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='21' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='22' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='23' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='24' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='25' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='26' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='27' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='28' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='29' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='30' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='31' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='32' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='33' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='34' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='35' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='36' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='37' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='38' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='39' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='40' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='41' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='42' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='43' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='44' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='45' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='46' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='47' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='48' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='49' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='50' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='51' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='52' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='53' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='54' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='55' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='56' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
            <RowElement id='57' course='CSC 130' location='IESB 216' material='Program 1' numpeople='3' timeframe='2pm-4pm' />
            <RowElement id='58' course='CSC 131' location='Zoom' material='HW 2' numpeople='2' timeframe='5pm-6pm' />
            <RowElement id='59' course='MATH 240' location='IESB 114' material='Test 3' numpeople='5' timeframe='4pm-6pm' />
            <RowElement id='60' course='PHYS 202' location='Tolliver' material='HW 3' numpeople='1' timeframe='11pm-1pm' />
          </tbody>
        </table>
      </div>
    </div>
  );
}

const studygroupslist = styled.div`
  color:'white'; 
  backgroundColor: 'gray'; 
  font-family: 'Arvo', serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../iesb2.jpg');
  background-position: center;
  /*display: flex;*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow-y:scroll;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const groupstable = styled.table`
  width: 100vh
  &: tr:nth-child(odd) { background-color : #D0EFFF; }
  &: tr:nth-child(even) { background-color : #2A9DF4; }
  &: tr:hover { background-color : #1167B1; }

`

export default StudyGroupsList;
