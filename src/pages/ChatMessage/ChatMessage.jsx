import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ChatMessage.module.scss';
import profil from "../../assets/image/proff.jpeg";
import sendBtn from "../../assets/icons/Send.svg";
import DockBtn from "../../assets/icons/Dock.svg";
import { Input } from 'antd'; // Import Input from antd
import BackIcon from "../../assets/icons/backback.svg";

const { Search } = Input; // Destructure Search from Input

const ChatMessage = () => {
  const navigate = useNavigate();
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState(''); // For chat message input
  const [searchTerm, setSearchTerm] = useState(''); // For search input

  const users = [
    { id: 1, name: 'Алихан лучший дизайнер', image: profil },
    { id: 2, name: 'Алихан лучший дизайнер', image: profil },
    { id: 3, name: 'Алихан лучший дизайнер', image: profil },
    { id: 4, name: 'Алихан лучший дизайнер', image: profil },
    { id: 5, name: 'Алихан лучший дизайнер', image: profil },
    { id: 6, name: 'Алихан лучший дизайнер', image: profil },
    { id: 7, name: 'Алихан лучший дизайнер', image: profil },
    { id: 8, name: 'Алихан лучший дизайнер', image: profil },
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Handle chat message input change
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value); // Handle search input change
  };

  const handleSearch = (value) => {
    // Optionally handle search submit
    console.log("Searching for: ", value);
  };

  const filteredUsers = users.filter(user =>
    user.id.toString().includes(searchTerm) || // Check if the ID matches
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check if the name matches
  );

  const selectChat = (user) => {
    setCurrentChat(user);
    setMessages([]); // Clear messages for new chat
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { text: inputValue, sender: 'user', time: timestamp }]);
      setInputValue(''); // Clear message input after sending
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className={classes.chatContainer}>
      <div className={classes.userList}>
        <div className={classes.profil}>
          <div className={classes.searchPeople}>
            <button className={classes.backButton} onClick={handleBackClick}>
              <img src={BackIcon} alt="Back" />
            </button>
            <Search
              className={classes.searchInput}
              placeholder="Поиск"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)} // Use separate handler for search input
              onSearch={handleSearch} // Handle search on submit
              allowClear
            />
          </div>
          <div className={classes.ListPeoples}>
            <h3>Список водителей</h3>
            <h3>Список клиентов</h3>
          </div>
        </div>
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className={`${classes.user} ${currentChat && currentChat.id === user.id ? classes.activeUser : ''}`}
            onClick={() => selectChat(user)}
          >
            <img src={user.image} alt='profile' className={classes.userImage} />
            {user.name}
          </div>
        ))}
      </div>
      <div className={classes.chatBox}>
        {currentChat ? (
          <>
            <div className={classes.chatHeader}>
              <img src={profil} alt="profile" className={classes.headerImage} />
              <h2>{currentChat.name}</h2>
            </div>
            <div className={classes.chatMessages}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${classes.messageWrapper} ${message.sender === 'user' ? classes.userMessageWrapper : classes.driverMessageWrapper}`}
                >
                  {message.sender === 'user' && <img src={profil} alt="profile" className={classes.messageAvatar} />}
                  <div className={`${classes.message} ${message.sender === 'user' ? classes.userMessage : classes.driverMessage}`}>
                    <div className={classes.messageContent}>
                      <span className={classes.messageText}>{message.text}</span>
                      <span className={classes.messageTime}>{message.time}</span>
                    </div>
                  </div>
                  {message.sender === 'driver' && <img src={profil} alt="profile" className={classes.messageAvatar} />}
                </div>
              ))}
            </div>
            <div className={classes.chatInputContainer}>
              <input
                type="text"
                className={classes.chatInput}
                value={inputValue}
                onChange={handleInputChange} // Use separate handler for message input
                placeholder="Type a message"
              />
              <button className={classes.DockButton}>
                <img src={DockBtn} alt="" />
              </button>
              <button className={classes.sendButton} onClick={handleSendMessage}>
                <img src={sendBtn} alt="" />
              </button>
            </div>
          </>
        ) : (
          <div className={classes.noChatSelected}>Select a user to start chat</div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
