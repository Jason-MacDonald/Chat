import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebase';
import '../App.css';

import Menu from './Menu';
import ChatRoom from './ChatRoom';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Menu />
      { user ? <ChatRoom /> : null }      
    </div>
  );
}

export default App;
