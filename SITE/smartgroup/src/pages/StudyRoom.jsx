import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import './StudyRoom.css'

export function StudyRoom(props) {
    return(
        <div className="chatroom" style={{width:'100%'}}>
            <ChatEngine
                height="95vh"
                projectID={process.env.CHAT_ID}
                userName={props.user}
                userSecret={props.secret}
            />
        </div>
    )
}

export default StudyRoom;
