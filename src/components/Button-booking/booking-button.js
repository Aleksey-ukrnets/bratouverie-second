import './style.scss'

const BookingButton = ({ name, setModal }) => {
  return (
    <button onClick={() => setModal(true)} className={name} data-toggle="modal" data-target="#payment">Забронировать</button>
  )
}

export default BookingButton;