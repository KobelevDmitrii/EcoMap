import React from "react";
import '../index.css';

function About (){
    return(
        <div className = "About">
            <div className = "rContainer">
                <h1>Clean Town</h1>
                <p className = "aboutText">Позаботься об экологии! Установи свою экологическую точку прямо сейчас!</p>
            </div>
            <div className = "lContainer">
                <div className = "components">
                    <div className = "component">
                        <p className = "textComponent">10</p>
                        <p className = "textComponent">Типов мест</p>
                    </div>
                    <div className = "component">
                        <p className = "textComponent">50+</p>
                        <p className = "textComponent">Точек</p>
                    </div>
                    <div className = "component">
                        <p className = "textComponent">8</p>
                        <p className = "textComponent">Партнеров</p>
                    </div>
                </div>
                <h2>+7912343243</h2>
                <h2 className = "eMail">CleanTown@gmail.com</h2>
            </div>
        </div>
    );
}

export default About;