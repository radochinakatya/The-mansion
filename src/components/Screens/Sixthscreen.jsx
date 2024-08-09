import { useState } from "react";
import Popup from '../Popup';

const SixthScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="sixth_screen_container">
      <img
        src="6thscreen_background.png"
        id="backgroung"
        alt="6thscreen_background"
      ></img>
      <div className="sixth_screen_content">

        <div className="text_area_sixthscreen">
          <p className="sixthscreen_headline">
            Оставьте заявку на <b className="semibold">бесплатную</b> консультацию
          </p>
          <p className="sixthscreen_description">
            Наши лучшие специалисты свяжуться с вами в ближайшее время и
            проконсультируют по всем интересующим вас вопросам
          </p>
        </div>

        <div className="common_button_blue">
          <button onClick={() => setShowPopup(true)}>
          Получить консультацию
            <img src="right_icon_blue.png" alt="right_icon_blue"></img>
          </button>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)}/>}
    </div>
  );
};

export default SixthScreen;
