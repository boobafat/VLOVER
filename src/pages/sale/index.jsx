import React, { Component } from "react";
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


const Sale = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className="menu">
        <div className={'menu__new'}>
          <Link to={'/collection'}>NEW</Link>
        </div>
        <div className='menu__catalog'>
          <Link to={'/catalog'}>КАТАЛОГ</Link>
        </div>
        <div className='menu__asec'>
          <Link to={'/assec'}>АКСЕССУАРЫ</Link>
        </div>
        <div className='menu__sale'>
          <Link to={'/sale'}>SALE</Link>
        </div>
      <div className="menu__sorry">
        <h1> ПРИНОСИМ СВОИ ИЗВИНЕНИЯ </h1>
        <p>НА ДАННЫЙ МОМЕНТ НЕТУ СКИДОЧНЫХ АКЦИЙ</p>
      </div>
    </div>
  )
}
export default Sale