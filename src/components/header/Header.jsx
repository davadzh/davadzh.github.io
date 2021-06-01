import "./Header.scss";
import "../GeneralStyles.scss"
import github from "../../static/images/github.svg"
import telegram from "../../static/images/telegram.svg"
import instagram from "../../static/images/instagram.svg"

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">DAVADZH</div>

                <nav className="social-networks">
                    <li><a href="https://github.com/davadzh"><img src={github} alt="Github"/></a></li>
                    <li><a href="#"><img src={telegram} alt="Telegram"/></a></li>
                    <li><a href="https://www.instagram.com/davadzh/"><img src={instagram} alt="Instagram"/></a></li>
                </nav>
            </div>
        </header>
    );
}

export default Header;
