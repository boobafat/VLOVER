import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Help = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className={'menuhe'}>
       <div className={'menuhe_und'}>
          <Link to={'/collection'}><p className={'textm'}>NEW</p></Link>
          <Link to={'/catalog'}><p className={'textm'}>КАТАЛОГ</p></Link>
          <Link to={'/assec'}><p className={'textm'}>АКСЕССУАРЫ</p></Link>
          <Link to={'/sale'}><p className={'textm'}>SALE</p></Link>
        </div>
        <div className='menuhe_fun'>
          <Link className='vid' to={'/help'} ><p>ОПЛАТА/ДОСТАВКА</p></Link>
          <Link to={'/vozvrat'}><p>ВОЗВРАТ</p></Link>
        </div>
        <div className='menuhe_dostavka'>
          ОПЛАТА/ДОСТАВКА
        </div>
        <div className='menuhe_text'>
          <p className='pp'>ОПЛАТА</p>
          <p className='pp'>Оплатить покупку в нашем интернет-магазине вы можете с помощью банковской карты через систему Яндекс.Касса или PayPal (международные отправления). К оплате принимаются карты VISA, MasterCard, МИР.</p>
          <p className='pp'>На странице для ввода данных банковской карты потребуется ввести номер карты, имя владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard, Код Дополнительной Идентификации для МИР). Все необходимые данные пропечатаны на самой карте. Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне карты.</p>
          <p className='pp'>Далее вы будете перенаправлены на страницу Вашего банка для ввода кода безопасности, который придет вам по СМС. Если код безопасности не пришел, следует обратиться в банк, выдавший вам карту.</p>
          <p className='pp'>Предоставляемая вами персональная информация (имя, адрес, телефон, e-mail, номер банковской карты) является конфиденциальной и не подлежит разглашению. Данные вашей кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем web-сервере.</p>
          <p className='pp'>Причины отказа в совершении платежа:</p>
          <p className='pp'>банковская карта не предназначена для совершения онлайн-платежей, о чем можно узнать, обратившись в банк, выдавший вам карту;</p>
          <p className='pp'>на банковской карте недостаточно средств для оплаты;</p>
          <p className='pp'>данные банковской карты введены неверно;</p>
          <p className='pp'>истек срок действия банковской карты. Срок действия карты, как правило, указан на лицевой стороне карты (это месяц и год, до которого действительна карта).</p>
          <p className='pp'>XПо вопросам оплаты с помощью банковской карты и другим вопросам, связанным с работой сайта, вы можете обращаться по телефону: 8 (929) 375-98-50.</p>
          <p className='pp'>ДОСТАВКА</p>
          <p className='pp'>Доставка осуществляется после 100% оплаты на сайте.</p>
          <p className='pp'>Отправка происходит в течение 3-4 рабочих дней с момента оформления заказа. После оплаты заказа вам придет письмо с дальнейшими инструкциями.</p>
          <p className='pp'>Способы доставки:</p>
          <p className='pp'>Почтой России:</p>
          <p className='pp'>по России - 300 руб.;</p>
          <p className='pp'>для cтран СНГ - 1500 руб.;</p>
          <p className='pp'>международные отправления - 2000 руб.;.</p>
          <p className='pp'>EMC - 3000 руб..,</p>
          <p className='pp'>Cрок доставки может быть увеличен в связи с нестабильным авиа- и наземным сообщением.</p>
          <p className='pp'>Если по вине почты посылка не дошла до вас, мы можем отправить ваш заказ повторно за свой счет.</p>
        </div>
        <div class = "bottomhe">
            <div class = "bottomhe_row">
              <div className='bottomhe_row1'>
                <Link to={'/help'}><p>ПОМОЩЬ ПОКУПАТЕЛЮ</p></Link>
                <Link to={'/magazini'}><p>НАШИ ПАРТНЕРЫ И МАГАЗИНЫ</p></Link>
              </div>
              <div className='bottomhe_row2'>
              <Link to={'/contacti'}><p>КОНТАКТЫ</p></Link>
                <p>ORDER@VLOVER.RU</p>
                <p>+7 (929) 375-98-50</p>
              </div>
              <div className='bottomhe_row3'>
                <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                <img className='vkhe' src='./footer/vk.svg'/>
              </div>
              <div className='bottomhe_row4'>
                <p>СПОСОБЫ ОПЛАТЫ</p>
                <img className = 'visahe' src='./footer/visa.svg'/>
              </div>
            </div>

          </div>
    </div>
  )
}
export default Help