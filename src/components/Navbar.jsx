import { Link } from 'react-scroll';
import { useState } from "react";
import Popup from './Popup';

const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="header_container">
      <div className="header">
        <div className="logo">
          <img src="logo.png" alt="logo"></img>
        </div>

        <nav>
          <a href="#"><Link to="main" smooth={true} duration={500} offset={-300}>Главная</Link> </a>
          <a href="#"> <Link to="about" smooth={true} duration={500} offset={-135}>Об агентстве</Link> </a>
          <a href="#"> <Link to="services" smooth={true} duration={500}>Услуги</Link> </a>
          <a href="#"> <Link to="partners" smooth={true} duration={500} offset={-200}>Партнеры</Link></a>
          <a href="#"><Link to="reviews" smooth={true} duration={500} offset={-200}>Отзывы</Link></a>
        </nav>

        <div className="feedback">
          <div className="phone">
            <a href="#">+7 (999) 999-99-99</a>
          </div>

          <div className="back-call">
            <button onClick={() => setShowPopup(true)}>Заказать обратный звонок</button>
            <img src="right.png" alt="right_icon"></img>
          </div>
          {showPopup && <Popup onClose={() => setShowPopup(false)}/>}
        </div>
      </div>

      <div className="line">
        <img src="nav_line_large.png" alt="large_line"></img>
      </div>
    </div>
  );
};

export default Navbar;
