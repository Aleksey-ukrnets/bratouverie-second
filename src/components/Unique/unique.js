import tShirt from '../../assets/images/t-shirt.jpg'

import './style.scss'

const Unique = () => {
  return (
    <section className="unique">
      <div className="unique__wrapper">
        <h3 className="unique__title">Уникальность технологии</h3>
        <img className="unique__img" src={tShirt} alt="t-shirt" />
      </div>
      <div className="unique__list">
        <div className="unique__list-item">
          <div className="unique__list-title">click qr</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">check owner</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">check dress</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">checkt domane</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">checkt name</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">check number</div>
          <div className="unique__list-circle">+</div>
        </div>
        <div className="unique__list-item">
          <div className="unique__list-title">all coincided?  brand is
            true  if not, failure</div>
          <div className="unique__list-circle">+</div>
        </div>
      </div>
    </section>
  )
}

export default Unique