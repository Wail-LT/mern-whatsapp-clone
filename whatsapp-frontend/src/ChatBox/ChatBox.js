import React from 'react';

// Material-ui imports
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';

import './ChatBox.css';

function ChatBox() {
    return (
        <div className="chatbox">

            <div className="chatbox_header">
                <div className="chatbox_headerLeft">
                    <IconButton id="avatar_icon">
                        <Avatar />
                    </IconButton>
                </div>

                <div className="chatbox_headerMiddle">
                    <div className="chatbox_chatInfo">
                        <div className="chatbox_chatContact">
                            <h2 className="senderName">Sender name aaaaaa</h2>
                        </div>
                        <div className="chatbox_chatStatus">
                            <p>message summary</p>
                        </div>
                    </div>
                </div>

                <div className="chatbox_headerRigth">

                </div>
            </div>

            <div className="chatbox_content">
                <div className="messageList">

                </div>
            </div>

            <div className="chatbox_footer">

            </div>

        </div>
    )
}

export default ChatBox
