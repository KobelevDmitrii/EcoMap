/* 
  Компонент Шапка
*/

import React from "react";
import '../index.css';
import { Link, Outlet } from "react-router-dom";


function Header() {
    return (
        <>
            <div className="container">
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>Карта</li>
                        <li>О нас</li>
                    </ul>
                </nav>
                <h1>Clean Town</h1>
                <Link to="/login" className="btn">Войти</Link>
                <Outlet />
            </div>
        </>
    );
}

export default Header;