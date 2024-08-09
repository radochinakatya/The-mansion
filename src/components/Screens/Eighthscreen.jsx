import Button from "../Buttons/button";

const EighthScreen = () => {
  return (
    <div className="eighth_screen_container">
      <div className="eighth_screen_content">
        <div className="text_area_eighthscreen">
          <p className="headline">Остались вопросы?</p>
          <p className="eighthscreen_description">
            Оставьте заявку на бесплатную консультацию с нашими специалистами
          </p>
        <div className="eightscreen_form">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Имя"
            ></input>
            <input
              type="phone"
              name="phone"
              id="phone"
              required
              placeholder="Номер телефона"
            ></input>
          </form>
          </div>
          <Button />
        </div>
        

        <img src="circles2.png" alt="circles2"></img>
      </div>
    </div>
  );
};

export default EighthScreen;
