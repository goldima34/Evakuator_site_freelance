import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__first">
                <h1 className="navbar__first-logo">Послуги евакуатора</h1>
                <div className="navbar__first-box">
                    <h2 className="navbar__first-box-text">м.Житомир та область</h2>
                    <img src={require("../styles/img/tow-truck.png")} alt="" className="navbar__first-box-icon"/>
                </div>
                <a href="tel:+38(067)100-07-78" className="navbar__first-number">+38(067)100-07-78</a>
            </div>
            <div className="navbar__second">
                <div className="navbar__second-wrap">
                    <span className="navbar__second-wrap-text">Швидко</span>
                    <img src={require("../styles/img/fast.png")} alt="" className="navbar__second-wrap-img"/>
                </div>
                <div className="navbar__second-wrap">
                    <span className="navbar__second-wrap-text">Якісно</span>
                    <img src={require("../styles/img/Quality.png")} alt="" className="navbar__second-wrap-img"/>
                </div>
                <div className="navbar__second-wrap">
                    <span className="navbar__second-wrap-text">Недорого</span>
                    <img src={require("../styles/img/cheap.png")} alt="" className="navbar__second-wrap-img"/>
                </div>
                <div className="navbar__second-wrap">
                    <span className="navbar__second-wrap-text">Цілодобово</span>
                    <img src={require("../styles/img/roundtheclock.png")} alt="" className="navbar__second-wrap-img"/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;