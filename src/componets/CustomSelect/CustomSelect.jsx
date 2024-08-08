import React, { useState } from 'react';
import classes from './CustomSelect.module.scss';

const CustomSelect = () => {
  const [selected, setSelected] = useState('ru');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
    { value: 'kg', label: 'Кыргызча' }
  ];

  const handleOptionClick = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className={classes.customSelect}>
      <div className={classes.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        {options.find(option => option.value === selected).label}
        <span className={isOpen ? classes.arrowUp : classes.arrowDown}></span>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map(option => (
            <div
              key={option.value}
              className={classes.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
