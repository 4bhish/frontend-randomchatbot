import { useEffect, useState } from 'react';
import './App.css'
import { IoMdSend } from "react-icons/io";
import { api } from './api';

function App() {
  const [userInput, setUserInput] = useState('')
  const [emptyInput, setEmptyInput] = useState(false)

  const [messages, setMessages] = useState([]);


  const InitialMessage = () => {
    const initialMessage = {
      text: "Hello Fly here, How can I help you?",
      side: "left"
    };
    setMessages([initialMessage]);
  };


  const inputHandler = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) {
      setEmptyInput(true)
    } else{


      try {
        const response = await api.get('/random-response');
        const botResponse = response.data.response;
  
        const newMessageFromUser = {
          text: userInput,
          side: "right"
        };
  
        const newBotResponse = {
          text: botResponse,
          side: "left"
        };
  
        setMessages(prevMessages => [...prevMessages, newMessageFromUser, newBotResponse]);
  
        setUserInput('');
        setEmptyInput(false)
      } catch (error) {
        console.error('Api error: ', error);
      }

    }
  
  }

  useEffect(() => {
    setTimeout(() => {
      InitialMessage()
    }, 2000)
  }, [])


  return (
    <>
      <div className='screen'>

        <h1 className='screen-logo'>Random Chatbot</h1>
        <div className="chat-section">
          {messages.map((message, index) => (
            <div key={index} className={`msgCon${message.side === 'right' ? '1' : '2'}`}>
              <div className={message.side}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <p style={{color:"red" ,fontSize:"1rem",textAlign:'center',fontWeight:'bold'}}>{
          emptyInput && "Please enter valid query"
        }</p>
        <form onSubmit={inputHandler} className="message-input">

          <input value={userInput} onChange={(e) => setUserInput(e.target.value)} className='new-message' type="text" placeholder='New Message' />
          <button className='btn-sent' type='submit'>
            <IoMdSend className='send-icon' />
          </button>

        </form>
      </div>
    </>
  )
}

export default App
