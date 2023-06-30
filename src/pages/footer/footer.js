import React from "react";
import './style.scss';
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
        <div className="footer__text1">
            <Link to={'/help'}>ПОМОЩЬ ПОКУПАТЕЛЮ</Link>
            <Link to={'/contacti'}>КОНТАКТЫ</Link>
            СОЦИАЛЬНЫЕ СЕТИ
            СПОСОБЫ ОПЛАТЫ
        </div>
        <div className="footer__text2">
            <Link to={'/magazini'}>НАШИ МАГАЗИНЫ И ПАРТНЕРЫ</Link>
            VLOVER@ORDER.RU
            <Link to={'https://vk.com/protsenkovd'}><img src='./footer/vk.svg'/></Link>
            <img src='./footer/visa.svg'/>
        </div>
        <div className="footer__text3">
            +7 (929) 375-98-50
        </div>
    </div>
);

export default Footer;