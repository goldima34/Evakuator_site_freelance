import React from 'react';

const ThirdSection = () => {
    return (
        <div className="thirdSection">
            <img src={require("../styles/img/callEvakuator.png")} className="thirdSection__firstIcon"/>
            <div className="thirdSection__textWrapper">
                <p className="thirdSection__textWrapper-textHeader">ВАЖЛИВО !</p>
                <p className="thirdSection__textWrapper-text">
                    При собі водій повин​ен мати техпаспорт автомобіля, якщо транспорт
                    не належить людині, що телефонує, від
                    нього буде
                    потрібно довіреність на
                    р​озпорядження цим авто.</p>
            </div>
            <img src={require("../styles/img/sun.png")} className="thirdSection__secondIcon"/>
        </div>
    );
};

export default ThirdSection;