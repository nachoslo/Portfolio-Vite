import { createContext, useState } from "react";
import en from "../assets/lang/en";
import es from "../assets/lang/es";

const LangContext = createContext("");

const getInitialLanguage = () => {
  const localStorageLang = localStorage.getItem("lang");
  const defaultLang = en;

  if(localStorageLang === "en") {
    return en;
  } else if (localStorageLang === "es") {
    return es;
  } else {
    return defaultLang
  }
}

const LangProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [lang, setLang] = useState(getInitialLanguage);

  const handleLanguage = (e) => {
    console.log(e.target.textContent);
    if (
      e.target.textContent === "English" ||
      e.target.textContent === "Inglés"
    ) {
      setLang(en);
      localStorage.setItem("lang", "en")
    }

    if (
      e.target.textContent === "Spanish" ||
      e.target.textContent === "Español"
    ) {
      setLang(es);
      localStorage.setItem("lang", "es")
    }
  };

  const data = { lang, setLang, showMenu, setShowMenu, handleLanguage };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };
export default LangContext;
