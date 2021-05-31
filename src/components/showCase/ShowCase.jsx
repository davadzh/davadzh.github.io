import "../GeneralStyles.scss"
import "./ShowCase.scss"
import avatar from "../../static/images/avatar.png"

const ShowCase = (props) => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-info">
                        <h1>Backend developer</h1>
                        <ul>
                            <li><span>Age</span> 19</li>
                            <li><span>Commercial development<br/>experience</span> 1 year 6 months</li>
                        </ul>
                        <div className="short-info">Hello, my name is David, I’m professional web-developer.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum
                            morbi blandit cursus risus at. Turpis egestas integer eget aliquet nibh praesent
                            tristique magna.
                        </div>
                    </div>

                    <div className="avatar">
                        <img src={avatar} alt="Фото"/>
                    </div>

                </div>

                <div className="short-info-mobile">
                    Hello, my name is David, I’m professional web-developer.
                    Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum
                    morbi blandit cursus risus at. Turpis egestas integer eget aliquet nibh praesent
                    tristique magna.
                </div>
            </div>
        </div>
    );
}

export default ShowCase;
