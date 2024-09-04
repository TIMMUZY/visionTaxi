import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import classes from "./Business.module.scss";
import businessImg from "../../../assets/image/Business.png";
import backback from "../../../assets/icons/backback.svg"; // Импортируем иконку для кнопки назад

const Business = () => {
    const navigate = useNavigate(); // Используем useNavigate для навигации

    const handleBackClick = () => {
        navigate('/InfoClients'); // Навигация на страницу InfoClients
    };

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.welcome}>
                    <p className={classes.txt}>
                        Welcome to <span className={classes.greenTxt}>Vission</span>
                    </p>
                </div>
            </header>

            <div className={classes.economblock}>
                <img className={classes.economimg} src={businessImg} alt="" />

                <div className={classes.text}>
                    <div className={classes.clock}>
                        <h2 className={classes.h2}>Бизнес-Класс</h2>
                        <p className={classes.pipi}>Бизнес-класс предлагает непревзойденный комфорт и высокий уровень обслуживания. Это выбор для тех, кто ценит качество и статус в каждой детали.</p>
                    </div>
                    <table className={classes.table}>
                        <tr className={classes.tr}>
                            <th>Тариф:</th>
                            <th className={classes.saw}>Бизнес</th>
                        </tr>
                        <tr className={classes.tr}>
                            <th>Стоимость:</th>
                            <th className={classes.saw}>Зависит от растояния и от регионов</th>
                        </tr>
                    </table>
                </div>
            </div>
            <button className={classes.backback} onClick={handleBackClick}>
                <img src={backback} alt="Back" />
                <p>Назад</p>
            </button>
        </div>
    );
};

export default Business;
