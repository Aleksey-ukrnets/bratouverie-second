import Booking from "./components/Booking/booking";
import Check from "./components/Check/check";
import Main from "./components/Main/main";
import Review from "./components/Review/review";
import Social from "./components/Social/social";
import Unique from "./components/Unique/unique";
import Work from "./components/Work/work";
import Assortment from "./components/assortment/assortment";
import BookingForm from "./components/Form-booking/form";

import './App.scss'
import { useState } from "react";
import Modal from "./components/Modal/modal";

const App = () => {
  const [isOpenModal, setModal] = useState(false)git 
  return (
    <>
      <Main setModal={setModal} />
      <Unique />
      <Work />
      <Check />
      <Booking setModal={setModal} />
      <Review />
      <Assortment />
      <Social />
      <Modal setModal={setModal} isOpenModal={isOpenModal}>
        <h3 className="title">Оформление заказа</h3>
        <BookingForm />
      </Modal>
    </>
  );
}

export default App;
