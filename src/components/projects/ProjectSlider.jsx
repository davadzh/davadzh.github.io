import "../GeneralStyles.scss"
import avatar from "../../static/images/avatar.png"
import kupikomment from "../../static/images/kupikomment.png"
import km from "../../static/images/km.png"
import soon from "../../static/images/soon.png"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"
import "./ProjectSlider.scss"

const ProjectSlider = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1000, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (
        <div className="davadzh-carousel-wrapper">
            <div className="frontground"></div>
            <Carousel
                className="davadzh-carousel"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["mobile"]}
                itemClass="image-item"
                centerMode={true}
            >
                <div className="carousel-item">
                    <a href="https://купикоммент.рф">
                        <img className="carousel-image"
                            src={kupikomment}
                            alt="Купикоммент.рф"
                        />
                    </a>
                    <div>купикоммент.рф</div>
                </div>
                <div className="carousel-item">
                    <a href="/">
                        <img className="carousel-image"
                             src={soon}
                             alt="Soon"
                        />
                    </a>
                    <div>Скоро</div>
                </div>
                <div className="carousel-item">
                    <a href="/">
                        <img className="carousel-image"
                             src={soon}
                             alt="Soon"
                        />
                    </a>
                    <div>Скоро</div>
                </div>
                <div className="carousel-item">
                    <a href="/">
                        <img className="carousel-image"
                             src={soon}
                             alt="Soon"
                        />
                    </a>
                    <div>Скоро</div>
                </div>
            </Carousel>
        </div>
    );
}

export default ProjectSlider;
