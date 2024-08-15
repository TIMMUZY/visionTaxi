import React, { useState } from 'react';
import classes from "./Email.module.scss";

const Email = ({ currentEmail, onUpdateEmail }) => {
  const [currentEmailInput, setCurrentEmailInput] = useState(currentEmail);
  const [newEmailInput, setNewEmailInput] = useState('');

  const handleCurrentEmailChange = (e) => setCurrentEmailInput(e.target.value);
  const handleNewEmailChange = (e) => setNewEmailInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEmailInput.trim() === '') {
      alert('Please enter a new email address.');
      return;
    }
    onUpdateEmail(newEmailInput);
    
  };

  return (
    <div className={classes.emailblock}>
      <h3>Почта</h3>
      <p>Ваш адрес электронной почты: {currentEmailInput}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={currentEmailInput} 
          onChange={handleCurrentEmailChange} 
          placeholder='Текущая почта'
          disabled 
        />
        <input 
          type="text" 
          value={newEmailInput} 
          onChange={handleNewEmailChange} 
          placeholder='Новая почта'
        />
        <button type="submit">Обновить почту</button>
      </form>
    </div>
  );
}

export default Email;
