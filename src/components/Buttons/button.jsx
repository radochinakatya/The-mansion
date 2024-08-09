import Popup from '../Popup';
import { useState } from "react";

const Button = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="colorful_button">
      <button onClick={() => setShowPopup(true)}>
        Оставить заявку
        <img src="right_icon.png" alt="right_icon"></img>
      </button>
      {showPopup && <Popup onClose={() => setShowPopup(false)}/>}
    </div>
  );
};

export default Button;
