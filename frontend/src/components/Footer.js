/* 
  Компонент Подвал
*/

import React from "react";
import '../index.css';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="wrapper">
                <div className="footerFlex">
                    <div className="rFooter">
                        <h3>Clean Town</h3>
                        <ul className="footerList">
                            <li className="footerLi">Главная</li>
                            <li className="footerLi">Карта</li>
                            <li>О нас</li>
                        </ul>
                    </div>
                    <div className="lFooter">
                        <h3>+7912343243</h3>
                        <p className="footerEmail">CleanTown@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;