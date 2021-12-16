import React from "react";
import '../index.css';
import { Link, Outlet } from "react-router-dom";

function login() {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="cart">
                    <div className="flexColum">
                        <div className="inputBox">
                            <input type="email" placeholder="E-mail" name="E-mail" required className="input"/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" name="password" required className="input"/>
                            <hr />
                        </div>
                        <Link to="/" className="btnCart">Войти</Link>
                        <Link to="/reg" className="btnCart colorCart">Регистрация</Link>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;