import { useContext } from "react";
import LangContext from "../../context/LangContext";
import AboutInfo from "./AboutInfo";
import iconProgrammer from "../../assets/imgs/programmer.png";
import iconCode from "../../assets/imgs/code.png";
import iconProgress from "../../assets/imgs/progress.png";

const About = () => {
  const { lang } = useContext(LangContext);

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>
              {lang.about.title.span1}
              <span>{lang.about.title.span2}</span>
            </h2>
            <div className="about-info-container">
              <div className="about-info-content">
                <AboutInfo
                  text={lang.about.info.info1}
                  icon={iconProgrammer}
                  className={"info-img-1"}
                />
                <AboutInfo
                  text={lang.about.info.info2}
                  icon={iconCode}
                  className={"info-img-2"}
                />
                <AboutInfo
                  text={lang.about.info.info3}
                  icon={iconProgress}
                  className={"info-img-3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
