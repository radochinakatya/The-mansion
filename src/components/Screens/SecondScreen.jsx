import CommonButton from "../Buttons/CommonButton";
import { Link, Element } from 'react-scroll';

const SecondScreen = () => {
  return (
    <Element name="about">
    <div className="second_screen_container">
      
      <img src="screen2_background.png" alt="background" id="background"></img>

      <div className="second_screen_content">
        <div className="leftside_screen2">
          <p className="headline">О нашем агенстве</p>
          <div className="common_text">
            <p className="text1">
              Наше агенство уже много лет является лидером в своей нише. Мы
              внимательно подходим к желаниям и потребностям наших клиентов,
              поэтому они всегда остаются довольны проделанной работой.
            </p>
            <p className="text2">
              Компания несет личную ответственность за безопасность сделки.
              Перед тем как вы подпишите договор, мы тщательно проверяем
              необходимые документы и участников сделки.
            </p>
          </div>
          <CommonButton />
        </div>

        <div className="rightside_screen2">

          <div className="group">
            <div className="number">11</div>
            <div className="under_number">Лет опыта</div>
          </div>

          <div className="group">
            <div className="number">780+</div>
            <div className="under_number">Довольных клиентов</div>
          </div>

          <div className="group">
            <div className="number">1000+</div>
            <div className="under_number">Квартир, ищущих своих хозяев</div>
          </div>
        </div>
      </div>
     
    </div>
    </Element>
  );
};

export default SecondScreen;
