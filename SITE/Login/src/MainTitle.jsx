import styled from "styled-components";

function MainTitle(){
    return(
        <Content>
            Study Buddy
        </Content>
    )
}

const Content = styled.div`
    color: white;
    margin-bottom: 3rem;
    height: 7rem;
    width: 25rem;
    min-height: 0px;
    max-width: 400px;
    background: none;
    font-size: 4rem;
    text-align: center;
    /*below lines make text not selectable*/
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    @media only screen and (max-width: 600px){
        width: 85vw;
        font-size: 3rem;
    }
`;

export default MainTitle;