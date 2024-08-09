import React from "react";

const Popup = ({ onClose }) => {
  
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup_overlay")) {
      onClose();
    }
  };

  return (
    <div className="popup_overlay" onClick={handleOverlayClick}>
      <div className="popup_main">
      <div className="bg_popup">
          <img src="popup_bg.png" alt="popup_bg"></img>
          </div>
        <div className="popup_bg">
          <div onClick={onClose} className="cross_button">
            <img src="cross.svg" alt="cross"></img>
          </div>
         
          <div className="text_area_popup">
            <div className="popup_text">
              Заявка на <b className="semibold">бесплатную</b> консультацию со
              специалистом
            </div>
          </div>
          
          <div className="popup_form">
            <div className="popup_form_container">
            <form>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Имя"
              ></input>
              <input
                type="tel"
                name="phone"
                id="phone"
                required5
                placeholder="Номер телефона"
              ></input>
            </form>
            </div>
            <div className="checkbox">
                <input type="checkbox" required />
                <label>Согласие на обработку персональных данных</label>
              </div>
            <div className="colorful_button2">
              <button>
                Оставить заявку
                <img src="right_icon.png" alt="right_icon"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
