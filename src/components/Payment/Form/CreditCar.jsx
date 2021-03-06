import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/ShoppingCar.scss';
import Checkbox from '../../Utils/Checkbox';

import ButtonArrowRight from '../../Utils/ButtonArrowRight';


import Visa from '../../../assets/static/images/img/visa.png'
import MasterCard from '../../../assets/static/images/img/mastercard.png'
import AmeticaExpress from '../../../assets/static/images/img/american-express.png'


const CreditCard = (props) => (
    <form action="submit" className="way-to-pay__input__box">
        <p className="way-to-pay__input__box__title">Ingresá los datos de tu tarjeta</p>
        <input className="way-to-pay__input way-to-pay__input--card" type="text" placeholder="Número de la tarjeta"/>
        <div className="flex">
            <input type="text" placeholder="MM/AA" className="way-to-pay__input way-to-pay__input--MM"/>
            <input type="text" placeholder="Código de seguridad" className="way-to-pay__input way-to-pay__input--segurity"/>
        </div>
        <p className="way-to-pay__input__required">Todos los campos son obligatorios</p>
        <div className="flex">
            <Checkbox/>
            <div className="flex">
                <img className="way-to-visa" src={Visa} alt="Visa"/>
                <img className="way-to-express" src={AmeticaExpress} alt="American Express"/>
                <img className="way-to-master" src={MasterCard} alt="Mastercard"/>
            </div>
        </div>
            <ButtonArrowRight background={'btn__secundary--way-to-pay'} />
    </form>
)
export default CreditCard;