import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './InfoClients.module.scss';
import backIcon from "../../assets/icons/backicon.svg";
import arrowDownIcon from "../../assets/icons/arrowDown.svg";
import Eko from "../../assets/icons/Стандарт.svg";
import Comfort from "../../assets/icons/Комфорт.svg";
import Miniven from "../../assets/icons/Минивен.svg";
import Business from "../../assets/icons/Бизнес.svg";

const menuItems = [
  { label: 'Тарифы ', links: ['Эконом', 'Комфорт', 'Бизнес', 'Минивен'] },
  { label: 'Видео Уроки', links: ['Link A', 'Link B', 'Link C', 'Link D'] },
  { label: 'Праздники', links: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
  { label: 'О нас', links: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
  { label: 'Политика Соглашения', links: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'] },
];

const slides = [
  { title: 'Эконом', description: 'Hyundai Starex, Mercedes Vito', text: 'Вмещает в себя более 4-5 пассажиров. Имеет довольно большой багажник.', image: Eko },
  { title: 'Комфорт', description: 'Hyundai Starex, Mercedes Vito', text: 'Вмещает в себя более 4-5 пассажиров. Имеет довольно большой багажник.', image: Comfort },
  { title: 'Минивен', description: 'Hyundai Starex, Mercedes Vito', text: 'Вмещает в себя более 4-5 пассажиров. Имеет довольно большой багажник.', image: Miniven },
  { title: 'Бизнес', description: 'Hyundai Starex, Mercedes Vito', text: 'Вмещает в себя более 4-5 пассажиров. Имеет довольно большой багажник.', image: Business }
];

const InfoClient = () => {
  const navigate = useNavigate();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 to account for the clone

  const handleBackClick = () => {
    navigate(-1); // Вернуться на предыдущую страницу
  };

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Переключение видимости dropdown
  };

  const handleLinkClick = (link) => {
    if (link === 'Эконом') {
      navigate('/economclass');
    } else if (link === 'Комфорт') {
      navigate('/comfortclass');
    } else if (link === 'Бизнес') {
      navigate('/businessclass');
    } else if (link === 'Минивен') {
      navigate('/minivenclass');
    }
  };

  const handleImageClick = (title) => {
    if (title === 'Эконом') {
      navigate('/economclass');
    } else if (title === 'Комфорт') {
      navigate('/comfortclass');
    } else if (title === 'Бизнес') {
      navigate('/businessclass');
    } else if (title === 'Минивен') {
      navigate('/minivenclass');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? slides.length : prevSlide - 1));
  };

  return (
    <div className={classes.container2}>
      <header className={classes.header}>
        <div className={classes.welcome}>
          <p className={classes.txt}>
            Welcome to <span className={classes.greenTxt}>Vission</span>
          </p>
        </div>
      </header>
      <div className={classes.container}>
        <div className={classes.menuContainer}>
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
                      <li key={i}>
                        <a href="#" onClick={() => handleLinkClick(link)}>{link}</a>
                      </li>
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
      </div>

      <div className={classes.sliderContainer}>
        <button onClick={prevSlide} className={classes.prevButton}>❮</button>
        <div className={classes.slideViewport}>
          <div className={classes.slidesWrapper} style={{ transform: `translateX(-${(currentSlide - 1) * 33.333}%)`, transition: 'transform 0.5s ease' }}>
            {[slides[slides.length - 1], ...slides, slides[0]].map((slide, index) => (
              <div
                key={index}
                className={`${classes.slideItem} ${index === currentSlide ? classes.activeSlide : ''}`}
                onClick={() => handleImageClick(slide.title)} // Добавляем обработчик клика на изображение
              >
                <h2 className={classes.category}>{slide.title}</h2>
                <p className={classes.modelcar}>{slide.description}</p>
                <p className={classes.subtitle}>{slide.text}</p>
                <img src={slide.image} alt={slide.title} className={classes.image} />
                <button className={classes.centerButton}>Выбрать</button>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className={classes.nextButton}>❯</button>
      </div>
    </div>
  );
};

export default InfoClient;
