import Button from "../Buttons/button";
import { Element } from 'react-scroll';
// import Popup from "../Popup";

const FirstScreen = () => {
  return (
    <div className="first_screen_container">
      <Element name="main">
      <div className="first_screen_content">
        <div className="leftside">
          <h1>Поможем решить вопрос с квартирой</h1>
          <p>Подберем идеальную квартиру учитывая все ваши предпочтения</p>
          <Button />
        </div>

        <div className="rightside">
          <img src="circles1.png" alt="first_screen_img"></img>
        </div>
      </div>

      <div className="scrollbar">
      <img src="background_for_mouse.png" alt="background_for_mouse"></img>
      <img src="mouse.png" alt="mouse" id="mouse"></img>
      </div>
      </Element>
    </div>
  );
};

export default FirstScreen;
