import "../GeneralStyles.scss"
import "./Projects.scss"
import ProjectSlider from "./ProjectSlider";

const Projects = (props) => {
    return (
        <div className="projects">
            <div className="container">
                <h2>My projects</h2>

                <ProjectSlider />
            </div>
        </div>
    );
}

export default Projects;
