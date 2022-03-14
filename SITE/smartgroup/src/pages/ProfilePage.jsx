import styled from "styled-components"

export const ProfilePage = (props) => {
    // build array of rows in class schedule table.
    // replace number 5 with length of input array (props.classes.length)
    // fill each <td> with corresponding data from input array (props.classes[i])
    var ClassListRows = []
    for(var i = 0; i < 5; i++){
        ClassListRows.push(<ListRow> <Td>Class</Td> <Td>Time</Td> <Td>Location</Td> </ListRow>)
    }
    return (
        <Main>
            <Title>PROFILE</Title>
            <Row>School: <TextBox> {props.school} </TextBox></Row>
            <Row>Display Name: <TextBox> {props.firstName} {props.lastName}</TextBox></Row>
            <Row>Student ID: <TextBox> {props.studentID} </TextBox></Row>

            <ListDiv>
                Classes
                <List>
                    <ListHead>
                        <Td>Class</Td>
                        <Td>Time</Td>
                        <Td>Location</Td>
                    </ListHead>
                    {ClassListRows}
                </List>
            </ListDiv>
        </Main>
    )
}

const Main = styled.div`
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.55);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 75vw;
    height: 75vh;
    max-width: 600px;
    max-height: 700px;
    color: white;
    outline: solid;
`

const Title = styled.div`
    position: absolute;
    top: 5%;
`
const Row = styled.div`
    background: rgba(0, 0, 0, 0.50);
    margin-top: 2%;
    border-radius: 0.2rem;
    width: 75%;
    outline: solid;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

`

const TextBox = styled.div`
    margin-left: 2%;
`
const ListDiv = styled.div`
    margin: 20px;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 1rem;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 75%;
    height: 250px;
    overflow: hidden;
    outline: solid;
`

const List = styled.table`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-conetent: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    }
`

const ListRow = styled.tr`
    display: table;
    margin-top: 10%;
    height: 20%;
    width: 100%;
`
const ListHead = styled.tr`
    background: black;
    display: table;
    position: absolute;
    outline: solid;
    margin-top: 0%;
    width: 100%;
`

const Td = styled.td`
    width: 33%;
    font-size: 70%;
`
