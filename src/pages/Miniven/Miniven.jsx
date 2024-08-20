import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./Miniven.module.scss";
import miniImg from "../../assets/image/Miniven.png";
import backback from "../../assets/icons/backback.svg";

const Miniven = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/InfoClients');
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
                <img className={classes.economimg} src={miniImg} alt="" />

                <div className={classes.text}>
                    <div className={classes.clock}>
                        <h2 className={classes.h2}>Тариф-Минивен</h2>
                        <p className={classes.pipi}>В тарифе «Минивэн» среднерыночная стоимость транспортного средства, по данным сайта «Авто. ру», за последние 6 месяцев должна быть не ниже 1 млн рублей. Комплектация. Этому пункту уделяется особое внимание, ведь от него зависит комфорт пассажиров во время поездки, а значит, и качество выполненной работы</p>
                    </div>
                    <table className={classes.table}>
                        <tr className={classes.tr}>
                            <th>Тариф:</th>
                            <th className={classes.saw}>Минивен</th>
                        </tr>
                        <tr className={classes.tr}>
                            <th>Стоимость:</th>
                            <th className={classes.saw}>Зависит от растояние и от Регионов</th>
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

export default Miniven;
