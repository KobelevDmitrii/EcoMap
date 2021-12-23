import React from "react";
import '../index.css';
import { Link, Outlet } from "react-router-dom";

function login() {

    let email = React.createRef();
    let password = React.createRef();

    function show (event){
        let user = {
            email: email.current.value,
            password: password.current.value
        };
    }

    let response = fetch('http://app:5000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(show.user)
    });
    let result = response.json();
    console.log(result.message);

    return (
        <div className="login">
            <div className="wrapper">
                <div className="cart">
                    <div className="flexColum">
                        <div className="inputBox">
                            <input type="email" placeholder="E-mail" name="E-mail" value="" required className="input" onInput={show} ref={email}/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" name="password" value="" required className="input" onInput={show} ref={password}/>
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