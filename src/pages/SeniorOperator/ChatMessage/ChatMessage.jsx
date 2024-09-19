import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import EmojiPicker from 'emoji-picker-react'; // Импорт EmojiPicker
import classes from './ChatMessage.module.scss';
import profil from "../../../assets/image/proff.jpeg";
import sendBtn from "../../../assets/icons/Send.svg";
import DockBtn from "../../../assets/icons/Dock.svg";
import BackIcon from "../../../assets/icons/backback.svg";
import checkedIcon from "../../../assets/icons/checked.svg";
import emojiIcon from "../../../assets/icons/emoji.svg"; // Иконка для эмодзи

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
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false); // Новый стейт для эмодзи
  const [selectedFile, setSelectedFile] = useState(null); // Новый стейт для выбранного файла

  const users = [
    { id: 1, name: 'Алихан лучший дизайнер', image: profil },
    { id: 2, name: 'Алихан лучший дизайнер', image: profil },
    { id: 3, name: 'Алихан лучший дизайнер', image: profil },
    { id: 4, name: 'Алихан лучший дизайнер', image: profil },
    { id: 5, name: 'Алихан лучший дизайнер', image: profil },
    { id: 6, name: 'Алихан лучший дизайнер', image: profil },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '' || selectedFile) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessage = { 
        text: inputValue, 
        sender: 'user', 
        time: timestamp, 
        isRead: true,
        file: selectedFile // Добавляем файл к сообщению
      };

      setMessagesByContact(prevMessages => ({
        ...prevMessages,
        [currentChat.id]: [...(prevMessages[currentChat.id] || []), newMessage]
      }));

      setInputValue('');
      setSelectedFile(null); // Сбрасываем выбранный файл
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

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible); // Переключение видимости эмодзи
  };

  const addEmoji = (emojiObject) => {
    setInputValue(prev => prev + emojiObject.emoji); // Добавление эмодзи в поле ввода
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Получаем первый файл
    if (file) {
      setSelectedFile(file); // Устанавливаем выбранный файл
    }
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
          const lastMessageText = lastMessage ? truncateMessage(lastMessage.text) : 'Нет сообщений';
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
                <div className={`${classes.lastMessageText} ${lastMessage ? classes.highlighted : ''}`}>
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
                      {message.file && <a href={URL.createObjectURL(message.file)} target="_blank" rel="noopener noreferrer">Download</a>} {/* Ссылка для скачивания файла */}
                      <div className={classes.messageMeta}>
                        {message.sender === 'user' && message.isRead && (
                          <img src={checkedIcon} alt="Прочитано" className={classes.checkedIcon} />
                        )}
                        <span className={classes.messageTime}>{message.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.chatInputContainer}>
              <button className={classes.emojiButton} onClick={toggleEmojiPicker}>
                <img src={emojiIcon} alt="Emoji" />
              </button>
              <Input
                className={`${classes.chatInput} ${classes.customInput}`}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите сообщение"
                onPressEnter={handleSendMessage}
              />
              <button className={classes.DockBtn} onClick={() => document.getElementById('fileInput').click()}>
                <img src={DockBtn} alt="Dock" />
              </button>
              <button className={classes.sendButton} onClick={handleSendMessage}>
                <img src={sendBtn} alt="" className={classes.sendIcon} />
              </button>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }} // Скрыть элемент ввода файла
              />
            </div>

            {emojiPickerVisible && (
              <div className={classes.emojiPicker}>
                <EmojiPicker onEmojiClick={addEmoji} />
              </div>
            )}
            {contextMenuVisible && (
              <div
                className={classes.contextMenu}
                style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
              >
                <button onClick={handleDeleteMessage}>Удалить сообщение</button>
              </div>
            )}
          </>
        ) : (
          <div className={classes.emptyChatBox}>
            <p>Выберите чат для начала общения</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
