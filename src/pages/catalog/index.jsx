import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Catalog = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className={'menu1'}>
        <div className={'menu1_und'}>
          <Link to={'/catalog'}><p className={'textm'}>NEW</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>КАТАЛОГ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>АКСЕССУАРЫ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>SALE</p></Link>
        </div>
        <div className={'menu1_v-love-er'}>V-LOVE-ER</div>
        <div className={'menu1_ph'}>
          <div className='menu1_ph1'>
            <div className='menu1_ph11'>
              <div className='menu1_ph111'>
                <img className={'ph'} src='./catalog/s1.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1500 РУБ</p>
              </div>
              <div className='menu1_ph112'>
                <img className={'ph'} src='./catalog/s2.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1300 РУБ</p>
              </div>
            </div>
            <div className='menu1_ph2'>
              <div className='menu1_ph21'>
                <img className={'ph'} src='./catalog/s3.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1300 РУБ</p>
              </div>
              <div className='menu1_ph22'>
                <img className={'ph'} src='./catalog/s4.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1500 РУБ</p>
              </div>
            </div>
          </div>  
        </div>
        <div className={'menu2_ph'}>
          <div className='menu2_ph1'>
            <div className='menu2_ph11'>
              <div className='menu2_ph111'>
                <img className={'ph'} src='./catalog/s5.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1500 РУБ</p>
              </div>
              <div className='menu2_ph112'>
                <img className={'ph'} src='./catalog/s6.svg'/>
                <p className={'textp'}>СВИТЕР   2300 РУБ</p>
              </div>
            </div>
            <div className='menu2_ph2'>
              <div className='menu2_ph21'>
                <img className={'ph'} src='./catalog/s7.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1300 РУБ</p>
              </div>
              <div className='menu2_ph22'>
                <img className={'ph'} src='./catalog/s8.svg'/>
                <p className={'textp'}>ФУТБОЛКА 1800 РУБ</p>
              </div>
            </div>
          </div>  
        </div>
        <div class = "bottomc">
            <div class = "bottomc_row">
              <div className='bottomc_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottomc_row2'>
              <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottomc_row3'>
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vkc' src='./footer/vk.svg'/>
              </div>
              <div className='bottomc_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visac' src='./footer/visa.svg'/>
              </div>
            </div>

          </div>
    </div>
    
  )
}
export default Catalog