import Card from "../Card";
import { Link, Element } from 'react-scroll';

const ThirdScreen = () => {
  return (
    <Element name="services">
    <div className="third_screen_container">
      <div className="third_screen_content">
        <p className="headline">Чем мы занимаемся</p>
        <div className="cards">

            <Card />

        </div>
      </div>
    </div>
    </Element>
  );
};

export default ThirdScreen;
