import React, {useState} from 'react';
import {CallModal} from "./CallModal";

const SecondSection = () => {
    const [show, setShow] = useState<boolean>(false);
    const toogleModal = () => setShow(!show);

    return (
        <>
        <div className="secondSection">
            <div className="secondSection__textWrapper">
                <button className="secondSection__textWrapper-btn" onClick={toogleModal}>Залишити заявку</button>
                <p>
                    Евакуатор застосовується не лише для транспортування пошкоджених автомобілів. Ця спецтехніка виконує
                    безліч функцій
                    підтримки ефективної життєдіяльності міста та безпеки його інфраструктури. Зокрема, потрібні в
                    Житомирі
                    евакуатори для
                    транспортування заарештованих за неправильне паркування автомобілів на штрафмайданчик і для авто які
                    попали в ДТП. Також
                    застосовують ці спецзасоби для транспортування негабаритних вантажів.
                </p>
            </div>
        </div>
        <CallModal isOpen={show} onClose={toogleModal} />
        </>
    );
};

export default SecondSection;