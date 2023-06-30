import React, { Component } from "react";
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Collection = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className='menuu'>
      <div className={'menu_und'}>
          <Link to={'/collection'}><p>NEW</p></Link>
          <Link to={'/catalog'}><p>КАТАЛОГ</p></Link>
          <Link to={'/assec'}><p>АКСЕССУАРЫ</p></Link>
          <Link to={'/sale'}><p>SALE</p></Link>
      </div>
      <div className="menu__slider">
      </div>
      <div class = "bottom">
            <div class = "bottom_row">
              <div className='bottom_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ НАШИ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottom_row2'>
              <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottom_row3'>
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vk' src='./footer/vk.svg'/>
              </div>
              <div className='bottom_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visa' src='./footer/visa.svg'/>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Collection
