import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import classes from './ChatMessage.module.scss';
import profil from "../../../assets/image/proff.jpeg";
import sendBtn from "../../../assets/icons/Send.svg";
import DockBtn from "../../../assets/icons/Dock.svg";
import BackIcon from "../../../assets/icons/backback.svg";
import checkedIcon from "../../../assets/icons/checked.svg"; 

const { Search } = Input;

const ChatMessage = () => { 
  const navigate = useNavigate();
  const [currentChat, setCurrentChat] = useState(null);
  const [messagesByContact, setMessagesByContact] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [messageToDelete, setMessageToDelete] = useState(null);

  const users = [
    { id: 1, name: 'Алихан лучший дизайнер', image: profil },
    { id: 2, name: 'Алихан лучший дизайнер', image: profil },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessage = { text: inputValue, sender: 'user', time: timestamp, isRead: true };

      setMessagesByContact(prevMessages => ({
        ...prevMessages,
        [currentChat.id]: [...(prevMessages[currentChat.id] || []), newMessage]
      }));

      setInputValue('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleSearch = (value) => {
    console.log("Searching for: ", value);
  };

  const selectChat = (user) => {
    setCurrentChat(user);
  };

  const handleRightClickMessage = (message, event) => {
    event.preventDefault();
    setMessageToDelete(message);

    const rect = event.target.getBoundingClientRect();
    const menuHeight = 50;
    const menuWidth = 120;

    const positionX = Math.min(rect.left + window.scrollX, window.innerWidth - menuWidth - 10 + window.scrollX);
    const positionY = Math.min(rect.top + window.scrollY, window.innerHeight - menuHeight - 10 + window.scrollY);

    setContextMenuPosition({ x: positionX, y: positionY });
    setContextMenuVisible(true);
  };

  const handleDeleteMessage = () => {
    setMessagesByContact(prevMessages => ({
      ...prevMessages,
      [currentChat.id]: prevMessages[currentChat.id].filter(msg => msg !== messageToDelete)
    }));
    setContextMenuVisible(false);
  };

  const handleClickOutside = (event) => {
    if (contextMenuVisible && !event.target.closest(`.${classes.contextMenu}`)) {
      setContextMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [contextMenuVisible]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const truncateMessage = (message, limit = 23) => {
    return message.length > limit ? message.substring(0, limit) + '...' : message;
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
              onChange={(e) => handleSearchChange(e.target.value)}
              onSearch={handleSearch}
              allowClear
            />
          </div>
          <div className={classes.ListPeoples}>
            <h3>Список водителей</h3>
            <h3>Список клиентов</h3>
          </div>
        </div>
        {users.map((user) => {
          const lastMessage = messagesByContact[user.id]?.[messagesByContact[user.id].length - 1];
          const lastMessageText = lastMessage ? truncateMessage(lastMessage.text) : 'Нет сообщений'; // Используем truncateMessage
          const lastMessageTime = lastMessage ? lastMessage.time : '';
          const isRead = lastMessage ? lastMessage.isRead : false;

          return (
            <div
              key={user.id}
              className={`${classes.user} ${currentChat && currentChat.id === user.id ? classes.activeUser : ''}`}
              onClick={() => selectChat(user)}
            >
              <img src={user.image} alt='profile' className={classes.userImage} />
              {isRead && <img src={checkedIcon} alt="Прочитано" className={classes.checkedIcon} />}
              <div className={classes.userDetails}>
                <div className={classes.userInfo}>
                  <span>{user.name}</span>
                  {lastMessageTime && <span className={classes.lastMessageTime}>{lastMessageTime}</span>}
                </div>
                <div className={classes.lastMessageText}>
                  <span>{lastMessageText}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.chatBox}>
        {currentChat ? (
          <>
            <div className={classes.chatHeader}>
              <img src={profil} alt="profile" className={classes.headerImage} />
              <h2>{currentChat.name}</h2>
            </div>
            <div className={classes.chatMessages}>
              {(messagesByContact[currentChat.id] || []).map((message, index) => (
                <div
                  key={index}
                  className={`${classes.messageWrapper} ${message.sender === 'user' ? classes.userMessageWrapper : classes.driverMessageWrapper}`}
                  onContextMenu={(e) => handleRightClickMessage(message, e)}
                >
                  {message.sender === 'user' && <img src={profil} alt="profile" className={classes.messageAvatar} />}
                  <div className={`${classes.message} ${message.sender === 'user' ? classes.userMessage : classes.driverMessage}`}>
                    <div className={classes.messageContent}>
                      <span className={classes.messageText}>{message.text}</span>
                      <div className={classes.messageMeta}>
                        {message.sender === 'user' && message.isRead && (
                          <img src={checkedIcon} alt="Прочитано" className={classes.checkedIcon} />
                        )}
                        <span className={classes.messageTime}>{message.time}</span>
                      </div>
                    </div>
                  </div>
                  {message.sender === 'driver' && <img src={profil} alt="profile" className={classes.messageAvatar} />}
                </div>
              ))}
            </div>
            <div className={classes.chatInputContainer}>
              <Input
                className={classes.chatInput}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите сообщение"
                onPressEnter={handleSendMessage}
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
          <div className={classes.noChatSelected}>Выберите пользователя для чата</div>
        )}
      </div>

      {contextMenuVisible && (
        <div
          className={classes.contextMenu}
          style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
        >
          <div className={classes.contextMenuItem} onClick={handleDeleteMessage}>Удалить</div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
