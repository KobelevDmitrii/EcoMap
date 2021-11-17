/* 
  Компонент Шапка
*/

import React from "react";
import '../index.css';

function Header() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Карта</li>
                    <li>О нас</li>
                </ul>
            </nav>
            <h1>Clean Town</h1>
            <a href="!#" className="btn">Войти</a>
        </div>
    );
}

export default Header;