import PartnerCard from "../PartnerCard";
import { Link, Element } from 'react-scroll';

const FifthScreen = () => {
  return (
    <Element name="partners">
    <div className="fifth_screen_container">
      <div className="fifth_screen_content">

        <div className="text_area_fifthscreen">
          <p className="headline">Партнеры</p>
          <p className="fifthscreen_description">
            Мы сотрудничаем только с надежными застройщиками и банками, поэтому
            вы можете быть спокойны за свое время и деньги
          </p>
        </div>

        <PartnerCard />
      </div>
    </div>
    </Element>
  );
};

export default FifthScreen;
