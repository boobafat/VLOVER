import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <div className={'header'}>
        <div className='header__box'></div>
        <div className={'header__vlover'}>
          <Link to={'/'}>VLOVER</Link>
        </div>
        <div className={'header__profile'}>
          <img src={'./header/profile.svg'}/>
        </div>
        <div className={'header__find'}>
          <img src={'./header/find.svg'}/>
        </div>
        <div className={'header__favorite'}>
          <img src={'./header/favorite.svg'}/>
        </div>
        <div className={'header__shop'}>
          <img src={'./header/shop.svg'}/>
        </div>
      </div>

      <div className={'header-mobile'}>
          <div className={'header-mobile__menu'}>
          <div class="tekst_logo">
          <Link to={'/'}>VLOVER</Link>
          </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              <img className='berger' src={'/header_mobile/burger.svg'} />
            </div>
          </div>
          <div
            className={classNames('header-mobile__block', {
              'header-mobile__block-open': isOpen,
            })}
          >
            {isOpen && (
              <>
                <div className='inm'>
                  <Link to={'/catalog'}>NEW</Link>
                </div>
                <div className='inm'>
                  <Link to={'/catalog'}>Каталог</Link>
                </div>
                <div className='inm'>
                  <Link to={'/catalog'}>Аксессуары</Link>
                </div>
                <div className='inm'>
                  <Link to={'/catalog'}>SALE</Link>
                </div>
                <div className='inm'>
                  <Link to={''}>Профиль</Link>
                </div>
                <div className='inm'>
                  <Link to={''}>Поиск</Link>
                </div>
                <div className='inm'>
                  <Link to={''}>Избранные</Link>
                </div>
                <div className='inm'>
                  <Link to={''}>Корзина</Link>
                </div>
              </>
            )}
          </div>
        </div>
    </React.Fragment>
  )
}
