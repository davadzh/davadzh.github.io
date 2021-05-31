import "./MainPage.scss"
import Header from "./header/Header";
import ShowCase from "./showCase/ShowCase";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

const MainPage = (props) => {
    return (
        <div className="main-page">
            <Header />
            <ShowCase />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default MainPage;
