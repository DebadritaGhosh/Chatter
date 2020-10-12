import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, [])

  useEffect(() => {
    let name = prompt('Please Enter Your Name');
    let lowercase = name.toLowerCase();
    setUsername(lowercase.charAt(0).toUpperCase()+lowercase.slice(1));
  }, [])
  console.log(username);

  const messageSend = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="App">
      <img src="https://img.icons8.com/cute-clipart/64/000000/chat.png" />
      <p style={{ fontSize: '8px', color: '#ffffff' }}>Mini Project Created By Debadrita Ghosh</p>
      <h1 style={{ color: '#ffffff' }}> Welcome  {username} </h1>
      <form className='app-form'>
        <FormControl className="app-formControl">
          <Input className="app-input" placeholder="Enter a message.." type="text" value={input} onChange={(event) => (setInput(event.target.value))} />
          <IconButton className="app-iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={messageSend} >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => {
            return (
              <Message key={id} username={username} message={message} />
            );
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
