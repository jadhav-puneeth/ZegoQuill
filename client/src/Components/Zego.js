import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {v4 as uuidV4} from 'uuid'
import { ZegoSuperBoardManager } from "zego-superboard-web";

export default function Zego(props) {
    // const { id } = useParams();
    const id = props.roomId;
    let myMeeting = async (element) => {
        const appID = 379800230;
        const serverSecret = "ac45d09bf9035ae25cbd00c322b874ba";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, uuidV4(), "puneeth");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.addPlugins({ZegoSuperBoardManager});
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            whiteboardConfig: {            
                showAddImageButton: true, 
             },
        })
    }
    return (
        <>
            <div className='myCallContainer' ref={myMeeting} style={{ width: '60vw', height: '80vh' }}>
            </div>
        </>
    )
}

