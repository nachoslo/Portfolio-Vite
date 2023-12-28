import { useContext } from "react";
import todoapp from "../../assets/imgs/todoapp.png";
import LangContext from "../../context/LangContext";

const ExperienceCard = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{lang.experience.card.title}</h3>
          <span className="card-desc">{lang.experience.card.desc}</span>
        </div>
        <a
          href="https://mytodo-nacho.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-img" src={todoapp} alt="proyect-img" />
        </a>
      </div>
      <div className="card-bg"></div>
    </div>
  );
};

export default ExperienceCard;
