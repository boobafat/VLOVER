import React from 'react'
import './homestyle.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const HomePage = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
      <div className='home'>
          <div className = "home_left">
            <Link to={'/catalog'}><img src='./home/leftph.svg'/></Link>
          </div>
          <div className = "home_right">
            <Link to={'/catalog'}><img className='right' src='./home/right.svg'/></Link>
          </div>
          <div class = "bottomh">
            <div class = "bottomh_row">
              <div className='bottomh_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottomh_row2'>
              <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottomh_row3'>
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vkh' src='./footer/vk.svg'/>
              </div>
              <div className='bottomh_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visah' src='./footer/visa.svg'/>
              </div>
            </div>

          </div>
      </div>
  )
}
export default HomePage
