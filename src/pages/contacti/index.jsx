import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Contacti = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className='menu4'>
      <div className={'menu4_und'}>
          <Link to={'/catalog'}><p className={'textm'}>NEW</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>КАТАЛОГ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>АКСЕССУАРЫ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>SALE</p></Link>
      </div>
      <div className='menu4_row'>
        <div className='menu4_row1'>
          <p className='nume'>ПО ВОПРОСАМ, СВЯЗАННЫМ С ЗАКАЗАМИ И РАБОТОЙ САЙТА:</p>
          <p className='tt1'>ORDER@VLOVER.RU</p>
          <p className='tt1'>+7 (929) 375-98-50</p>
          <p className='tt1'>09:00-18:00</p>
        </div>
        <div className='menu4_row2'>
          <p className='nume'>ПО ПОВОДУ ОПТОВЫХ ЗАКАЗОВ:</p>
          <p className='tt2'>vloveropt@gmail.com</p>
        </div>
        <div className='menu4_row3'>
          <p className='nume'>ПО ПОВОДУ СОТРУДНИЧЕСТВА:</p>
          <p className='tt2'>vloverpartner@gmail.com</p>
        </div>
      </div>
      <div className='menu4_row22'>
        <div className='menu4_row221'>
          <p className='nume2'>РЕКВИЗИТЫ</p>
          <p className='tt3'>Проценко Владислав Владимирович ИНН 884485474888 ОГРНИП 246774611411554 ОКТМО 12336560</p>
          <p className='tt3'>АДРЕС: г.Барнаул</p>
        </div>
      </div>
      <div class = "bottom3">
            <div class = "bottom3_row">
              <div className='bottom3_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ НАШИ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottom3_row2'>
                <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottom3_row3'>  
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vk3' src='./footer/vk.svg'/>
              </div>
              <div className='bottom3_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visa3' src='./footer/visa.svg'/>
              </div>
            </div>

          </div>  
    </div>
    )
}
export default Contacti