import { Link, Element } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="leftside_footer">
          <div className="logo">
            <p>The mansion. </p>
          </div>
          <div className="year_and_socials">
            <p className="year">© 2022</p>
            <div className="socials">
              <img src="whatsup.png" alt="whatsup"></img>
              <img src="tg.png" alt="tg"></img>
              <img src="vk.png" alt="vk"></img>
            </div>
          </div>
        </div>

        <div className="rightside_footer">

        <div className="main_about">
        <nav>
        <a href="#"><Link to="main" smooth={true} duration={500} offset={-300}>Главная</Link> </a>
        <a href="#"> <Link to="about" smooth={true} duration={500} offset={-135}>Об агентстве</Link> </a>
        </nav>
        </div>

        <div className="service_partner">
          <nav>
          <a href="#"> <Link to="services" smooth={true} duration={500}>Услуги</Link> </a>
          <a href="#"> <Link to="partners" smooth={true} duration={500} offset={-200}>Партнеры</Link></a>
          </nav>
        </div>

        <nav className="review">
        <a href="#"><Link to="reviews" smooth={true} duration={500} offset={-200}>Отзывы</Link></a>
        </nav>

        <nav className="contacts">
        <a href="#"> Контакты </a>
          <p>+7 (999)-999-99-99</p>
          <p>themansion.agency@gmail.com</p>
          <p>г. Москва, Большая Декабрьская улица, 4</p>
        </nav>
        </div>

      </div>
    </div>
  );
};

export default Footer;
