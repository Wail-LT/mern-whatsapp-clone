import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import ChatBox from './ChatBox/ChatBox';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <div className="left_side_menu">
          <Sidebar />
        </div>
        <div className="right_chat_box">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;
