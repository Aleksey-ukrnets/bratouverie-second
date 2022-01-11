import MainLogo from '../../assets/images/main.png'
import shoppingCart from '../../assets/images/shopping-cart.png'
import qranbook from '../../assets/images/qranbook.png'
import logo from '../../assets/images/logo.png'
import tShirt from '../../assets/images/t-shirt.png'

import './main.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main__header">
        {/* <div className="burger">
          <div className="burger__span"></div>
          <div className="burger__span"></div>
          <div className="burger__span"></div>
        </div> */}
        <img className="main__logo" src={MainLogo} alt="main logo" />
        <div className="main__cart">
          <img className="main__cart-img" src={shoppingCart} alt="shopping-cart" />
          <div className="main__cart-count"></div>
        </div>
      </div>
      <div className="main__inner">
        <h2 className="main__title"> Одежда с технологией подтверждения подлинности</h2>
        <img className="main__subtitle" src={qranbook} alt="QR" />
        <div className="main__background">
          <img className="main__background-logo" src={logo} alt="bratouverie" />
          <img className="main__background-img" src={tShirt} alt="t-shirt" />
          <div className="circle circle-first"></div>
          <div className="circle circle-second"></div>
          <div className="circle circle-third"></div>
        </div>
        <a href="https://www.instagram.com/p/CYikpDGpVKW/" className="main__video">
          <div className="main__video-circle">
            <span className="triangle-right"></span>
          </div>
          <div className="main__video-link">Смотреть видео</div>
        </a>
        <p className="main__sum">100 000 ₽</p>
        <button className="main__btn" data-toggle="modal" data-target="#payment">Забронировать</button>
      </div>
    </main>
  )
}

export default Main;