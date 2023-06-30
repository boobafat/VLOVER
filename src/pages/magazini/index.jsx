import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Magazini = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className='menu3'>
        <div className={'menu3_und'}>
          <Link to={'/catalog'}><p className={'textm'}>NEW</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>КАТАЛОГ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>АКСЕССУАРЫ</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>SALE</p></Link>
        </div>
        <div className='menu3_magazini'>
          МАГАЗИНЫ
        </div>
        <div className='menu_row'>
          <div className='menu_row1'>
            <div className='menu_row1ph'>
              <img src={'./magazini/shop1.svg'}/>
            </div>
            <div className='menu_row1t'>
              <p className='city'>БАРНАУЛ</p>
              <p className='textt'>пр. Ленина, 46</p>
              <p className='textt'>Ежедневно: 10:00-20:00</p>
              <p className='textt'>+7 (929) 375-98-50</p>
              <p className='textt'>vloverbarnaul@gmail.com</p>
            </div>
          </div>
          <div className='menu_row2'>
            <div className='menu_row2ph'>
              <img src={'./magazini/shop2.svg'}/>
            </div>
            <div className='menu_row2t'>
              <p className='city'>НОВОСИБИРСК</p>
              <p className='textt'>ул. Восход, 32</p>
              <p className='textt'>Ежедневно: 10:00-20:00</p>
              <p className='textt'>+7 (929) 324-55-54</p>
              <p className='textt'>vlovernovosibirsk@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='menu_partneri'>
          ПАРТНЕРЫ
        </div>
        <div className='foot'>
          <div className='menu__Russia'>
            <p className='city'>Россия</p>
            <p className='tost'>Барнаул <span>АлтГТУ</span></p>
          </div>
          <div className='menu__germany'>
            <p className='city'>Германия</p>
            <p className='tost'>Берлин <span>VLOVER</span></p>
          </div>
        </div>
        <div class = "bottom2">
            <div class = "bottom2_row">
              <div className='bottom2_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottom2_row2'>
                <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottom2_row3'>  
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vk2' src='./footer/vk.svg'/>
              </div>
              <div className='bottom2_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visa2' src='./footer/visa.svg'/>
              </div>
            </div>

          </div>  
    </div>
  )
}
export default Magazini