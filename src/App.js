import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ChatContainer from './ChatContainer'
const dancingGIF = "https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dancingGIF} className="App-logo" alt="logo" />
        <ChatContainer />
      </header>
    </div>
  );
}

export default App;
