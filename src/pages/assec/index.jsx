import React, { Component } from "react";
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


const Assec = () => {
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
        <div className='menu__krash'>
          КЕПКИ
        </div>
        <div className='menu__s1'>
          <div className='menu__s1__ph'>
            <img src={'./assec/img1.svg'}/>
          </div>
          <div className='menu__s1__price'>
            <div className='menu__s1__price__text1'>
              КЕПКА
            </div>
            <div className='menu__s1__price__text2'>
              1200 РУБ
            </div>
            <button>В КОРЗИНУ</button>
          </div>
        </div>
        <div className='menu__kover'>
          КОВРЫ
        </div>
        <div className='menu__s2'>
          <div className='menu__s2__ph'>
            <img src={'./assec/img2.svg'}/>
          </div>
          <div className='menu__s2__price'>
            <div className='menu__s2__price__text1'>
              КОВЕР
            </div>
            <div className='menu__s2__price__text2'>
              1800 РУБ
            </div>
            <button>В КОРЗИНУ</button>
          </div>
        </div>
        <div className='menu__s3'>
          <div className='menu__s3__ph'>
            <img src={'./assec/img3.svg'}/>
          </div>
          <div className='menu__s3__price'>
            <div className='menu__s3__price__text1'>
              КОВЕР
            </div>
            <div className='menu__s3__price__text2'>
              800 РУБ
            </div>
            <button>В КОРЗИНУ</button>
          </div>
        </div>
    </div>
  )
}
export default Assec