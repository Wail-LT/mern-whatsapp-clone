import React from 'react';

// Material-ui imports
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';

// Custom import
import SidebarChat from './SidebarChat/SidebarChat';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

                <div className="sidebar_headerLeft">
                    <IconButton id="avatar_icon">
                        <Avatar />
                    </IconButton>
                </div>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" name="search" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
