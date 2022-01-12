import QR from '../../assets/images/qr1.png'
import qranbook from '../../assets/images/qranbook_booking.png'
import './style.scss'

const UniqueQR = () => {
  return (
    <>
      <h4 className='qr__title'>Ваш индивидуальный QR код</h4>
      <img className='qr__img' src={QR} alt='qr' />
      <h5 className='qr__subtitle' >Уникальная технология</h5>
      <img className='qr__logo' src={qranbook} alt='qranbook' />
      <p className='qr__text'>Позволяет защитить брендовую вещь от подделывания. Технология проходит сдадию патентования. Любое нарушение прав присекается по закону. Никто не сможет позволить себе приобрести вещь, подобную вашей, дешевле по стоимости, не опозорившись при проверке</p>
      <p className='qr__text'> После оплаты ваше фото появится на checkbrand.com и вы сможете проверить работоспособность QR кода</p>
      <div className='qr__sum'>100 000 ₽</div>
    </>
  )
}

export default UniqueQR;