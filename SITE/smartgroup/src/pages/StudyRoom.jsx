import React from 'react'
import { ChatEngine } from 'react-chat-engine';

export function StudyRoom() {
    return(
        <div className="chatroom" style={{width:'100%'}}>
            <ChatEngine
                height="95vh"
                projectID="b94d2416-0dbc-4022-8006-190eb92f5cdf"
                userName="ChatTest"
                userSecret="1234"
            />
        </div>
    )
}

export default StudyRoom;