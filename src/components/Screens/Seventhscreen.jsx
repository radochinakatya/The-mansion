import { Link, Element } from 'react-scroll';

const SeventhScreen = () => {
  return (
    <Element name="reviews">
    <div className="seventh_screen_container">
      <img src="left_circle.png" alt="left_circle"></img>

      <div className="seventh_screen_content">
        <img src="review1.png" id="review1" alt="review1"></img>
        <img src="review2.png" id="review2" alt="review2"></img>
        <p className="seventhscreen_headline">
          Что о нас <b className="semibold_blue">говорят</b> наши{" "}
          <b className="semibold_blue">клиенты</b>?
        </p>
        <img src="review3.png" id="review3" alt="review3"></img>
        <img src="review4.png" id="review4" alt="review4"></img>
      </div>
      <img src="right_circle.png" id="right_circle" alt="right_circle"></img>
    </div>
    </Element>
  );
};

export default SeventhScreen;
