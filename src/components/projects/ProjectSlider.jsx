import "../GeneralStyles.scss"
import kupikomment from "../../static/images/kupikomment.png"
import lock from "../../static/images/lock.png"
import "./ProjectSlider.scss"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

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
                    {/*<a href="#">*/}
                        <img className="carousel-image"
                             src={lock}
                             alt="Soon"
                        />
                    {/*</a>*/}
                    <div>Soon</div>
                </div>
                <div className="carousel-item">
                    {/*<a href="#">*/}
                        <img className="carousel-image"
                             src={lock}
                             alt="Soon"
                        />
                    {/*</a>*/}
                    <div>Soon</div>
                </div>
                <div className="carousel-item">
                    {/*<a href="#">*/}
                        <img className="carousel-image"
                             src={lock}
                             alt="Soon"
                        />
                    {/*</a>*/}
                    <div>Soon</div>
                </div>
            </Carousel>
        </div>
    );
}

export default ProjectSlider;
