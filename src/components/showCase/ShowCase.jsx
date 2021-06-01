import "../GeneralStyles.scss"
import "./ShowCase.scss"
import avatar from "../../static/images/avatar.png"
import avatar2 from "../../static/images/ava2.png"

const ShowCase = (props) => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-info">
                        <h1>Backend developer</h1>
                        <ul>
                            <li><span>Me</span> David, 19</li>
                            <li><span>Commercial development<br/>experience</span> 1 year 7 months</li>
                        </ul>
                        <div className="short-info">Hello, I'm David, backend web-developer.
                            I'm a 2nd year student of the Financial University,
                            specialization is applied computer science.
                            My main activity is web api development on asp.net.
                            In addition, I have skills related to web development in general,
                            from the basics of the frontend to deploying an application using docker.
                            A complete list of my skills is given below.
                        </div>
                    </div>

                    <div className="avatar">
                        <img src={avatar2} alt="Фото"/>
                    </div>

                </div>

                <div className="short-info-mobile">
                    Hello, I'm David, backend web-developer.
                    I'm a 2nd year student of the Financial University,
                    specialization is applied computer science.
                    My main activity is web api development on asp.net.
                    In addition, I have skills related to web development in general,
                    from the basics of the frontend to deploying an application using docker.
                    A complete list of my skills is given below.
                </div>
            </div>
        </div>
    );
}

export default ShowCase;
