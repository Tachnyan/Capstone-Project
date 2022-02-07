import styled from "styled-components"

export const ProfilePage = () => {
    return (
        <Main>
            <Title>PROFILE</Title>
            <Row>School: <TextBox> Louisiana Tech University </TextBox></Row>
            <Row>Display Name: <TextBox>Robert California</TextBox></Row>
            <Row>Student ID: <TextBox> 99999999 </TextBox></Row>
            
            <ListDiv>
                Classes
                <List>
                    <ListHead>
                        <Td>Class</Td>
                        <Td>Time</Td>
                        <Td>Location</Td>
                    </ListHead>
                    <ListRow>
                        <Td>ENGL101</Td>
                        <Td>MWF 8-9:15</Td>
                        <Td>GTMH 213</Td>
                    </ListRow>
                    <ListRow>
                        <Td>BISC130</Td>
                        <Td>MWF 9:30-10:45</Td>
                        <Td>GTMH 110</Td>
                    </ListRow>
                    <ListRow>
                        <Td>CSC 220</Td>
                        <Td>TR 8-9:50</Td>
                        <Td>IESB 218</Td>
                    </ListRow>
                    <ListRow>
                        <Td>CSC222</Td>
                        <Td>TR 10-11:50</Td>
                        <Td>IESB 216</Td>
                    </ListRow>
                    <ListRow>
                        <Td>ART101</Td>
                        <Td>TR 12-1:50</Td>
                        <Td>GTMH 313</Td>
                    </ListRow>
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