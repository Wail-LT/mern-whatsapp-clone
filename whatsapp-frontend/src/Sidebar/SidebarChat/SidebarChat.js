import React from 'react'

// Material-ui imports
import ExpandMore from '@material-ui/icons/ExpandMoreRounded';
import { Avatar, IconButton } from '@material-ui/core';

import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">

            <div className="sidebarChat_avatar">
                <Avatar />
            </div>

            <div className="sidebarChat_info">
                <div className="sidebarChat_infoHeader">
                    <h2 className="senderName">Sender name aaaaaa</h2>

                    <p className="lastMessageDate">16/07/2020</p>
                </div>
                <div className="sidebarChat_infoBody">
                    <p>message summarydcdddddddfffffffffdddd</p>
                    <div className="sidebarChat_expandMore">
                        <ExpandMore />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat
