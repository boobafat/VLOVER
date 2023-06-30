import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Vozvrat= () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className={'menu'}>
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
        <div className='menu__oplataa'>
          <Link to={'/help'}>ОПЛАТА/ДОСТАВКА</Link>
        </div>
        <div className='menu__vozvrat'>
          <Link to={'/vozvrat'}>ВОЗВРАТ</Link>
        </div>
        <div className='menu__vozv'>
            ВОЗВРАТ
        </div>
        <div className='menu__textt'>
            <p>ВОЗВРАТ</p>
            <p>Если по каким-то причинам вам не подошел приобретенный товар, вы можете обменять или вернуть его в течение 14 дней. Главное, чтобы товар не был в употреблении, и был сохранен его товарный вид.</p>
            <p>Чтобы обменять или вернуть товар, сообщите нам о своем желании по почте ORDER@VLOVER.RU или по телефону +7 (929) 375-98-50. Наш администратор предоставит подробные инструкции о том, как осуществить возврат.</p>
        </div>
    </div>
  )
}
export default Vozvrat