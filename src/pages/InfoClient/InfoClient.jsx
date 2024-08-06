import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './InfoClients.module.scss';
import backIcon from "../../assets/icons/backicon.svg";
import arrowDownIcon from "../../assets/icons/arrowDown.svg";

const InfoClient = () => {
  const navigate = useNavigate();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleBackClick = () => {
    navigate(-1); // Вернуться на предыдущую страницу
  };

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Переключение видимости dropdown
  };

  const menuItems = [
    { label: 'First Menu', links: ['Home', 'About Us', 'Services', 'Contact'] },
    { label: 'Second Menu', links: ['Link A', 'Link B', 'Link C', 'Link D'] },
    { label: 'Third Menu', links: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
    { label: 'Fourth Menu', links: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    { label: 'Fifth Menu', links: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'] },
    { label: 'Sixth Menu', links: ['Section 1', 'Section 2', 'Section 3', 'Section 4'] }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.iconsBlock}>
        <ul className={classes.dropdownList}>
          {menuItems.map((item, index) => (
            <li key={index} className={classes.dropdownItem}>
              <button 
                onClick={() => handleDropdownClick(index)} 
                className={classes.dropdownButton}
              >
                <img 
                  src={arrowDownIcon} 
                  alt="Arrow" 
                  className={`${classes.arrowIcon} ${openDropdownIndex === index ? classes.open : ''}`} 
                />
                {item.label}
              </button>
              <ul 
                className={`${classes.dropdownMenu} ${openDropdownIndex === index ? classes.dropdownMenuOpen : ''}`}
              >
                {item.links.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        
      </div>
      <button onClick={handleBackClick} className={classes.backButton}>
        <img src={backIcon} alt="Back" /><span>Назад</span>
      </button>
    </div>
  );
};

export default InfoClient;
