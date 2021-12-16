import React from "react";
import '../index.css';
import { Link, Outlet } from "react-router-dom";

function Reg() {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="cart">
                    <div className="flexColum">
                        <div className="inputBox">
                            <input type="name" placeholder="Имя" name="E-mail" required className="input"/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="name" placeholder="Фамилия" name="password" required className="input"/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="E-mail" name="E-mail" required className="input"/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" name="E-mail" required className="input"/>
                            <hr />
                        </div>
                        <Link to="/" className="btnCart textBtn">Зарегестрироваться</Link>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reg;