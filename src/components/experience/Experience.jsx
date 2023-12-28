import { useContext } from "react";
import LangContext from "../../context/LangContext";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const { lang } = useContext(LangContext);

  return (
    <section id="experience">
      <div className="experience-container">
        <div className="experience-content">
          <h2>
            <span>{lang.experience.title.span1}</span>
            {lang.experience.title.span2}
            <span>.</span>
          </h2>
          <div className="cards-container">
            <ExperienceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
