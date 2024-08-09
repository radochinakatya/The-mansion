

const FourthScreen = () => {
  return (

    <div className="fourth_screen_container">
      <div className="fourth_screen_content">
        <div className="fourth_screen_leftside">
          <img src="left_half_circle.png" alt="first_screen_img"></img>
        </div>

        <div className="fourth_screen_rightside">
            <div className="advantage">
          <img
            src="Policeman.png"
            alt="fourth_screen_img"
            height={63}
            width={63}
          ></img>
          <div className="text_content">
            <p className="headline">Безопасность сделки</p>
            <p className="description2">
              Наша команда проверяет все этапы покупки квартиры: от проверки
              состояния квартиры, до документов
            </p>
          </div>
          </div>

          <div className="advantage">
          <img
            src="clock.png"
            alt="fourth_screen_img"
            height={58}
            width={58}
          ></img>
          <div className="text_content">
            <p className="headline">Экономия времени</p>
            <p className="description2">
              Вся работа выполняется нашими специалистами, вам не нужно тратить
              время на все нюансы
            </p>
          </div>
          </div>

          <div className="advantage">
          <img
            src="Money Bag.png"
            alt="fourth_screen_img"
            height={65}
            width={65}
          ></img>
          <div className="text_content">
            <p className="headline">Комиссия 0%</p>
            <p className="description2">
              Вы получаете недвижимость напрямую от застройщика, никаких
              процентов. Мы также всегда добиваемся самых больших скидок от
              застройщика для наших клиентов
            </p>
          </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default FourthScreen;
