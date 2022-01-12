import BookingButton from '../Button-booking/booking-button';
import './style.scss'

const Booking = ({ setModal }) => {

  return (
    <section className="booking">
      <div className="booking__wrapper">
        <div className="booking__main">
          <h3 className="booking__main-title">Забронируй <br />уникальный номер!</h3>
          <h4 className="booking__main-subtitle">CheckBrandcom </h4>
          <div className="booking__main-text">Стоимость аккаунтов дорожает на одну тысячу при каждом бронировании</div>
        </div>
        <div className="booking__right">
          <div className="booking__right-number">900-1000</div>
          <div className="booking__right-date">
            <p>Бронирование 11.01-16.01 </p>
            <p>Выкуп/Продажа бронирований 16.01 - 21.01</p>
          </div>
          <div className="booking__right-text">Уникальный номер: 113 000 Р</div>
          <div className="booking__btns">
            <div className="booking__right-num">913</div>
            <BookingButton setModal={setModal} name={'booking-btn'} />
          </div>
        </div>
      </div>
    </section>
  )
}
// test
export default Booking;