import { createContext, useState } from "react";
import en from "../assets/lang/en";
import es from "../assets/lang/es";

const LangContext = createContext("");

const initialLanguage = en;

const LangProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [lang, setLang] = useState(initialLanguage);

  const handleLanguage = (e) => {
    if (e.target.value === "en") {
      setLang(en);
    }

    if (e.target.value === "es") {
      setLang(es);
    }
  };

  const data = { lang, setLang, showMenu, setShowMenu, handleLanguage };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };
export default LangContext;
