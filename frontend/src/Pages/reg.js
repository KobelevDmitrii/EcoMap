import React from "react";
import '../index.css';
import { Link, Outlet } from "react-router-dom";

function Reg() {

    let firstname = React.createRef();
    let lastname = React.createRef();
    let email = React.createRef();
    let password = React.createRef();

    function show (event){
        let user = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: password.current.value
        };
    }

    async function post(){
        let response = await fetch('http://app:5000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(show.user)
        });
        let result = response.json();
        console.log(result.message);
    }

    return (
        <div className="login"> 
            <div className="wrapper">
                <div className="cart">
                    <div className="flexColum">
                        <div className="inputBox">
                            <input type="firstname" placeholder="Имя" name="E-mail" required className="input" onInput={show} ref={firstname}/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="lastname" placeholder="Фамилия" name="password" required className="input" onInput={show} ref={lastname}/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="E-mail" name="E-mail" required className="input" onInput={show} ref={email}/>
                            <hr />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Пароль" name="E-mail" required className="input"  onInput={show} ref={password}/>
                            <hr />
                        </div>
                        <Link to="/" className="btnCart textBtn" onClick={post}>Зарегестрироваться</Link>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reg;